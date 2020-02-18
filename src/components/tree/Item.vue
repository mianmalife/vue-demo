<template>
    <li>
        <div @click="toggle"> 
            {{model.title}}<span>[{{open?'-':'+'}}]</span>
        </div>
        <ul v-if="isFolder" v-show="open">
            <Item v-for="model in model.children" :model="model" :key="model.title"></Item>
        </ul>
    </li>
</template>
<script>
import Item from '@/components/tree/Item.vue'
    export default {
        name: 'Item',
        props: {
            model: {
                type: Object
            }
        },
        data() {
            return {
                open: false
            }
        },
        methods: {
            toggle() {
                if(this.isFolder) {
                    this.open = !this.open;
                }
            }
        },
        computed: {
            isFolder() {
                return this.model.children && this.model.children.length;
            }
        },
        components: {
            Item
        }
    }
</script>

<style lang="scss" scoped>

</style>