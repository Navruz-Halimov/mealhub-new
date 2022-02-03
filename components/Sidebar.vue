<template>
  <div class="sidebar">
    <div class="sidebar__menu">
      <div class="sidebar__menu-hamburger">
        <img src="/icons/menu_active.svg" alt="hamburger icon" />
      </div>
    </div>
  </div>
  <!-- end of sidebar -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 375px;
  background-color: #f2f2f2;
  z-index: 999;
  padding-top: 44px;
  background-image: url('/icons/bg-pattern.png');
  background-repeat: repeat;
  box-shadow: 5px 0px 10px 0px rgb(0 0 0 / 10%);

  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
