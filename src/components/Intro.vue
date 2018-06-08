<template>
  <div class="intro">
    <card>
      {{config.classMessage}}
    </card>
    <card>
      <div class="teacher">
        <img class="avatar" :src="config.teacher.avatar" width="60" height="60">
        <div class="teacher-msg">
          <p>{{config.teacher.name}}</p>
          <p>{{config.teacher.job}}</p>
        </div> 
      </div>
    </card>
    <card>
      <div class="class-need">
        <p class="need-title">课程须知</p>
        <p v-for="(item, index) in config.classNeed" :key="index">{{item}}</p>
        <p class="need-title">老师告诉你能学到什么?</p>
        <p v-for="(item, index) in config.gain" :key="index + 's'">{{item}}</p>
      </div>
    </card>
    <card>
      <div class="catalog">
        <div v-for="(chapters, index) in config.catalog.chapter" :key="index">
          <span class="chapter">{{chapters}}</span>
          <p v-for="(lesson, index) in config.catalog[chapters]" :key="index">
            <img src="../../static/img/start.svg" width="12"/> <span>{{lesson}}</span>
          </p>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Vue from 'vue'
import Card from '../components/Card'

export default {
  name: 'intro',
  components: {
    Card
  },
  data () {
    return {
      config: {
        classMessage: '本课程结合实例，讲解用Unity 3D进行游戏开发的基本使用方法，意在让大家掌握Unity 3D的基本设计思路和操作方法，当撞我了所有模块的基本知识和设计方法后，就可以独立开发出自己的游戏了。学习游戏开发，从基础开始学习到案例实战，完事开头难，慢慢的进入状态，光剑是要坚持!',
        teacher: {
          name: "Jean_dong",
          avatar: "../../static/img/test1.jpg",
          job: "慕课讲师"
        },
        classNeed: ["1、有基本软件操作常识", "2、建模零基础"],
        gain:["1、建模前分析", "2、建模流程", "3、建模常用工具", "4、样条配合生成器建模"],
        catalog: {
          chapter: ["第一章 课程介绍", "第二章 盒子建模", "第三章 建模", "第四章 课程回复与总结"],
          "第一章 课程介绍": ["1-1 课程介绍"],
          "第二章 盒子建模": ["2-1 盒子建模"],
          "第三章 建模": ["3-1 软件大形", "3-2 软管细分", "3-3 软管螺纹", "3-4 软膏液体", "3-5 软管盖子"],
          "第四章 课程回复与总结": ["4-1 课程总结"]
        }
      }
    }
  }
}
</script>

<style>
  .avatar {
    border-radius: 50%
  }
  .teacher {
    display: flex;
  }
  .teacher .teacher-msg {
    box-sizing: border-box;
    padding: 2px 12px;
    flex: 1;
  }
  .teacher-msg p {
    margin: 2px 0;
  }
  .need-title {
    color: black;
    margin: 20px 0px;
  }
  .mint-tab-container-item {
    overflow: hidden;
    overflow-y: auto;
  }
  .intro {
    padding-bottom: 55px;
  }
  .catalog div {
    position: relative;
    box-sizing: border-box;
    padding-left: 8px;
    padding-bottom: 8px;
  }
  .catalog div::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 3px;
    width: 1px;
    height: 100%;
    background: rgb(230, 230, 230);
    transform: scaleX(0.5)
  }
  .catalog div::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 3px;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: rgb(230, 230, 230);
    border-radius: 50%;
  }
  .catalog div:nth-last-child(1)::before {
    display: none;
  }
  .catalog p{
    padding: 4px 0;
  }
  .catalog p *{
    vertical-align: middle;
  }
</style>
