<template>
  <main class="main homepage">
    <div class="main__body">
      <div class="container row">
        <sidebar-menu @visible="visible"></sidebar-menu>
        <div class="page row flex">
          <div
            class="sidebar col static"
            :style="isSearchVisible ? 'padding-top: 80px' : 'padding-top: 44px'"
          >
            <div class="cards scroll col">
              <main-card></main-card>
            </div>
          </div>
          <div class="content col flex">
            <MapView />
            <div class="row flex">
              <div class="controls col flex hcenter">
                <main-top-list></main-top-list>
              </div>
              <sidebar-right-list></sidebar-right-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- /.wrapper -->
</template>

<script>
export default {
  name: 'MainPage',
  layout: 'primary',
  data() {
    return {
      isSearchVisible: false,
    }
  },
  methods: {
    visible(e) {
      this.isSearchVisible = e
      return this.isSearchVisible
    },
  },
}
</script>
<style scoped lang="scss">
.main {
  // width: 100vw;
  // height: 100%;
  // overflow: hidden;
  // &__body{
  //   height: 100%;
  // }
}
</style>
