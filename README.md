# ₡ORE Unit Converter

## Install

```bash
npm i core-units
```

## Getting started

Example №1

```js
const convert = require('core-units')
const result = convert(1, 'core')
console.log(JSON.stringify(result, null, 2))
```

Output:

```json
{
  "ore": "1000000000000000000",
  "wav": "1000000000000000",
  "grav": "1000000000000",
  "nucle": "1000000000",
  "atom": "1000000",
  "moli": "1000",
  "core": "1",
  "aer": "0.001",
  "orb": "0.000001",
  "plano": "0.000000001",
  "tera": "0.000000000001",
  "sola": "0.000000000000001",
  "galx": "0.000000000000000001",
  "cluster": "0.000000000000000000001",
  "supermatter": "0.000000000000000000000001"
}
```

Example №2

```js
const convert = require('core-units')
const result = convert(30, 'nucle')
console.log(JSON.stringify(result, null, 2))
```

Output:

```json
{
  "ore": "30000000000",
  "wav": "30000000",
  "grav": "30000",
  "nucle": "30",
  "atom": "0.03",
  "moli": "0.00003",
  "core": "0.00000003",
  "aer": "0.00000000003",
  "orb": "0.00000000000003",
  "plano": "0.00000000000000003",
  "tera": "0.00000000000000000003",
  "sola": "0.00000000000000000000003",
  "galx": "0.00000000000000000000000003",
  "cluster": "0.00000000000000000000000000003",
  "supermatter": "0.00000000000000000000000000000003"
}
```

Specific output examples:

```js
console.log(convert(1, 'core', 'ore')) // 1000000000000000000
console.log(convert(30, 'nucle', 'core')) // 0.00000003
console.log(convert(30, 'nucle', 'ore')) // 30000000000
```

## CLI

Install

```bash
npm i -g core-units
```

### Getting started

```bash
$ core-units {value} {unit}
```

### Examples

```bash
$ core-units 10 core

ore      10000000000000000000
wav      10000000000000000
grav     10000000000000
nucle    10000000000
atom     10000000
moli     10000
core     10
aer      0.01
orb      0.00001
plano    0.00000001
tera     0.00000000001
sola     0.00000000000001
galx     0.00000000000000001
cluster  0.00000000000000000001
supermatter 0.00000000000000000000001
```

```bash
$ core-units 42 nucle

ore      42000000000
wav      42000000
grav     42000
nucle    42
atom     0.042
moli     0.000042
core     0.000000042
aer      0.000000000042
orb      0.000000000000042
plano    0.000000000000000042
tera     0.000000000000000000042
sola     0.000000000000000000000042
galx     0.000000000000000000000000042
cluster  0.000000000000000000000000000042
supermatter 0.000000000000000000000000000000042
```

```bash
$ core-units 1 core ore

1000000000000000000
```

```bash
$ core-units 30 nucle core

0.00000003
```

Piping value example:

```bash
$ echo 1000000000000000000 | core-units ore core

1
```

Using decimal numbers example:

```bash
$ core-units 1000000 -6 core

1
```

```bash
$ core-units 1000000 -6 1

1
```

```bash
$ core-units 1 1 -6

1000000
```

## Contributions

Feel free to contribute in any way.

We appreciate:
- Fork [this repository](https://github.com/cryptohub-digital/core-units/fork)
- Open [pull request](https://github.com/cryptohub-digital/core-units/pulls)
- Send us some Øres / ₡ores: [cb7147879011ea207df5b35a24ca6f0859dcfb145999](https://blockindex.net/address/cb7147879011ea207df5b35a24ca6f0859dcfb145999)
- Star this repository

## Epigram

> 「Cryptoni Confidimus」

## License

Licensed under the [CORE](LICENSE) License.
