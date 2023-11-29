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
