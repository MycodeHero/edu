<template>
  <div class="video-top">
    <template>
      <Header fixed>
        <Button slot="left" icon="back" @click="handleClick"></Button>
      </Header>
    </template>  
    <template v-if="value">
      <img src="../../static/img/test.jpg" alt="" class="blur">
    </template>
    <video
      id="my-player"
      controls
      preload="auto"
      poster="../../static/img/test.jpg"
      data-setup='{}'
      >
      <source :src="resource" type="video/mp4"></source>
    </video>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Button } from 'mint-ui'
Vue.component('Header', Header)
Vue.component('Button', Button)

export default {
  name: 'VideoTop',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    back: {
      type: Boolean,
      default: true
    },
    resource: {
      type: String,
      default: "../../static/video/test.mp4"
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
#my-player {
  width: 100%;
  height: 185px;
}
.video-top {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.video-top img{
  width: 100%;
  height: 100%;
}

.mint-header.is-fixed {
  height: 40px;
  background: rgba(0, 0, 0, 0.2)
}
.blur{
     -webkit-filter: blur(8px);
     -moz-filter: blur(8px);
     -o-filter: blur(8px);
     -ms-filter: blur(8px);
     filter:blur(8); 
     transform: scale(1.2)
  }
  video::-webkit-media-controls-panel {
    position:absolute;
    bottom:0px;
    background: rgba(45, 52,63, 0.5);
    height: 23px;;

  }
  video::-webkit-media-controls-fullscreen-button {
    width: 1px;
    height: 1px;
    background-image:-webkit-image-set(url("../../static/img/all.svg") 1x);
    background-size: 100% 100%;
    padding: 10px;
  }
  video::-webkit-media-controls-play-button {
    background-image: url("../../static/img/open.svg");
    background-size: 100% 100%;
    width: 10px;
    height: 10px;
    padding:0 10px;
  }
  video::-webkit-media-controls-mute-button {
    display: none;
  }
  video::-webkit-media-controls-current-time-display, video::-webkit-media-controls-time-remaining-display{
    color: white;
    font-size:10px;
  }
  video::-internal-media-controls-segmented-track {
    background: white;
  }
  video::-internal-media-controls-download-button, audio::-internal-media-controls-download-button {
    display: none;
  }
  video::-webkit-media-controls-volume-slider {
    display: none;
  }
  video::-internal-media-controls-download-button {
    display:none;
    width:0px;
    height:0px;
    padding: 0px!important;
    margin:0px;
  }
  video::-webkit-media-controls-panel {
      width: calc(100% + 30px);
  }
</style>
