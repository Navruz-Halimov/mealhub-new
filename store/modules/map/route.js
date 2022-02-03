export const state = () => ({
    gmapRoute: {
      from: '',
      to: '',
      movementType: ''
    },
    gmapRouteDuration: {
      transit: 0,
      driving: 0,
      walking: 0
    }
  })
  
 export const getters = {
    GMAP_ROUTE: state => state.gmapRoute,
    GMAP_ROUTE_DURATION: state => state.gmapRouteDuration
  }
  
 export const mutations = {
    SET_GMAP_ROUTE: (state, objWithNewValue) => {
      const newRoute = {
        ...state.gmapRoute,
        ...objWithNewValue
      }
      state.gmapRoute = newRoute
    },
    SET_GMAP_ROUTE_DURATION: (state, objWithNewValue) => {
      const newDurationObject = {
        ...state.gmapRouteDuration,
        ...objWithNewValue
      }
      state.gmapRouteDuration = newDurationObject
    },
    SET_GMAP_REFRESH_LOCATIONS: (state) => {
      const oldFrom = state.gmapRoute.from
      const oldTo = state.gmapRoute.to
  
      const newObjectRoute = {
        ...state.gmapRoute,
        from: oldTo,
        to: oldFrom
      }
  
      state.gmapRoute = newObjectRoute
    },
    RESET_GMAP_ROUTE_DATA: (state) => {
      state.gmapRoute.from = ''
      state.gmapRoute.to = ''
      state.gmapRouteDuration = {
        transit: '',
        driving: '',
        walking: ''
      }
    }
  }
  