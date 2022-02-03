<template>
  <svg
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 1L10 12M21 1L14 21L10 12M21 1L1 8L10 12"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconWidth: {
      type: String,
      default: () => '24',
    },
    iconHeight: {
      type: String,
      default: () => '24',
    },
    color: {
      type: String,
      default: () => '#e0e0e0',
    },
  },
}
</script>

<style lang="scss" scoped></style>
