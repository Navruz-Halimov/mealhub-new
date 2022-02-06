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
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.3833 12.8767C7.76953 12.8767 9.04785 12.4285 10.0938 11.6814L14.0283 15.616C14.2109 15.7986 14.4517 15.8899 14.709 15.8899C15.2485 15.8899 15.6304 15.4749 15.6304 14.9436C15.6304 14.6946 15.5474 14.4539 15.3647 14.2795L11.4551 10.3616C12.2769 9.28247 12.7666 7.94604 12.7666 6.49341C12.7666 2.98218 9.89453 0.110107 6.3833 0.110107C2.88037 0.110107 0 2.97388 0 6.49341C0 10.0046 2.87207 12.8767 6.3833 12.8767ZM6.3833 11.4988C3.64404 11.4988 1.37793 9.23267 1.37793 6.49341C1.37793 3.75415 3.64404 1.48804 6.3833 1.48804C9.12256 1.48804 11.3887 3.75415 11.3887 6.49341C11.3887 9.23267 9.12256 11.4988 6.3833 11.4988Z" fill="#9C9AA8"/>
</svg>

    </span>
    <input
      type="search"
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
    &-icon {
      position: absolute;
      top: 50%;
      left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border: {
        width: 1px;
        style: solid;
        // color: $green;
        radius: 50%;
      }
      width: 20px;
      height: 20px;
      // color: $green;
      transform: translateY(-50%);
    }

    svg {
      width: 100%;
      height: 100%;
      // fill: $green;
    }

    &-icon {
      right: 0;
      left: auto;
      width: 4rem;
      /*width: 64px;*/
      height: 100%;
      background: #F3BD44 0% 0% no-repeat padding-box;
      border: 1px solid #F3BD44;
      border-radius: 0px 7px 7px 0px;

      svg {
        width: 50%;
        height: 50%;
        // fill: $c-light;
      }
    }
  }

  .search-input {
   display: block;
  padding: 7px;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #9C9AA8;
  background: #FDFDFD;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &:focus{
    border: none;
    outline: none;
  }
  }

</style>