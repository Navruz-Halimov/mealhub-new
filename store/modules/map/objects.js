export const state = () => ({
    gmapMap: null,
    gmapGeocoder: null,
    gmapAutocompleteService: null,
    gmapAutocompleteServiceLoaded: false
  })
  
export  const getters = {
    GMAP_MAP: state => state.gmapMap,
    GMAP_GEOCODER: state => state.gmapGeocoder,
    GMAP_AUTOCOMPLETE_SERVICE: state => state.gmapAutocompleteService,
    GMAP_AUTOCOMPLETE_SERVICE_LOADED: state => state.gmapAutocompleteServiceLoaded
  }
  
 export const mutations = {
    SET_GMAP_MAP: (state, newMapObject) => {
      // console.log('ok')
      state.gmapMap = { ...newMapObject }
    },
    SET_GMAP_GEOCODER: (state, newGeocoderObject) => {
      state.gmapGeocoder = { ...newGeocoderObject }
    },
    SET_GMAP_AUTOCOMPLETE_SERVICE: (state, newAutocompleteServiceObject) => {
      state.gmapAutocompleteService = { ...newAutocompleteServiceObject }
    },
    SET_GMAP_AUTOCOMPLETE_SERVICE_LOADED: (state, boolValue) => {
      state.gmapAutocompleteServiceLoaded = boolValue
    }
  }
  