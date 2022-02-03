<template>
  <div ref="wrapper" class="wrapper">
    <div class="wrapper-container">
      <div class="primary_layout">
        <Sidebar />
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
.primary_layout {
  display: flex;
}
</style>
