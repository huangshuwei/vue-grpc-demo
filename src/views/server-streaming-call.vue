<template>
    <div class="server">
        <div>Here is the grpc server response:</div>
        <div v-for="(msg, index) in responseMessages" :key="index">
            {{ msg }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            responseMessages: []
        };
    },
    methods: {},
    created() {
        const {
            RepeatHelloRequest
        } = require("@/service/grpc-server/helloworld_pb.js");
        const {
            GreeterClient
        } = require("@/service/grpc-server/helloworld_grpc_web_pb.js");

        var client = new GreeterClient(
            "http://" + window.location.hostname + ":8070",
            null,
            null
        );

        // server streaming call
        var streamRequest = new RepeatHelloRequest();
        streamRequest.setName("World");
        streamRequest.setCount(150);

        var stream = client.sayRepeatHello(streamRequest, {});
        stream.on("data", response => {
            this.responseMessages.push(response.getMessage());
        });
        stream.on("error", err => {
            const msg =
                `Unexpected error for sayHello: code = ${err.code}` +
                `, message = "${err.message}"`;
            this.responseMessages.push(msg);
        });
    }
};
</script>
<style lang="less" scoped></style>
