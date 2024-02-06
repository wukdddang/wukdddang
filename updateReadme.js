const fs = require("fs");
const path = require("path");
const {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
} = require("date-fns");

const readmePath = path.join(__dirname, "README.md");
const logFilePath = path.join(__dirname, "learning_log.json");
const learningLog = JSON.parse(fs.readFileSync(logFilePath, "utf8"));

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

  // 달력 시작 요일까지 공백으로 채우기
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    weekString += "     |";
  }

  daysOfTheMonth.forEach((day) => {
    const dayOfMonth = format(day, "d");
    weekString += ` ${dayOfMonth} |`;

    if (day.getDay() === 6) {
      // 토요일이면 줄바꿈
      calendarString += `${weekString}\n`;
      weekString = "|";
    }
  });

  // 마지막 주가 토요일로 끝나지 않는 경우 줄을 마무리
  if (lastDayOfMonth.getDay() !== 6) {
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
  readmeContent += "\n\n" + calendarData; // README의 맨 마지막에 달력 추가

  fs.writeFileSync(readmePath, readmeContent);
  console.log("README.md has been updated with the calendar");
}

updateReadme();
