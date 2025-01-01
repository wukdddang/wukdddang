const fs = require("fs");
const path = require("path");
const {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
} = require("date-fns");

const readmePath = path.join(__dirname, "README.md");
const logsDirPath = path.join(__dirname, "logs"); // logs 폴더 경로 설정

// logs 폴더가 없는 경우 생성
if (!fs.existsSync(logsDirPath)) {
  fs.mkdirSync(logsDirPath);
}

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

// 연도별 폴더 경로
const yearDirPath = path.join(logsDirPath, year.toString());
if (!fs.existsSync(yearDirPath)) {
  fs.mkdirSync(yearDirPath);
}

const logFileName = `${String(month).padStart(2, "0")}_learning_log.json`;
const logFilePath = path.join(yearDirPath, logFileName);

// 학습 로그 데이터 로드, 파일이 없을 경우 빈 객체 사용
let learningLog = {};
if (fs.existsSync(logFilePath)) {
  learningLog = JSON.parse(fs.readFileSync(logFilePath, "utf8"));
} else {
  console.log(`${logFileName} not found, creating a new one.`);
  fs.writeFileSync(logFilePath, JSON.stringify({}));
}

function generateCalendar(year, month) {
  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);
  const daysOfTheMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  let calendarString = `## ${format(firstDayOfMonth, "yyyy/MM")}\n\n`;
  calendarString += "| Sun | Mon | Tue | Wed | Thu | Fri | Sat |\n";
  calendarString += "| --- | --- | --- | --- | --- | --- | --- |\n";
  let weekString = "|";
  let dayOfWeekCounter = 0;

  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    weekString += "     |";
    dayOfWeekCounter++;
  }

  daysOfTheMonth.forEach((day) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    const logEntry = learningLog[formattedDate]
      ? learningLog[formattedDate]
      : "";
    if (logEntry) {
      weekString += ` <details><summary>**${format(
        day,
        "d"
      )}**</summary>${logEntry}</details> |`;
    } else {
      weekString += ` **${format(day, "d")}** |`;
    }

    dayOfWeekCounter++;
    if (dayOfWeekCounter % 7 === 0) {
      calendarString += `${weekString}\n`;
      weekString = "|";
    }
  });

  if (dayOfWeekCounter % 7 !== 0) {
    calendarString += weekString;
  }

  return calendarString + "\n\n";
}

function updateReadme() {
  const calendarData = generateCalendar(year, month);

  let readmeContent = fs.readFileSync(readmePath, "utf8");
  const startMarker = "<!--CALENDAR-START-->";
  const endMarker = "<!--CALENDAR-END-->";

  const startMarkerIndex =
    readmeContent.indexOf(startMarker) + startMarker.length;
  const endMarkerIndex = readmeContent.indexOf(endMarker);

  if (startMarkerIndex >= 0 && endMarkerIndex >= 0) {
    readmeContent =
      readmeContent.substring(0, startMarkerIndex) +
      "\n" +
      calendarData +
      readmeContent.substring(endMarkerIndex);
  } else {
    readmeContent +=
      "\n" + startMarker + "\n" + calendarData + endMarker + "\n";
  }

  fs.writeFileSync(readmePath, readmeContent);
  console.log("README.md has been updated with the calendar");
}

updateReadme();
