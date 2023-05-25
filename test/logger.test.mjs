import { existsSync, unlinkSync } from "node:fs";

import { log } from "../src/logger.mjs";

describe("Given log imported", () => {
  let path;
  beforeAll(() => {
    path = process.env.INIT_CWD;
  });
  it("then log should be defined", () => {
    expect(log).toBeDefined();
  });
  describe("given log() has not been called", () => {
    it("then no log.txt exist in project root", () => {
      let logExist = existsSync(`${path}/log.txt`);
      expect(logExist).toBeFalse();
    });
  });
  describe("given log() has been called", () => {
    beforeAll(() => {
      log();
    });
    it("then log.txt exist in project root", () => {
      let logExist = existsSync(`${path}/log.txt`);
      expect(logExist).toBeTrue();
    });
    afterAll(() => {
      unlinkSync(`${path}/log.txt`);
    });
  });
});
