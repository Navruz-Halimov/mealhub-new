<template>
  <svg
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 7L7 1L1 7"
      :stroke="color"
      stroke-width="2"
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
      default: () => '14',
    },
    iconHeight: {
      type: String,
      default: () => '8',
    },
    color: {
      type: String,
      default: () => '#e0e0e0',
    },
  },
}
</script>

<style lang="scss" scoped></style>
