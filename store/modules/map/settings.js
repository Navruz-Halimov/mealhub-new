// Additional settings --------------------------------------
// Styles for GMap view
const mapStyle= [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text',
    stylers: [
      {
        weight: '1.49',
      },
      {
        lightness: '50',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        lightness: '-30',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: '-100',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: '50',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#b9ddeb',
      },
      {
        visibility: 'on',
      },
    ],
  },
]
  
  // App State --------------------------------------
 export const state = () => ({
    gmapSettings: {
      language: 'en',
      center: {
        lat: 59.9361782,
        lng: 30.3140578
      },
      options: {
        fullscreenControl: false,
        disableDefaultUI: true,
        styles: [...mapStyle],
        gestureHandling: 'greedy'
      },
      zoom: 14,
      gestureHandling: 'greedy'
    },
    gmapCenterSettings: {
      position: {
        lat: 59.9361782,
        lng: 30.3140578
      },
      options: {
        icon: {
          url: '/icons/pin-center.svg',
          size: {
            height: 42,
            width: 42
          },
          scaledSize: {
            height: 42,
            width: 42
          },
          origin: {
            x: 0,
            y: 0
          }
        }
      }
    },
    gmapCircleOptions: {
      radius:1,
      strokeWeight: 2.4,
      strokeColor: '#e95a8b',
      fillColor: '#e95a8b',
      fillOpacity: 0.34,
      center: {
        lat: 59.9361782,
        lng: 30.3140578
      }
    }
  })
  
 export const getters = {
    GMAP_SETTINGS: state => state.gmapSettings,
    GMAP_CENTER_SETTINGS: state => state.gmapCenterSettings,
    GMAP_CIRCLE_OPTIONS: state => state.gmapCircleOptions
  }
  
 export const mutations = {
    SET_GMAP_SETTINGS: (state, objWithNewValue) => {
      const newSettings = {
        ...state.gmapSettings,
        ...objWithNewValue
      }
      state.gmapSettings = newSettings
    },
    SET_GMAP_CENTER_SETTINGS: (state, objWithNewValue) => {
      const newSettings = {
        ...state.gmapCenterSettings,
        ...objWithNewValue
      }
      state.gmapCenterSettings = newSettings
    },
    SET_GMAP_CIRCLE_OPTIONS: (state, objWithNewValue) => {
      const newCircleOption = {
        ...state.gmapCircleOptions,
        ...objWithNewValue
      }
  
      newCircleOption.radius = ~~newCircleOption.radius || 1
  
      localStorage.setItem('gmapRadius', newCircleOption.radius)
  
      state.gmapCircleOptions = newCircleOption
    }
  }
  
 export const actions = {
    GET_GMAP_CENTER_POSITION ({ commit }, coords) {
      commit('SET_GMAP_SETTINGS', {
        center: {
          lat: coords.lat,
          lng: coords.lng
        }
      })
      commit('SET_GMAP_CENTER_SETTINGS', {
        position: {
          lat: coords.lat,
          lng: coords.lng
        }
      })
      commit('SET_GMAP_CIRCLE_OPTIONS', {
        center: {
          lat: coords.lat,
          lng: coords.lng
        }
      })
      commit('SET_CATERING_FILTER_DATA', {
        lat: coords.lat,
        lng: coords.lng
      })
    }
  }
  