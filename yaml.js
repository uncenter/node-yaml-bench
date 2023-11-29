import { parse } from "yaml";
import { readFileSync } from "node:fs";

const file = readFileSync("./resources/pnpm.yaml", "utf-8");

parse(file);
