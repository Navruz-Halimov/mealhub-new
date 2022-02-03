<i18n>
{
  "en": {
    "logo-subtitle": "food in touch",
    "law": "All rights reserved",
    "support": "Customer Support",
    "partner":"Be partner"
  },
  "ru": {
    "logo-subtitle": "на связи с едой",
    "law": "Все права защищены",
    "support": "Служба поддержки",
    "partner": "Стань партнером "
  }
}
</i18n>
<template>
  <footer class="footer desktop">
    <div class="footer__inner">
      <p class="footer__copyright">Copyright © Meal Hub 2021 {{ $t('law') }}</p>
      <div class="footer__social">
        <a href="#" class="footer__social-item">
          <icon-youtube></icon-youtube>
        </a>
        <a href="#" class="footer__social-item">
          <icon-facebook></icon-facebook>
        </a>
        <a href="#" class="footer__social-item">
          <icon-instagram></icon-instagram>
        </a>
        <a href="#" class="footer__social-item">
          <icon-telegram></icon-telegram>
        </a>
        <button class="footer__bepartner">{{ $t('partner') }}</button>
      </div>
      <!-- end of footer social -->
      <div class="footer__lang">RU <icon-direction-up></icon-direction-up></div>
    </div>
    <!-- /.footer__inner -->
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/variables';
.footer {
  background-color: $f-color;
  &__inner {
    max-width: 1920px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 5px 60px;
    z-index: 99999;
  }
  &__copyright {
    color: $c-light;
    font-size: 13px;
    line-height: 15px;
  }
  &__social {
    display: flex;
    &-item {
      margin-right: 20px;
      display: block;
    }
  }
  &__bepartner {
    background: transparent;
    padding: 5px 10px;
    border: 1px solid $c-error;
    border-radius: 30px;
    cursor: pointer;
    color: $c-error;
  }
  &__lang {
    font-size: 16px;
    line-height: 19px;
    color: $c-light;
  }
}
</style>
