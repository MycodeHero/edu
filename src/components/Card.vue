<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style>
.card {
  position: relative;
  box-sizing: border-box;
  padding: 18px;
  text-align: left;
  font-size: 12px;
  color: rgb(138, 136, 136);
}
.card::after {
  position: absolute;
  left: 0px;
  bottom:0px;
  content: "";
  display: "block";
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
  background: gray;
  opacity: 0.5;
}
</style>
