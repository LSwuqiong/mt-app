<template>
<div class="page-login">
    <div class="login-header">
        <a class="site-logo" href="http://www.meituan.com">美团网</a>
    </div>
    <div class="login-panel">
        <div class="banner">
            <img width="480" height="370" alt="美团网" src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg">
        </div>
        <div class="form">
            <h4 v-if="error" class="tips">{{error}}</h4>
            <p>
                <span>账号登陆:</span>
            </p>
            <el-input :class="{error:error&&!username}" v-model="userName" placeholder="手机号/用户/邮箱" prefix-icon="profile"></el-input>
            <el-input :class="{error:error&&!password}" v-model="password" type="password" placeholder="密码" prefix-icon="password"></el-input>
            <div class="foot">
               <a href="#">忘记密码?</a> 
            </div>
            <el-button type="primary" class="btn-login" @click="submit">登陆</el-button>
            <p class="reg">
                <span >没有账号?</span>
                <router-link :to="{name:'register'}">免费注册</router-link>
            </p>
            <div>
                <p></p>
                <div></div>
            </div>
        </div>
    </div>
    <footer>
        <ul>
            <li><a href="#">关于美团</a></li>
            <li><a href="#">加入我们</a></li>
            <li><a href="#">商家入驻</a></li>
            <li><a href="#">帮助中心</a></li>
            <li><a href="#">美团手机版</a></li>
        </ul>
        <p>
            ©<span>2019</span>
            <a href="https://www.meituan.com">美团网团购</a>
            meituan.com
            <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
            京公网安备11010502025545号
        </p>
    </footer>
    
</div>


</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      error:""
    };
  },
  methods: {
      submit(){
          if(!this.userName){
              this.error="请输入账号"
              return false;
          }
          if(!this.password){
              this.error="请输入密码"
              return false;
          }
          if(this.userName=="1"&&this.password=="1"){
              this.$router.push({name:'index'})
          }else{
              alert('密码错误')
          }
      }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>