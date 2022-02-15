<i18n>
{
  "en": {
    "placeholder": "The search query"
  },
  "ru": {
    "placeholder": "Поиск"
  }
}
</i18n>

<template>
  <label class="search">
    <span class="search-icon">
      <icon-search icon-width="18" icon-height="18" color="#9C9AA8"></icon-search>
    </span>
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      class="search-input"
      :placeholder="$t('placeholder')"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default:''
    },
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .search {
    position: relative;
    width: 100%;
    &-icon {
    position: absolute;
    left: 10px;
    top: 9px;
    width: 20px;
    height: 20px;
    z-index: 111;
    }
  &-input {
  width: 100%;
  display: block;
  padding: 7px 30px;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #9C9AA8;
  background: #FDFDFD;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  outline: none;
  &:focus{
    border: none;
    outline: none;
  }
  }
  }
</style>