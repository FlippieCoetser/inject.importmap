module.exports = function (wallaby) {
  process.env.INIT_CWD = wallaby.localProjectDir;
  return {
    files: ["src/**/*.mjs"],

    tests: ["test/**/*.mjs"],
    testFramework: "jasmine",
    env: {
      type: "node",
      runner: "node",
    },
  };
};
