<template>  
  <tab-container :value="pageId" :swipeable="false">
    <tab-container-item id="home">
      <div class="home">
        <template v-if="pageId === 'home'">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </template>
        <tabbar v-model="selected">
          <tab-item id="natural">
            <img slot="icon" src="../../static/img/natural.svg">
            资源
          </tab-item>
          <tab-item id="recommend">
            <img slot="icon" src="../../static/img/recommend.svg">
            推荐
          </tab-item>
          <tab-item id="talk">
            <img slot="icon" src="../../static/img/talk.svg">
            论坛
          </tab-item>
          <tab-item id="admin">
            <img slot="icon" src="../../static/img/admin.svg">
            个人
          </tab-item>
        </tabbar>
      </div>
    </tab-container-item>
    <tab-container-item id="detail">
      <template v-if="pageId === 'detail'">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </template>
    </tab-container-item>
  </tab-container>
</template>

<script>
import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
import Admin from './Wrap/Admin'
import Natural from './Wrap/Natural'
import Recommend from './Wrap/Recommend'
import Talk from './Wrap/Talk'
import Detail from './Detail'

export default {
  name: 'home',
  data () {
    return {
      selected: 'natural',
      pageId: 'home',
    }
  },
  components: {
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Admin,
    Natural,
    Recommend,
    Talk,
    Detail
  },
  watch: {
    selected (newVal) {
      this.$router.push(newVal)
    },
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.pageId = fromDepth >= toDepth ? 'home' : 'detail'
    }
  }
} 
</script>

<style>
  .mint-tab-container, .mint-tab-container-wrap{
    height: 100%;
    width: 100%;
  }
  .home {
    height: 100%;
  }
  .box {
    width: 100%;
    height: 100%;
    background: red;
  }
  .natural, .recommend, .talk, .admin {
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 55px;
  }
  .mint-tabbar {
    background-color: rgb(75, 117, 206, 0.9)
  }
  .mint-tab-item-label {
    color: white;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    background: rgb(75, 117, 206)
  }
</style>
