<template>
<div class="map">
   <GMap
  ref="gMap"
  language="en"
  :cluster="{options: {styles: clusterStyle}}"
  :center="{lat: 41.311081, lng: 69.240562 }"
  :options="{fullscreenControl: false, styles: mapStyle, disableDefaultUI: true}"
  :zoom="14"
>
  <GMapMarker
    :position="{lat: 41.311081, lng: 69.240562 }"
    :options="{icon:  pins.selected}"
  > 
  </GMapMarker>
  <GMapCircle :options="circleOptions"/>
</GMap>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        data() {
  return {
    currentLocation: {},
    circleOptions: {
    radius:  1,
    strokeWeight: 2.4,
    strokeColor: '#f3bd4442',
    fillColor: '#F3BD44',
    fillOpacity: 0.34,
    center: {
      lat: 59.9361782,
      lng: 30.3140578
    }
    },
    locations: [
      {
        lat: 44.933076,
        lng: 15.629058
      },
      {
        lat: 45.815,
        lng: "15.9819"
      },
      {
        lat: "45.12",
        lng: "16.21"
      }
    ],
     pins: {
      selected: "/icons/geo_point.png",
      notSelected: '/consumables/dinner.svg'
    },
    mapStyle: [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": "1.49"
            },
            {
                "lightness": "50"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "-30"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "50"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b9ddeb"
            },
            {
                "visibility": "on"
            }
        ]
    }
    ],
    clusterStyle: [
      {
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }
    ]
  }
},
          computed: {
    ...mapGetters([
      'SELECTED_CATERING',
      'IS_AUTHORIZATION',
      'GMAP_ROUTE',
      'MAP_CHOISE_OPTION',
      'CATERING_LIST',
      'GMAP_SETTINGS',
      'GMAP_CENTER_SETTINGS',
      'GMAP_CIRCLE_OPTIONS'
    ]),
    // circleOptions () {
    //   const a = { ...this.GMAP_CIRCLE_OPTIONS }
    //   a.radius = a.radius * 1000
    //   return {
    //     ...a
    //   }
    // }
  },
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