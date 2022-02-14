<i18n>
{
  "en": {
    "logo-subtitle": "food in touch",
    "law": "All rights reserved"
  },
  "ru": {
    "logo-subtitle": "на связи с едой",
    "law": "Все права защищены"
  }
}
</i18n>
<template>
  <footer class="footer desktop">
    <div class="footer__inner">
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
      </div>
      <!-- end of footer social -->
       <p class="footer__copyright">Copyright © Meal Hub 2021 {{ $t('law') }}</p>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 10px;
    z-index: 99999;
  }
  &__copyright {
    color: $c-light;
    font-size: 13px;
    line-height: 15px;
    margin: 0;
  }
  &__social {
    display: flex;
    &-item {
      margin-right: 10px;
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
