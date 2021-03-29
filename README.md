# 🔌 [Next](https://nextjs.org).[Go](https://golang.org) [![ci result](https://github.com/olehan/next.go/workflows/Lint%20and%20Test/badge.svg)](https://github.com/olehan/next.go/actions?query=workflow%3A%22Lint+and+Test%22) [![olehan next.go license](https://img.shields.io/github/license/azimutlabs/rollup?label=License)](LICENSE)
POC of a Next.js project that uses Golang written code using
[node-gyp](https://github.com/nodejs/node-gyp) on the server and
[WASM](https://webassembly.org) on the client

## Prerequisites
| **Tool** | **Version** |
| -------- | ----------- |
| `node`   | `=14`       |
| `go`     | `=1.16`     |
| `tinygo`     | `=0.17`     |

## Usage
Compile node-gyp addon:
```shell
$ yarn packages/add.node compile
```
Compile wasm package:
```shell
$ yarn packages/add.wasm compile
```

## License
[![olehan next.go license](https://img.shields.io/github/license/olehan/next.go?label=as%20always&color=informational)](LICENSE)
