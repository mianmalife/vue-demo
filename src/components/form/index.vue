<template>
  <div>
    <h2>表单</h2>
    <ZForm :model="model" :rules="rules" ref="login">
      <ZInputItem label="用户名" prop="username">
          <ZInput v-model="model.username" placeholder="请输入用户名" />
      </ZInputItem>
      <ZInputItem label="密码" prop="password">
          <ZInput v-model="model.password" placeholder="请输入密码" />
      </ZInputItem>
      <ZInputItem>
          <button @click="loginFn">提交</button>
      </ZInputItem>
    </ZForm>
    <Notice />
    <Tree />
  </div>
</template>

<script>
import ZInput from "@/components/form/ZInput.vue";
import ZInputItem from "@/components/form/ZInputItem.vue";
import ZForm from "@/components/form/ZForm.vue";
import Notice from "@/components/Notice.vue";
import create from '@/utils/create';
import Tree from '@/components/tree/Index.vue';
export default {
  name: 'IndexForm',
  data() {
    return {
      model: { username: "tom", password: "" },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    ZInput,
    ZInputItem,
    ZForm,
    Notice,
    Tree
  },
  methods: {
    loginFn() {
      this.$refs['login'].validate(stat => {
        const notice = create(Notice, {
          title: '这是弹框',
          message: stat?'登录去':'错了'
        });
        notice.show();
        setTimeout(()=> {
          notice.hide();
        },3000)
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>