import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)

if (process.env.VUE_APP_BASE_SENTRY === 'on') {
  import('@sentry/vue').then((Sentry) => {
    import('@sentry/tracing').then((tracing) => {
      Sentry.init({
        Vue,
        dsn: 'http://yourdsn',
        integrations: [
          new tracing.BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
          }),
        ],
        tracesSampleRate: 1.0,
        release: '1.0.0',
      })
    })
  })
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
