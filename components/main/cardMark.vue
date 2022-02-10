<template>
    <div class="star">
        <div class="star__item">
            <icon-mark :color="color"></icon-mark>
        </div>
    </div>
</template>

<script>
    export default {
       props:{
           color:{
               type:String,
               default:()=>'#FCC32D'
           }
       } 
    }
</script>

<style lang="scss" scoped>
.star{
    &__item{
        margin-right: 3px;
    }
}
</style>