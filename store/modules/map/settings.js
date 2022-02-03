// Additional settings --------------------------------------
// Styles for GMap view
const mapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5'
        }
      ]
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161'
        }
      ]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5'
        }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#7ed378'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e'
        }
      ]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#6f8bce'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e'
        }
      ]
    }
  ]
  
  // App State --------------------------------------
  const state = () => ({
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
          url: '/icons/consumables/pin-center.svg',
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
      radius: (+localStorage.getItem('gmapRadius') && ((+localStorage.getItem('gmapRadius')) <= 50)) ? (+localStorage.getItem('gmapRadius')) : 1,
      strokeWeight: 2.4,
      strokeColor: '#f3bd4442',
      fillColor: '#F3BD44',
      fillOpacity: 0.34,
      center: {
        lat: 59.9361782,
        lng: 30.3140578
      }
    }
  })
  
  const getters = {
    GMAP_SETTINGS: state => state.gmapSettings,
    GMAP_CENTER_SETTINGS: state => state.gmapCenterSettings,
    GMAP_CIRCLE_OPTIONS: state => state.gmapCircleOptions
  }
  
  const mutations = {
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
  
  const actions = {
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
  
  const moduleStore = {
    state, getters, mutations, actions
  }
  
  export default moduleStore
  