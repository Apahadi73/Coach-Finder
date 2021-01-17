"use strict";

var _interopRequireDefault = require("/Users/amirpahadi/Developer/web/personalProjects/vueProjects/coach-finder/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string.js");

var _interopRequireWildcard2 = _interopRequireDefault(require("/Users/amirpahadi/Developer/web/personalProjects/vueProjects/coach-finder/node_modules/@babel/runtime/helpers/esm/interopRequireWildcard"));

var _vue = require("vue");

var _router = _interopRequireDefault(require("./router.js"));

var _index = _interopRequireDefault(require("./store/index.js"));

var _App = _interopRequireDefault(require("./App.vue"));

var _BaseCard = _interopRequireDefault(require("./components/ui/BaseCard.vue"));

var _BaseButton = _interopRequireDefault(require("./components/ui/BaseButton.vue"));

var _BaseBadge = _interopRequireDefault(require("./components/ui/BaseBadge.vue"));

var _BaseSpinner = _interopRequireDefault(require("./components/ui/BaseSpinner.vue"));

// local imports
// lazy imports BaseDialog component
var BaseDialog = (0, _vue.defineAsyncComponent)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('./components/ui/BaseDialog.vue'));
  });
}); // creates vue app

var app = (0, _vue.createApp)(_App.default); // registers router and vuex store

app.use(_router.default);
app.use(_index.default); // global components

app.component('base-card', _BaseCard.default);
app.component('base-button', _BaseButton.default);
app.component('base-badge', _BaseBadge.default);
app.component('base-spinner', _BaseSpinner.default);
app.component('base-dialog', BaseDialog); // mounts app to the dom div element "app"

app.mount('#app');