# node-yaml-bench

A performance benchmark comparing the [yaml](https://www.npmjs.com/package/yaml) and [js-yaml](https://www.npmjs.com/package/js-yaml) NPM packages. The [YAML test file](resources/pnpm.yaml) is [pnpm/pnpm](https://github.com/pnpm/pnpm)'s own `pnpm-lock.yaml` (~18,000 lines long).

## Results

See [RESULTS.md](RESULTS.md) (spoiler: js-yaml is ~4x faster).

## Usage

> [!IMPORTANT]
> You must have [hyperfine](https://github.com/sharkdp/hyperfine) installed to use the following command.

```sh
pnpm bench
```

To export the results, use:

```sh
pnpm bench:export
```
