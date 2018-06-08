<template>
  <div id="app">
    <login v-if="isLogin" v-model="isLogin"></login>
    <home v-else></home>
  </div>
</template>

<script>
import {Indicator, MessageBox} from 'mint-ui'

import Login from '../src/pages/Login'
import Home from '../src/pages/Home'

import Request from '../src/utils/request.js'

export default {
  name: 'App',
  data () {
    return {
      isLogin: true
    }
  },
  components: {
    Login,
    Home,
    Indicator,
    MessageBox
  },
  
  mounted () {
    this.isLogined()
  },
  methods: {
    isLogined () {
      Request({
          method: 'post',
          path: '/auth',
          success: this.success.bind(this),
          fail: this.fail.bind(this)
        })
    },
    success () {
      this.isLogin = false
      this.$router.push('/natural')
    },
    fail () {
      this.login = true
    } 
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html, body {
  width: 100%;
  height: 100%;
}

input {
  outline: none;
}

input::-webkit-input-placeholder {
   color:white
}
 

#app {
  height: 100%;
  text-align: center;
  font-weight: 100;
  font-family: arial;
  overflow: hidden;
}
</style>
