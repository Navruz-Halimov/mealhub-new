<template>
  <div class="menu col flex">
    <div class="nav row static vcenter">
      <div
        v-if="isMenuOpen"
        class="menubtn__close col"
        @click="isMenuOpen = !isMenuOpen"
      ></div>
      <div v-else class="menubtn col" @click="isMenuOpen = !isMenuOpen"></div>
      <div class="logo col hcenter"></div>
      <div class="notify col">
        <div
          class="row hcenter gap10"
          @click="isSearchVisible = !isSearchVisible,$emit('visible', isSearchVisible)"
        >
          <div class="searchbtn"></div>
        </div>
      </div>
    </div>
    <div
      class="search row vcenter shadow"
      :style="isSearchVisible ? 'height:35px' : ''"
    >
      <div class="search_icon col static"></div>
      <input class="col flex" placeholder="Поиск" />
    </div>
    <sidebar-menu-list :is-menu-open="isMenuOpen"></sidebar-menu-list>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      isMenuOpen: false,
      isSearchVisible: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
