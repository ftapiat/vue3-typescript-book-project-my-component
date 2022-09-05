/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ThemeInfoInterface": function() { return /* reexport */ models_namespaceObject.ThemeInfoInterface; },
  "ThemeSelectorComponent": function() { return /* reexport */ ThemeSelector_component; }
});

// NAMESPACE OBJECT: ./src/theme-selector/models/index.ts
var models_namespaceObject = {};
__webpack_require__.r(models_namespaceObject);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/theme-selector/models/index.ts

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/theme-selector/ThemeSelector.component.vue?vue&type=template&id=538db7a1&ts=true

const _hoisted_1 = {
  class: "theme-selector"
};
const _hoisted_2 = {
  class: "theme-radio-group"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ThemeRadioComponent = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("ThemeRadioComponent");

  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_2, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(_ctx.themes, (theme, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_ThemeRadioComponent, {
      key: index,
      "theme-info": theme,
      onClicked: _ctx.changeTheme
    }, null, 8, ["theme-info", "onClicked"]);
  }), 128))])]);
}
;// CONCATENATED MODULE: ./src/theme-selector/ThemeSelector.component.vue?vue&type=template&id=538db7a1&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/theme-selector/ThemeRadio.component.vue?vue&type=template&id=9a454134&ts=true

const ThemeRadio_componentvue_type_template_id_9a454134_ts_true_hoisted_1 = {
  class: "material-icons"
};
const ThemeRadio_componentvue_type_template_id_9a454134_ts_true_hoisted_2 = ["value"];
function ThemeRadio_componentvue_type_template_id_9a454134_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("label", {
    role: "radio",
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(_ctx.cssClass)
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", ThemeRadio_componentvue_type_template_id_9a454134_ts_true_hoisted_1, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(_ctx.themeInfo.icon), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("input", {
    type: "radio",
    class: "icon-button",
    name: "theme",
    value: _ctx.themeInfo.selected,
    onClick: _cache[0] || (_cache[0] = //@ts-ignore
    (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, null, 8, ThemeRadio_componentvue_type_template_id_9a454134_ts_true_hoisted_2)], 2);
}
;// CONCATENATED MODULE: ./src/theme-selector/ThemeRadio.component.vue?vue&type=template&id=9a454134&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/theme-selector/ThemeRadio.component.vue?vue&type=script&lang=ts

/* harmony default export */ var ThemeRadio_componentvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "ThemeRadioComponent",
  props: {
    themeInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    cssClass() {
      const {
        themeInfo
      } = this.$props;
      return `theme-radio ${themeInfo.id} ${themeInfo.selected ? 'selected' : ''}`.trim();
    }

  },
  emits: ['clicked'],

  setup(props, {
    emit
  }) {
    const onClick = () => {
      emit('clicked', props.themeInfo.id);
    };

    return {
      onClick
    };
  }

}));
;// CONCATENATED MODULE: ./src/theme-selector/ThemeRadio.component.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/theme-selector/ThemeRadio.component.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ThemeRadio_componentvue_type_script_lang_ts, [['render',ThemeRadio_componentvue_type_template_id_9a454134_ts_true_render]])

/* harmony default export */ var ThemeRadio_component = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./src/theme-selector/store-models/Actions.model.ts


class ActionsModel {
  constructor(store) {
    _defineProperty(this, "store", void 0);

    this.store = store;
  }

  loadThemes(themes) {
    this.store.mutations.loadThemes(themes);
  }

  selectTheme(themeId) {
    if (document.body.className.indexOf('-theme') > 0) {
      document.body.className = document.body.className.replace(/[\w^-]+-theme+/gi, themeId);
    } else {
      document.body.classList.add(themeId);
    }

    localStorage.setItem(LocalStorageKeys.theme, themeId);
    this.store.mutations.selectTheme(themeId);
  }

}
;// CONCATENATED MODULE: ./src/theme-selector/store-models/LocalStorageKeys.ts
var LocalStorageKeys;

(function (LocalStorageKeys) {
  LocalStorageKeys.theme = 'theme';
})(LocalStorageKeys || (LocalStorageKeys = {}));
;// CONCATENATED MODULE: ./src/theme-selector/store-models/Mutations.model.ts

class MutationsModel {
  constructor(state) {
    _defineProperty(this, "state", void 0);

    this.state = state;
  }

  loadThemes(themes) {
    this.state.themes = themes;
  }

  selectTheme(themeId) {
    this.state.themes.forEach(theme => {
      theme.selected = theme.id === themeId;
    });
  }

}
;// CONCATENATED MODULE: ./src/theme-selector/store-models/Store.model.ts


class StoreModel {
  constructor(state) {
    _defineProperty(this, "state", void 0);

    _defineProperty(this, "mutations", void 0);

    _defineProperty(this, "actions", void 0);

    this.state = state;
    this.mutations = new MutationsModel(this.state);
    this.actions = new ActionsModel(this);
  }

}
;// CONCATENATED MODULE: ./src/theme-selector/store-models/index.ts





;// CONCATENATED MODULE: ./src/theme-selector/ThemesStore.ts


const availableThemes = [];
const themesState = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.reactive)({
  themes: availableThemes
});
const Store = new StoreModel(themesState);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/theme-selector/ThemeSelector.component.vue?vue&type=script&lang=ts




/* harmony default export */ var ThemeSelector_componentvue_type_script_lang_ts = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "ThemeSelectorComponent",
  components: {
    ThemeRadioComponent: ThemeRadio_component
  },
  props: {
    availableThemes: {
      type: Array,
      required: true
    }
  },
  computed: {
    themes: () => Store.state.themes
  },
  emits: ['themeClicked', 'themeChanged'],

  setup(props, {
    emit
  }) {
    const changeTheme = themeId => {
      emit('themeClicked', themeId);
      Store.actions.selectTheme(themeId);
      emit('themeChanged', themeId);
    };

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      const {
        availableThemes
      } = props;
      Store.actions.loadThemes(availableThemes);
      const userPreferredThemeId = localStorage.getItem(LocalStorageKeys.theme) || '';

      if (userPreferredThemeId.length > 0) {
        changeTheme(userPreferredThemeId);
      } else if (availableThemes.length > 0) {
        const selected = availableThemes.find(item => item.selected);
        changeTheme(selected ? selected.id : availableThemes[0].id);
      }
    });
    return {
      changeTheme
    };
  }

}));
;// CONCATENATED MODULE: ./src/theme-selector/ThemeSelector.component.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/theme-selector/ThemeSelector.component.vue




;
const ThemeSelector_component_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ThemeSelector_componentvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var ThemeSelector_component = (ThemeSelector_component_exports_);
;// CONCATENATED MODULE: ./src/index.ts



;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
module.exports = __webpack_exports__;
/******/ })()
;