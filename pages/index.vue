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
              <div v-for="i of 15" :key="i" class="restcard row static">
                <div
                  class="restimg col static"
                  style="
                    background-image: url(https://source.unsplash.com/random/200x100/?meal);
                  "
                ></div>
                <div class="restinfo col flex gap5">
                  <div class="label row static bold">Мама на даче</div>
                  <div class="adress row">
                    Санкт-Петербург, Невский проспект, 88, этаж 1
                  </div>
                  <div class="rating row static gap5">
                    <div class="row">
                      <icon-mark></icon-mark>
                      <icon-mark></icon-mark>
                      <icon-mark></icon-mark>
                      <icon-mark></icon-mark>
                      <icon-mark color="grey"></icon-mark>
                    </div>
                    <div class="row">4.8</div>
                    <div class="row">Отзывов 123</div>
                  </div>
                  <div class="row static vcenter gap5">
                    <icon-time></icon-time>
                    Открыто
                    <icon-person></icon-person>
                    500м
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content col flex">
            <MapView />
            <div class="row flex">
              <div class="controls col flex hcenter">
                <div class="orders row scroll vcenter">
                  <div class="ordercard col vcenter static shadow">
                    <div class="row gap5">
                      Go&amp;eat
                      <div class="count pink">123</div>
                    </div>
                  </div>
                  <div class="ordercard col vcenter static shadow">
                    <div class="row gap5">
                      Еда на вынос
                      <div class="count pink">123</div>
                    </div>
                  </div>
                  <div class="ordercard col vcenter static shadow">
                    <div class="row gap5">
                      Доставка
                      <div class="count pink">123</div>
                    </div>
                  </div>
                  <div class="ordercard col vcenter static shadow">
                    <div class="row gap5">
                      Бронь
                      <div class="count pink">123</div>
                    </div>
                  </div>
                  <div class="ordercard col vcenter static shadow">
                    <div class="row gap5">
                      Предзаказ
                      <div class="count pink">123</div>
                    </div>
                  </div>
                  <div class="ordercard col vcenter static shadow">
                    <div class="row gap5">
                      Отзывы
                      <div class="count pink">123</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="recblock col static">
                <div class="reccards scroll gap10 col">
                  <div
           
                    class="reccard static"
                    style="
                      background-image: url(https://source.unsplash.com/random/200x100/?meal);
                    "
                  ></div>
                </div>
              </div>
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
  // layout: 'primary',:
  data() {
    return {
      isSearchVisible:false
    }
  },
  methods:{
    visible(e){
     this.isSearchVisible=e
     return this.isSearchVisible
    }
  }
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
