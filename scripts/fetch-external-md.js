const pages = require("./external-config.js");
const fetch = require("cross-fetch");
const fs = require("fs");

const dedent = (str) =>
  str
    .split("\n")
    .map((line) => line.trimLeft())
    .join("\n")
    .trim();

pages.forEach((page) => {
  const url = `https://raw.githubusercontent.com/${page.repoAndBranch}/${page.fetchPath}`;
  fetch(url)
    .then((result) => result.text())
    .then((result) => {
      fs.writeFileSync(page.outputPath, dedent(page.header) + "\n\n" + result);
      console.log(`Copied ${url}\n   to ${page.outputPath}`);
    });
});
