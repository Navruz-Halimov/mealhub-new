<template>
  <div ref="wrapper" class="wrapper">
    <div class="wrapper-container">
      <div class="primary_layout">
        <Sidebar class="sidebar__wrapper" />
        <Nuxt />
      </div>
      <!-- /.primary_layout -->
      <Footer />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
 height: 100vh;
&-container{
  height:100%;
  display: flex;
  flex-direction: column;
}
.sidebar__wrapper{
  flex: 0 0 375px;
  
}
}
.primary_layout {
  display: flex;
  align-items: stretch;
  width: 100%;
  height:100%;
}
</style>
