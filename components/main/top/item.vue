<template>
  <div class="ordercard col vcenter static shadow">
    <div class="row gap5">
      Go&amp;eat
      <div class="count pink">123</div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        counter:{
            type:String,Number,
            default:()=>{}
        },
        title:{
            type:String,
            default:()=>{}

        }
    }
}
</script>

<style lang="scss" scoped>

</style>