# 🔌 [Next](https://nextjs.org).[Go](https://golang.org) [![ci result](https://github.com/olehan/next.go/workflows/Lint%20and%20Test/badge.svg)](https://github.com/olehan/next.go/actions?query=workflow%3A%22Lint+and+Test%22) [![olehan next.go license](https://img.shields.io/github/license/azimutlabs/rollup?label=License)](LICENSE)
POC of a Next.js project that uses Golang written code using
[node-gyp](https://github.com/nodejs/node-gyp) on the server and
[WASM](https://webassembly.org) on the client

## Prerequisites
| **Tool** | **Version** |
| -------- | ----------- |
| `yarn`   | `>1.22`     |
| `node`   | `>12`       |
| `go`     | `=1.16`     |
| `tinygo` | `=0.17`     |

## Usage
Install dependencies:
```shell
$ yarn
```
Compile [**add.wasm**](packages/add.wasm) and [**add.node**](packages/add.node) packages:
```shell
$ yarn compile
```
You can run **unit** tests to see if everything compiled fine:
```shell
$ yarn test:unit
```
Build the Next.js application:
```shell
$ yarn build
```
Start production version of the application:
```shell
$ yarn start
```
Finally, run **e2e** tests, or check the http://localhost:3000 yourself:
```shell
$ yarn test:e2e
```

## License
[![olehan next.go license](https://img.shields.io/github/license/olehan/next.go?label=as%20always&color=informational)](LICENSE)
