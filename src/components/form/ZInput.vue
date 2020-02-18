<template>
    <div>
        <input :type="type" :value="value" @input="changeInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        data() {
            return {
                
            }
        },
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            changeInput(e) {
                this.$emit('input', e.target.value);

                //通知校验

                this.$parent.$emit('validate')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>