const state = {
    nm: window.localStorage.getItem('nowNm') || '广州',
    id: window.localStorage.getItem('nowId') || 1
}
const mutations = {
    CITY_INFO(state, payLoad) {
        state.nm = payLoad.nm
        state.id = payLoad.id
    }
}
const actions = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
