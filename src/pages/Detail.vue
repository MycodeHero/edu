<template>
  <div class="detail">
    <video-top @click="toHome" v-model="status"></video-top>
    <div class="detail-title">
      <span @click="changeType('intro')">简介</span><i></i><span @click="changeType('review')">评论</span>
    </div>
    <tab-container v-model="type" :swipeable="true">
      <tab-container-item id="intro">
        <intro></intro>
      </tab-container-item>
      <tab-container-item id="review">
        <review></review>  
      </tab-container-item>
    </tab-container>
    <div class="footer" v-if="status" @click="startStudy">开始学习</div>
  </div>
</template>

<script>
import VideoTop from '../components/VideoTop'

import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
import Intro from '../components/Intro'
import Review from '../components/Review'

export default {
  name: 'Detail',
  components: {
    VideoTop,
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Intro,
    Review
  },
  data () {
    return {
      to: 'home',
      status: true,
      type: 'intro',
      introConfig: {
        title: 'Java仿抖音短视频小程序开发 全栈式实战项目',
      }
    }
  },
  methods: {
    toHome () {
      this.$router.push('/natural')
    },
    changeType (type) {
      this.type = type
    },
    startStudy () {
      this.status = false
    } 
  }
}
</script>

<style>
.detail {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.mint-header {
  background: transparent;
  padding: 0
}
.detail-title {
  display: flex;
  box-sizing: border-box;
  padding: 4px 0;
  width: 100%;
  height: 60px;
  line-height: 34px;
  flex-wrap: nowrap;
  box-shadow: 0 2px 8px #f0f1f2;
}
.detail-title span{
  flex: 1;
}
.detail-title i {
  display: block;
  box-sizing:border-box;
  padding:10px 0px;
  width: 1px;
  height: 100%;
  background: #f0f1f2;
}
.footer {
  position:absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background: rgb(75, 117, 206, 0.9);
  line-height: 55px;
  font-size: 18px;
  color: white;
  letter-spacing: 2px;
}
.card:nth-last-child(1)::after {
  display: none;
}
</style>
