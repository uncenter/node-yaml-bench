import Benchmark from "benchmark";

import { readFileSync } from "node:fs";

import { load } from "js-yaml";
import { parse } from "yaml";

const suite = new Benchmark.Suite();

const lockfile = readFileSync("./resources/pnpm-lockfile.yaml", "utf-8");

suite
	.add("[js-yaml]", function () {
		load(lockfile);
	})
	.add("[yaml]", function () {
		parse(lockfile);
	})
	.on("cycle", function (event) {
		console.log(String(event.target));
	})
	.on("complete", function () {
		console.log(`The fastest was ${this.filter("fastest").map("name")}.`);
	})
	.run({ async: false });
