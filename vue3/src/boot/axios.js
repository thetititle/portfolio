import { boot } from 'quasar/wrappers'
import axios from 'axios'

// 빌드 할 때 testMode는 false로 변경한다.
const testMode = true;
// 지금이 testMode라면 로컬호스트를 보여주고, 그게 아니라면 호스팅을 보여준다.
const api = axios.create({ baseURL:testMode? 'http://localhost:3000' : 'http://thetititle.com'})

// const api = axios.create({ baseURL:'http://localhost:3000'})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }
