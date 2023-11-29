# node-yaml-bench

A performance benchmark comparing the [yaml](https://www.npmjs.com/package/yaml) and [js-yaml](https://www.npmjs.com/package/js-yaml) NPM packages. The YAML test files are both from [pnpm/pnpm](https://github.com/pnpm/pnpm): their lengthy lockfile ([`pnpm-lock.yaml`](https://github.com/pnpm/pnpm/blob/main/pnpm-lock.yaml)) and a short GitHub Actions workflow ([`.github/workflows/release.yml`](https://github.com/pnpm/pnpm/blob/main/.github/workflows/release.yml)).

## Results

<!-- prettier-ignore -->
| File | File Length | Results |
|:---|---:|---:|
| `resources/pnpm-lockfile.yaml` | 17,788 lines | [results/pnpm-lockfile.md](results/pnpm-lockfile.md) |
| `resources/pnpm-workflow.yaml` | 56 lines | [results/pnpm-workflow.md](results/pnpm-workflow.md) |

## Usage

> [!IMPORTANT]
> You must have [hyperfine](https://github.com/sharkdp/hyperfine) installed to use the following command.

```sh
pnpm bench:all
```

To export the results, use:

```sh
pnpm export:all
```

## Benchmark.js

I wasn't sure how accurate using `hyperfine` for Node.js benchmarks was especially since the scripts would have to read the input file before each iteration, so I added tests using [benchmark.js](https://benchmarkjs.com/).

### Results

For the **lockfile** test (`node benchmarkjs-lockfile.js`)

```
[js-yaml] x 75.13 ops/sec ±4.82% (65 runs sampled)
[yaml] x 5.97 ops/sec ±3.53% (20 runs sampled)
The fastest was [js-yaml].
```

For the **workflow** test (`node benchmarkjs-workflow.js`)

```
[js-yaml] x 35,949 ops/sec ±1.97% (97 runs sampled)
[yaml] x 3,708 ops/sec ±3.15% (94 runs sampled)
The fastest was [js-yaml].
```
