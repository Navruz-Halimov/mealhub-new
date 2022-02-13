<template>
  <div class="card">
    <div class="card__image">
      <img src="/images/1.png" alt="" />
    </div>
    <div class="card__info">
      <div class="card__info-name">Мама на Даче</div>
      <div class="card__info-address">
        Санкт-Петербург, Невский проспект, 88, этаж 1
      </div>
      <div class="card__info-mark">
        <main-card-mark></main-card-mark>
        <main-card-mark></main-card-mark>
        <main-card-mark></main-card-mark>
        <main-card-mark></main-card-mark>
        <main-card-mark color="#BDBDBD"></main-card-mark>
        <div class="card__info-mark-rate">4.2</div>
      </div>
      <div class="card__info-additional">
        <div class="card__info-worktime">
          <icon-time></icon-time>
          <span>Открыто до 22:00</span>
        </div>
        <div class="card__info-route">
          <icon-person></icon-person>
          <div class="card__info-route-path">500 м</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/variables';
// .card {
//   border-radius: 10px;
//   overflow: hidden;
//   width: 328px;
//   height: 110px;
//   display: flex;
//   margin-top: 10px;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
//   &__image {
//     img {
//       object-fit: contain;
//       width: 110px;
//       height: 110px;
//     }
//   }
//   &__info {
//     background-color: #fff;
//     padding: 10px 10px 12px 10px;
//     &-name {
//       font-family: $Montserrat-r;
//       font-size: 13px;
//       line-height: 15px;
//       font-weight: 700;
//       display: flex;
//       align-items: center;
//       color: $f-color;
//     }
//     &-address {
//       height: 30px;
//       overflow: hidden;
//       margin-top: 5px;
//       font-family: $Montserrat-r;
//       font-size: 13px;
//       line-height: 15px;
//       color: $f-color;
//     }
//     &-mark {
//       display: flex;
//       margin-top: 5px;
//       &-rate {
//         color: $f-color;
//         font-family: $Montserrat-r;
//         font-weight: 500;
//         font-size: 13px;
//         line-height: 15px;
//         margin-left: 7px;
//       }
//     }
//     &-additional {
//       margin-top: 1px;
//       font-size: 13px;
//       line-height: 15px;
//       display: flex;
//       align-items: center;
//       color: #2b2b2b;
//     }
//     &-worktime {
//       display: flex;
//       align-items: center;
//       margin-right: 7px;
//       span {
//         margin-left: 7px;
//       }
//     }
//     &-route {
//       display: flex;
//       align-items: center;
//       font-size: 13px;
//       line-height: 15px;
//       color: #2b2b2b;
//       &-path{
//         margin-left: 6px;
//       }
//     }
//   }
// }
</style>