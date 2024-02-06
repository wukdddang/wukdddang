const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const path = require("path");

// GitHub Personal Access Token과 Gist ID 설정
const token = process.env.GITHUB_TOKEN; // 환경 변수나 다른 안전한 방법으로 토큰 관리
const gistId = "YOUR_GIST_ID_HERE";

const octokit = new Octokit({ auth: token });

async function updateGist() {
  const calendarData = fs.readFileSync(
    path.join(__dirname, "README.md"),
    "utf8"
  );

  try {
    await octokit.gists.update({
      gist_id: gistId,
      files: {
        "README.md": { content: calendarData },
      },
    });
    console.log("Gist updated successfully");
  } catch (error) {
    console.error("Error updating gist:", error);
  }
}

updateGist();
