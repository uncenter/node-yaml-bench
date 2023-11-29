import Benchmark from "benchmark";

import { readFileSync } from "node:fs";

import { load } from "js-yaml";
import { parse } from "yaml";

const suite = new Benchmark.Suite();

const workflow = readFileSync("./resources/pnpm-workflow.yaml", "utf-8");

suite
	.add("[js-yaml]", function () {
		load(workflow);
	})
	.add("[yaml]", function () {
		parse(workflow);
	})
	.on("cycle", function (event) {
		console.log(String(event.target));
	})
	.on("complete", function () {
		console.log(`The fastest was ${this.filter("fastest").map("name")}.`);
	})
	.run({ async: false });
