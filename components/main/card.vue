<template>
  <div class="restcard row static">
    <div
      class="restimg col static"
      style="
        background-image: url(https://source.unsplash.com/random/200x100/?meal);
      "
    ></div>
    <div class="restinfo col flex gap5">
      <div class="label row static bold">Мама на даче</div>
      <div class="adress row">
        Санкт-Петербург, Невский проспект, 88, этаж 1
      </div>
      <div class="rating row static gap5">
        <div class="row">
          <icon-mark></icon-mark>
          <icon-mark></icon-mark>
          <icon-mark></icon-mark>
          <icon-mark></icon-mark>
          <icon-mark color="grey"></icon-mark>
        </div>
        <div class="row">4.8</div>
        <div class="row">Отзывов 123</div>
      </div>
      <div class="row static vcenter gap5">
        <icon-time></icon-time>
        Открыто
        <icon-person></icon-person>
        500м
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>