const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");
const { generateCalendar } = require("./generateCalendar"); // 달력 생성 로직을 구현한 함수

const readmePath = path.join(__dirname, "README.md");
const logFilePath = path.join(__dirname, "learning_log.json");
const learningLog = JSON.parse(fs.readFileSync(logFilePath, "utf8"));

function updateReadme() {
  let readmeContent = fs.readFileSync(readmePath, "utf8");
  const calendarData = generateCalendar(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    learningLog
  );

  // README 내에서 달력 데이터를 업데이트할 섹션을 찾습니다.
  const startMarker = "<!-- calendar-start -->";
  const endMarker = "<!-- calendar-end -->";
  const startIdx = readmeContent.indexOf(startMarker) + startMarker.length;
  const endIdx = readmeContent.indexOf(endMarker);

  // 기존 달력 데이터를 새로운 달력 데이터로 교체합니다.
  readmeContent =
    readmeContent.substring(0, startIdx) +
    "\n" +
    calendarData +
    readmeContent.substring(endIdx);

  fs.writeFileSync(readmePath, readmeContent);
  console.log("README.md has been updated with the calendar");
}

updateReadme();
