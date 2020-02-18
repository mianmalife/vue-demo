<template>
    <div>
        <h1>helloworld的兄弟组件</h1>
        <slot></slot>
        <slot name="content"></slot>
        <slot name="footer" :footer="footer" :grand="grand"></slot>
    </div>
</template>

<script>
    export default {
        inject: ['grand'],
        name: 'BroHelloWorld',
        data(){
            return {
                footer: 'i am footer'
            }
        },
        mounted() {
            this.$parent.$on('hi', data => {
                console.log('兄弟传来信息了', data);
            });
            this.$bus.$on('haha', data => {
                console.log('兄弟再次传来信息了', data)
            });
            this.$bus1.$on('bus1', data => {
                console.log('兄弟又来消息了', data);
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>