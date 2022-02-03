
export const state = () => ({
  access: null,
  refresh: null,
  name:"navruz",
  user:''
});

export const mutations = {
setUser(state,payload){
  state.user=payload
}
};

export const actions = {
getuser(){
  return this.$axios.post('htmlsasd','12312')
}
};