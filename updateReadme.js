const fs = require("fs");
const path = require("path");
const {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
} = require("date-fns");

const readmePath = path.join(__dirname, "README.md");
// 학습 로그 파일 경로
const logFilePath = path.join(__dirname, "learning_log.json");
// 학습 로그 데이터 로드
const learningLog = JSON.parse(fs.readFileSync(logFilePath, "utf8"));

// TODO: 달력 날짜 텍스트를 두껍게 표시하는 방법을 찾아 적용하기.
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

  // 달력 시작 요일까지 공백으로 채우기
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    weekString += "     |";
    dayOfWeekCounter++;
  }

  daysOfTheMonth.forEach((day) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    // 해당 날짜에 학습 로그가 있는지 확인
    const logEntry = learningLog[formattedDate]
      ? learningLog[formattedDate]
      : "";
    // 날짜와 함께 학습 로그가 있으면 토글 기능을 추가
    if (logEntry) {
      weekString += ` <details><summary>**${format(
        day,
        "d"
      )}**</summary>${logEntry}</details> |`;
    } else {
      // 학습 로그가 없는 날짜는 볼드체로 날짜만 표시
      weekString += ` **${format(day, "d")}** |`;
    }

    dayOfWeekCounter++;
    if (dayOfWeekCounter % 7 === 0) {
      // 토요일이면 줄바꿈
      calendarString += `${weekString}\n`;
      weekString = "|";
    }
  });

  // 마지막 주가 토요일로 끝나지 않는 경우 줄을 마무리
  if (dayOfWeekCounter % 7 !== 0) {
    calendarString += weekString;
  }

  return calendarString + "\n\n";
}

function updateReadme() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  const calendarData = generateCalendar(year, month);

  let readmeContent = fs.readFileSync(readmePath, "utf8");
  const startMarker = "<!--CALENDAR-START-->";
  const endMarker = "<!--CALENDAR-END-->";

  const startMarkerIndex =
    readmeContent.indexOf(startMarker) + startMarker.length;
  const endMarkerIndex = readmeContent.indexOf(endMarker);

  if (startMarkerIndex >= 0 && endMarkerIndex >= 0) {
    // 마커 사이의 내용을 새 달력 데이터로 교체
    readmeContent =
      readmeContent.substring(0, startMarkerIndex) +
      "\n" +
      calendarData +
      readmeContent.substring(endMarkerIndex);
  } else {
    // 마커가 없는 경우, README 맨 끝에 달력 추가
    readmeContent +=
      "\n" + startMarker + "\n" + calendarData + endMarker + "\n";
  }

  fs.writeFileSync(readmePath, readmeContent);
  console.log("README.md has been updated with the calendar");
}

updateReadme();
