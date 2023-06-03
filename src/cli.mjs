#!/usr/bin/env node
import { input } from "@inquirer/prompts";
import boxen from "boxen";

let header = () =>
  boxen("Inject Importmap", {
    padding: 1,
    titleAlignment: "center",
    borderStyle: "round",
    borderColor: "blue",
  });

console.log(header());

const answers = {
  firstName: await input({ message: "What's your first name?" }),
};

console.log(answers);
