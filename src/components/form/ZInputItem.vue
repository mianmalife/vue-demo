<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="error_message">{{error_message}}</p>
    </div>
</template>

<script>
import Schema  from 'async-validator';
    export default {
        inject: ['form'],
        name: 'ZInputItem',
        data() {
            return {
                error_message: ''
            }
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String,
                default: ''
            }

        },
        mounted() {
            this.$on('validate', ()=> {
                this.validate();
            })
        },
        methods: {
            validate() {
                // 1.获取值和校验规则
                const rules = this.form.rules[this.prop];
                const value = this.form.model[this.prop];
                const schema = new Schema({[this.prop]:rules});

                return schema.validate({[this.prop]:value}, err => {
                    if(err) {
                        this.error_message = err[0].message;
                    }else {
                        this.error_message = '';
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>