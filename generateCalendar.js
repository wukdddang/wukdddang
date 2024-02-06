const {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  parseISO,
} = require("date-fns");

/**
 * 주어진 연도와 월에 대한 학습 로그를 포함하는 달력 문자열 생성
 * @param {number} year - 연도
 * @param {number} month - 월
 * @param {Object} learningLog - 학습 로그 객체, 키는 'yyyy-MM-dd' 형식의 문자열
 * @returns {string} 달력 문자열
 */
function generateCalendar(year, month, learningLog) {
  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);
  const daysOfTheMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  let calendarString =
    "| Sun | Mon | Tue | Wed | Thu | Fri | Sat |\n| --- | --- | --- | --- | --- | --- | --- |\n";
  let weekString = "|";

  // 달력 시작 요일까지 공백으로 채우기
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    weekString += "     |";
  }

  daysOfTheMonth.forEach((day) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    const logEntry = learningLog[formattedDate]
      ? ` ${learningLog[formattedDate]}`
      : " ";
    weekString += `${logEntry}|`;

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

  return calendarString;
}

module.exports = { generateCalendar };
