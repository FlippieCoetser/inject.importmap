module.exports = function (wallaby) {
  return {
    files: ["src/**/*.mjs"],

    tests: ["test/**/*.mjs"],
    testFramework: "jasmine",
    env: {
      type: "node",
      runner: "node",
    },
    setup: function (wallaby) {
      const jasmine = wallaby.testFramework;
      const path = require("path");

      const helperFile = path.join(
        wallaby.localProjectDir,
        "test",
        "helpers",
        "helper.js"
      );

      console.log(helperFile);
      jasmine.loadConfig({
        random: true,
        stopSpecOnExpectationFailure: true,
        helpers: [helperFile],
      });
    },
  };
};
