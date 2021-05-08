<template>
    <div class="simple">
        <div>Here is the grpc server response:</div>
        {{ responseMessage }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            responseMessage: ""
        };
    },
    methods: {},
    created() {
        const {
            HelloRequest
        } = require("@/service/grpc-server/helloworld_pb.js");
        const {
            GreeterClient
        } = require("@/service/grpc-server/helloworld_grpc_web_pb.js");

        var client = new GreeterClient(
            "http://" + window.location.hostname + ":8070",
            null,
            null
        );

        // simple unary call
        var request = new HelloRequest();
        request.setName("World");

        client.sayHello(request, {}, (err, response) => {
            if (err) {
                this.responseMessage =
                    `Unexpected error for sayHello: code = ${err.code}` +
                    `, message = "${err.message}"`;
            } else {
                this.responseMessage = response.getMessage();
            }
        });
    }
};
</script>
<style lang="less" scoped></style>
