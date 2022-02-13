<template>
  <div class="sidebar menu col flex">
    <div class="sidebar__menu">
      <div class="sidebar__menu-hamburger">
        <img src="/icons/menu_active.svg" alt="hamburger icon" />
      </div>
      <div class="sidebar__menu-logo">
        <NuxtLink to="#">
          <img src="/icons/logo/dark_logo.svg" alt="site logo" />
        </NuxtLink>
      </div>
      <div class="sidebar__menu-functions">
        <div class="sidebar__menu-notification">
          <img src="/icons/notifications/shape.svg" alt="notification" />
        </div>
        <div class="sidebar__menu-search" @click="isSeachVisible=!isSeachVisible">
          <icon-search></icon-search>
        </div>
      </div>
    </div>
    <!-- end of sidebar__menu -->
    <div v-if="isSeachVisible" class="sidebar__search">
      <basic-input-search v-model="catering" />
    </div>
    <!-- end of sidebar__search -->
    <div class="sidebar__card">
      <main-card v-for="i of 15" :key="i"></main-card>
    </div>
    <!-- /.sidebar__card -->
  </div>
  <!-- end of sidebar -->
</template>

<script>
export default {
  data() {
    return {
      catering: '',
      isSeachVisible:false
    }
  },
}
</script>

<style lang="scss" scoped>
// .sidebar {
//   width: 100%;
//   background-color: #f2f2f2;
//   z-index: 2;
//   overflow: auto;
//   background-image: url('/icons/bg-pattern.png');
//   background-repeat: repeat;
//   box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.1);
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   &__menu {
//     width: 100%;
//     overflow: hidden;
//     padding: 9px 16px;
//     background-color: #fff;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     &-hamburger {
//       cursor: pointer;
//     }
//     &-logo {
//       object-fit: cover;
//       max-width: 59px;
//       max-height: 28px;
//     }
//     &-functions {
//       display: flex;
//       align-items: center;
//     }
//     &-notification {
//       margin-right: 10px;
//     }
//     &-search{
//       cursor: pointer;
//     }
//   }
//   &__search {
//     margin-left: 16px;
//     margin-right: 16px;
//     margin-top: 5px;
//     cursor: pointer;
//   }
//   &__card {
//     margin: 0 auto;
//     max-width: 328px;
//     width: 100%;
//   }
// }
</style>
