# node-yaml-bench

A performance benchmark comparing the [yaml](https://www.npmjs.com/package/yaml) and [js-yaml](https://www.npmjs.com/package/js-yaml) NPM packages. The YAML test files are both from [pnpm/pnpm](https://github.com/pnpm/pnpm): their lengthy lockfile ([`pnpm-lock.yaml`](https://github.com/pnpm/pnpm/blob/main/pnpm-lock.yaml)) and a short GitHub Actions workflow ([`.github/workflows/release.yml`](https://github.com/pnpm/pnpm/blob/main/.github/workflows/release.yml)).

## Results

```
┌─────────┬───────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'js-yaml' │  '77'   │ 12829997.823024409 │ '±3.94%' │   39    │
│    1    │  'yaml'   │   '6'   │ 163759429.19701338 │ '±4.10%' │   10    │
└─────────┴───────────┴─────────┴────────────────────┴──────────┴─────────┘
Fastest function for resource 'lockfile' was 'js-yaml'.
┌─────────┬───────────┬──────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name │ ops/sec  │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼───────────┼──────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'js-yaml' │ '35,378' │ 28265.74288178056  │ '±0.44%' │  17690  │
│    1    │  'yaml'   │ '3,497'  │ 285917.61294605397 │ '±2.30%' │  1749   │
└─────────┴───────────┴──────────┴────────────────────┴──────────┴─────────┘
Fastest function for resource 'workflow' was 'js-yaml'.
```
