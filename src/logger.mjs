import { appendFileSync } from "node:fs";

const path = `${process.env.INIT_CWD}`;

export const log = (message = "") =>
  appendFileSync(`${path}/log.txt`, `${message} \r\n`);
