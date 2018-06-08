<template>
  <div class="review">
    <card v-for="(i, index) in [1,3,34]" :key="index">
      <div class="review-title">
        <span class="user-info">
          <img class="avatar" :src="config.user_avatar" width="30">&nbsp;&nbsp;
          <span>{{config.nikename}}</span>
        </span>
        <span class="review-level">
          <span>111111111</span>
        </span>
      </div>
      <p class="review-block">
        {{config.review}}
      </p>
    </card>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: "review",
  components: {
    Card
  },
  data () {
    return {
      config: {
        user_avatar: "../../static/img/admin.jpeg",
        nikename: "code",
        review: "老师，讲的很详细!"
      }
    }
  }
}
</script>

<style>
.review-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info * {
  vertical-align: middle;
}
.avatar {
  border-radius: 50%;
}
.review-block {
  padding: 20px 0 8px 0;
}
</style>