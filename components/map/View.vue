<i18n>
{
  "en": {
    "geoerror": "Your location could not be determined",
    "myGeolocation": "Your location"
  },
  "ru": {
    "geoerror": "Невозможно определить местоположение",
    "myGeolocation": "Ваша геолокация"
  }
}
</i18n>

<template>
  <div class="map">
    <GMap
      ref="gMap"
      :language="
        $route.name.search('ru') !== -1 ? 'ru' : GMAP_SETTINGS.language
      "
      :cluster="{ options: { styles: clusterStyle } }"
      :center="GMAP_SETTINGS.center"
      :options="GMAP_SETTINGS.options"
      :zoom="GMAP_SETTINGS.zoom"
      :gesture-handling="GMAP_SETTINGS.gestureHandling"
    >
     <GMapMarker
        :key="0"
        :position="GMAP_CENTER_SETTINGS.position"
        :options="GMAP_CENTER_SETTINGS.options"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <p class="myGeolocation">
            {{ $t('myGeolocation') }}
          </p>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapMarker
        v-for="location in CATERING_LIST"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{ icon: location === currentLocation ?  pins.notSelected:pins.selected  }"
      >
          <GMapInfoWindow :options="{maxWidth: 200}">
      <code>
        lat: {{ location.lat }},
        lng: {{ location.lng }}
      </code>
    </GMapInfoWindow>
      </GMapMarker>
      <GMapCircle ref="gMapCircle" :options="circleOptions" />
    </GMap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentLocation: {},
      CATERING_LIST: [
        {
          lat: 59.93137139206076,
          lng: 30.36052667824596,
        },
        {
          lat: 59.930827986878974,
          lng: 30.357426082622894,
        },
        {
          lat: 59.93189989256389,
          lng: 30.356561229264766,
        },
      ],
      pins: {
        selected: '/icons/rest_point.png',
        notSelected: '/icons/geo_point.png',
      },
   
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
    computed: {
    ...mapGetters([
      // 'SELECTED_CATERING',
      // 'IS_AUTHORIZATION',
      // 'GMAP_ROUTE',
      // 'MAP_CHOISE_OPTION',
      // 'CATERING_LIST',
      'GMAP_SETTINGS',
      'GMAP_CENTER_SETTINGS',
      'GMAP_CIRCLE_OPTIONS'
    ]),
      circleOptions () {
      const a = { ...this.GMAP_CIRCLE_OPTIONS }
      a.radius = a.radius * 1000
      return {
        ...a
      }
    }
  },
  mounted(){
    console.log(this.$store)
    console.log('GMAP_SETTINGS',this.GMAP_SETTINGS)
  },
methods:{

}

}
</script>

<style lang="scss" scoped>
.map {
  // position: relative;
  // background-color: red;
  // width: 100%;
  height: 100%;
  // overflow: visible;

  @media screen and (min-width: 992px) {
    // border-radius: $br-block-desktop;
  }

  &::v-deep .GMap {
    // position: absolute;
    // z-index: 1;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    height: 100%;
    // overflow: visible;

    &__Wrapper {
      height: 100%;
      // overflow: visible;
    }

    &__InfoWindow {
      // display: none;
      // width: 100%;
      // height: 100%;
      // overflow: visible;

      @media screen and (min-width: 992px) {
        // display: flex;
      }
    }
    //   .gm-style-iw {
    //     overflow: visible !important;
    //     outline: none;
    //   }
    //   .gm-style-iw-c {
    //     background-color: transparent;
    //     box-shadow: none;
    //   }
    //   .gm-style-iw-t {
    //     &::after {
    //       display: none;
    //       @media screen and (min-width: 992px) {
    //         display: block;
    //       }
    //     }
    //   }
    //   .gm-style-iw-d {
    //     overflow: visible !important;
    //     background-color: transparent;
    //   }
    //   .gm-ui-hover-effect {
    //     display: none !important;
    //   }
  }
}
</style>