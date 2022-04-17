const { Octokit } = require("@octokit/rest");
const { createTokenAuth } = require("@octokit/auth-token");
const json2md = require("json2md");
const fs = require("fs");
const { config } = require("dotenv");
// let tokenAuth = new Octokit.C Credential("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");

config();

function getOrThrow(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing env var ${key}`);
  }
  return value;
}

(async () => {
  const auth = createTokenAuth(getOrThrow("TOKEN"));
  const { token } = await auth();

  const octoCat = new Octokit({
    auth: token,
  });

  const repos = await octoCat.repos.listForOrg({
    headers: {
      authorization: `bearer ${token}`,
    },
    org: "xp-network",
    per_page: 100,
    type: "private",
    sort: "pushed",
  });

  const markdown = [];

  for (const repo of repos.data) {
    markdown.push([{ h1: repo.name }]);

    const branches = await octoCat.repos.listBranches({
      owner: "xp-network",
      repo: repo.name,
      per_page: 100,
    });

    console.log(branches.data.map((branch) => branch.name));

    for (const branch of branches.data) {
      const commits = await octoCat.repos.listCommits({
        owner: "xp-network",
        repo: repo.name,
        per_page: 50,
        sha: branch.name,
      });

      const commitMessages = commits.data.map(
        (commit) =>
          `[${commit.sha.substring(0, 3)}..${commit.sha.slice(
            commit.sha.length - 3
          )}] ${commit.commit.message.split("\n")[0]} | By - ${
            commit.commit.author.name
          } | On - ${commit.commit.committer.date ?? "N/A"}`
      );
      const md = [
        {
          h2: branch.name,
        },
        { ol: commitMessages },
      ];
      markdown.push(md);

      console.log();
    }
  }

  fs.writeFile("ACTIVITY.md", json2md(markdown), (e) => {
    if (e) {
      console.log(e);
    }
  });
  console.log("Updated the readme.");
})();
