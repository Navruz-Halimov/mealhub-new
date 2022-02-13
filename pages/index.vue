<template>
  <main class="main homepage">
    <div class="main__body">
      <!-- <map-view /> -->
      <div class="container row">
        <div class="menu col flex">
          <div class="nav row static vcenter">
            <div
              v-if="isMenuOpen"
              class="menubtn__close col"
              @click="isMenuOpen = !isMenuOpen"
            ></div>
            <div
              v-else
              class="menubtn col"
              @click="isMenuOpen = !isMenuOpen"
            ></div>
            <div class="logo col hcenter"></div>
            <div class="notify col">
              <div class="row hcenter gap10">
                <div class="searchbtn"></div>
              </div>
            </div>
          </div>
          <div class="search row vcenter shadow">
            <div class="search_icon col static"></div>
            <input class="col flex" placeholder="Поиск" />
          </div>
          <div class="sidemenu col flex" :class="{ open: isMenuOpen }">
            <div class="pages col flex scroll">
              <div class="profile row static gap10" href="#">
                <div class="userPhoto col static"></div>
                <div class="userInfo col flex gap5">
                  <div class="userName row">Имя пользователя</div>
                  <div class="userID row">ID: 123456789</div>
                </div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="percent page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Скидки</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="ad page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Рекламный кабинет</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="rate page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Тариф</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="tag page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Спецпредложения</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="favorite page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Избранное</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="document page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Документы</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="info page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Справка</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="locale page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Русский</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="partner page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Стать партнером</div>
              </div>
              <div class="topage row static vcenter gap5">
                <i class="logout page_icon col vcenter static"></i>
                <div class="pageName col flex vcenter">Выйти</div>
              </div>
            </div>
            <footer class="col static vcenter hcenter">
              <div class="social row vcenter hcenter gap10 wrap">
                <a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-youtube"
                  >
                    <path
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                    ></path>
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    ></polygon></svg></a
                ><a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-facebook"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    ></path></svg></a
                ><a class="instagram" href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    ></path>
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                    ></line></svg></a
                ><a href=""
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-send"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg
                ></a>
              </div>
              <div class="copyright row">MealHub © Все права защищены 2020</div>
            </footer>
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
      isMenuOpen: false,
    }
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
