import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "semantic-ui-css/semantic.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// let graph_pie = new Vue({
//   el: "#app",
//   data: {
//     values: [10, 5],
//     names: ["used", "left"]
//   },
//   methods: {
//     dataFormat: function(a, b) {
//       if (b) return b + "%";
//       return a;
//     }
//   }
// });
