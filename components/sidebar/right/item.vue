<template>
  <div
    class="reccard static"
    style="
      background-image: url(https://source.unsplash.com/random/200x100/?meal);
    "
  ></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'meal',
    },
  },
 data(){
     return{
     }
 }
}
</script>

<style lang="scss" scoped>
</style>