const fs = require("fs");
const path = require("path");
const {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  parse,
} = require("date-fns");

const readmePath = path.join(__dirname, "README.md");
const logsDirPath = path.join(__dirname, "logs");

function generateCalendarForMonth(year, month) {
  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);
  const daysOfTheMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  let calendarString = "| Sun | Mon | Tue | Wed | Thu | Fri | Sat |\n";
  calendarString += "| --- | --- | --- | --- | --- | --- | --- |\n";
  let weekString = "|";
  let dayOfWeekCounter = 0;

  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    weekString += "     |";
    dayOfWeekCounter++;
  }

  daysOfTheMonth.forEach((day) => {
    weekString += ` ${format(day, "d")} |`;

    dayOfWeekCounter++;
    if (dayOfWeekCounter % 7 === 0) {
      calendarString += `${weekString}\n`;
      weekString = "|";
    }
  });

  if (dayOfWeekCounter % 7 !== 0) {
    calendarString += weekString.padEnd(7 * 6, "     |") + "\n";
  }

  return calendarString;
}

function generateYearMonthToggles() {
  const files = fs.readdirSync(logsDirPath);
  const yearMonthMap = {};

  files.forEach((file) => {
    const [year, month] = file.split("_");
    if (!yearMonthMap[year]) {
      yearMonthMap[year] = new Set();
    }
    yearMonthMap[year].add(parseInt(month.split("_")[0], 10)); // 월 정보 추가
  });

  let readmeContent = "";
  Object.keys(yearMonthMap)
    .sort()
    .forEach((year) => {
      readmeContent += `<details><summary>${year}</summary>\n\n`;
      Array.from(yearMonthMap[year])
        .sort((a, b) => a - b)
        .forEach((month) => {
          readmeContent += `<details><summary>${month}월</summary>\n\n`;
          readmeContent += generateCalendarForMonth(year, month);
          readmeContent += `</details>\n\n`;
        });
      readmeContent += `</details>\n\n`;
    });

  return readmeContent;
}

function updateReadme() {
  const yearMonthToggles = generateYearMonthToggles();

  let readmeContent = fs.readFileSync(readmePath, "utf8");
  const startMarker = "<!--YEAR_MONTH_TOGGLE_START-->";
  const endMarker = "<!--YEAR_MONTH_TOGGLE_END-->";

  const startMarkerIndex =
    readmeContent.indexOf(startMarker) + startMarker.length;
  const endMarkerIndex = readmeContent.indexOf(endMarker);

  if (startMarkerIndex >= 0 && endMarkerIndex >= 0) {
    readmeContent =
      readmeContent.substring(0, startMarkerIndex) +
      "\n" +
      yearMonthToggles +
      readmeContent.substring(endMarkerIndex);
  } else {
    console.error("Markers not found in README.md. Please add markers.");
  }

  fs.writeFileSync(readmePath, readmeContent);
  console.log("README.md has been updated with year and month toggles.");
}

updateReadme();
