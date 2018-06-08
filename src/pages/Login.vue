<template>
  <div class="login">
    <div class="logo">
      <img src="../../static/img/logo.png">
    </div>
    <div class="form">
      <tabContainer v-model="active">
        <tabContainerItem id="login">
          <field placeholder="用户名" v-model="username"></field>
          <field placeholder="密码" type="password" v-model="password"></field>
        </tabContainerItem>
        <tabContainerItem id="regist">
          <field placeholder="账户" v-model="username"></field>
          <field placeholder="邮箱" v-model="email"></field>
          <field placeholder="新密码" type="password" v-model="new_password"></field>
          <field placeholder="重新输入新密码" type="password" v-model="verify_password"></field>
        </tabContainerItem>
      </tabContainer>
      <div class="form-item">
        <Button label="登录" type="primary" @click="login">登录</Button>
      </div>
      <div class="form-item btm">
        <span @click="switchSign" v-if="active == 'login'">创建一个新的账户</span>
        <span @click="switchSign" v-else>已有云智教育的账户? 去登录</span>
      </div>
      <!-- <div style="width: 100px;height: 100px; background:red" @click="ok"></div> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, TabContainer, TabContainerItem, Button, Indicator, MessageBox} from 'mint-ui';
Vue.component("field", Field); 
Vue.component("tabContainer", TabContainer);
Vue.component("tabContainerItem", TabContainerItem);
Vue.component('Button', Button)
import Request from '../utils/request.js'

export default {
  name: 'login',
  props: {
    value : {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      username: '',
      password: '',
      email: '',
      new_password: '',
      verify_password: '',
      active: 'login'
    }
  },
  methods: {
    switchSign () {
      if (this.active === 'login') {
        this.active = 'regist'
      } else {
        this.active = 'login'
      }
    },
    login () {
      let _self = this
      this.loading()
      Request({
        method: 'post',
        path: '/auth',
        params: {
          username: this.username,
          password: this.password
        },
        success: this.success.bind(this),
        fail: this.fail.bind(this)
      })
    },
    success (data) {
      this.ending()
      this.$emit('input')
      this.$router.push('/natural')
    },
    fail (data) {
      this.ending()
      this.alert(data)
    },
    loading () {
      Indicator.open();
    },
    ending () {
      Indicator.close();
    },
    alert (data) {
      MessageBox('', data.msg);   
    }
  }
};
</script>

<style>
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(75, 117, 206)
  } 
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
  }

  .logo img {
    margin-top: 40px;
    width: 130px;
    height: 130px;
    opacity: 0.8;
  }

  .form {
    height: 60%;
  }
  
  .mint-cell {
    display: inline-block;
    width: 70%;
    background: rgba(255, 255, 255, 0.3);
    margin: 5px 0;
    min-height: 42px;
    border: 1px solid white;
    border-radius: 4px;
    vertical-align: middle;
    line-height: 42px;
  }

  .mint-cell-value input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: transparent;
    color: white;
    border: 0;
    font-size: 16px;
  }

  .form-item {
    display: block;
    color: white;
    margin-top: 5px;
  }            

  .mint-button {
    display: block;
    margin: 0 auto;
    width: 70%;
    height: 42px;
    color: white;
  }

  .btm {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%)
  }
  .btm span {
     white-space: nowrap 
  }
          
          
</style>


