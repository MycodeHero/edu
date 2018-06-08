<template>
  <div class="natural">
    <div @click.prevent="toDetail">
      <cell v-for="(i, index) in [1,2,3,4]" :key="index">
        <img slot="icon" src="../../../static/img/test.jpg" width="100" height="56">
        <div class="class-info">
          <span class="class-title">Java仿抖音短视频小程序开发 全栈式实战项目</span>
          <div class="class-tag">
            <span class="class-type">java</span>
            <span class="class-level">初级</span>
            <span class="class-people"><img src="../../../static/img/people.svg" width="10"><span> 210</span></span>
            <span class="review">
              <!-- <img src="../../../static/img/icomoon.svg" width="10"> -->
              <span>1111111</span>
            </span>          
          </div>
        </div>    
      </cell>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell } from 'mint-ui'
Vue.component('Cell', Cell)

export default {
  name: 'Detail',
  data () {
    return {
      to: 'detail'
    }
  },
  methods: {
    toDetail () {
      this.$router.push('/natural/123')
    }
  }
}
</script>

<style>
.mint-cell {
  width: 100%;
  text-align: left;
  margin: 0px;
}
.mint-cell-wrapper {
  height: 78px;
}
.mint-cell-title {
  display: flex;
  align-items: center;
  flex: 0
}
.mint-cell-value {
  box-sizing: border-box;
  padding-left: 8px;
}
.class-info {
  position: relative;
  height: 50px;
  justify-content: space-around;
}
.mint-cell-value .class-title {
  font-size: 13px;
  color: black;
}
.class-tag {
  position: absolute;
  bottom: 0px;
  display:flex;
  align-items: center;
}
.class-tag>span {
  color: #93999F;
  font-size:11px;
  padding-right: 15px;
}
.class-people *{
  vertical-align: middle;
}

.review img {
  color: black;
}
</style>
