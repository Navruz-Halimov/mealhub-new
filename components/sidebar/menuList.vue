<template>
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
    <Footer />
  </div>
</template>

<script>
export default {
    props:{
        isMenuOpen:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped></style>
