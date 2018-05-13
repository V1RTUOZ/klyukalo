<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage">
    </div>

    <md-card-content>
      <h6 class="category text-gray">Человек</h6>
      <h4 class="card-title">Иван Иванов</h4>
      <p class="card-description">
          Люблю кукурузу и котиков. Добряк и алкоголик. Очень похож на Владимира Владимировича.
      </p>
      <md-card-expand-trigger>
        <md-button class="md-icon-button md-just-icon">
          <md-icon>keyboard_arrow_down</md-icon>
        </md-button>
      </md-card-expand-trigger>
    </md-card-content>
    <md-card-expand>
      <md-card-expand-content>
        <md-card-content>
          <slot name="expand"></slot>
        </md-card-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>
</template>
<script>
export default {
  name: 'user-card',
  props: {
    cardUserImage: {
      type: String,
      default: require('@/assets/img/faces/avatar.jpg')
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style>

</style>
