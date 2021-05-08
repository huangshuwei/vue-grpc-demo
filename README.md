# vue grpc demo

### intro

grpc client: grpc-web + vue.js

grpc server: grpc + nodejs

### install

```
yarn
```

or

```
npm i
```

### start nodejs server

```
node server/node-server.js
```

### start envoy proxy server

记得将 envoy-node.yaml 地址改为你真实的地址

```
docker run --name node-server-app -d -v "your path"\envoy-node.yaml:/etc/envoy/envoy.yaml:ro -p 8070:8070 -p 9902:9902 envoyproxy/envoy:v1.17.0
```

### start vue app

```
yarn dev
```
