<template>
  <svg
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 17 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.38643 0L10.8233 4.93691L16.2729 5.73344L12.3297 9.57413L13.2603 15L8.38643 12.4369L3.51262 15L4.44322 9.57413L0.5 5.73344L5.94953 4.93691L8.38643 0Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconWidth: {
      type: String,
      default: () => '17',
    },
    iconHeight: {
      type: String,
      default: () => '15',
    },
    color: {
      type: String,
      default: () => '#FCC32D',
    },
  },
}
</script>

<style lang="scss" scoped>
</style>