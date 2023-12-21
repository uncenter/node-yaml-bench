import { Bench } from "@uncenter/quickbench";
import { readFileSync } from "node:fs";

import { load } from "js-yaml";
import { parse } from "yaml";

const lockfile = readFileSync("./resources/pnpm-lockfile.yaml", "utf-8");
const workflow = readFileSync("./resources/pnpm-workflow.yaml", "utf-8");

const bench = new Bench();

bench.addFunction("js-yaml", load).addFunction("yaml", parse);

bench.addResource("lockfile", lockfile);
bench.addResource("workflow", workflow);

bench.run();
