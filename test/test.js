console.log = function () {};
const assert = require("chai").assert;
const fs = require("fs");
const Structured = require("structured");

const code = fs.readFileSync("public/main.js", "utf8");

describe("", function () {
  it("", function () {
    let structureOne = function () {
      const shortenUrl = () => {
        fetch(_)
          .then(_)
          .then((jsonResponse) => {});
      };
    };

    let structureTwo = function () {
      const shortenUrl = () => {
        fetch(_)
          .then(_)
          .then((jsonResponse) => {
            renderResponse(jsonResponse);
          });
      };
    };
  });
});
