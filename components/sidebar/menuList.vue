<i18n>
{
  "en": {
    "userName": "User name",
    "sale":"Sale",
    "advertising":"Advertising cabinet",
    "offer":"Special offers",
    "favorites":"Favorites",
    "document":"Documentation",
    "reference":"Reference",
    "language":"English",
    "partner":"Be Partner",
    "rate":"Rate",
    "logout":"Logout"
  },
  "ru": {
    "userName": "Имя пользователя",
    "sale":"Скидки",
    "advertising":"Рекламный кабинет",
    "offer":"Спецпредложения",
    "favorites":"Избранное",
    "document":"Документы",
    "reference":"Справка",
    "language":"Русский",
    "partner":"Стать партнером",
    "rate":"Тариф",
    "logout":"Выйти"
  }
}
</i18n>
<template>
  <div class="sidemenu col flex" :class="{ open: isMenuOpen }">
    <div class="pages col flex scroll">
      <div class="profile row static gap10" href="#">
        <div class="userPhoto col static"></div>
        <div class="userInfo col flex gap5">
          <div class="userName row">{{$t('userName')}}</div>
          <div class="userID row">ID: 123456789</div>
        </div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="percent page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('sale')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="ad page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('advertising')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="rate page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('rate')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="tag page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('offer')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="favorite page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('favorites')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="document page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('document')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="info page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('reference')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="locale page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('language')}}</div>
      </div>
      <div class="topage row static vcenter gap5">
        <i class="partner page_icon col vcenter static"></i>
        <div class="pageName col flex vcenter">{{$t('partner')}}</div>
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
