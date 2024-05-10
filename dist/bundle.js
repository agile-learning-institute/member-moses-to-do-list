/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #173f71;
  --secondary-color: #f29b33;
  --default-transition: fill 0.1s ease-in-out, color 0.1s ease-in-out,
    background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out,
    transform 0.1s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

body {
  height: 100dvh;
  line-height: 1.5;
}

header {
  /* padding: 24px; */

  .logo {
    width: 3rem;
    padding-right: 5px;
  }

  .title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rebeccapurple;
    padding-bottom: 10px;

    p {
      font-size: 30px;
      color: var(--primary-color);
      text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);
    }
  }
}

#content {
  /* flex: 1; */
  height: 100dvh;
  display: flex;
}

footer {
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  transition: var(--default-transition);

  a {
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 16px;

    .fa-github {
      font-size: 22px;
      transition: transform 0.3s ease-in-out;
    }

    .fa-github:hover {
      transform: rotate(360deg) scale(1.2);
    }
  }
}

.left-nav {
  box-sizing: border-box;
  background-color: #f0f2f3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 250px;
  padding: 20px;
  font-size: 17px;
}

.main {
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);
  width: 100dvw;
}

.nav-item {
  padding: 0 10px 0 15px;
  display: flex;
}

.nav-icon {
  width: 40px;
}

.all-tasks,
.favorites,
.notes,
.projects {
  align-items: center;
}

.nav-item:hover {
  border-left: 5px solid #3d3d3d;
  background-color: #dbdae1;
  cursor: pointer;
}

.projects {
  justify-content: space-between;
  padding-right: 22px;
}

.notes {
  justify-content: space-between;
  padding-right: 22px;
}

.notes-left-gp,
.projects-left-gp {
  display: flex;
  align-items: center;
}

.add-note-btn {
  color: white;
  background-color: #078a33;
  border-radius: 5px;
  display: flex;
}

.add-note-btn:hover {
  background-color: #85b695;
  color: #078a33;
  cursor: pointer;
}

.projects-title {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.project {
  margin-left: 25px;
  font-size: 14px;
  padding: 0 10px 0 15px;
  display: flex;
  justify-content: space-between;
}

.project:hover {
  font-weight: bolder;
}

.nav-item > .count,
.notes-left-gp > .count,
.projects-left-gp > .count {
  background-color: #265084;
  color: whitesmoke;
  font-size: 11px;
  padding: 3px;
  margin: 5px;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project > .count {
  background-color: #576d88;
  color: whitesmoke;
  font-size: 10px;
  padding: 3px;
  margin: 5px;
  height: 17px;
  width: 17px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* TASKS ################################################################################################*/

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f2f3;
  padding: 5px 15px;
  border-radius: 5px;
  /* display: none; */
}

.task:hover {
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
  transform: scaleZ();
}

.left-group {
  display: flex;
  gap: 15px;
}

.right-group {
  display: flex;
  gap: 50px;
}

.title {
  font-size: 15px;
}

.details {
  font-size: 12px;
  color: #576d88;
}

.date-due {
  color: #da1e28;
}

.priority {
  width: 50px;
  font-size: 15px;
  text-align: center;
  border-radius: 15px;
}

.high {
  background-color: #f8b7bd;
  color: #ff000d;
}

.medium {
  background-color: #f8d6be;
  color: #fc7c20;
}

.low {
  background-color: #b3d6bd;
  color: #24a148;
}

.delete:hover {
  color: #da1e28;
  transform: scale(1.3);
  cursor: pointer;
}

.add-task {
  background-color: #24a148;
  width: 140px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 5px;
  font-size: 17px;
  font-weight: bolder;
  cursor: pointer;
}

.add-task:hover {
  background-color: #187e35;
}

/* ADD TASK FORM ######################################################################*/

#add-task-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* display: none; */
}


input,
select,
option {
  border: 1px solid #b5c0cc;
  padding: 5px 15px;
  border-radius: 5px;
  height: 35px;
  font-weight: bold;
}

input:focus {
  border: 2px solid #078a33;
}

#submit-task,
#submit-note,
#submit-project {
  background-color: #24a148;
  color: white;
  cursor: pointer;
}

#submit-task:hover,
#submit-note:hover,
#submit-project:hover {
  background-color: #187e35;
}

.add-task-form-label, 
.add-note-form-label, 
.add-project-form-label {
  font-weight: bolder;
  font-size: 25px;
}

label {
  font-size: 15px;
  padding: 0 10px;
}

#date-due {
  margin-left: 20px;
}

.priority-fm {
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="radio"] {
  /* This hides the radio buttons */
  width: 1px;
}

.priority-label {
  display: inline-block;
  padding: 0.2rem 1rem;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
}

.priority-label:hover {
  color: white;
}

.low-fm {
  border: 1px solid green;
  color: green;
}

.low-fm:hover {
  background-color: green;
}

.low-fm-active {
  background-color: green;
  color: white;
}

.medium-fm {
  border: 1px solid orange;
  color: orange;
}

.medium-fm:hover {
  background-color: orange;
}

.medium-fm-active {
  background-color: orange;
  color: white;
}

.high-fm {
  border: 1px solid red;
  color: red;
}

.high-fm:hover {
  background-color: red;
}

.high-fm-active {
  background-color: red;
  color: white;
}

/* ADD NOTES FORM ########################################################################*/

#add-note-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* display: none; */
}

textarea {
  border: 1px solid #b5c0cc;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
}

textarea:focus {
  border: 2px solid #078a33;
}

/* ADD PROJECT FORM #################################################################################*/

#add-project-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* display: none; */
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-color: #173f71;\n  --secondary-color: #f29b33;\n  --default-transition: fill 0.1s ease-in-out, color 0.1s ease-in-out,\n    background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out,\n    transform 0.1s ease-in-out;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  border: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100dvh;\n  line-height: 1.5;\n}\n\nheader {\n  /* padding: 24px; */\n\n  .logo {\n    width: 3rem;\n    padding-right: 5px;\n  }\n\n  .title {\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid rebeccapurple;\n    padding-bottom: 10px;\n\n    p {\n      font-size: 30px;\n      color: var(--primary-color);\n      text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);\n    }\n  }\n}\n\n#content {\n  /* flex: 1; */\n  height: 100dvh;\n  display: flex;\n}\n\nfooter {\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: var(--primary-color);\n  transition: var(--default-transition);\n\n  a {\n    color: var(--secondary-color);\n    text-decoration: none;\n    font-size: 16px;\n\n    .fa-github {\n      font-size: 22px;\n      transition: transform 0.3s ease-in-out;\n    }\n\n    .fa-github:hover {\n      transform: rotate(360deg) scale(1.2);\n    }\n  }\n}\n\n.left-nav {\n  box-sizing: border-box;\n  background-color: #f0f2f3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 250px;\n  padding: 20px;\n  font-size: 17px;\n}\n\n.main {\n  margin: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);\n  width: 100dvw;\n}\n\n.nav-item {\n  padding: 0 10px 0 15px;\n  display: flex;\n}\n\n.nav-icon {\n  width: 40px;\n}\n\n.all-tasks,\n.favorites,\n.notes,\n.projects {\n  align-items: center;\n}\n\n.nav-item:hover {\n  border-left: 5px solid #3d3d3d;\n  background-color: #dbdae1;\n  cursor: pointer;\n}\n\n.projects {\n  justify-content: space-between;\n  padding-right: 22px;\n}\n\n.notes {\n  justify-content: space-between;\n  padding-right: 22px;\n}\n\n.notes-left-gp,\n.projects-left-gp {\n  display: flex;\n  align-items: center;\n}\n\n.add-note-btn {\n  color: white;\n  background-color: #078a33;\n  border-radius: 5px;\n  display: flex;\n}\n\n.add-note-btn:hover {\n  background-color: #85b695;\n  color: #078a33;\n  cursor: pointer;\n}\n\n.projects-title {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.project {\n  margin-left: 25px;\n  font-size: 14px;\n  padding: 0 10px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project:hover {\n  font-weight: bolder;\n}\n\n.nav-item > .count,\n.notes-left-gp > .count,\n.projects-left-gp > .count {\n  background-color: #265084;\n  color: whitesmoke;\n  font-size: 11px;\n  padding: 3px;\n  margin: 5px;\n  height: 20px;\n  width: 20px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project > .count {\n  background-color: #576d88;\n  color: whitesmoke;\n  font-size: 10px;\n  padding: 3px;\n  margin: 5px;\n  height: 17px;\n  width: 17px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* TASKS ################################################################################################*/\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #f0f2f3;\n  padding: 5px 15px;\n  border-radius: 5px;\n  /* display: none; */\n}\n\n.task:hover {\n  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);\n  transform: scaleZ();\n}\n\n.left-group {\n  display: flex;\n  gap: 15px;\n}\n\n.right-group {\n  display: flex;\n  gap: 50px;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.details {\n  font-size: 12px;\n  color: #576d88;\n}\n\n.date-due {\n  color: #da1e28;\n}\n\n.priority {\n  width: 50px;\n  font-size: 15px;\n  text-align: center;\n  border-radius: 15px;\n}\n\n.high {\n  background-color: #f8b7bd;\n  color: #ff000d;\n}\n\n.medium {\n  background-color: #f8d6be;\n  color: #fc7c20;\n}\n\n.low {\n  background-color: #b3d6bd;\n  color: #24a148;\n}\n\n.delete:hover {\n  color: #da1e28;\n  transform: scale(1.3);\n  cursor: pointer;\n}\n\n.add-task {\n  background-color: #24a148;\n  width: 140px;\n  height: 40px;\n  margin-left: 10px;\n  border-radius: 5px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 5px 5px;\n  font-size: 17px;\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n.add-task:hover {\n  background-color: #187e35;\n}\n\n/* ADD TASK FORM ######################################################################*/\n\n#add-task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  /* display: none; */\n}\n\n\ninput,\nselect,\noption {\n  border: 1px solid #b5c0cc;\n  padding: 5px 15px;\n  border-radius: 5px;\n  height: 35px;\n  font-weight: bold;\n}\n\ninput:focus {\n  border: 2px solid #078a33;\n}\n\n#submit-task,\n#submit-note,\n#submit-project {\n  background-color: #24a148;\n  color: white;\n  cursor: pointer;\n}\n\n#submit-task:hover,\n#submit-note:hover,\n#submit-project:hover {\n  background-color: #187e35;\n}\n\n.add-task-form-label, \n.add-note-form-label, \n.add-project-form-label {\n  font-weight: bolder;\n  font-size: 25px;\n}\n\nlabel {\n  font-size: 15px;\n  padding: 0 10px;\n}\n\n#date-due {\n  margin-left: 20px;\n}\n\n.priority-fm {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\ninput[type=\"radio\"] {\n  /* This hides the radio buttons */\n  width: 1px;\n}\n\n.priority-label {\n  display: inline-block;\n  padding: 0.2rem 1rem;\n  border-radius: 3px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.priority-label:hover {\n  color: white;\n}\n\n.low-fm {\n  border: 1px solid green;\n  color: green;\n}\n\n.low-fm:hover {\n  background-color: green;\n}\n\n.low-fm-active {\n  background-color: green;\n  color: white;\n}\n\n.medium-fm {\n  border: 1px solid orange;\n  color: orange;\n}\n\n.medium-fm:hover {\n  background-color: orange;\n}\n\n.medium-fm-active {\n  background-color: orange;\n  color: white;\n}\n\n.high-fm {\n  border: 1px solid red;\n  color: red;\n}\n\n.high-fm:hover {\n  background-color: red;\n}\n\n.high-fm-active {\n  background-color: red;\n  color: white;\n}\n\n/* ADD NOTES FORM ########################################################################*/\n\n#add-note-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  /* display: none; */\n}\n\ntextarea {\n  border: 1px solid #b5c0cc;\n  padding: 15px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\ntextarea:focus {\n  border: 2px solid #078a33;\n}\n\n/* ADD PROJECT FORM #################################################################################*/\n\n#add-project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  /* display: none; */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/handleForms.js":
/*!****************************!*\
  !*** ./src/handleForms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleTaskSubmit)
/* harmony export */ });
function handleTaskSubmit(formData) {

    // const project = document.querySelector(set-project)
    // const formData = new FormData(this);
    console.table(formData);
    console.log("handled");

}


/***/ }),

/***/ "./src/loadForms.js":
/*!**************************!*\
  !*** ./src/loadForms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNoteForm: () => (/* binding */ addNoteForm),
/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),
/* harmony export */   "default": () => (/* binding */ createTaskForm)
/* harmony export */ });
/* harmony import */ var _handleForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleForms */ "./src/handleForms.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");
// CREATE TASK FORM 




function createTaskForm() {

    document.querySelector('.main').innerHTML = '';

    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('id', 'add-task-form');
    addTaskForm.setAttribute('action', '#');

    const label = document.createElement('label');
    label.classList.add('add-task-form-label');
    label.setAttribute('for', 'add-task-form');
    label.textContent = 'Add Task';

    const select = document.createElement('select');
    select.setAttribute('id', 'set-project');
    select.setAttribute('name', 'set-project');

    // dynamically generate project options from projects list
    let projectOptions = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getAllProjectTitles)();

    projectOptions.forEach((option) => {

        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', option.toLowerCase().split(' ').join('-'));
        optionElement.textContent = option;

        select.appendChild(optionElement);

    });


    //

    const titleInput = document.createElement('input');
    titleInput.classList.add('task-title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'task-title');
    titleInput.setAttribute('placeholder', 'Task Title');
    titleInput.required = true;

    const detailsInput = document.createElement('input');
    detailsInput.classList.add("task-details");
    detailsInput.setAttribute('type', 'text');
    detailsInput.setAttribute('name', 'task-details');
    detailsInput.setAttribute('placeholder', 'Optional Details of task');

    const dateDueLabel = document.createElement('label');
    dateDueLabel.setAttribute('for', 'date-due');

    const dateDueInput = document.createElement('input');
    dateDueInput.setAttribute('type', 'date');
    dateDueInput.setAttribute('name', 'date-due');
    dateDueInput.setAttribute('id', 'date-due');
    dateDueInput.required = true;

    dateDueLabel.textContent = 'Set Task Due Date: ';
    dateDueLabel.appendChild(dateDueInput);
    
    //priority label
    const priorityLabel = document.createElement('label');
    priorityLabel.classList.add('priority-fm');
    priorityLabel.textContent = 'Priority:';
    //
    const lowInput = document.createElement('input');
    lowInput.setAttribute('type', 'radio');
    lowInput.setAttribute('name', 'priority');
    lowInput.setAttribute('id', 'low');
    lowInput.setAttribute('value', 'low');
    lowInput.required = true;

    const lowLabel = document.createElement('label');
    lowLabel.classList.add('priority-label', 'low-fm');
    lowLabel.setAttribute('for', 'low');
    lowLabel.textContent = 'Low';
    //
    const mediumInput = document.createElement('input');
    mediumInput.setAttribute('type', 'radio');
    mediumInput.setAttribute('name', 'priority');
    mediumInput.setAttribute('id', 'medium');
    mediumInput.setAttribute('value', 'medium');
    mediumInput.required = true;

    const mediumLabel = document.createElement('label');
    mediumLabel.classList.add('priority-label', 'medium-fm');
    mediumLabel.setAttribute('for', 'medium');
    mediumLabel.textContent = 'Medium';
    //
    const highInput = document.createElement('input');
    highInput.setAttribute('type', 'radio');
    highInput.setAttribute('name', 'priority');
    highInput.setAttribute('id', 'high');
    highInput.setAttribute('value', 'high');
    highInput.required = true;

    const highLabel = document.createElement('label');
    highLabel.classList.add('priority-label', 'high-fm');
    highLabel.setAttribute('for', 'high');
    highLabel.textContent = 'High';

    priorityLabel.appendChild(lowInput);
    priorityLabel.appendChild(lowLabel);
    priorityLabel.appendChild(mediumInput);
    priorityLabel.appendChild(mediumLabel);
    priorityLabel.appendChild(highInput);
    priorityLabel.appendChild(highLabel);

    //submit button

    const submitTaskBtn = document.createElement('input');
    submitTaskBtn.setAttribute('type', 'submit');
    submitTaskBtn.setAttribute('value', 'submit');
    submitTaskBtn.setAttribute('id', 'submit-task');
    submitTaskBtn.addEventListener('submit', function(event) {

        console.log("1");

        const formData = new FormData(addTaskForm);

        (0,_handleForms__WEBPACK_IMPORTED_MODULE_0__["default"])(formData);

        console.log("2");

        event.preventDefault();

        console.log("3");

        addTaskForm.reset();

        console.log("4");

        
    }); 

    // append elements to form
    addTaskForm.appendChild(label);
    addTaskForm.appendChild(select);
    addTaskForm.appendChild(titleInput);
    addTaskForm.appendChild(detailsInput);
    addTaskForm.appendChild(dateDueLabel);
    addTaskForm.appendChild(priorityLabel);
    addTaskForm.appendChild(submitTaskBtn);

    document.querySelector('.main').appendChild(addTaskForm);
    
}

// CREATE NOTE FORM 

function addNoteForm() {

    document.querySelector('.main').innerHTML = '';

    const addNoteForm = document.createElement('form');
    addNoteForm.setAttribute('id', 'add-note-form');
    addNoteForm.setAttribute('action', '#');

    const label = document.createElement('label');
    label.classList.add('add-note-form-label');
    label.setAttribute('for', 'add-note-form');
    label.textContent = 'Add Note';

    const titleInput = document.createElement('input');
    titleInput.classList.add('note-title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'note-title');
    titleInput.setAttribute('placeholder', 'Note Title');
    titleInput.required;

    const detailInput = document.createElement('textarea');
    detailInput.setAttribute('name', 'note-details');
    detailInput.setAttribute('id', 'note-details');
    detailInput.setAttribute('cols', '30');
    detailInput.setAttribute('rows', '10');
    detailInput.setAttribute('placeholder', 'Note Details');
    detailInput.required;

    const submitNoteBtn = document.createElement('input');
    submitNoteBtn.setAttribute('type', 'button');
    submitNoteBtn.setAttribute('value', 'submit');
    submitNoteBtn.setAttribute('id', 'submit-note');

    //
    addNoteForm.appendChild(label);
    addNoteForm.appendChild(titleInput);
    addNoteForm.appendChild(detailInput);
    addNoteForm.appendChild(submitNoteBtn);

    //
    document.querySelector('.main').appendChild(addNoteForm);

};

// CREATE PROJECT FORM 

function addProjectForm() {

    document.querySelector('.main').innerHTML = '';

    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('id', 'add-project-form');
    addProjectForm.setAttribute('action', '#');

    const label = document.createElement('label');
    label.classList.add('add-project-form-label');
    label.setAttribute('for', 'add-project-form');
    label.textContent = 'Create New Project';

    const titleInput = document.createElement('input');
    titleInput.classList.add('project-title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'project-title');
    titleInput.setAttribute('placeholder', 'Project Title');
    titleInput.required;

    const submitProjectBtn = document.createElement('input');
    submitProjectBtn.setAttribute('type', 'button');
    submitProjectBtn.setAttribute('value', 'submit');
    submitProjectBtn.setAttribute('id', 'submit-project');

    //
    addProjectForm.appendChild(label);
    addProjectForm.appendChild(titleInput);
    addProjectForm.appendChild(submitProjectBtn);


    //
    document.querySelector('.main').appendChild(addProjectForm);

};

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadTasks */ "./src/loadTasks.js");
/* harmony import */ var _loadForms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadForms */ "./src/loadForms.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");




function loadHome() {

    const container = document.querySelector('#container');

    renderLeftNav();
    renderMain();
    renderFooter();
    (0,_loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadAllTasks)();

};

function renderLeftNav() {

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    container.appendChild(content);

    const leftNav = document.createElement('div');
    leftNav.classList.add('left-nav', 'open');

    renderHeader();
    renderNavItems();


    function renderHeader() {

        const logoUrl = './images/icon.png';
    
        const header = document.createElement('header');
    
        const headerTitle = document.createElement('div');
        headerTitle.classList.add('title');
    
        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.setAttribute('alt', 'logo');
        logo.setAttribute('src', logoUrl);
    
        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task');
        addTaskBtn.setAttribute('type', 'button');
        addTaskBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add task`;
        addTaskBtn.addEventListener('click', _loadForms__WEBPACK_IMPORTED_MODULE_1__["default"]);

        headerTitle.appendChild(logo);
        headerTitle.appendChild(addTaskBtn);
    
        header.appendChild(headerTitle);
    
        leftNav.appendChild(header);

    };


    function renderNavItems() {

        // ALL TASKS
        const allTasksCont = document.createElement('div');
        allTasksCont.classList.add('all-tasks', 'nav-item');
        allTasksCont.addEventListener('click', _loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadAllTasks);

        const allTasksIcon = document.createElement('i');
        allTasksIcon.classList.add('fa-solid', 'fa-list-check', 'nav-icon');

        const allTasksTitle = document.createElement('div');
        allTasksTitle.classList.add('item');
        allTasksTitle.textContent = 'All Tasks';

        const allTasksCount = document.createElement('span');
        allTasksCount.classList.add('count');
        allTasksCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getAllTasksCount)();

        allTasksCont.appendChild(allTasksIcon);
        allTasksCont.appendChild(allTasksTitle);
        allTasksCont.appendChild(allTasksCount);

        // FAVORITES
        const favoritesCont = document.createElement('div');
        favoritesCont.classList.add('favorites', 'nav-item');
        favoritesCont.addEventListener('click', _loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadFavoriteTasks);

        const favoritesIcon = document.createElement('i');
        favoritesIcon.classList.add('fa-solid', 'fa-star', 'nav-icon');

        const favoritesTitle = document.createElement('div');
        favoritesTitle.classList.add('item');
        favoritesTitle.textContent = 'Favorites';

        const favoritesCount = document.createElement('span');
        favoritesCount.classList.add('count');
        favoritesCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getFavoriteTasksCount)();

        favoritesCont.appendChild(favoritesIcon);
        favoritesCont.appendChild(favoritesTitle);
        favoritesCont.appendChild(favoritesCount);


        // PROJECTS
        const projectsCont = document.createElement('div');
        projectsCont.classList.add('projects', 'nav-item');

        const projectsLeftGp = document.createElement('div');
        projectsLeftGp.classList.add('projects-left-gp');

        const projectsIcon = document.createElement('i');
        projectsIcon.classList.add('fa-solid', 'fa-layer-group', 'nav-icon');

        const projectsTitle = document.createElement('div');
        projectsTitle.classList.add('item');
        projectsTitle.textContent = 'Projects';

        const projectsCount = document.createElement('span');
        projectsCount.classList.add('count');
        projectsCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getAllProjectsCount)();

        projectsLeftGp.appendChild(projectsIcon);
        projectsLeftGp.appendChild(projectsTitle);
        projectsLeftGp.appendChild(projectsCount);

        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-project-btn');
        addProjectBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 add-note-btn"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`;
        addProjectBtn.addEventListener('click', _loadForms__WEBPACK_IMPORTED_MODULE_1__.addProjectForm);

        projectsCont.appendChild(projectsLeftGp);
        projectsCont.appendChild(addProjectBtn);


        // PROJECTS LIST
        const projectsListCont = document.createElement('div');
        projectsListCont.classList.add('projects-title', 'nav-item');

        // load project list elements dynamically from projects list /////////
        let projectsList = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getAllProjectTitles)();

        projectsList.forEach((projectTitle) => {

            const projectEle = document.createElement('div');
            projectEle.classList.add('project');
            projectEle.textContent = projectTitle;
            projectEle.addEventListener('click', function() {(0,_loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadProjectTasks)(projectTitle)}); 
    
            const projectEleCount = document.createElement('span');
            projectEleCount.classList.add('count');
            projectEleCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getProjectTaskCount)(projectTitle); //
    
            projectEle.appendChild(projectEleCount);

            projectsListCont.appendChild(projectEle);

        });


        // NOTES
        const notesCont = document.createElement('div');
        notesCont.classList.add('notes', 'nav-item');

        const notesLeftGp = document.createElement('div');
        notesLeftGp.classList.add('notes-left-gp');

        const notesIcon = document.createElement('i');
        notesIcon.classList.add('fa-solid', 'fa-note-sticky', 'nav-icon');

        const notesTitle = document.createElement('div');
        notesTitle.classList.add('item');
        notesTitle.textContent = 'Notes';

        const notesCount = document.createElement('span');
        notesCount.classList.add('count');
        notesCount.textContent = '';

        notesLeftGp.appendChild(notesIcon);
        notesLeftGp.appendChild(notesTitle);
        notesLeftGp.appendChild(notesCount);

        const addNoteBtn = document.createElement('button');
        addNoteBtn.classList.add('add-note-btn');
        addNoteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 add-note-btn"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`;
        addNoteBtn.addEventListener('click', _loadForms__WEBPACK_IMPORTED_MODULE_1__.addNoteForm);

        notesCont.appendChild(notesLeftGp);
        notesCont.appendChild(addNoteBtn);

        // ATTACH NAV ITEMS TO LEFT NAV

        leftNav.appendChild(allTasksCont);
        leftNav.appendChild(favoritesCont);
        leftNav.appendChild(projectsCont);
        leftNav.appendChild(projectsListCont);
        leftNav.appendChild(notesCont);
    };


    content.appendChild(leftNav);
};


function renderMain() {

    const main = document.createElement('div');
    main.classList.add('main');

    content.appendChild(main);

    // loadTask(main);
    
    // document.querySelector('#content').appendChild(main);

};


function renderFooter() {

    const user = 'WodPachua';
    const url = 'https://github.com/WodPachua/';

    const footer = document.createElement('footer');

    const githubUser = document.createElement('a');
    githubUser.textContent = user;
    githubUser.setAttribute('href', url);

    const githubLink = document.createElement('a');
    githubLink.setAttribute('href', url);
    githubLink.setAttribute('target', '_blank');
    githubLink.classList.add('github-link');

    const githubIcon = document.createElement('span');
    githubIcon.classList.add('fab','fa-github');

    githubLink.appendChild(githubIcon);
    footer.appendChild(githubUser);
    footer.appendChild(githubLink);

    container.appendChild(footer);
  };

/***/ }),

/***/ "./src/loadTasks.js":
/*!**************************!*\
  !*** ./src/loadTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAllTasks: () => (/* binding */ loadAllTasks),
/* harmony export */   loadFavoriteTasks: () => (/* binding */ loadFavoriteTasks),
/* harmony export */   loadProjectTasks: () => (/* binding */ loadProjectTasks)
/* harmony export */ });
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");


function loadAllTasks() {

    document.querySelector('.main').innerHTML = '';

    const allTasks = (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__["default"])();

    allTasks.map((task) => {

        loadTask(task.title, task.details,task.dateDue, task.priority);

    });

};

function loadFavoriteTasks() {

    document.querySelector('.main').innerHTML = '';

    const favoriteTasks = (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.getFavoriteTasks)();

    favoriteTasks.map((task) => {

        loadTask(task.title, task.details,task.dateDue, task.priority);

    });

}

// refactor to load project tasks dynamically ////////////////////////////////////////////############
function loadProjectTasks(projectTitle) {

    document.querySelector('.main').innerHTML = '';

    const projectTasks = (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.getProjectTasks)(projectTitle);

    projectTasks.map((task) => {

        loadTask(task.title, task.details,task.dateDue, task.priority);

    });

}

function loadTask(title, detail, dateDue, priority) {

    const taskCont = document.createElement('div');
    taskCont.classList.add('task');

    // left group
    const taskLeftGp = document.createElement('div');
    taskLeftGp.classList.add('left-group');

    const taskStatus = document.createElement('div');
    taskStatus.classList.add('status');

    const statusInput = document.createElement('input');
    statusInput.setAttribute('type', 'checkbox');
    statusInput.setAttribute('name', 'status');
    statusInput.setAttribute('id', 'status');

    taskStatus.appendChild(statusInput);

    const taskDetailsCont = document.createElement('div');
    taskDetailsCont.classList.add('task-details');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('title');
    taskTitle.textContent = title;

    const taskDetail = document.createElement('div');
    taskDetail.classList.add('details');
    taskDetail.textContent = detail;

    taskDetailsCont.appendChild(taskTitle);
    taskDetailsCont.appendChild(taskDetail);

    taskLeftGp.appendChild(taskStatus);
    taskLeftGp.appendChild(taskDetailsCont);
    

    // right group 
    const taskRightGp = document.createElement('div');
    taskRightGp.classList.add('right-group');

    const taskDueDate = document.createElement('div');
    taskDueDate.classList.add('date-due');
    taskDueDate.textContent = dateDue;

    const taskPriority = document.createElement('div');
    taskPriority.classList.add('priority', `${priority.toLowerCase()}`);
    taskPriority.textContent = priority === 'Medium'? 'Med' : priority;

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('delete');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash');

    deleteTaskBtn.appendChild(deleteIcon);

    taskRightGp.appendChild(taskDueDate);
    taskRightGp.appendChild(taskPriority);
    taskRightGp.appendChild(deleteTaskBtn);
    //

    taskCont.appendChild(taskLeftGp);
    taskCont.appendChild(taskRightGp);

    document.querySelector('.main').appendChild(taskCont);

}

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddProject: () => (/* binding */ createAddProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   "default": () => (/* binding */ getAllTasks),
/* harmony export */   getAllProjectTitles: () => (/* binding */ getAllProjectTitles),
/* harmony export */   getAllProjectsCount: () => (/* binding */ getAllProjectsCount),
/* harmony export */   getAllTasksCount: () => (/* binding */ getAllTasksCount),
/* harmony export */   getFavoriteTasks: () => (/* binding */ getFavoriteTasks),
/* harmony export */   getFavoriteTasksCount: () => (/* binding */ getFavoriteTasksCount),
/* harmony export */   getProjectTaskCount: () => (/* binding */ getProjectTaskCount),
/* harmony export */   getProjectTasks: () => (/* binding */ getProjectTasks),
/* harmony export */   saveTaskToAllProjects: () => (/* binding */ saveTaskToAllProjects)
/* harmony export */ });
const allProjects = [
    {
        title: 'Default',
        tasks: [
            {
                title: 'Learn Spring',
                details: 'Complete a project with Spring Framework',
                priority: 'Medium',
                dateDue: '25-08-2024',
                favorite: false,
                status: true,
            },
            {
                title: 'Hibernate',
                details: 'Do some project using Hibernate',
                priority: 'High',
                dateDue: '25-08-2024',
                favorite: true,
                status: true,
            },
            {
                title: 'Learn React',
                details: 'Understand props, state, lifecycle, hooks',
                priority: 'Low',
                dateDue: '25-08-2024',
                favorite: false,
                status: true,
            },
        ]
    },
    {
        title: 'Code To Learn',
        tasks: [
            {
                title: 'Python',
                details: 'Research about python and concepts',
                priority: 'Medium',
                dateDue: '25-08-2024',
                favorite: true,
                status: true,
            },
            {
                title: 'Hibernate',
                details: 'Do some project using Hibernate',
                priority: 'High',
                dateDue: '25-08-2024',
                favorite: true,
                status: true,
            }
        ]
    },
    {
        title: 'Platforms',
        tasks: [
            {
                title: 'Python',
                details: 'Research about python and concepts',
                priority: 'Medium',
                dateDue: '25-08-2024',
                favorite: false,
                status: true,
            },
            {
                title: 'React',
                details: 'Good topic to research',
                priority: 'Low',
                dateDue: '25-08-2024',
                favorite: true,
                status: true,
            }
        ]
    },
    {
        title: 'New Test',
        tasks: []
    }
];


// Tasks factory function
function createTask(title, details, priority, dateDue, favorite, status=true) {

    return {
        title,
        details,
        priority,
        dateDue,
        favorite,
        status,
        status
    };

};

// Creates NEW Project and adds to allProjects
function createAddProject(title) {

    let newProject = {title: title, tasks: []};

    allProjects.push(newProject);

};

// adds created task to Project
function saveTaskToAllProjects(newTask, project) {

    let indexOfProject = getAllProjectTitles().indexOf(project);

    allProjects[indexOfProject].tasks.push(newTask);

};

// return ALL tasks
function getAllTasks() {

    let allTasks = [];

    allProjects.forEach((project) => {
        project.tasks.forEach((task) => {
            allTasks.push(task);
        });
    });

    return allTasks;

};

// return favorite tasks
function getFavoriteTasks() {

    return getAllTasks().filter(task => task.favorite === true);

};

// return ALL tasks COUNT ########
function getAllTasksCount() {

    return getAllTasks().length;

}

// return favorite tasks COUNT #######
function getFavoriteTasksCount() {

    return getFavoriteTasks().length;

}

// return ALL Projects List
function getAllProjectTitles() {

    let allProjectsTitles = [];

    allProjects.forEach((project) => {
        allProjectsTitles.push(project.title);
    });

    return allProjectsTitles;

};

// return ALL PROJECTS COUNT #######
function getAllProjectsCount() {

    return getAllProjectTitles().length;

}

// return dynamically project Tasks /////////////////////////////////////////////////////
function getProjectTasks(projectTitle) {

    let defaultProjectTasks = allProjects.filter(project => project.title === projectTitle);

    return defaultProjectTasks[0].tasks;

}
// return dynamically projects task COUNT #######
function getProjectTaskCount(projectTitle) {

    return getProjectTasks(projectTitle).length;

}



// ##########################################################################################################

function addTaskToList(task) {

    
}

function removeTaskFromList(task) {

}

function toggleTaskFavorite(task) {

}

function toggleTaskStatus(task) {

}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadTasks */ "./src/loadTasks.js");




(0,_loadHome__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxPQUFPLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLFlBQVksS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8s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QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ087O0FBRVA7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7VUMxTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1k7QUFDUzs7QUFFM0MscURBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9zcmMvaGFuZGxlRm9ybXMuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9zcmMvbG9hZEZvcm1zLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vc3JjL2xvYWRUYXNrcy5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL3NyYy90YXNrTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMxNzNmNzE7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjI5YjMzO1xuICAtLWRlZmF1bHQtdHJhbnNpdGlvbjogZmlsbCAwLjFzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjFzIGVhc2UtaW4tb3V0LFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjFzIGVhc2UtaW4tb3V0LFxuICAgIHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwZHZoO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5oZWFkZXIge1xuICAvKiBwYWRkaW5nOiAyNHB4OyAqL1xuXG4gIC5sb2dvIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmViZWNjYXB1cnBsZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbiNjb250ZW50IHtcbiAgLyogZmxleDogMTsgKi9cbiAgaGVpZ2h0OiAxMDBkdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tZGVmYXVsdC10cmFuc2l0aW9uKTtcblxuICBhIHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgLmZhLWdpdGh1YiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAuZmEtZ2l0aHViOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcbiAgICB9XG4gIH1cbn1cblxuLmxlZnQtbmF2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5tYWluIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHdpZHRoOiAxMDBkdnc7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXYtaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uYWxsLXRhc2tzLFxuLmZhdm9yaXRlcyxcbi5ub3Rlcyxcbi5wcm9qZWN0cyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbTpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNkM2QzZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGFlMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdHMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctcmlnaHQ6IDIycHg7XG59XG5cbi5ub3RlcyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMjJweDtcbn1cblxuLm5vdGVzLWxlZnQtZ3AsXG4ucHJvamVjdHMtbGVmdC1ncCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtbm90ZS1idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzhhMzM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFkZC1ub3RlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NWI2OTU7XG4gIGNvbG9yOiAjMDc4YTMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3B4O1xufVxuXG4ucHJvamVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2plY3Q6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ubmF2LWl0ZW0gPiAuY291bnQsXG4ubm90ZXMtbGVmdC1ncCA+IC5jb3VudCxcbi5wcm9qZWN0cy1sZWZ0LWdwID4gLmNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTA4NDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0ID4gLmNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3NmQ4ODtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIFRBU0tTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmYzO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xufVxuXG4udGFzazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRyYW5zZm9ybTogc2NhbGVaKCk7XG59XG5cbi5sZWZ0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ucmlnaHQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDUwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmRldGFpbHMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTc2ZDg4O1xufVxuXG4uZGF0ZS1kdWUge1xuICBjb2xvcjogI2RhMWUyODtcbn1cblxuLnByaW9yaXR5IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGI3YmQ7XG4gIGNvbG9yOiAjZmYwMDBkO1xufVxuXG4ubWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDZiZTtcbiAgY29sb3I6ICNmYzdjMjA7XG59XG5cbi5sb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkNmJkO1xuICBjb2xvcjogIzI0YTE0ODtcbn1cblxuLmRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjZGExZTI4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10YXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0YTE0ODtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10YXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4N2UzNTtcbn1cblxuLyogQUREIFRBU0sgRk9STSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cblxuI2FkZC10YXNrLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cblxuaW5wdXQsXG5zZWxlY3QsXG5vcHRpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjVjMGNjO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNzhhMzM7XG59XG5cbiNzdWJtaXQtdGFzayxcbiNzdWJtaXQtbm90ZSxcbiNzdWJtaXQtcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGExNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc3VibWl0LXRhc2s6aG92ZXIsXG4jc3VibWl0LW5vdGU6aG92ZXIsXG4jc3VibWl0LXByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3ZTM1O1xufVxuXG4uYWRkLXRhc2stZm9ybS1sYWJlbCwgXG4uYWRkLW5vdGUtZm9ybS1sYWJlbCwgXG4uYWRkLXByb2plY3QtZm9ybS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuI2RhdGUtZHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5wcmlvcml0eS1mbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgLyogVGhpcyBoaWRlcyB0aGUgcmFkaW8gYnV0dG9ucyAqL1xuICB3aWR0aDogMXB4O1xufVxuXG4ucHJpb3JpdHktbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByaW9yaXR5LWxhYmVsOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG93LWZtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmxvdy1mbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4ubG93LWZtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZWRpdW0tZm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5tZWRpdW0tZm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5tZWRpdW0tZm0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oaWdoLWZtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBjb2xvcjogcmVkO1xufVxuXG4uaGlnaC1mbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmhpZ2gtZm0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEFERCBOT1RFUyBGT1JNICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXG5cbiNhZGQtbm90ZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNWMwY2M7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzA3OGEzMztcbn1cblxuLyogQUREIFBST0pFQ1QgRk9STSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xuXG4jYWRkLXByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCOzs4QkFFNEI7QUFDOUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxvQkFBb0I7O0lBRXBCO01BQ0UsZUFBZTtNQUNmLDJCQUEyQjtNQUMz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QUFFQSwyRkFBMkY7O0FBRTNGO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHNHQUFzRzs7QUFFdEc7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMTczZjcxO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmMjliMzM7XFxuICAtLWRlZmF1bHQtdHJhbnNpdGlvbjogZmlsbCAwLjFzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjFzIGVhc2UtaW4tb3V0LFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xcyBlYXNlLWluLW91dCxcXG4gICAgdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMGR2aDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmhlYWRlciB7XFxuICAvKiBwYWRkaW5nOiAyNHB4OyAqL1xcblxcbiAgLmxvZ28ge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlYmVjY2FwdXJwbGU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNjb250ZW50IHtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICBoZWlnaHQ6IDEwMGR2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxuXFxuICBhIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICAuZmEtZ2l0aHViIHtcXG4gICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgLmZhLWdpdGh1Yjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5sZWZ0LW5hdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5tYWluIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgd2lkdGg6IDEwMGR2dztcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2LWljb24ge1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5hbGwtdGFza3MsXFxuLmZhdm9yaXRlcyxcXG4ubm90ZXMsXFxuLnByb2plY3RzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlciB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzZDNkM2Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYWUxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1yaWdodDogMjJweDtcXG59XFxuXFxuLm5vdGVzIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDIycHg7XFxufVxcblxcbi5ub3Rlcy1sZWZ0LWdwLFxcbi5wcm9qZWN0cy1sZWZ0LWdwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5vdGUtYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzhhMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWRkLW5vdGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NWI2OTU7XFxuICBjb2xvcjogIzA3OGEzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5uYXYtaXRlbSA+IC5jb3VudCxcXG4ubm90ZXMtbGVmdC1ncCA+IC5jb3VudCxcXG4ucHJvamVjdHMtbGVmdC1ncCA+IC5jb3VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MDg0O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0ID4gLmNvdW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzZkODg7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgd2lkdGg6IDE3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogVEFTS1MgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjM7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWigpO1xcbn1cXG5cXG4ubGVmdC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucmlnaHQtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM1NzZkODg7XFxufVxcblxcbi5kYXRlLWR1ZSB7XFxuICBjb2xvcjogI2RhMWUyODtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmhpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YjdiZDtcXG4gIGNvbG9yOiAjZmYwMDBkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ2YmU7XFxuICBjb2xvcjogI2ZjN2MyMDtcXG59XFxuXFxuLmxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkNmJkO1xcbiAgY29sb3I6ICMyNGExNDg7XFxufVxcblxcbi5kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6ICNkYTFlMjg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRhMTQ4O1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODdlMzU7XFxufVxcblxcbi8qIEFERCBUQVNLIEZPUk0gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuXFxuI2FkZC10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNWMwY2M7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDc4YTMzO1xcbn1cXG5cXG4jc3VibWl0LXRhc2ssXFxuI3N1Ym1pdC1ub3RlLFxcbiNzdWJtaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRhMTQ4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc3VibWl0LXRhc2s6aG92ZXIsXFxuI3N1Ym1pdC1ub3RlOmhvdmVyLFxcbiNzdWJtaXQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3ZTM1O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybS1sYWJlbCwgXFxuLmFkZC1ub3RlLWZvcm0tbGFiZWwsIFxcbi5hZGQtcHJvamVjdC1mb3JtLWxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuI2RhdGUtZHVlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktZm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLyogVGhpcyBoaWRlcyB0aGUgcmFkaW8gYnV0dG9ucyAqL1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvdy1mbSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmxvdy1mbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmxvdy1mbS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZWRpdW0tZm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLm1lZGl1bS1mbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5tZWRpdW0tZm0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2gtZm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZ2gtZm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGlnaC1mbS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBBREQgTk9URVMgRk9STSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcblxcbiNhZGQtbm90ZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I1YzBjYztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzA3OGEzMztcXG59XFxuXFxuLyogQUREIFBST0pFQ1QgRk9STSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcblxcbiNhZGQtcHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVRhc2tTdWJtaXQoZm9ybURhdGEpIHtcblxuICAgIC8vIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldC1wcm9qZWN0KVxuICAgIC8vIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnNvbGUudGFibGUoZm9ybURhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlZFwiKTtcblxufVxuIiwiLy8gQ1JFQVRFIFRBU0sgRk9STSBcblxuaW1wb3J0IGhhbmRsZVRhc2tTdWJtaXQgZnJvbSBcIi4vaGFuZGxlRm9ybXNcIjtcbmltcG9ydCB7IGdldEFsbFByb2plY3RUaXRsZXMgfSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLWZvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZm9ybS1sYWJlbCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FkZC10YXNrLWZvcm0nKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzZXQtcHJvamVjdCcpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2V0LXByb2plY3QnKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGdlbmVyYXRlIHByb2plY3Qgb3B0aW9ucyBmcm9tIHByb2plY3RzIGxpc3RcbiAgICBsZXQgcHJvamVjdE9wdGlvbnMgPSBnZXRBbGxQcm9qZWN0VGl0bGVzKCk7XG5cbiAgICBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcblxuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykuam9pbignLScpKTtcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbjtcblxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG5cbiAgICB9KTtcblxuXG4gICAgLy9cblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXRpdGxlJyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgVGl0bGUnKTtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGV0YWlsc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG4gICAgZGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWRldGFpbHMnKTtcbiAgICBkZXRhaWxzSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdPcHRpb25hbCBEZXRhaWxzIG9mIHRhc2snKTtcblxuICAgIGNvbnN0IGRhdGVEdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUR1ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUtZHVlJyk7XG5cbiAgICBjb25zdCBkYXRlRHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGVEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZS1kdWUnKTtcbiAgICBkYXRlRHVlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLWR1ZScpO1xuICAgIGRhdGVEdWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBkYXRlRHVlTGFiZWwudGV4dENvbnRlbnQgPSAnU2V0IFRhc2sgRHVlIERhdGU6ICc7XG4gICAgZGF0ZUR1ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGVEdWVJbnB1dCk7XG4gICAgXG4gICAgLy9wcmlvcml0eSBsYWJlbFxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktZm0nKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgLy9cbiAgICBjb25zdCBsb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbG93SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgbG93SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgbG93SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsb3cnKTtcbiAgICBsb3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgIGxvd0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsb3dMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcsICdsb3ctZm0nKTtcbiAgICBsb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsb3cnKTtcbiAgICBsb3dMYWJlbC50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIC8vXG4gICAgY29uc3QgbWVkaXVtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG1lZGl1bUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIG1lZGl1bUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgIG1lZGl1bUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVkaXVtJyk7XG4gICAgbWVkaXVtSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICBtZWRpdW1JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBtZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbWVkaXVtTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnLCAnbWVkaXVtLWZtJyk7XG4gICAgbWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVkaXVtJyk7XG4gICAgbWVkaXVtTGFiZWwudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAvL1xuICAgIGNvbnN0IGhpZ2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlnaElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIGhpZ2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICBoaWdoSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdoaWdoJyk7XG4gICAgaGlnaElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgIGhpZ2hJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGhpZ2hMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcsICdoaWdoLWZtJyk7XG4gICAgaGlnaExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2hpZ2gnKTtcbiAgICBoaWdoTGFiZWwudGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKGxvd0lucHV0KTtcbiAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKGxvd0xhYmVsKTtcbiAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKG1lZGl1bUlucHV0KTtcbiAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKG1lZGl1bUxhYmVsKTtcbiAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKGhpZ2hJbnB1dCk7XG4gICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChoaWdoTGFiZWwpO1xuXG4gICAgLy9zdWJtaXQgYnV0dG9uXG5cbiAgICBjb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRUYXNrQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRUYXNrQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC10YXNrJyk7XG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShhZGRUYXNrRm9ybSk7XG5cbiAgICAgICAgaGFuZGxlVGFza1N1Ym1pdChmb3JtRGF0YSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCIyXCIpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCIzXCIpO1xuXG4gICAgICAgIGFkZFRhc2tGb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCI0XCIpO1xuXG4gICAgICAgIFxuICAgIH0pOyBcblxuICAgIC8vIGFwcGVuZCBlbGVtZW50cyB0byBmb3JtXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc0lucHV0KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlRHVlTGFiZWwpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG4pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG4gICAgXG59XG5cbi8vIENSRUFURSBOT1RFIEZPUk0gXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb3RlRm9ybSgpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBhZGROb3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGROb3RlRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1ub3RlLWZvcm0nKTtcbiAgICBhZGROb3RlRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLW5vdGUtZm9ybS1sYWJlbCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FkZC1ub3RlLWZvcm0nKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdBZGQgTm90ZSc7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25vdGUtdGl0bGUnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbm90ZS10aXRsZScpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOb3RlIFRpdGxlJyk7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZDtcblxuICAgIGNvbnN0IGRldGFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXRhaWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbm90ZS1kZXRhaWxzJyk7XG4gICAgZGV0YWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdub3RlLWRldGFpbHMnKTtcbiAgICBkZXRhaWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKTtcbiAgICBkZXRhaWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcbiAgICBkZXRhaWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05vdGUgRGV0YWlscycpO1xuICAgIGRldGFpbElucHV0LnJlcXVpcmVkO1xuXG4gICAgY29uc3Qgc3VibWl0Tm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0Tm90ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgc3VibWl0Tm90ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdE5vdGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtbm90ZScpO1xuXG4gICAgLy9cbiAgICBhZGROb3RlRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgYWRkTm90ZUZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgYWRkTm90ZUZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsSW5wdXQpO1xuICAgIGFkZE5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdE5vdGVCdG4pO1xuXG4gICAgLy9cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmFwcGVuZENoaWxkKGFkZE5vdGVGb3JtKTtcblxufTtcblxuLy8gQ1JFQVRFIFBST0pFQ1QgRk9STSBcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtZm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1mb3JtLWxhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYWRkLXByb2plY3QtZm9ybScpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC10aXRsZScpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZDtcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LXByb2plY3QnKTtcblxuICAgIC8vXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3RCdG4pO1xuXG5cbiAgICAvL1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuXG59OyIsImltcG9ydCB7IGxvYWRBbGxUYXNrcywgbG9hZFByb2plY3RUYXNrcywgbG9hZEZhdm9yaXRlVGFza3MgfSBmcm9tICcuL2xvYWRUYXNrcyc7XG5pbXBvcnQgY3JlYXRlVGFza0Zvcm0sIHsgYWRkTm90ZUZvcm0sIGFkZFByb2plY3RGb3JtIH0gZnJvbSAnLi9sb2FkRm9ybXMnO1xuaW1wb3J0IHsgZ2V0QWxsUHJvamVjdFRpdGxlcywgZ2V0QWxsUHJvamVjdHNDb3VudCwgZ2V0QWxsVGFza3NDb3VudCwgZ2V0UHJvamVjdFRhc2tDb3VudCwgZ2V0RmF2b3JpdGVUYXNrc0NvdW50IH0gZnJvbSAnLi90YXNrTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXG4gICAgcmVuZGVyTGVmdE5hdigpO1xuICAgIHJlbmRlck1haW4oKTtcbiAgICByZW5kZXJGb290ZXIoKTtcbiAgICBsb2FkQWxsVGFza3MoKTtcblxufTtcblxuZnVuY3Rpb24gcmVuZGVyTGVmdE5hdigpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgbGVmdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnROYXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1uYXYnLCAnb3BlbicpO1xuXG4gICAgcmVuZGVySGVhZGVyKCk7XG4gICAgcmVuZGVyTmF2SXRlbXMoKTtcblxuXG4gICAgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGxvZ29VcmwgPSAnLi9pbWFnZXMvaWNvbi5wbmcnO1xuICAgIFxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICAgICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdsb2dvJyk7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCBsb2dvVXJsKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsdWNpZGUgbHVjaWRlLXBsdXMgdy00XCI+PHBhdGggZD1cIk01IDEyaDE0XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTIgNXYxNFwiPjwvcGF0aD48L3N2Zz5BZGQgdGFza2A7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrRm9ybSk7XG5cbiAgICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICAgIGhlYWRlclRpdGxlLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAgIFxuICAgICAgICBsZWZ0TmF2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiByZW5kZXJOYXZJdGVtcygpIHtcblxuICAgICAgICAvLyBBTEwgVEFTS1NcbiAgICAgICAgY29uc3QgYWxsVGFza3NDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFsbFRhc2tzQ29udC5jbGFzc0xpc3QuYWRkKCdhbGwtdGFza3MnLCAnbmF2LWl0ZW0nKTtcbiAgICAgICAgYWxsVGFza3NDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFsbFRhc2tzKTtcblxuICAgICAgICBjb25zdCBhbGxUYXNrc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGFsbFRhc2tzSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1saXN0LWNoZWNrJywgJ25hdi1pY29uJyk7XG5cbiAgICAgICAgY29uc3QgYWxsVGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbGxUYXNrc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgYWxsVGFza3NUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuXG4gICAgICAgIGNvbnN0IGFsbFRhc2tzQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGFsbFRhc2tzQ291bnQuY2xhc3NMaXN0LmFkZCgnY291bnQnKTtcbiAgICAgICAgYWxsVGFza3NDb3VudC50ZXh0Q29udGVudCA9IGdldEFsbFRhc2tzQ291bnQoKTtcblxuICAgICAgICBhbGxUYXNrc0NvbnQuYXBwZW5kQ2hpbGQoYWxsVGFza3NJY29uKTtcbiAgICAgICAgYWxsVGFza3NDb250LmFwcGVuZENoaWxkKGFsbFRhc2tzVGl0bGUpO1xuICAgICAgICBhbGxUYXNrc0NvbnQuYXBwZW5kQ2hpbGQoYWxsVGFza3NDb3VudCk7XG5cbiAgICAgICAgLy8gRkFWT1JJVEVTXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlc0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmF2b3JpdGVzQ29udC5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZXMnLCAnbmF2LWl0ZW0nKTtcbiAgICAgICAgZmF2b3JpdGVzQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRGYXZvcml0ZVRhc2tzKTtcblxuICAgICAgICBjb25zdCBmYXZvcml0ZXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBmYXZvcml0ZXNJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXN0YXInLCAnbmF2LWljb24nKTtcblxuICAgICAgICBjb25zdCBmYXZvcml0ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmYXZvcml0ZXNUaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGZhdm9yaXRlc1RpdGxlLnRleHRDb250ZW50ID0gJ0Zhdm9yaXRlcyc7XG5cbiAgICAgICAgY29uc3QgZmF2b3JpdGVzQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGZhdm9yaXRlc0NvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50Jyk7XG4gICAgICAgIGZhdm9yaXRlc0NvdW50LnRleHRDb250ZW50ID0gZ2V0RmF2b3JpdGVUYXNrc0NvdW50KCk7XG5cbiAgICAgICAgZmF2b3JpdGVzQ29udC5hcHBlbmRDaGlsZChmYXZvcml0ZXNJY29uKTtcbiAgICAgICAgZmF2b3JpdGVzQ29udC5hcHBlbmRDaGlsZChmYXZvcml0ZXNUaXRsZSk7XG4gICAgICAgIGZhdm9yaXRlc0NvbnQuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzQ291bnQpO1xuXG5cbiAgICAgICAgLy8gUFJPSkVDVFNcbiAgICAgICAgY29uc3QgcHJvamVjdHNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RzQ29udC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycsICduYXYtaXRlbScpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzTGVmdEdwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RzTGVmdEdwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWxlZnQtZ3AnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHByb2plY3RzSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1sYXllci1ncm91cCcsICduYXYtaWNvbicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3RzQ291bnQuY2xhc3NMaXN0LmFkZCgnY291bnQnKTtcbiAgICAgICAgcHJvamVjdHNDb3VudC50ZXh0Q29udGVudCA9IGdldEFsbFByb2plY3RzQ291bnQoKTtcblxuICAgICAgICBwcm9qZWN0c0xlZnRHcC5hcHBlbmRDaGlsZChwcm9qZWN0c0ljb24pO1xuICAgICAgICBwcm9qZWN0c0xlZnRHcC5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbiAgICAgICAgcHJvamVjdHNMZWZ0R3AuYXBwZW5kQ2hpbGQocHJvamVjdHNDb3VudCk7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsdWNpZGUgbHVjaWRlLXBsdXMgdy00IGFkZC1ub3RlLWJ0blwiPjxwYXRoIGQ9XCJNNSAxMmgxNFwiPjwvcGF0aD48cGF0aCBkPVwiTTEyIDV2MTRcIj48L3BhdGg+PC9zdmc+YDtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RGb3JtKTtcblxuICAgICAgICBwcm9qZWN0c0NvbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNMZWZ0R3ApO1xuICAgICAgICBwcm9qZWN0c0NvbnQuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cblxuICAgICAgICAvLyBQUk9KRUNUUyBMSVNUXG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdHNMaXN0Q29udC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy10aXRsZScsICduYXYtaXRlbScpO1xuXG4gICAgICAgIC8vIGxvYWQgcHJvamVjdCBsaXN0IGVsZW1lbnRzIGR5bmFtaWNhbGx5IGZyb20gcHJvamVjdHMgbGlzdCAvLy8vLy8vLy9cbiAgICAgICAgbGV0IHByb2plY3RzTGlzdCA9IGdldEFsbFByb2plY3RUaXRsZXMoKTtcblxuICAgICAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdFRpdGxlKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RFbGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgcHJvamVjdEVsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgIHByb2plY3RFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtsb2FkUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSl9KTsgXG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RWxlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlQ291bnQuY2xhc3NMaXN0LmFkZCgnY291bnQnKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVDb3VudC50ZXh0Q29udGVudCA9IGdldFByb2plY3RUYXNrQ291bnQocHJvamVjdFRpdGxlKTsgLy9cbiAgICBcbiAgICAgICAgICAgIHByb2plY3RFbGUuYXBwZW5kQ2hpbGQocHJvamVjdEVsZUNvdW50KTtcblxuICAgICAgICAgICAgcHJvamVjdHNMaXN0Q29udC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIE5PVEVTXG4gICAgICAgIGNvbnN0IG5vdGVzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3Rlc0NvbnQuY2xhc3NMaXN0LmFkZCgnbm90ZXMnLCAnbmF2LWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBub3Rlc0xlZnRHcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub3Rlc0xlZnRHcC5jbGFzc0xpc3QuYWRkKCdub3Rlcy1sZWZ0LWdwJyk7XG5cbiAgICAgICAgY29uc3Qgbm90ZXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBub3Rlc0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbm90ZS1zdGlja3knLCAnbmF2LWljb24nKTtcblxuICAgICAgICBjb25zdCBub3Rlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVzVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gJ05vdGVzJztcblxuICAgICAgICBjb25zdCBub3Rlc0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBub3Rlc0NvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50Jyk7XG4gICAgICAgIG5vdGVzQ291bnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgICBub3Rlc0xlZnRHcC5hcHBlbmRDaGlsZChub3Rlc0ljb24pO1xuICAgICAgICBub3Rlc0xlZnRHcC5hcHBlbmRDaGlsZChub3Rlc1RpdGxlKTtcbiAgICAgICAgbm90ZXNMZWZ0R3AuYXBwZW5kQ2hpbGQobm90ZXNDb3VudCk7XG5cbiAgICAgICAgY29uc3QgYWRkTm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGROb3RlQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1ub3RlLWJ0bicpO1xuICAgICAgICBhZGROb3RlQnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsdWNpZGUgbHVjaWRlLXBsdXMgdy00IGFkZC1ub3RlLWJ0blwiPjxwYXRoIGQ9XCJNNSAxMmgxNFwiPjwvcGF0aD48cGF0aCBkPVwiTTEyIDV2MTRcIj48L3BhdGg+PC9zdmc+YDtcbiAgICAgICAgYWRkTm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5vdGVGb3JtKTtcblxuICAgICAgICBub3Rlc0NvbnQuYXBwZW5kQ2hpbGQobm90ZXNMZWZ0R3ApO1xuICAgICAgICBub3Rlc0NvbnQuYXBwZW5kQ2hpbGQoYWRkTm90ZUJ0bik7XG5cbiAgICAgICAgLy8gQVRUQUNIIE5BViBJVEVNUyBUTyBMRUZUIE5BVlxuXG4gICAgICAgIGxlZnROYXYuYXBwZW5kQ2hpbGQoYWxsVGFza3NDb250KTtcbiAgICAgICAgbGVmdE5hdi5hcHBlbmRDaGlsZChmYXZvcml0ZXNDb250KTtcbiAgICAgICAgbGVmdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnQpO1xuICAgICAgICBsZWZ0TmF2LmFwcGVuZENoaWxkKHByb2plY3RzTGlzdENvbnQpO1xuICAgICAgICBsZWZ0TmF2LmFwcGVuZENoaWxkKG5vdGVzQ29udCk7XG4gICAgfTtcblxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsZWZ0TmF2KTtcbn07XG5cblxuZnVuY3Rpb24gcmVuZGVyTWFpbigpIHtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICAvLyBsb2FkVGFzayhtYWluKTtcbiAgICBcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKG1haW4pO1xuXG59O1xuXG5cbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcblxuICAgIGNvbnN0IHVzZXIgPSAnV29kUGFjaHVhJztcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL1dvZFBhY2h1YS8nO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBnaXRodWJVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1YlVzZXIudGV4dENvbnRlbnQgPSB1c2VyO1xuICAgIGdpdGh1YlVzZXIuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcblxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgZ2l0aHViTGluay5jbGFzc0xpc3QuYWRkKCdnaXRodWItbGluaycpO1xuXG4gICAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhYicsJ2ZhLWdpdGh1YicpO1xuXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViVXNlcik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH07IiwiaW1wb3J0IGdldEFsbFRhc2tzLCB7IGdldFByb2plY3RUYXNrcywgZ2V0RmF2b3JpdGVUYXNrcyB9IGZyb20gXCIuL3Rhc2tNYW5hZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsVGFza3MoKSB7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgYWxsVGFza3MgPSBnZXRBbGxUYXNrcygpO1xuXG4gICAgYWxsVGFza3MubWFwKCh0YXNrKSA9PiB7XG5cbiAgICAgICAgbG9hZFRhc2sodGFzay50aXRsZSwgdGFzay5kZXRhaWxzLHRhc2suZGF0ZUR1ZSwgdGFzay5wcmlvcml0eSk7XG5cbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGYXZvcml0ZVRhc2tzKCkge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGZhdm9yaXRlVGFza3MgPSBnZXRGYXZvcml0ZVRhc2tzKCk7XG5cbiAgICBmYXZvcml0ZVRhc2tzLm1hcCgodGFzaykgPT4ge1xuXG4gICAgICAgIGxvYWRUYXNrKHRhc2sudGl0bGUsIHRhc2suZGV0YWlscyx0YXNrLmRhdGVEdWUsIHRhc2sucHJpb3JpdHkpO1xuXG4gICAgfSk7XG5cbn1cblxuLy8gcmVmYWN0b3IgdG8gbG9hZCBwcm9qZWN0IHRhc2tzIGR5bmFtaWNhbGx5IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpIHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBnZXRQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKTtcblxuICAgIHByb2plY3RUYXNrcy5tYXAoKHRhc2spID0+IHtcblxuICAgICAgICBsb2FkVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRldGFpbHMsdGFzay5kYXRlRHVlLCB0YXNrLnByaW9yaXR5KTtcblxuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrKHRpdGxlLCBkZXRhaWwsIGRhdGVEdWUsIHByaW9yaXR5KSB7XG5cbiAgICBjb25zdCB0YXNrQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDb250LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgIC8vIGxlZnQgZ3JvdXBcbiAgICBjb25zdCB0YXNrTGVmdEdwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0xlZnRHcC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWdyb3VwJyk7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKCdzdGF0dXMnKTtcblxuICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdGF0dXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBzdGF0dXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RhdHVzJyk7XG4gICAgc3RhdHVzSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMnKTtcblxuICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQoc3RhdHVzSW5wdXQpO1xuXG4gICAgY29uc3QgdGFza0RldGFpbHNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RldGFpbHNDb250LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCB0YXNrRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RldGFpbC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgdGFza0RldGFpbC50ZXh0Q29udGVudCA9IGRldGFpbDtcblxuICAgIHRhc2tEZXRhaWxzQ29udC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tEZXRhaWxzQ29udC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsKTtcblxuICAgIHRhc2tMZWZ0R3AuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG4gICAgdGFza0xlZnRHcC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc0NvbnQpO1xuICAgIFxuXG4gICAgLy8gcmlnaHQgZ3JvdXAgXG4gICAgY29uc3QgdGFza1JpZ2h0R3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUmlnaHRHcC5jbGFzc0xpc3QuYWRkKCdyaWdodC1ncm91cCcpO1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlLWR1ZScpO1xuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gZGF0ZUR1ZTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScsIGAke3ByaW9yaXR5LnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdHkgPT09ICdNZWRpdW0nPyAnTWVkJyA6IHByaW9yaXR5O1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtdHJhc2gnKTtcblxuICAgIGRlbGV0ZVRhc2tCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICB0YXNrUmlnaHRHcC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgdGFza1JpZ2h0R3AuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICB0YXNrUmlnaHRHcC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICAvL1xuXG4gICAgdGFza0NvbnQuYXBwZW5kQ2hpbGQodGFza0xlZnRHcCk7XG4gICAgdGFza0NvbnQuYXBwZW5kQ2hpbGQodGFza1JpZ2h0R3ApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5hcHBlbmRDaGlsZCh0YXNrQ29udCk7XG5cbn0iLCJjb25zdCBhbGxQcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMZWFybiBTcHJpbmcnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdDb21wbGV0ZSBhIHByb2plY3Qgd2l0aCBTcHJpbmcgRnJhbWV3b3JrJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICAgICAgZGF0ZUR1ZTogJzI1LTA4LTIwMjQnLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnSGliZXJuYXRlJyxcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiAnRG8gc29tZSBwcm9qZWN0IHVzaW5nIEhpYmVybmF0ZScsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgICAgICBkYXRlRHVlOiAnMjUtMDgtMjAyNCcsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xlYXJuIFJlYWN0JyxcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiAnVW5kZXJzdGFuZCBwcm9wcywgc3RhdGUsIGxpZmVjeWNsZSwgaG9va3MnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICAgICAgICAgICAgICBkYXRlRHVlOiAnMjUtMDgtMjAyNCcsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb2RlIFRvIExlYXJuJyxcbiAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1B5dGhvbicsXG4gICAgICAgICAgICAgICAgZGV0YWlsczogJ1Jlc2VhcmNoIGFib3V0IHB5dGhvbiBhbmQgY29uY2VwdHMnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgICAgICBkYXRlRHVlOiAnMjUtMDgtMjAyNCcsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hpYmVybmF0ZScsXG4gICAgICAgICAgICAgICAgZGV0YWlsczogJ0RvIHNvbWUgcHJvamVjdCB1c2luZyBIaWJlcm5hdGUnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICAgICAgZGF0ZUR1ZTogJzI1LTA4LTIwMjQnLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1BsYXRmb3JtcycsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQeXRob24nLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdSZXNlYXJjaCBhYm91dCBweXRob24gYW5kIGNvbmNlcHRzJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICAgICAgZGF0ZUR1ZTogJzI1LTA4LTIwMjQnLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdHb29kIHRvcGljIHRvIHJlc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAgICAgICAgICAgZGF0ZUR1ZTogJzI1LTA4LTIwMjQnLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ05ldyBUZXN0JyxcbiAgICAgICAgdGFza3M6IFtdXG4gICAgfVxuXTtcblxuXG4vLyBUYXNrcyBmYWN0b3J5IGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGV0YWlscywgcHJpb3JpdHksIGRhdGVEdWUsIGZhdm9yaXRlLCBzdGF0dXM9dHJ1ZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBkYXRlRHVlLFxuICAgICAgICBmYXZvcml0ZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBzdGF0dXNcbiAgICB9O1xuXG59O1xuXG4vLyBDcmVhdGVzIE5FVyBQcm9qZWN0IGFuZCBhZGRzIHRvIGFsbFByb2plY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdCh0aXRsZSkge1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSB7dGl0bGU6IHRpdGxlLCB0YXNrczogW119O1xuXG4gICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxufTtcblxuLy8gYWRkcyBjcmVhdGVkIHRhc2sgdG8gUHJvamVjdFxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrVG9BbGxQcm9qZWN0cyhuZXdUYXNrLCBwcm9qZWN0KSB7XG5cbiAgICBsZXQgaW5kZXhPZlByb2plY3QgPSBnZXRBbGxQcm9qZWN0VGl0bGVzKCkuaW5kZXhPZihwcm9qZWN0KTtcblxuICAgIGFsbFByb2plY3RzW2luZGV4T2ZQcm9qZWN0XS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG59O1xuXG4vLyByZXR1cm4gQUxMIHRhc2tzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcblxuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsbFRhc2tzO1xuXG59O1xuXG4vLyByZXR1cm4gZmF2b3JpdGUgdGFza3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZVRhc2tzKCkge1xuXG4gICAgcmV0dXJuIGdldEFsbFRhc2tzKCkuZmlsdGVyKHRhc2sgPT4gdGFzay5mYXZvcml0ZSA9PT0gdHJ1ZSk7XG5cbn07XG5cbi8vIHJldHVybiBBTEwgdGFza3MgQ09VTlQgIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUYXNrc0NvdW50KCkge1xuXG4gICAgcmV0dXJuIGdldEFsbFRhc2tzKCkubGVuZ3RoO1xuXG59XG5cbi8vIHJldHVybiBmYXZvcml0ZSB0YXNrcyBDT1VOVCAjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmF2b3JpdGVUYXNrc0NvdW50KCkge1xuXG4gICAgcmV0dXJuIGdldEZhdm9yaXRlVGFza3MoKS5sZW5ndGg7XG5cbn1cblxuLy8gcmV0dXJuIEFMTCBQcm9qZWN0cyBMaXN0XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdFRpdGxlcygpIHtcblxuICAgIGxldCBhbGxQcm9qZWN0c1RpdGxlcyA9IFtdO1xuXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0c1RpdGxlcy5wdXNoKHByb2plY3QudGl0bGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsbFByb2plY3RzVGl0bGVzO1xuXG59O1xuXG4vLyByZXR1cm4gQUxMIFBST0pFQ1RTIENPVU5UICMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm9qZWN0c0NvdW50KCkge1xuXG4gICAgcmV0dXJuIGdldEFsbFByb2plY3RUaXRsZXMoKS5sZW5ndGg7XG5cbn1cblxuLy8gcmV0dXJuIGR5bmFtaWNhbGx5IHByb2plY3QgVGFza3MgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKSB7XG5cbiAgICBsZXQgZGVmYXVsdFByb2plY3RUYXNrcyA9IGFsbFByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG5cbiAgICByZXR1cm4gZGVmYXVsdFByb2plY3RUYXNrc1swXS50YXNrcztcblxufVxuLy8gcmV0dXJuIGR5bmFtaWNhbGx5IHByb2plY3RzIHRhc2sgQ09VTlQgIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RUYXNrQ291bnQocHJvamVjdFRpdGxlKSB7XG5cbiAgICByZXR1cm4gZ2V0UHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSkubGVuZ3RoO1xuXG59XG5cblxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0xpc3QodGFzaykge1xuXG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tTGlzdCh0YXNrKSB7XG5cbn1cblxuZnVuY3Rpb24gdG9nZ2xlVGFza0Zhdm9yaXRlKHRhc2spIHtcblxufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrU3RhdHVzKHRhc2spIHtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2xvYWRIb21lJztcbmltcG9ydCB7IGxvYWRBbGxUYXNrcyB9IGZyb20gJy4vbG9hZFRhc2tzJztcblxubG9hZEhvbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=