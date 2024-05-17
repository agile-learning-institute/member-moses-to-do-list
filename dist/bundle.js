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
  min-width: 410px;
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

.edit {
  color: #187e35;
  font-size: 1.1em;
  cursor: pointer;
}

.edit:hover {
  transform: scale(1.2);
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

@media (max-width: 850px) {

  .date-due {
    display: none;
  }

  .nav-item, .project {
    font-size: 0.8em;
  }

  .left-nav {
    min-width: 200px;
  }

  .add-note-btn {
    width: 17px;
    height: 17px;
  }

  .add-task {
    font-size: 13px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-color: #173f71;\n  --secondary-color: #f29b33;\n  --default-transition: fill 0.1s ease-in-out, color 0.1s ease-in-out,\n    background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out,\n    transform 0.1s ease-in-out;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  border: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100dvh;\n  line-height: 1.5;\n}\n\nheader {\n  /* padding: 24px; */\n\n  .logo {\n    width: 3rem;\n    padding-right: 5px;\n  }\n\n  .title {\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid rebeccapurple;\n    padding-bottom: 10px;\n\n    p {\n      font-size: 30px;\n      color: var(--primary-color);\n      text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);\n    }\n  }\n}\n\n#content {\n  /* flex: 1; */\n  height: 100dvh;\n  display: flex;\n}\n\nfooter {\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: var(--primary-color);\n  transition: var(--default-transition);\n\n  a {\n    color: var(--secondary-color);\n    text-decoration: none;\n    font-size: 16px;\n\n    .fa-github {\n      font-size: 22px;\n      transition: transform 0.3s ease-in-out;\n    }\n\n    .fa-github:hover {\n      transform: rotate(360deg) scale(1.2);\n    }\n  }\n}\n\n.left-nav {\n  box-sizing: border-box;\n  background-color: #f0f2f3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 250px;\n  padding: 20px;\n  font-size: 17px;\n}\n\n.main {\n  margin: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);\n  width: 100dvw;\n  min-width: 410px;\n}\n\n.nav-item {\n  padding: 0 10px 0 15px;\n  display: flex;\n}\n\n.nav-icon {\n  width: 40px;\n}\n\n.all-tasks,\n.favorites,\n.notes,\n.projects {\n  align-items: center;\n}\n\n.nav-item:hover {\n  border-left: 5px solid #3d3d3d;\n  background-color: #dbdae1;\n  cursor: pointer;\n}\n\n.projects {\n  justify-content: space-between;\n  padding-right: 22px;\n}\n\n.notes {\n  justify-content: space-between;\n  padding-right: 22px;\n}\n\n.notes-left-gp,\n.projects-left-gp {\n  display: flex;\n  align-items: center;\n}\n\n.add-note-btn {\n  color: white;\n  background-color: #078a33;\n  border-radius: 5px;\n  display: flex;\n}\n\n.add-note-btn:hover {\n  background-color: #85b695;\n  color: #078a33;\n  cursor: pointer;\n}\n\n.projects-title {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.project {\n  margin-left: 25px;\n  font-size: 14px;\n  padding: 0 10px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project:hover {\n  font-weight: bolder;\n}\n\n.nav-item > .count,\n.notes-left-gp > .count,\n.projects-left-gp > .count {\n  background-color: #265084;\n  color: whitesmoke;\n  font-size: 11px;\n  padding: 3px;\n  margin: 5px;\n  height: 20px;\n  width: 20px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project > .count {\n  background-color: #576d88;\n  color: whitesmoke;\n  font-size: 10px;\n  padding: 3px;\n  margin: 5px;\n  height: 17px;\n  width: 17px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* TASKS ################################################################################################*/\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #f0f2f3;\n  padding: 5px 15px;\n  border-radius: 5px;\n  /* display: none; */\n}\n\n.task:hover {\n  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);\n  transform: scaleZ();\n}\n\n.left-group {\n  display: flex;\n  gap: 15px;\n}\n\n.right-group {\n  display: flex;\n  gap: 50px;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.details {\n  font-size: 12px;\n  color: #576d88;\n}\n\n.date-due {\n  color: #da1e28;\n}\n\n.priority {\n  width: 50px;\n  font-size: 15px;\n  text-align: center;\n  border-radius: 15px;\n}\n\n.high {\n  background-color: #f8b7bd;\n  color: #ff000d;\n}\n\n.medium {\n  background-color: #f8d6be;\n  color: #fc7c20;\n}\n\n.low {\n  background-color: #b3d6bd;\n  color: #24a148;\n}\n\n.delete:hover {\n  color: #da1e28;\n  transform: scale(1.3);\n  cursor: pointer;\n}\n\n.edit {\n  color: #187e35;\n  font-size: 1.1em;\n  cursor: pointer;\n}\n\n.edit:hover {\n  transform: scale(1.2);\n}\n\n.add-task {\n  background-color: #24a148;\n  width: 140px;\n  height: 40px;\n  margin-left: 10px;\n  border-radius: 5px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 5px 5px;\n  font-size: 17px;\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n.add-task:hover {\n  background-color: #187e35;\n}\n\n/* ADD TASK FORM ######################################################################*/\n\n#add-task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  /* display: none; */\n}\n\ninput,\nselect,\noption {\n  border: 1px solid #b5c0cc;\n  padding: 5px 15px;\n  border-radius: 5px;\n  height: 35px;\n  font-weight: bold;\n}\n\ninput:focus {\n  border: 2px solid #078a33;\n}\n\n#submit-task,\n#submit-note,\n#submit-project {\n  background-color: #24a148;\n  color: white;\n  cursor: pointer;\n}\n\n#submit-task:hover,\n#submit-note:hover,\n#submit-project:hover {\n  background-color: #187e35;\n}\n\n.add-task-form-label,\n.add-note-form-label,\n.add-project-form-label {\n  font-weight: bolder;\n  font-size: 25px;\n}\n\nlabel {\n  font-size: 15px;\n  padding: 0 10px;\n}\n\n#date-due {\n  margin-left: 20px;\n}\n\n.priority-fm {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\ninput[type=\"radio\"] {\n  /* This hides the radio buttons */\n  width: 1px;\n}\n\n.priority-label {\n  display: inline-block;\n  padding: 0.2rem 1rem;\n  border-radius: 3px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.priority-label:hover {\n  color: white;\n}\n\n.low-fm {\n  border: 1px solid green;\n  color: green;\n}\n\n.low-fm:hover {\n  background-color: green;\n}\n\n.low-fm-active {\n  background-color: green;\n  color: white;\n}\n\n.medium-fm {\n  border: 1px solid orange;\n  color: orange;\n}\n\n.medium-fm:hover {\n  background-color: orange;\n}\n\n.medium-fm-active {\n  background-color: orange;\n  color: white;\n}\n\n.high-fm {\n  border: 1px solid red;\n  color: red;\n}\n\n.high-fm:hover {\n  background-color: red;\n}\n\n.high-fm-active {\n  background-color: red;\n  color: white;\n}\n\n/* ADD NOTES FORM ########################################################################*/\n\n#add-note-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  /* display: none; */\n}\n\ntextarea {\n  border: 1px solid #b5c0cc;\n  padding: 15px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\ntextarea:focus {\n  border: 2px solid #078a33;\n}\n\n/* ADD PROJECT FORM #################################################################################*/\n\n#add-project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  /* display: none; */\n}\n\n@media (max-width: 850px) {\n\n  .date-due {\n    display: none;\n  }\n\n  .nav-item, .project {\n    font-size: 0.8em;\n  }\n\n  .left-nav {\n    min-width: 200px;\n  }\n\n  .add-note-btn {\n    width: 17px;\n    height: 17px;\n  }\n\n  .add-task {\n    font-size: 13px;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/handleForms.js":
/*!****************************!*\
  !*** ./src/handleForms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleTaskSubmit),
/* harmony export */   handleNoteSubmit: () => (/* binding */ handleNoteSubmit),
/* harmony export */   handleProjectSubmit: () => (/* binding */ handleProjectSubmit),
/* harmony export */   handleTaskEdit: () => (/* binding */ handleTaskEdit)
/* harmony export */ });
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");


function handleTaskSubmit(event) {
  const formData = new FormData(this);

  // handleTaskSubmit(formData);
  // event.preventDefault();

  // addTaskForm.reset();

  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  const {
    "set-project": projectTitle,
    "task-title": title,
    "task-details": details,
    "date-due": dateDue,
    priority,
  } = formDetails;

  const newTask = (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.createTask)(title, details, priority, dateDue, false, true);

  (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.saveTaskToAllProjects)(newTask, projectTitle);

  location.reload();
  // loadProjectTasks(project);
}

function handleTaskEdit(formData, taskID) {
  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  const {
    "set-project": projectTitle,
    "task-title": title,
    "task-details": details,
    "date-due": dateDue,
    priority,
  } = formDetails;

  (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.editTask)(projectTitle, title, details, dateDue, priority, taskID);

  location.reload();
  // loadProjectTasks(project);
}

function handleNoteSubmit(formData) {
  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  console.table(formDetails);
  // NOT YET IMPLEMENTED @@@@@@@@@@@@@##############################################

  location.reload();
}

function handleProjectSubmit(formData) {
  const formDetails = {};

  for (let pair of formData.entries()) {
    formDetails[pair[0]] = pair[1];
  }

  const { "project-title": title } = formDetails;

  (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.createAddProject)(title);

  // loadProjectTasks(title);
  location.reload();
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
/* harmony export */   "default": () => (/* binding */ createTaskForm),
/* harmony export */   editTaskForm: () => (/* binding */ editTaskForm)
/* harmony export */ });
/* harmony import */ var _handleForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleForms */ "./src/handleForms.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");
// CREATE TASK FORM




function createTaskForm() {
  document.querySelector(".main").innerHTML = "";

  const addTaskForm = document.createElement("form");
  addTaskForm.setAttribute("id", "add-task-form");
  addTaskForm.setAttribute("action", "#");

  const label = document.createElement("label");
  label.classList.add("add-task-form-label");
  label.setAttribute("for", "add-task-form");
  label.textContent = "Add Task";

  const select = document.createElement("select");
  select.setAttribute("id", "set-project");
  select.setAttribute("name", "set-project");

  // dynamically generate project options from projects list
  let projectOptions = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getAllProjectTitles)();

  projectOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    // optionElement.setAttribute('value', option.toLowerCase().split(' ').join('-'));
    optionElement.setAttribute("value", option.title);
    optionElement.textContent = option.title;

    select.appendChild(optionElement);
  });

  //

  const titleInput = document.createElement("input");
  titleInput.classList.add("task-title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "task-title");
  titleInput.setAttribute("placeholder", "Task Title");
  titleInput.required = true;

  const detailsInput = document.createElement("input");
  detailsInput.classList.add("task-details");
  detailsInput.setAttribute("type", "text");
  detailsInput.setAttribute("name", "task-details");
  detailsInput.setAttribute("placeholder", "Optional Details of task");

  const dateDueLabel = document.createElement("label");
  dateDueLabel.setAttribute("for", "date-due");

  const dateDueInput = document.createElement("input");
  dateDueInput.setAttribute("type", "date");
  dateDueInput.setAttribute("name", "date-due");
  dateDueInput.setAttribute("id", "date-due");
  dateDueInput.required = true;

  dateDueLabel.textContent = "Set Task Due Date: ";
  dateDueLabel.appendChild(dateDueInput);

  //priority label
  const priorityLabel = document.createElement("label");
  priorityLabel.classList.add("priority-fm");
  priorityLabel.textContent = "Priority:";
  //
  const lowInput = document.createElement("input");
  lowInput.setAttribute("type", "radio");
  lowInput.setAttribute("name", "priority");
  lowInput.setAttribute("id", "low");
  lowInput.setAttribute("value", "low");
  lowInput.required = true;
  lowInput.addEventListener("change", handlePriorityChange);

  const lowLabel = document.createElement("label");
  lowLabel.classList.add("priority-label", "low-fm");
  lowLabel.setAttribute("for", "low");
  lowLabel.textContent = "Low";
  //
  const mediumInput = document.createElement("input");
  mediumInput.setAttribute("type", "radio");
  mediumInput.setAttribute("name", "priority");
  mediumInput.setAttribute("id", "medium");
  mediumInput.setAttribute("value", "medium");
  mediumInput.required = true;
  mediumInput.addEventListener("change", handlePriorityChange);

  const mediumLabel = document.createElement("label");
  mediumLabel.classList.add("priority-label", "medium-fm");
  mediumLabel.setAttribute("for", "medium");
  mediumLabel.textContent = "Medium";
  //
  const highInput = document.createElement("input");
  highInput.setAttribute("type", "radio");
  highInput.setAttribute("name", "priority");
  highInput.setAttribute("id", "high");
  highInput.setAttribute("value", "high");
  highInput.required = true;
  highInput.addEventListener("change", handlePriorityChange);

  const highLabel = document.createElement("label");
  highLabel.classList.add("priority-label", "high-fm");
  highLabel.setAttribute("for", "high");
  highLabel.textContent = "High";

  priorityLabel.appendChild(lowInput);
  priorityLabel.appendChild(lowLabel);
  priorityLabel.appendChild(mediumInput);
  priorityLabel.appendChild(mediumLabel);
  priorityLabel.appendChild(highInput);
  priorityLabel.appendChild(highLabel);

  //submit button

  const submitTaskBtn = document.createElement("input");
  submitTaskBtn.setAttribute("type", "submit");
  submitTaskBtn.setAttribute("value", "submit");
  submitTaskBtn.setAttribute("id", "submit-task");

  // append elements to form
  addTaskForm.appendChild(label);
  addTaskForm.appendChild(select);
  addTaskForm.appendChild(titleInput);
  addTaskForm.appendChild(detailsInput);
  addTaskForm.appendChild(dateDueLabel);
  addTaskForm.appendChild(priorityLabel);
  addTaskForm.appendChild(submitTaskBtn);

  // add event listener to handle form submission
  addTaskForm.addEventListener("submit", _handleForms__WEBPACK_IMPORTED_MODULE_0__["default"]);

  document.querySelector(".main").appendChild(addTaskForm);
}

// Function to handle radio input change
function handlePriorityChange(event) {
  const target = event.target;
  const priorityLabels = document.querySelectorAll(".priority-label");

  priorityLabels.forEach((label) => {
    label.classList.remove(
      "low-fm-active",
      "medium-fm-active",
      "high-fm-active"
    );
  });

  // Add active class based on the selected priority radio input
  if (target.id === "low" && target.checked) {
    document.querySelector(".low-fm").classList.add("low-fm-active");
  } else if (target.id === "medium" && target.checked) {
    document.querySelector(".medium-fm").classList.add("medium-fm-active");
  } else if (target.id === "high" && target.checked) {
    document.querySelector(".high-fm").classList.add("high-fm-active");
  }
}

// EDIT TASK FORM
function editTaskForm(taskID) {
  const taskToEdit = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getTask)(taskID);
  const taskProject = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getTaskProject)(taskID);

  createTaskForm();

  document.querySelector(".add-task-form-label").textContent = "Edit Task";
  document.querySelector("#set-project").value = taskProject.title;
  document.querySelector(".task-title").value = taskToEdit.title;
  document.querySelector(".task-details").value = taskToEdit.details;
  document.querySelector("#date-due").valueAsDate = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.dateStringToObject)(
    taskToEdit.dateDue
  );
  document.getElementById(taskToEdit.priority.toLowerCase()).checked = true;
  document
    .getElementById(taskToEdit.priority.toLowerCase())
    .dispatchEvent(new Event("change"));

  document
    .querySelector("#add-task-form")
    .removeEventListener("submit", _handleForms__WEBPACK_IMPORTED_MODULE_0__["default"]);
  document
    .querySelector("#add-task-form")
    .addEventListener("submit", function (event) {
      const formData = new FormData(this);

      (0,_handleForms__WEBPACK_IMPORTED_MODULE_0__.handleTaskEdit)(formData, taskID);
      // event.preventDefault();
      this.reset();
    });
}

// CREATE NOTE FORM

function addNoteForm() {
  document.querySelector(".main").innerHTML = "";

  const addNoteForm = document.createElement("form");
  addNoteForm.setAttribute("id", "add-note-form");
  addNoteForm.setAttribute("action", "#");

  const label = document.createElement("label");
  label.classList.add("add-note-form-label");
  label.setAttribute("for", "add-note-form");
  label.textContent = "Add Note";

  const titleInput = document.createElement("input");
  titleInput.classList.add("note-title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "note-title");
  titleInput.setAttribute("placeholder", "Note Title");
  titleInput.required = true;

  const detailInput = document.createElement("textarea");
  detailInput.setAttribute("name", "note-details");
  detailInput.setAttribute("id", "note-details");
  detailInput.setAttribute("cols", "30");
  detailInput.setAttribute("rows", "10");
  detailInput.setAttribute("placeholder", "Note Details");
  detailInput.required = true;

  const submitNoteBtn = document.createElement("input");
  submitNoteBtn.setAttribute("type", "submit");
  submitNoteBtn.setAttribute("value", "submit");
  submitNoteBtn.setAttribute("id", "submit-note");

  //
  addNoteForm.appendChild(label);
  addNoteForm.appendChild(titleInput);
  addNoteForm.appendChild(detailInput);
  addNoteForm.appendChild(submitNoteBtn);

  // add event listener to handle note form submission
  addNoteForm.addEventListener("submit", function (event) {
    const formData = new FormData(this);

    (0,_handleForms__WEBPACK_IMPORTED_MODULE_0__.handleNoteSubmit)(formData);
    // event.preventDefault();

    addNoteForm.reset();
  });

  //
  document.querySelector(".main").appendChild(addNoteForm);
}

// CREATE PROJECT FORM

function addProjectForm() {
  document.querySelector(".main").innerHTML = "";

  const addProjectForm = document.createElement("form");
  addProjectForm.setAttribute("id", "add-project-form");
  addProjectForm.setAttribute("action", "#");

  const label = document.createElement("label");
  label.classList.add("add-project-form-label");
  label.setAttribute("for", "add-project-form");
  label.textContent = "Create New Project";

  const titleInput = document.createElement("input");
  titleInput.classList.add("project-title");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "project-title");
  titleInput.setAttribute("placeholder", "Project Title");
  titleInput.required = true;

  const submitProjectBtn = document.createElement("input");
  submitProjectBtn.setAttribute("type", "submit");
  submitProjectBtn.setAttribute("value", "submit");
  submitProjectBtn.setAttribute("id", "submit-project");

  //
  addProjectForm.appendChild(label);
  addProjectForm.appendChild(titleInput);
  addProjectForm.appendChild(submitProjectBtn);

  // add event listener to handle project form submission
  addProjectForm.addEventListener("submit", function (event) {
    const formData = new FormData(this);

    (0,_handleForms__WEBPACK_IMPORTED_MODULE_0__.handleProjectSubmit)(formData);
    // event.preventDefault();

    addProjectForm.reset();
  });

  //
  document.querySelector(".main").appendChild(addProjectForm);
}


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
  const container = document.querySelector("#container");

  renderLeftNav();
  renderMain();
  renderFooter();
  (0,_loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadAllTasks)();
}

function renderLeftNav() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  container.appendChild(content);

  const leftNav = document.createElement("div");
  leftNav.classList.add("left-nav", "open");

  renderHeader();
  renderNavItems();

  function renderHeader() {
    const logoUrl = "./images/icon.png";

    const header = document.createElement("header");

    const headerTitle = document.createElement("div");
    headerTitle.classList.add("title");

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.setAttribute("alt", "logo");
    logo.setAttribute("src", logoUrl);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task");
    addTaskBtn.setAttribute("type", "button");
    addTaskBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add task`;
    addTaskBtn.addEventListener("click", _loadForms__WEBPACK_IMPORTED_MODULE_1__["default"]);

    headerTitle.appendChild(logo);
    headerTitle.appendChild(addTaskBtn);

    header.appendChild(headerTitle);

    leftNav.appendChild(header);
  }

  function renderNavItems() {
    // ALL TASKS
    const allTasksCont = document.createElement("div");
    allTasksCont.classList.add("all-tasks", "nav-item");
    allTasksCont.addEventListener("click", _loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadAllTasks);

    const allTasksIcon = document.createElement("i");
    allTasksIcon.classList.add("fa-solid", "fa-list-check", "nav-icon");

    const allTasksTitle = document.createElement("div");
    allTasksTitle.classList.add("item");
    allTasksTitle.textContent = "All Tasks";

    const allTasksCount = document.createElement("span");
    allTasksCount.classList.add("count");
    allTasksCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getAllTasksCount)();

    allTasksCont.appendChild(allTasksIcon);
    allTasksCont.appendChild(allTasksTitle);
    allTasksCont.appendChild(allTasksCount);

    // FAVORITES
    const favoritesCont = document.createElement("div");
    favoritesCont.classList.add("favorites", "nav-item");
    favoritesCont.addEventListener("click", _loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadFavoriteTasks);

    const favoritesIcon = document.createElement("i");
    favoritesIcon.classList.add("fa-solid", "fa-star", "nav-icon");

    const favoritesTitle = document.createElement("div");
    favoritesTitle.classList.add("item");
    favoritesTitle.textContent = "Favorites";

    const favoritesCount = document.createElement("span");
    favoritesCount.classList.add("count");
    favoritesCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getFavoriteTasksCount)();

    favoritesCont.appendChild(favoritesIcon);
    favoritesCont.appendChild(favoritesTitle);
    favoritesCont.appendChild(favoritesCount);

    // PROJECTS
    const projectsCont = document.createElement("div");
    projectsCont.classList.add("projects", "nav-item");

    const projectsLeftGp = document.createElement("div");
    projectsLeftGp.classList.add("projects-left-gp");

    const projectsIcon = document.createElement("i");
    projectsIcon.classList.add("fa-solid", "fa-layer-group", "nav-icon");

    const projectsTitle = document.createElement("div");
    projectsTitle.classList.add("item");
    projectsTitle.textContent = "Projects";

    const projectsCount = document.createElement("span");
    projectsCount.classList.add("count");
    projectsCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getAllProjectsCount)();

    projectsLeftGp.appendChild(projectsIcon);
    projectsLeftGp.appendChild(projectsTitle);
    projectsLeftGp.appendChild(projectsCount);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("add-project-btn");
    addProjectBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 add-note-btn"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`;
    addProjectBtn.addEventListener("click", _loadForms__WEBPACK_IMPORTED_MODULE_1__.addProjectForm);

    projectsCont.appendChild(projectsLeftGp);
    projectsCont.appendChild(addProjectBtn);

    // PROJECTS LIST
    const projectsListCont = document.createElement("div");
    projectsListCont.classList.add("projects-title", "nav-item");

    // load project list elements dynamically from projects list /////////
    let projectsList = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getAllProjectTitles)();

    projectsList.forEach((project) => {
      const projectEle = document.createElement("div");
      projectEle.classList.add("project");
      projectEle.textContent = project.title;
      projectEle.addEventListener("click", function () {
        (0,_loadTasks__WEBPACK_IMPORTED_MODULE_0__.loadProjectTasks)(project.id);
      });

      const projectEleCount = document.createElement("span");
      projectEleCount.classList.add("count");
      projectEleCount.textContent = (0,_taskManager__WEBPACK_IMPORTED_MODULE_2__.getProjectTaskCount)(project.id); //

      projectEle.appendChild(projectEleCount);

      projectsListCont.appendChild(projectEle);
    });

    // NOTES
    const notesCont = document.createElement("div");
    notesCont.classList.add("notes", "nav-item");

    const notesLeftGp = document.createElement("div");
    notesLeftGp.classList.add("notes-left-gp");

    const notesIcon = document.createElement("i");
    notesIcon.classList.add("fa-solid", "fa-note-sticky", "nav-icon");

    const notesTitle = document.createElement("div");
    notesTitle.classList.add("item");
    notesTitle.textContent = "Notes";

    const notesCount = document.createElement("span");
    notesCount.classList.add("count");
    notesCount.textContent = "";

    notesLeftGp.appendChild(notesIcon);
    notesLeftGp.appendChild(notesTitle);
    notesLeftGp.appendChild(notesCount);

    const addNoteBtn = document.createElement("button");
    addNoteBtn.classList.add("add-note-btn");
    addNoteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 add-note-btn"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`;
    addNoteBtn.addEventListener("click", _loadForms__WEBPACK_IMPORTED_MODULE_1__.addNoteForm);

    notesCont.appendChild(notesLeftGp);
    notesCont.appendChild(addNoteBtn);

    // ATTACH NAV ITEMS TO LEFT NAV

    leftNav.appendChild(allTasksCont);
    leftNav.appendChild(favoritesCont);
    leftNav.appendChild(projectsCont);
    leftNav.appendChild(projectsListCont);
    leftNav.appendChild(notesCont);
  }

  content.appendChild(leftNav);
}

function renderMain() {
  const main = document.createElement("div");
  main.classList.add("main");

  content.appendChild(main);

  // loadTask(main);

  // document.querySelector('#content').appendChild(main);
}

function renderFooter() {
  const user = "WodPachua";
  const url = "https://github.com/WodPachua/";

  const footer = document.createElement("footer");

  const githubUser = document.createElement("a");
  githubUser.textContent = user;
  githubUser.setAttribute("href", url);

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", url);
  githubLink.setAttribute("target", "_blank");
  githubLink.classList.add("github-link");

  const githubIcon = document.createElement("span");
  githubIcon.classList.add("fab", "fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(githubUser);
  footer.appendChild(githubLink);

  container.appendChild(footer);
}


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
/* harmony import */ var _loadForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadForms */ "./src/loadForms.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");



function loadAllTasks() {
  document.querySelector(".main").innerHTML = "";

  const allTasks = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__["default"])();

  allTasks.map((task) => {
    loadTask(task.title, task.details, task.dateDue, task.priority, task.id);
  });
}

function loadFavoriteTasks() {
  document.querySelector(".main").innerHTML = "";

  const favoriteTasks = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getFavoriteTasks)();

  favoriteTasks.map((task) => {
    loadTask(task.title, task.details, task.dateDue, task.priority, task.id);
  });
}

// refactor to load project tasks dynamically ////////////////////////////////////////////############
function loadProjectTasks(projectID) {
  document.querySelector(".main").innerHTML = "";

  const projectTasks = (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getProjectTasks)(projectID);

  projectTasks.map((task) => {
    loadTask(task.title, task.details, task.dateDue, task.priority, task.id);
  });
}

function loadTask(title, detail, dateDue, priority, taskID) {
  const taskCont = document.createElement("div");
  taskCont.classList.add("task");

  // left group
  const taskLeftGp = document.createElement("div");
  taskLeftGp.classList.add("left-group");

  const taskStatus = document.createElement("div");
  taskStatus.classList.add("status");

  const statusInput = document.createElement("input");
  statusInput.setAttribute("type", "checkbox");
  statusInput.setAttribute("name", "status");
  statusInput.setAttribute("id", "status");

  taskStatus.appendChild(statusInput);

  const taskDetailsCont = document.createElement("div");
  taskDetailsCont.classList.add("task-details");

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("title");
  taskTitle.textContent = title;

  const taskDetail = document.createElement("div");
  taskDetail.classList.add("details");
  taskDetail.textContent = detail.slice(0, 35) + "...";

  const mediaQuery = window.matchMedia("(min-width: 950px)");
  mediaQuery.addListener((event) => {
    if (event.matches) {
      taskDetail.textContent = detail.slice(0, 30) + "...";
      taskTitle.textContent = title.slice(0, 35) + "...";
    } else {
      taskDetail.textContent = detail.slice(0, 15) + "...";
      taskTitle.textContent = title.slice(0, 15) + "...";
    }
  });

  taskDetailsCont.appendChild(taskTitle);
  taskDetailsCont.appendChild(taskDetail);

  taskLeftGp.appendChild(taskStatus);
  taskLeftGp.appendChild(taskDetailsCont);

  // right group
  const taskRightGp = document.createElement("div");
  taskRightGp.classList.add("right-group");

  const taskDueDate = document.createElement("div");
  taskDueDate.classList.add("date-due");
  taskDueDate.textContent = dateDue;

  const taskPriority = document.createElement("div");
  taskPriority.classList.add("priority", `${priority.toLowerCase()}`);
  taskPriority.textContent =
    priority === "Medium" || priority === "medium" ? "Med" : priority;

  const editTaskBtn = document.createElement("button");
  editTaskBtn.classList.add("edit");
  editTaskBtn.setAttribute("id", taskID);
  // add event listener to edit task
  editTaskBtn.addEventListener("click", function () {
    (0,_loadForms__WEBPACK_IMPORTED_MODULE_0__.editTaskForm)(taskID);
    // location.reload();
  });

  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-edit");

  editTaskBtn.appendChild(editIcon);

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.classList.add("delete");
  deleteTaskBtn.setAttribute("id", taskID);
  // add event listener to delete task
  deleteTaskBtn.addEventListener("click", function () {
    (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskID);
    location.reload();
  });

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");

  deleteTaskBtn.appendChild(deleteIcon);

  taskRightGp.appendChild(taskDueDate);
  taskRightGp.appendChild(taskPriority);
  taskRightGp.appendChild(editTaskBtn);
  taskRightGp.appendChild(deleteTaskBtn);
  //

  taskCont.appendChild(taskLeftGp);
  taskCont.appendChild(taskRightGp);

  document.querySelector(".main").appendChild(taskCont);
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
/* harmony export */   dateStringToObject: () => (/* binding */ dateStringToObject),
/* harmony export */   "default": () => (/* binding */ getAllTasks),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getAllProjectTitles: () => (/* binding */ getAllProjectTitles),
/* harmony export */   getAllProjectsCount: () => (/* binding */ getAllProjectsCount),
/* harmony export */   getAllTasksCount: () => (/* binding */ getAllTasksCount),
/* harmony export */   getFavoriteTasks: () => (/* binding */ getFavoriteTasks),
/* harmony export */   getFavoriteTasksCount: () => (/* binding */ getFavoriteTasksCount),
/* harmony export */   getProjectTaskCount: () => (/* binding */ getProjectTaskCount),
/* harmony export */   getProjectTasks: () => (/* binding */ getProjectTasks),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   getTaskProject: () => (/* binding */ getTaskProject),
/* harmony export */   saveTaskToAllProjects: () => (/* binding */ saveTaskToAllProjects)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const allProjectsTemplate = [
  {
    title: "default",
    id: "11",
    tasks: [
      {
        title: "Learn Spring",
        details: "Complete a project with Spring Framework",
        priority: "Medium",
        dateDue: "2024-08-25",
        favorite: false,
        status: true,
        id: "1",
      },
      {
        title: "Hibernate",
        details: "Do some project using Hibernate",
        priority: "High",
        dateDue: "2024-08-23",
        favorite: true,
        status: true,
        id: "2",
      },
      {
        title: "Learn React",
        details: "Understand props, state, lifecycle, hooks",
        priority: "Low",
        dateDue: "2024-08-21",
        favorite: false,
        status: true,
        id: "3",
      },
    ],
  },
  {
    title: "Code To Learn",
    id: "12",
    tasks: [
      {
        title: "Python",
        details: "Research about python and concepts",
        priority: "Medium",
        dateDue: "2024-08-16",
        favorite: true,
        status: true,
        id: "4",
      },
      {
        title: "Hibernate",
        details: "Do some project using Hibernate",
        priority: "High",
        dateDue: "2024-08-17",
        favorite: true,
        status: true,
        id: "5",
      },
    ],
  },
  {
    title: "Platforms",
    id: "13",
    tasks: [
      {
        title: "Python",
        details: "Research about python and concepts",
        priority: "Medium",
        dateDue: "2024-08-06",
        favorite: false,
        status: true,
        id: "6",
      },
      {
        title: "React",
        details: "Good topic to research",
        priority: "Low",
        dateDue: "2024-08-03",
        favorite: true,
        status: true,
        id: "7",
      },
    ],
  },
  {
    title: "New Test",
    id: "14",
    tasks: [],
  },
];

const STORAGE_KEY = "allProjects";

// Function to save allProjects TEMPLATE to local storage
function saveAllProjectsTemplateToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allProjectsTemplate));
}

// Function to load allProjects from local storage if available or else load template
function loadAllProjectsFromLocalStorage() {
  const projects = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (projects) {
    return projects;
  } else {
    saveAllProjectsTemplateToLocalStorage();

    return allProjectsTemplate;
  }
}

// #####-LOAD allProjects when the page is loaded
let allProjects = loadAllProjectsFromLocalStorage();

// #####-SAVE allProjects to local storage
function saveAllProjectsToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allProjects));
}

// Tasks factory function
function createTask(
  title,
  details,
  priority,
  dateDue,
  favorite,
  status = true,
  id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
) {
  return {
    title,
    details,
    priority,
    dateDue,
    favorite,
    status,
    status,
    id,
  };
}

// adds created task to Project
function saveTaskToAllProjects(newTask, projectTitle) {
  const taskProject = allProjects.find(
    (project) => project.title === projectTitle
  );

  taskProject.tasks.push(newTask);

  saveAllProjectsToLocalStorage();
}

// Creates NEW Project and adds to allProjects
function createAddProject(title) {
  let newProject = { title: title, id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(), tasks: [] };

  allProjects.push(newProject);
  saveAllProjectsToLocalStorage();
}

// DELETE task
function deleteTask(taskID) {
  allProjects.forEach((project) => {
    const tasks = project.tasks;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskID) {
        tasks.splice(i, 1);
        i--; // Adjust index to handle consecutive matches
      }
    }
  });

  saveAllProjectsToLocalStorage();
}

// EDIT task
function editTask(
  projectTitle,
  title,
  details,
  dateDue,
  priority,
  taskID
) {
  const taskProject = allProjects.find((project) =>
    project.tasks.some((task) => task.id === taskID)
  );

  const task = taskProject.tasks.find((task) => task.id === taskID);

  if (taskProject.title !== projectTitle) {
    const newEditedTask = createTask(
      title,
      details,
      priority,
      dateDue,
      false,
      true
    );

    saveTaskToAllProjects(newEditedTask, projectTitle);

    deleteTask(taskID);
  } else {
    task.title = title;
    task.details = details;
    task.dateDue = dateDue;
    task.priority = priority;

    saveAllProjectsToLocalStorage();
  }

  // Find the new project by title
  const newProject = allProjects.find(
    (project) => project.title === projectTitle
  );

  saveAllProjectsToLocalStorage();

  location.reload();
}

// return SPECIFIC task
function getTask(taskID) {
  const task = getAllTasks().filter((task) => task.id === taskID);
  return task[0];
}

// return ALL tasks
function getAllTasks() {
  let allTasks = [];

  allProjects.forEach((project) => {
    project.tasks.forEach((task) => {
      allTasks.push(task);
    });
  });

  // @@@@@@@@@@@@ ALTERNATIVE USING 'REDUCE' @@@@@@@@@@@@@@
  // return allProjects.reduce((tasks, project) => [...tasks, ...project.tasks], []);
  return allTasks;
}

// return task project title and ID object
function getTaskProject(taskID) {
  const taskProject = allProjects.find((project) =>
    project.tasks.some((task) => task.id === taskID)
  );

  return { title: taskProject.title, id: taskProject.id };
}

// return favorite tasks
function getFavoriteTasks() {
  return getAllTasks().filter((task) => task.favorite === true);
}

// return ALL tasks COUNT ########
function getAllTasksCount() {
  return getAllTasks().length;
}

// return favorite tasks COUNT #######
function getFavoriteTasksCount() {
  return getFavoriteTasks().length;
}

// return ALL Projects Title & ID List
function getAllProjectTitles() {
  let allProjectsTitles = [];

  allProjects.forEach((project) => {
    const projectObj = { title: project.title, id: project.id };
    allProjectsTitles.push(projectObj);
  });

  // @@@@@ ALTERNATIVE USING MAP
  //   return allProjects.map((project) => {projectTitle: project.title, projectID: project.id});
  return allProjectsTitles;
}

// return ALL PROJECTS COUNT #######
function getAllProjectsCount() {
  return getAllProjectTitles().length;
}

// return dynamically project Tasks /////////////////////////////////////////////////////
function getProjectTasks(projectID) {
  let gotProject = allProjects.filter((project) => project.id === projectID);

  return gotProject[0].tasks;
}

// return dynamically projects task COUNT #######
function getProjectTaskCount(projectID) {
  return getProjectTasks(projectID).length;
}

// get and parse date into date object
function dateStringToObject(dateString) {
  const dateComponents = dateString.split("-");

  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]) - 1; // Months are zero-based
  const day = parseInt(dateComponents[2]);

  const dateDue = new Date(year, month, day);

  return dateDue;
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



(0,_loadHome__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxNQUFNLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHVCQUF1QjtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFZO0FBQ2hCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFVO0FBQ2Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0RBQUk7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUCxxQkFBcUIsa0JBQWtCLGdEQUFJOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxHQUFHOztBQUVIO0FBQ0EsNENBQTRDLG1EQUFtRDtBQUMvRjtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O1VDclRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1k7O0FBRWxDLHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL3NyYy9oYW5kbGVGb3Jtcy5qcyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC8uL3NyYy9sb2FkRm9ybXMuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9zcmMvbG9hZEhvbWUuanMiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3QvLi9zcmMvbG9hZFRhc2tzLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vc3JjL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZW1iZXItbW9zZXMtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVtYmVyLW1vc2VzLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21lbWJlci1tb3Nlcy10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzE3M2Y3MTtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmMjliMzM7XG4gIC0tZGVmYXVsdC10cmFuc2l0aW9uOiBmaWxsIDAuMXMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMXMgZWFzZS1pbi1vdXQsXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQsXG4gICAgdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDBkdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmhlYWRlciB7XG4gIC8qIHBhZGRpbmc6IDI0cHg7ICovXG5cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWJlY2NhcHVycGxlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuI2NvbnRlbnQge1xuICAvKiBmbGV4OiAxOyAqL1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xuXG4gIGEge1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAuZmEtZ2l0aHViIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIC5mYS1naXRodWI6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xuICAgIH1cbiAgfVxufVxuXG4ubGVmdC1uYXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmYzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLm1haW4ge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgd2lkdGg6IDEwMGR2dztcbiAgbWluLXdpZHRoOiA0MTBweDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hdi1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5hbGwtdGFza3MsXG4uZmF2b3JpdGVzLFxuLm5vdGVzLFxuLnByb2plY3RzIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2QzZDNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYWUxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMjJweDtcbn1cblxuLm5vdGVzIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xufVxuXG4ubm90ZXMtbGVmdC1ncCxcbi5wcm9qZWN0cy1sZWZ0LWdwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC1ub3RlLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OGEzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLW5vdGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1YjY5NTtcbiAgY29sb3I6ICMwNzhhMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3RzLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5wcm9qZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdDpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5uYXYtaXRlbSA+IC5jb3VudCxcbi5ub3Rlcy1sZWZ0LWdwID4gLmNvdW50LFxuLnByb2plY3RzLWxlZnQtZ3AgPiAuY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MDg0O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QgPiAuY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc2ZDg4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogNXB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogVEFTS1MgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjM7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cbi50YXNrOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZVooKTtcbn1cblxuLmxlZnQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG59XG5cbi5yaWdodC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNTBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NzZkODg7XG59XG5cbi5kYXRlLWR1ZSB7XG4gIGNvbG9yOiAjZGExZTI4O1xufVxuXG4ucHJpb3JpdHkge1xuICB3aWR0aDogNTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YjdiZDtcbiAgY29sb3I6ICNmZjAwMGQ7XG59XG5cbi5tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkNmJlO1xuICBjb2xvcjogI2ZjN2MyMDtcbn1cblxuLmxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q2YmQ7XG4gIGNvbG9yOiAjMjRhMTQ4O1xufVxuXG4uZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNkYTFlMjg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWRpdCB7XG4gIGNvbG9yOiAjMTg3ZTM1O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uYWRkLXRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRhMTQ4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3ZTM1O1xufVxuXG4vKiBBREQgVEFTSyBGT1JNICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xuXG4jYWRkLXRhc2stZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cblxuaW5wdXQsXG5zZWxlY3QsXG5vcHRpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjVjMGNjO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNzhhMzM7XG59XG5cbiNzdWJtaXQtdGFzayxcbiNzdWJtaXQtbm90ZSxcbiNzdWJtaXQtcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNGExNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc3VibWl0LXRhc2s6aG92ZXIsXG4jc3VibWl0LW5vdGU6aG92ZXIsXG4jc3VibWl0LXByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3ZTM1O1xufVxuXG4uYWRkLXRhc2stZm9ybS1sYWJlbCxcbi5hZGQtbm90ZS1mb3JtLWxhYmVsLFxuLmFkZC1wcm9qZWN0LWZvcm0tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbiNkYXRlLWR1ZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucHJpb3JpdHktZm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIC8qIFRoaXMgaGlkZXMgdGhlIHJhZGlvIGJ1dHRvbnMgKi9cbiAgd2lkdGg6IDFweDtcbn1cblxuLnByaW9yaXR5LWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcmlvcml0eS1sYWJlbDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvdy1mbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5sb3ctZm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmxvdy1mbS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVkaXVtLWZtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ubWVkaXVtLWZtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4ubWVkaXVtLWZtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGlnaC1mbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmhpZ2gtZm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5oaWdoLWZtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBBREQgTk9URVMgRk9STSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xuXG4jYWRkLW5vdGUtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cblxudGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjVjMGNjO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNzhhMzM7XG59XG5cbi8qIEFERCBQUk9KRUNUIEZPUk0gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cblxuI2FkZC1wcm9qZWN0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuXG4gIC5kYXRlLWR1ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXYtaXRlbSwgLnByb2plY3Qge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cblxuICAubGVmdC1uYXYge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gIH1cblxuICAuYWRkLW5vdGUtYnRuIHtcbiAgICB3aWR0aDogMTdweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gIH1cblxuICAuYWRkLXRhc2sge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCOzs4QkFFNEI7QUFDOUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxvQkFBb0I7O0lBRXBCO01BQ0Us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QUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQSwyRkFBMkY7O0FBRTNGO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHNHQUFzRzs7QUFFdEc7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzE3M2Y3MTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjI5YjMzO1xcbiAgLS1kZWZhdWx0LXRyYW5zaXRpb246IGZpbGwgMC4xcyBlYXNlLWluLW91dCwgY29sb3IgMC4xcyBlYXNlLWluLW91dCxcXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMXMgZWFzZS1pbi1vdXQsXFxuICAgIHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDBkdmg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgLyogcGFkZGluZzogMjRweDsgKi9cXG5cXG4gIC5sb2dvIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWJlY2NhcHVycGxlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICAvKiBmbGV4OiAxOyAqL1xcbiAgaGVpZ2h0OiAxMDBkdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xcblxcbiAgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgLmZhLWdpdGh1YiB7XFxuICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgIC5mYS1naXRodWI6aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubGVmdC1uYXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHdpZHRoOiAxMDBkdnc7XFxuICBtaW4td2lkdGg6IDQxMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5uYXYtaWNvbiB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLmFsbC10YXNrcyxcXG4uZmF2b3JpdGVzLFxcbi5ub3RlcyxcXG4ucHJvamVjdHMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVyIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNkM2QzZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRhZTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xcbn1cXG5cXG4ubm90ZXMge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1yaWdodDogMjJweDtcXG59XFxuXFxuLm5vdGVzLWxlZnQtZ3AsXFxuLnByb2plY3RzLWxlZnQtZ3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtbm90ZS1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OGEzMztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hZGQtbm90ZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1YjY5NTtcXG4gIGNvbG9yOiAjMDc4YTMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm5hdi1pdGVtID4gLmNvdW50LFxcbi5ub3Rlcy1sZWZ0LWdwID4gLmNvdW50LFxcbi5wcm9qZWN0cy1sZWZ0LWdwID4gLmNvdW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjUwODQ7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QgPiAuY291bnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3NmQ4ODtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICB3aWR0aDogMTdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBUQVNLUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmMztcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHRyYW5zZm9ybTogc2NhbGVaKCk7XFxufVxcblxcbi5sZWZ0LWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5yaWdodC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzU3NmQ4ODtcXG59XFxuXFxuLmRhdGUtZHVlIHtcXG4gIGNvbG9yOiAjZGExZTI4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uaGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiN2JkO1xcbiAgY29sb3I6ICNmZjAwMGQ7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDZiZTtcXG4gIGNvbG9yOiAjZmM3YzIwO1xcbn1cXG5cXG4ubG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q2YmQ7XFxuICBjb2xvcjogIzI0YTE0ODtcXG59XFxuXFxuLmRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogI2RhMWUyODtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcbiAgY29sb3I6ICMxODdlMzU7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRhMTQ4O1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODdlMzU7XFxufVxcblxcbi8qIEFERCBUQVNLIEZPUk0gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuXFxuI2FkZC10YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNWMwY2M7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDc4YTMzO1xcbn1cXG5cXG4jc3VibWl0LXRhc2ssXFxuI3N1Ym1pdC1ub3RlLFxcbiNzdWJtaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRhMTQ4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc3VibWl0LXRhc2s6aG92ZXIsXFxuI3N1Ym1pdC1ub3RlOmhvdmVyLFxcbiNzdWJtaXQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3ZTM1O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybS1sYWJlbCxcXG4uYWRkLW5vdGUtZm9ybS1sYWJlbCxcXG4uYWRkLXByb2plY3QtZm9ybS1sYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbiNkYXRlLWR1ZSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LWZtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC8qIFRoaXMgaGlkZXMgdGhlIHJhZGlvIGJ1dHRvbnMgKi9cXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbDpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb3ctZm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5sb3ctZm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5sb3ctZm0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVkaXVtLWZtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5tZWRpdW0tZm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ubWVkaXVtLWZtLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdoLWZtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5oaWdoLWZtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZ2gtZm0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogQUREIE5PVEVTIEZPUk0gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG5cXG4jYWRkLW5vdGUtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNWMwY2M7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNzhhMzM7XFxufVxcblxcbi8qIEFERCBQUk9KRUNUIEZPUk0gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG5cXG4jYWRkLXByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcblxcbiAgLmRhdGUtZHVlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXYtaXRlbSwgLnByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgfVxcblxcbiAgLmxlZnQtbmF2IHtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC5hZGQtbm90ZS1idG4ge1xcbiAgICB3aWR0aDogMTdweDtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgfVxcblxcbiAgLmFkZC10YXNrIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQge1xuICBjcmVhdGVBZGRQcm9qZWN0LFxuICBjcmVhdGVUYXNrLFxuICBlZGl0VGFzayxcbiAgc2F2ZVRhc2tUb0FsbFByb2plY3RzLFxufSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVUYXNrU3VibWl0KGV2ZW50KSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuXG4gIC8vIGhhbmRsZVRhc2tTdWJtaXQoZm9ybURhdGEpO1xuICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIGFkZFRhc2tGb3JtLnJlc2V0KCk7XG5cbiAgY29uc3QgZm9ybURldGFpbHMgPSB7fTtcblxuICBmb3IgKGxldCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgIGZvcm1EZXRhaWxzW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBcInNldC1wcm9qZWN0XCI6IHByb2plY3RUaXRsZSxcbiAgICBcInRhc2stdGl0bGVcIjogdGl0bGUsXG4gICAgXCJ0YXNrLWRldGFpbHNcIjogZGV0YWlscyxcbiAgICBcImRhdGUtZHVlXCI6IGRhdGVEdWUsXG4gICAgcHJpb3JpdHksXG4gIH0gPSBmb3JtRGV0YWlscztcblxuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGV0YWlscywgcHJpb3JpdHksIGRhdGVEdWUsIGZhbHNlLCB0cnVlKTtcblxuICBzYXZlVGFza1RvQWxsUHJvamVjdHMobmV3VGFzaywgcHJvamVjdFRpdGxlKTtcblxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgLy8gbG9hZFByb2plY3RUYXNrcyhwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRhc2tFZGl0KGZvcm1EYXRhLCB0YXNrSUQpIHtcbiAgY29uc3QgZm9ybURldGFpbHMgPSB7fTtcblxuICBmb3IgKGxldCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgIGZvcm1EZXRhaWxzW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBcInNldC1wcm9qZWN0XCI6IHByb2plY3RUaXRsZSxcbiAgICBcInRhc2stdGl0bGVcIjogdGl0bGUsXG4gICAgXCJ0YXNrLWRldGFpbHNcIjogZGV0YWlscyxcbiAgICBcImRhdGUtZHVlXCI6IGRhdGVEdWUsXG4gICAgcHJpb3JpdHksXG4gIH0gPSBmb3JtRGV0YWlscztcblxuICBlZGl0VGFzayhwcm9qZWN0VGl0bGUsIHRpdGxlLCBkZXRhaWxzLCBkYXRlRHVlLCBwcmlvcml0eSwgdGFza0lEKTtcblxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgLy8gbG9hZFByb2plY3RUYXNrcyhwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5vdGVTdWJtaXQoZm9ybURhdGEpIHtcbiAgY29uc3QgZm9ybURldGFpbHMgPSB7fTtcblxuICBmb3IgKGxldCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgIGZvcm1EZXRhaWxzW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgfVxuXG4gIGNvbnNvbGUudGFibGUoZm9ybURldGFpbHMpO1xuICAvLyBOT1QgWUVUIElNUExFTUVOVEVEIEBAQEBAQEBAQEBAQEAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGZvcm1EYXRhKSB7XG4gIGNvbnN0IGZvcm1EZXRhaWxzID0ge307XG5cbiAgZm9yIChsZXQgcGFpciBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICBmb3JtRGV0YWlsc1twYWlyWzBdXSA9IHBhaXJbMV07XG4gIH1cblxuICBjb25zdCB7IFwicHJvamVjdC10aXRsZVwiOiB0aXRsZSB9ID0gZm9ybURldGFpbHM7XG5cbiAgY3JlYXRlQWRkUHJvamVjdCh0aXRsZSk7XG5cbiAgLy8gbG9hZFByb2plY3RUYXNrcyh0aXRsZSk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuIiwiLy8gQ1JFQVRFIFRBU0sgRk9STVxuXG5pbXBvcnQgaGFuZGxlVGFza1N1Ym1pdCwge1xuICBoYW5kbGVOb3RlU3VibWl0LFxuICBoYW5kbGVQcm9qZWN0U3VibWl0LFxuICBoYW5kbGVUYXNrRWRpdCxcbn0gZnJvbSBcIi4vaGFuZGxlRm9ybXNcIjtcbmltcG9ydCB7XG4gIGRhdGVTdHJpbmdUb09iamVjdCxcbiAgZ2V0QWxsUHJvamVjdFRpdGxlcyxcbiAgZ2V0VGFzayxcbiAgZ2V0VGFza1Byb2plY3QsXG59IGZyb20gXCIuL3Rhc2tNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWZvcm1cIik7XG4gIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIiNcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1mb3JtLWxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJhZGQtdGFzay1mb3JtXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXQtcHJvamVjdFwiKTtcbiAgc2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzZXQtcHJvamVjdFwiKTtcblxuICAvLyBkeW5hbWljYWxseSBnZW5lcmF0ZSBwcm9qZWN0IG9wdGlvbnMgZnJvbSBwcm9qZWN0cyBsaXN0XG4gIGxldCBwcm9qZWN0T3B0aW9ucyA9IGdldEFsbFByb2plY3RUaXRsZXMoKTtcblxuICBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAvLyBvcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb24udG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLmpvaW4oJy0nKSk7XG4gICAgb3B0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvcHRpb24udGl0bGUpO1xuICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb24udGl0bGU7XG5cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH0pO1xuXG4gIC8vXG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgVGl0bGVcIik7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGV0YWlsc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG4gIGRldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRldGFpbHNcIik7XG4gIGRldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk9wdGlvbmFsIERldGFpbHMgb2YgdGFza1wiKTtcblxuICBjb25zdCBkYXRlRHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRhdGVEdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlLWR1ZVwiKTtcblxuICBjb25zdCBkYXRlRHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUR1ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlLWR1ZVwiKTtcbiAgZGF0ZUR1ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZS1kdWVcIik7XG4gIGRhdGVEdWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgZGF0ZUR1ZUxhYmVsLnRleHRDb250ZW50ID0gXCJTZXQgVGFzayBEdWUgRGF0ZTogXCI7XG4gIGRhdGVEdWVMYWJlbC5hcHBlbmRDaGlsZChkYXRlRHVlSW5wdXQpO1xuXG4gIC8vcHJpb3JpdHkgbGFiZWxcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktZm1cIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAvL1xuICBjb25zdCBsb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbG93SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICBsb3dJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIGxvd0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93XCIpO1xuICBsb3dJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgbG93SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBsb3dJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVByaW9yaXR5Q2hhbmdlKTtcblxuICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbG93TGFiZWwuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxhYmVsXCIsIFwibG93LWZtXCIpO1xuICBsb3dMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dcIik7XG4gIGxvd0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgLy9cbiAgY29uc3QgbWVkaXVtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG1lZGl1bUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgbWVkaXVtSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBtZWRpdW1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVwiKTtcbiAgbWVkaXVtSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZWRpdW1cIik7XG4gIG1lZGl1bUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgbWVkaXVtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVQcmlvcml0eUNoYW5nZSk7XG5cbiAgY29uc3QgbWVkaXVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG1lZGl1bUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sYWJlbFwiLCBcIm1lZGl1bS1mbVwiKTtcbiAgbWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtXCIpO1xuICBtZWRpdW1MYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIC8vXG4gIGNvbnN0IGhpZ2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaGlnaElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgaGlnaElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgaGlnaElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFwiKTtcbiAgaGlnaElucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgaGlnaElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaGlnaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlUHJpb3JpdHlDaGFuZ2UpO1xuXG4gIGNvbnN0IGhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaGlnaExhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1sYWJlbFwiLCBcImhpZ2gtZm1cIik7XG4gIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoXCIpO1xuICBoaWdoTGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcblxuICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKGxvd0lucHV0KTtcbiAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG4gIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQobWVkaXVtSW5wdXQpO1xuICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKG1lZGl1bUxhYmVsKTtcbiAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChoaWdoSW5wdXQpO1xuICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG5cbiAgLy9zdWJtaXQgYnV0dG9uXG5cbiAgY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRUYXNrQnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0LXRhc2tcIik7XG5cbiAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIGZvcm1cbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc0lucHV0KTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUR1ZUxhYmVsKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG4pO1xuXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHJhZGlvIGlucHV0IGNoYW5nZVxuZnVuY3Rpb24gaGFuZGxlUHJpb3JpdHlDaGFuZ2UoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBwcmlvcml0eUxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHktbGFiZWxcIik7XG5cbiAgcHJpb3JpdHlMYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICBsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgXCJsb3ctZm0tYWN0aXZlXCIsXG4gICAgICBcIm1lZGl1bS1mbS1hY3RpdmVcIixcbiAgICAgIFwiaGlnaC1mbS1hY3RpdmVcIlxuICAgICk7XG4gIH0pO1xuXG4gIC8vIEFkZCBhY3RpdmUgY2xhc3MgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHByaW9yaXR5IHJhZGlvIGlucHV0XG4gIGlmICh0YXJnZXQuaWQgPT09IFwibG93XCIgJiYgdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvdy1mbVwiKS5jbGFzc0xpc3QuYWRkKFwibG93LWZtLWFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuaWQgPT09IFwibWVkaXVtXCIgJiYgdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lZGl1bS1mbVwiKS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtLWZtLWFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuaWQgPT09IFwiaGlnaFwiICYmIHRhcmdldC5jaGVja2VkKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdoLWZtXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWdoLWZtLWFjdGl2ZVwiKTtcbiAgfVxufVxuXG4vLyBFRElUIFRBU0sgRk9STVxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrRm9ybSh0YXNrSUQpIHtcbiAgY29uc3QgdGFza1RvRWRpdCA9IGdldFRhc2sodGFza0lEKTtcbiAgY29uc3QgdGFza1Byb2plY3QgPSBnZXRUYXNrUHJvamVjdCh0YXNrSUQpO1xuXG4gIGNyZWF0ZVRhc2tGb3JtKCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtLWxhYmVsXCIpLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXQtcHJvamVjdFwiKS52YWx1ZSA9IHRhc2tQcm9qZWN0LnRpdGxlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikudmFsdWUgPSB0YXNrVG9FZGl0LnRpdGxlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsc1wiKS52YWx1ZSA9IHRhc2tUb0VkaXQuZGV0YWlscztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWR1ZVwiKS52YWx1ZUFzRGF0ZSA9IGRhdGVTdHJpbmdUb09iamVjdChcbiAgICB0YXNrVG9FZGl0LmRhdGVEdWVcbiAgKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza1RvRWRpdC5wcmlvcml0eS50b0xvd2VyQ2FzZSgpKS5jaGVja2VkID0gdHJ1ZTtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQodGFza1RvRWRpdC5wcmlvcml0eS50b0xvd2VyQ2FzZSgpKVxuICAgIC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1mb3JtXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVGFza1N1Ym1pdCk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZm9ybVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG5cbiAgICAgIGhhbmRsZVRhc2tFZGl0KGZvcm1EYXRhLCB0YXNrSUQpO1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9KTtcbn1cblxuLy8gQ1JFQVRFIE5PVEUgRk9STVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm90ZUZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGFkZE5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZE5vdGVGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLW5vdGUtZm9ybVwiKTtcbiAgYWRkTm90ZUZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImFkZC1ub3RlLWZvcm0tbGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImFkZC1ub3RlLWZvcm1cIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgTm90ZVwiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcIm5vdGUtdGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGUtdGl0bGVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3RlIFRpdGxlXCIpO1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBjb25zdCBkZXRhaWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGV0YWlsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGUtZGV0YWlsc1wiKTtcbiAgZGV0YWlsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlLWRldGFpbHNcIik7XG4gIGRldGFpbElucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKTtcbiAgZGV0YWlsSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjEwXCIpO1xuICBkZXRhaWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5vdGUgRGV0YWlsc1wiKTtcbiAgZGV0YWlsSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHN1Ym1pdE5vdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdE5vdGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0Tm90ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0Tm90ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC1ub3RlXCIpO1xuXG4gIC8vXG4gIGFkZE5vdGVGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgYWRkTm90ZUZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGFkZE5vdGVGb3JtLmFwcGVuZENoaWxkKGRldGFpbElucHV0KTtcbiAgYWRkTm90ZUZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Tm90ZUJ0bik7XG5cbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBub3RlIGZvcm0gc3VibWlzc2lvblxuICBhZGROb3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuXG4gICAgaGFuZGxlTm90ZVN1Ym1pdChmb3JtRGF0YSk7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFkZE5vdGVGb3JtLnJlc2V0KCk7XG4gIH0pO1xuXG4gIC8vXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmRDaGlsZChhZGROb3RlRm9ybSk7XG59XG5cbi8vIENSRUFURSBQUk9KRUNUIEZPUk1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qZWN0LWZvcm1cIik7XG4gIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIiNcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1mb3JtLWxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJhZGQtcHJvamVjdC1mb3JtXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgVGl0bGVcIik7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC1wcm9qZWN0XCIpO1xuXG4gIC8vXG4gIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3RCdG4pO1xuXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBoYW5kbGUgcHJvamVjdCBmb3JtIHN1Ym1pc3Npb25cbiAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcblxuICAgIGhhbmRsZVByb2plY3RTdWJtaXQoZm9ybURhdGEpO1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICB9KTtcblxuICAvL1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xufVxuIiwiaW1wb3J0IHsgbG9hZEFsbFRhc2tzLCBsb2FkUHJvamVjdFRhc2tzLCBsb2FkRmF2b3JpdGVUYXNrcyB9IGZyb20gXCIuL2xvYWRUYXNrc1wiO1xuaW1wb3J0IGNyZWF0ZVRhc2tGb3JtLCB7IGFkZE5vdGVGb3JtLCBhZGRQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2xvYWRGb3Jtc1wiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsUHJvamVjdFRpdGxlcyxcbiAgZ2V0QWxsUHJvamVjdHNDb3VudCxcbiAgZ2V0QWxsVGFza3NDb3VudCxcbiAgZ2V0UHJvamVjdFRhc2tDb3VudCxcbiAgZ2V0RmF2b3JpdGVUYXNrc0NvdW50LFxufSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5cbiAgcmVuZGVyTGVmdE5hdigpO1xuICByZW5kZXJNYWluKCk7XG4gIHJlbmRlckZvb3RlcigpO1xuICBsb2FkQWxsVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGVmdE5hdigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBjb25zdCBsZWZ0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdE5hdi5jbGFzc0xpc3QuYWRkKFwibGVmdC1uYXZcIiwgXCJvcGVuXCIpO1xuXG4gIHJlbmRlckhlYWRlcigpO1xuICByZW5kZXJOYXZJdGVtcygpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICBjb25zdCBsb2dvVXJsID0gXCIuL2ltYWdlcy9pY29uLnBuZ1wiO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibG9nb1wiKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsb2dvVXJsKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpO1xuICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsdWNpZGUgbHVjaWRlLXBsdXMgdy00XCI+PHBhdGggZD1cIk01IDEyaDE0XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTIgNXYxNFwiPjwvcGF0aD48L3N2Zz5BZGQgdGFza2A7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFza0Zvcm0pO1xuXG4gICAgaGVhZGVyVGl0bGUuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgaGVhZGVyVGl0bGUuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgbGVmdE5hdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTmF2SXRlbXMoKSB7XG4gICAgLy8gQUxMIFRBU0tTXG4gICAgY29uc3QgYWxsVGFza3NDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxUYXNrc0NvbnQuY2xhc3NMaXN0LmFkZChcImFsbC10YXNrc1wiLCBcIm5hdi1pdGVtXCIpO1xuICAgIGFsbFRhc2tzQ29udC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEFsbFRhc2tzKTtcblxuICAgIGNvbnN0IGFsbFRhc2tzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGFsbFRhc2tzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1saXN0LWNoZWNrXCIsIFwibmF2LWljb25cIik7XG5cbiAgICBjb25zdCBhbGxUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxUYXNrc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGFsbFRhc2tzVGl0bGUudGV4dENvbnRlbnQgPSBcIkFsbCBUYXNrc1wiO1xuXG4gICAgY29uc3QgYWxsVGFza3NDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGFsbFRhc2tzQ291bnQuY2xhc3NMaXN0LmFkZChcImNvdW50XCIpO1xuICAgIGFsbFRhc2tzQ291bnQudGV4dENvbnRlbnQgPSBnZXRBbGxUYXNrc0NvdW50KCk7XG5cbiAgICBhbGxUYXNrc0NvbnQuYXBwZW5kQ2hpbGQoYWxsVGFza3NJY29uKTtcbiAgICBhbGxUYXNrc0NvbnQuYXBwZW5kQ2hpbGQoYWxsVGFza3NUaXRsZSk7XG4gICAgYWxsVGFza3NDb250LmFwcGVuZENoaWxkKGFsbFRhc2tzQ291bnQpO1xuXG4gICAgLy8gRkFWT1JJVEVTXG4gICAgY29uc3QgZmF2b3JpdGVzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmF2b3JpdGVzQ29udC5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzXCIsIFwibmF2LWl0ZW1cIik7XG4gICAgZmF2b3JpdGVzQ29udC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEZhdm9yaXRlVGFza3MpO1xuXG4gICAgY29uc3QgZmF2b3JpdGVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGZhdm9yaXRlc0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtc3RhclwiLCBcIm5hdi1pY29uXCIpO1xuXG4gICAgY29uc3QgZmF2b3JpdGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZhdm9yaXRlc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGZhdm9yaXRlc1RpdGxlLnRleHRDb250ZW50ID0gXCJGYXZvcml0ZXNcIjtcblxuICAgIGNvbnN0IGZhdm9yaXRlc0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZmF2b3JpdGVzQ291bnQuY2xhc3NMaXN0LmFkZChcImNvdW50XCIpO1xuICAgIGZhdm9yaXRlc0NvdW50LnRleHRDb250ZW50ID0gZ2V0RmF2b3JpdGVUYXNrc0NvdW50KCk7XG5cbiAgICBmYXZvcml0ZXNDb250LmFwcGVuZENoaWxkKGZhdm9yaXRlc0ljb24pO1xuICAgIGZhdm9yaXRlc0NvbnQuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzVGl0bGUpO1xuICAgIGZhdm9yaXRlc0NvbnQuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzQ291bnQpO1xuXG4gICAgLy8gUFJPSkVDVFNcbiAgICBjb25zdCBwcm9qZWN0c0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzQ29udC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIiwgXCJuYXYtaXRlbVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RzTGVmdEdwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0xlZnRHcC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtbGVmdC1ncFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHByb2plY3RzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1sYXllci1ncm91cFwiLCBcIm5hdi1pY29uXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgY29uc3QgcHJvamVjdHNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RzQ291bnQuY2xhc3NMaXN0LmFkZChcImNvdW50XCIpO1xuICAgIHByb2plY3RzQ291bnQudGV4dENvbnRlbnQgPSBnZXRBbGxQcm9qZWN0c0NvdW50KCk7XG5cbiAgICBwcm9qZWN0c0xlZnRHcC5hcHBlbmRDaGlsZChwcm9qZWN0c0ljb24pO1xuICAgIHByb2plY3RzTGVmdEdwLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuICAgIHByb2plY3RzTGVmdEdwLmFwcGVuZENoaWxkKHByb2plY3RzQ291bnQpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICAgIGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImx1Y2lkZSBsdWNpZGUtcGx1cyB3LTQgYWRkLW5vdGUtYnRuXCI+PHBhdGggZD1cIk01IDEyaDE0XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTIgNXYxNFwiPjwvcGF0aD48L3N2Zz5gO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RGb3JtKTtcblxuICAgIHByb2plY3RzQ29udC5hcHBlbmRDaGlsZChwcm9qZWN0c0xlZnRHcCk7XG4gICAgcHJvamVjdHNDb250LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gICAgLy8gUFJPSkVDVFMgTElTVFxuICAgIGNvbnN0IHByb2plY3RzTGlzdENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzTGlzdENvbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXRpdGxlXCIsIFwibmF2LWl0ZW1cIik7XG5cbiAgICAvLyBsb2FkIHByb2plY3QgbGlzdCBlbGVtZW50cyBkeW5hbWljYWxseSBmcm9tIHByb2plY3RzIGxpc3QgLy8vLy8vLy8vXG4gICAgbGV0IHByb2plY3RzTGlzdCA9IGdldEFsbFByb2plY3RUaXRsZXMoKTtcblxuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3RFbGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICBwcm9qZWN0RWxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgIHByb2plY3RFbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZFByb2plY3RUYXNrcyhwcm9qZWN0LmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcm9qZWN0RWxlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHByb2plY3RFbGVDb3VudC5jbGFzc0xpc3QuYWRkKFwiY291bnRcIik7XG4gICAgICBwcm9qZWN0RWxlQ291bnQudGV4dENvbnRlbnQgPSBnZXRQcm9qZWN0VGFza0NvdW50KHByb2plY3QuaWQpOyAvL1xuXG4gICAgICBwcm9qZWN0RWxlLmFwcGVuZENoaWxkKHByb2plY3RFbGVDb3VudCk7XG5cbiAgICAgIHByb2plY3RzTGlzdENvbnQuYXBwZW5kQ2hpbGQocHJvamVjdEVsZSk7XG4gICAgfSk7XG5cbiAgICAvLyBOT1RFU1xuICAgIGNvbnN0IG5vdGVzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZXNDb250LmNsYXNzTGlzdC5hZGQoXCJub3Rlc1wiLCBcIm5hdi1pdGVtXCIpO1xuXG4gICAgY29uc3Qgbm90ZXNMZWZ0R3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzTGVmdEdwLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1sZWZ0LWdwXCIpO1xuXG4gICAgY29uc3Qgbm90ZXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgbm90ZXNJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW5vdGUtc3RpY2t5XCIsIFwibmF2LWljb25cIik7XG5cbiAgICBjb25zdCBub3Rlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3Rlc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIG5vdGVzVGl0bGUudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG5cbiAgICBjb25zdCBub3Rlc0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbm90ZXNDb3VudC5jbGFzc0xpc3QuYWRkKFwiY291bnRcIik7XG4gICAgbm90ZXNDb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBub3Rlc0xlZnRHcC5hcHBlbmRDaGlsZChub3Rlc0ljb24pO1xuICAgIG5vdGVzTGVmdEdwLmFwcGVuZENoaWxkKG5vdGVzVGl0bGUpO1xuICAgIG5vdGVzTGVmdEdwLmFwcGVuZENoaWxkKG5vdGVzQ291bnQpO1xuXG4gICAgY29uc3QgYWRkTm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkTm90ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLW5vdGUtYnRuXCIpO1xuICAgIGFkZE5vdGVCdG4uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImx1Y2lkZSBsdWNpZGUtcGx1cyB3LTQgYWRkLW5vdGUtYnRuXCI+PHBhdGggZD1cIk01IDEyaDE0XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTIgNXYxNFwiPjwvcGF0aD48L3N2Zz5gO1xuICAgIGFkZE5vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5vdGVGb3JtKTtcblxuICAgIG5vdGVzQ29udC5hcHBlbmRDaGlsZChub3Rlc0xlZnRHcCk7XG4gICAgbm90ZXNDb250LmFwcGVuZENoaWxkKGFkZE5vdGVCdG4pO1xuXG4gICAgLy8gQVRUQUNIIE5BViBJVEVNUyBUTyBMRUZUIE5BVlxuXG4gICAgbGVmdE5hdi5hcHBlbmRDaGlsZChhbGxUYXNrc0NvbnQpO1xuICAgIGxlZnROYXYuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzQ29udCk7XG4gICAgbGVmdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnQpO1xuICAgIGxlZnROYXYuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0Q29udCk7XG4gICAgbGVmdE5hdi5hcHBlbmRDaGlsZChub3Rlc0NvbnQpO1xuICB9XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChsZWZ0TmF2KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyBsb2FkVGFzayhtYWluKTtcblxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gIGNvbnN0IHVzZXIgPSBcIldvZFBhY2h1YVwiO1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9Xb2RQYWNodWEvXCI7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICBjb25zdCBnaXRodWJVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YlVzZXIudGV4dENvbnRlbnQgPSB1c2VyO1xuICBnaXRodWJVc2VyLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgZ2l0aHViTGluay5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWxpbmtcIik7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YlVzZXIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJpbXBvcnQgeyBlZGl0VGFza0Zvcm0gfSBmcm9tIFwiLi9sb2FkRm9ybXNcIjtcbmltcG9ydCBnZXRBbGxUYXNrcywge1xuICBnZXRQcm9qZWN0VGFza3MsXG4gIGdldEZhdm9yaXRlVGFza3MsXG4gIGRlbGV0ZVRhc2ssXG4gIGVkaXRUYXNrLFxufSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFsbFRhc2tzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBhbGxUYXNrcyA9IGdldEFsbFRhc2tzKCk7XG5cbiAgYWxsVGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgbG9hZFRhc2sodGFzay50aXRsZSwgdGFzay5kZXRhaWxzLCB0YXNrLmRhdGVEdWUsIHRhc2sucHJpb3JpdHksIHRhc2suaWQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGYXZvcml0ZVRhc2tzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBmYXZvcml0ZVRhc2tzID0gZ2V0RmF2b3JpdGVUYXNrcygpO1xuXG4gIGZhdm9yaXRlVGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgbG9hZFRhc2sodGFzay50aXRsZSwgdGFzay5kZXRhaWxzLCB0YXNrLmRhdGVEdWUsIHRhc2sucHJpb3JpdHksIHRhc2suaWQpO1xuICB9KTtcbn1cblxuLy8gcmVmYWN0b3IgdG8gbG9hZCBwcm9qZWN0IHRhc2tzIGR5bmFtaWNhbGx5IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RUYXNrcyhwcm9qZWN0SUQpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgcHJvamVjdFRhc2tzID0gZ2V0UHJvamVjdFRhc2tzKHByb2plY3RJRCk7XG5cbiAgcHJvamVjdFRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgIGxvYWRUYXNrKHRhc2sudGl0bGUsIHRhc2suZGV0YWlscywgdGFzay5kYXRlRHVlLCB0YXNrLnByaW9yaXR5LCB0YXNrLmlkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrKHRpdGxlLCBkZXRhaWwsIGRhdGVEdWUsIHByaW9yaXR5LCB0YXNrSUQpIHtcbiAgY29uc3QgdGFza0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQ29udC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAvLyBsZWZ0IGdyb3VwXG4gIGNvbnN0IHRhc2tMZWZ0R3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrTGVmdEdwLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWdyb3VwXCIpO1xuXG4gIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXNcIik7XG5cbiAgY29uc3Qgc3RhdHVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN0YXR1c0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgc3RhdHVzSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXR1c1wiKTtcbiAgc3RhdHVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGF0dXNcIik7XG5cbiAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZChzdGF0dXNJbnB1dCk7XG5cbiAgY29uc3QgdGFza0RldGFpbHNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0RldGFpbHNDb250LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgY29uc3QgdGFza0RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEZXRhaWwuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gIHRhc2tEZXRhaWwudGV4dENvbnRlbnQgPSBkZXRhaWwuc2xpY2UoMCwgMzUpICsgXCIuLi5cIjtcblxuICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NTBweClcIik7XG4gIG1lZGlhUXVlcnkuYWRkTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50Lm1hdGNoZXMpIHtcbiAgICAgIHRhc2tEZXRhaWwudGV4dENvbnRlbnQgPSBkZXRhaWwuc2xpY2UoMCwgMzApICsgXCIuLi5cIjtcbiAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlLnNsaWNlKDAsIDM1KSArIFwiLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tEZXRhaWwudGV4dENvbnRlbnQgPSBkZXRhaWwuc2xpY2UoMCwgMTUpICsgXCIuLi5cIjtcbiAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlLnNsaWNlKDAsIDE1KSArIFwiLi4uXCI7XG4gICAgfVxuICB9KTtcblxuICB0YXNrRGV0YWlsc0NvbnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgdGFza0RldGFpbHNDb250LmFwcGVuZENoaWxkKHRhc2tEZXRhaWwpO1xuXG4gIHRhc2tMZWZ0R3AuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG4gIHRhc2tMZWZ0R3AuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNDb250KTtcblxuICAvLyByaWdodCBncm91cFxuICBjb25zdCB0YXNrUmlnaHRHcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tSaWdodEdwLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1ncm91cFwiKTtcblxuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWR1ZVwiKTtcbiAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBkYXRlRHVlO1xuXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIiwgYCR7cHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gKTtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID1cbiAgICBwcmlvcml0eSA9PT0gXCJNZWRpdW1cIiB8fCBwcmlvcml0eSA9PT0gXCJtZWRpdW1cIiA/IFwiTWVkXCIgOiBwcmlvcml0eTtcblxuICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICBlZGl0VGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrSUQpO1xuICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWRpdCB0YXNrXG4gIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZWRpdFRhc2tGb3JtKHRhc2tJRCk7XG4gICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWVkaXRcIik7XG5cbiAgZWRpdFRhc2tCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFza0lEKTtcbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSB0YXNrXG4gIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGVUYXNrKHRhc2tJRCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS10cmFzaFwiKTtcblxuICBkZWxldGVUYXNrQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gIHRhc2tSaWdodEdwLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgdGFza1JpZ2h0R3AuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgdGFza1JpZ2h0R3AuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdG4pO1xuICB0YXNrUmlnaHRHcC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgLy9cblxuICB0YXNrQ29udC5hcHBlbmRDaGlsZCh0YXNrTGVmdEdwKTtcbiAgdGFza0NvbnQuYXBwZW5kQ2hpbGQodGFza1JpZ2h0R3ApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5hcHBlbmRDaGlsZCh0YXNrQ29udCk7XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcblxuY29uc3QgYWxsUHJvamVjdHNUZW1wbGF0ZSA9IFtcbiAge1xuICAgIHRpdGxlOiBcImRlZmF1bHRcIixcbiAgICBpZDogXCIxMVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkxlYXJuIFNwcmluZ1wiLFxuICAgICAgICBkZXRhaWxzOiBcIkNvbXBsZXRlIGEgcHJvamVjdCB3aXRoIFNwcmluZyBGcmFtZXdvcmtcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICAgIGRhdGVEdWU6IFwiMjAyNC0wOC0yNVwiLFxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiSGliZXJuYXRlXCIsXG4gICAgICAgIGRldGFpbHM6IFwiRG8gc29tZSBwcm9qZWN0IHVzaW5nIEhpYmVybmF0ZVwiLFxuICAgICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICAgIGRhdGVEdWU6IFwiMjAyNC0wOC0yM1wiLFxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBpZDogXCIyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJMZWFybiBSZWFjdFwiLFxuICAgICAgICBkZXRhaWxzOiBcIlVuZGVyc3RhbmQgcHJvcHMsIHN0YXRlLCBsaWZlY3ljbGUsIGhvb2tzXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgICBkYXRlRHVlOiBcIjIwMjQtMDgtMjFcIixcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGlkOiBcIjNcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvZGUgVG8gTGVhcm5cIixcbiAgICBpZDogXCIxMlwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlB5dGhvblwiLFxuICAgICAgICBkZXRhaWxzOiBcIlJlc2VhcmNoIGFib3V0IHB5dGhvbiBhbmQgY29uY2VwdHNcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICAgIGRhdGVEdWU6IFwiMjAyNC0wOC0xNlwiLFxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBpZDogXCI0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJIaWJlcm5hdGVcIixcbiAgICAgICAgZGV0YWlsczogXCJEbyBzb21lIHByb2plY3QgdXNpbmcgSGliZXJuYXRlXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgICAgZGF0ZUR1ZTogXCIyMDI0LTA4LTE3XCIsXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGlkOiBcIjVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBsYXRmb3Jtc1wiLFxuICAgIGlkOiBcIjEzXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUHl0aG9uXCIsXG4gICAgICAgIGRldGFpbHM6IFwiUmVzZWFyY2ggYWJvdXQgcHl0aG9uIGFuZCBjb25jZXB0c1wiLFxuICAgICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgICAgZGF0ZUR1ZTogXCIyMDI0LTA4LTA2XCIsXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBpZDogXCI2XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJSZWFjdFwiLFxuICAgICAgICBkZXRhaWxzOiBcIkdvb2QgdG9waWMgdG8gcmVzZWFyY2hcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICAgIGRhdGVEdWU6IFwiMjAyNC0wOC0wM1wiLFxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBpZDogXCI3XCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJOZXcgVGVzdFwiLFxuICAgIGlkOiBcIjE0XCIsXG4gICAgdGFza3M6IFtdLFxuICB9LFxuXTtcblxuY29uc3QgU1RPUkFHRV9LRVkgPSBcImFsbFByb2plY3RzXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIHNhdmUgYWxsUHJvamVjdHMgVEVNUExBVEUgdG8gbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gc2F2ZUFsbFByb2plY3RzVGVtcGxhdGVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzVGVtcGxhdGUpKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gbG9hZCBhbGxQcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2UgaWYgYXZhaWxhYmxlIG9yIGVsc2UgbG9hZCB0ZW1wbGF0ZVxuZnVuY3Rpb24gbG9hZEFsbFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSk7XG5cbiAgaWYgKHByb2plY3RzKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9IGVsc2Uge1xuICAgIHNhdmVBbGxQcm9qZWN0c1RlbXBsYXRlVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIHJldHVybiBhbGxQcm9qZWN0c1RlbXBsYXRlO1xuICB9XG59XG5cbi8vICMjIyMjLUxPQUQgYWxsUHJvamVjdHMgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWRcbmxldCBhbGxQcm9qZWN0cyA9IGxvYWRBbGxQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuLy8gIyMjIyMtU0FWRSBhbGxQcm9qZWN0cyB0byBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBzYXZlQWxsUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59XG5cbi8vIFRhc2tzIGZhY3RvcnkgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKFxuICB0aXRsZSxcbiAgZGV0YWlscyxcbiAgcHJpb3JpdHksXG4gIGRhdGVEdWUsXG4gIGZhdm9yaXRlLFxuICBzdGF0dXMgPSB0cnVlLFxuICBpZCA9IHV1aWQoKVxuKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGV0YWlscyxcbiAgICBwcmlvcml0eSxcbiAgICBkYXRlRHVlLFxuICAgIGZhdm9yaXRlLFxuICAgIHN0YXR1cyxcbiAgICBzdGF0dXMsXG4gICAgaWQsXG4gIH07XG59XG5cbi8vIGFkZHMgY3JlYXRlZCB0YXNrIHRvIFByb2plY3RcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFza1RvQWxsUHJvamVjdHMobmV3VGFzaywgcHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHRhc2tQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlXG4gICk7XG5cbiAgdGFza1Byb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcblxuICBzYXZlQWxsUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG4vLyBDcmVhdGVzIE5FVyBQcm9qZWN0IGFuZCBhZGRzIHRvIGFsbFByb2plY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdCh0aXRsZSkge1xuICBsZXQgbmV3UHJvamVjdCA9IHsgdGl0bGU6IHRpdGxlLCBpZDogdXVpZCgpLCB0YXNrczogW10gfTtcblxuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICBzYXZlQWxsUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xufVxuXG4vLyBERUxFVEUgdGFza1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lEKSB7XG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhc2tzW2ldLmlkID09PSB0YXNrSUQpIHtcbiAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07IC8vIEFkanVzdCBpbmRleCB0byBoYW5kbGUgY29uc2VjdXRpdmUgbWF0Y2hlc1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgc2F2ZUFsbFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuLy8gRURJVCB0YXNrXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2soXG4gIHByb2plY3RUaXRsZSxcbiAgdGl0bGUsXG4gIGRldGFpbHMsXG4gIGRhdGVEdWUsXG4gIHByaW9yaXR5LFxuICB0YXNrSURcbikge1xuICBjb25zdCB0YXNrUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSUQpXG4gICk7XG5cbiAgY29uc3QgdGFzayA9IHRhc2tQcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJRCk7XG5cbiAgaWYgKHRhc2tQcm9qZWN0LnRpdGxlICE9PSBwcm9qZWN0VGl0bGUpIHtcbiAgICBjb25zdCBuZXdFZGl0ZWRUYXNrID0gY3JlYXRlVGFzayhcbiAgICAgIHRpdGxlLFxuICAgICAgZGV0YWlscyxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgZGF0ZUR1ZSxcbiAgICAgIGZhbHNlLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzYXZlVGFza1RvQWxsUHJvamVjdHMobmV3RWRpdGVkVGFzaywgcHJvamVjdFRpdGxlKTtcblxuICAgIGRlbGV0ZVRhc2sodGFza0lEKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgdGFzay5kZXRhaWxzID0gZGV0YWlscztcbiAgICB0YXNrLmRhdGVEdWUgPSBkYXRlRHVlO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHNhdmVBbGxQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAvLyBGaW5kIHRoZSBuZXcgcHJvamVjdCBieSB0aXRsZVxuICBjb25zdCBuZXdQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlXG4gICk7XG5cbiAgc2F2ZUFsbFByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuLy8gcmV0dXJuIFNQRUNJRklDIHRhc2tcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrKHRhc2tJRCkge1xuICBjb25zdCB0YXNrID0gZ2V0QWxsVGFza3MoKS5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJRCk7XG4gIHJldHVybiB0YXNrWzBdO1xufVxuXG4vLyByZXR1cm4gQUxMIHRhc2tzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgbGV0IGFsbFRhc2tzID0gW107XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQEBAQEBAQEBAQEBAIEFMVEVSTkFUSVZFIFVTSU5HICdSRURVQ0UnIEBAQEBAQEBAQEBAQEBAXG4gIC8vIHJldHVybiBhbGxQcm9qZWN0cy5yZWR1Y2UoKHRhc2tzLCBwcm9qZWN0KSA9PiBbLi4udGFza3MsIC4uLnByb2plY3QudGFza3NdLCBbXSk7XG4gIHJldHVybiBhbGxUYXNrcztcbn1cblxuLy8gcmV0dXJuIHRhc2sgcHJvamVjdCB0aXRsZSBhbmQgSUQgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1Byb2plY3QodGFza0lEKSB7XG4gIGNvbnN0IHRhc2tQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZCgocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJRClcbiAgKTtcblxuICByZXR1cm4geyB0aXRsZTogdGFza1Byb2plY3QudGl0bGUsIGlkOiB0YXNrUHJvamVjdC5pZCB9O1xufVxuXG4vLyByZXR1cm4gZmF2b3JpdGUgdGFza3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZVRhc2tzKCkge1xuICByZXR1cm4gZ2V0QWxsVGFza3MoKS5maWx0ZXIoKHRhc2spID0+IHRhc2suZmF2b3JpdGUgPT09IHRydWUpO1xufVxuXG4vLyByZXR1cm4gQUxMIHRhc2tzIENPVU5UICMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVGFza3NDb3VudCgpIHtcbiAgcmV0dXJuIGdldEFsbFRhc2tzKCkubGVuZ3RoO1xufVxuXG4vLyByZXR1cm4gZmF2b3JpdGUgdGFza3MgQ09VTlQgIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlVGFza3NDb3VudCgpIHtcbiAgcmV0dXJuIGdldEZhdm9yaXRlVGFza3MoKS5sZW5ndGg7XG59XG5cbi8vIHJldHVybiBBTEwgUHJvamVjdHMgVGl0bGUgJiBJRCBMaXN0XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdFRpdGxlcygpIHtcbiAgbGV0IGFsbFByb2plY3RzVGl0bGVzID0gW107XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RPYmogPSB7IHRpdGxlOiBwcm9qZWN0LnRpdGxlLCBpZDogcHJvamVjdC5pZCB9O1xuICAgIGFsbFByb2plY3RzVGl0bGVzLnB1c2gocHJvamVjdE9iaik7XG4gIH0pO1xuXG4gIC8vIEBAQEBAIEFMVEVSTkFUSVZFIFVTSU5HIE1BUFxuICAvLyAgIHJldHVybiBhbGxQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtwcm9qZWN0VGl0bGU6IHByb2plY3QudGl0bGUsIHByb2plY3RJRDogcHJvamVjdC5pZH0pO1xuICByZXR1cm4gYWxsUHJvamVjdHNUaXRsZXM7XG59XG5cbi8vIHJldHVybiBBTEwgUFJPSkVDVFMgQ09VTlQgIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFByb2plY3RzQ291bnQoKSB7XG4gIHJldHVybiBnZXRBbGxQcm9qZWN0VGl0bGVzKCkubGVuZ3RoO1xufVxuXG4vLyByZXR1cm4gZHluYW1pY2FsbHkgcHJvamVjdCBUYXNrcyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0SUQpIHtcbiAgbGV0IGdvdFByb2plY3QgPSBhbGxQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJRCk7XG5cbiAgcmV0dXJuIGdvdFByb2plY3RbMF0udGFza3M7XG59XG5cbi8vIHJldHVybiBkeW5hbWljYWxseSBwcm9qZWN0cyB0YXNrIENPVU5UICMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0VGFza0NvdW50KHByb2plY3RJRCkge1xuICByZXR1cm4gZ2V0UHJvamVjdFRhc2tzKHByb2plY3RJRCkubGVuZ3RoO1xufVxuXG4vLyBnZXQgYW5kIHBhcnNlIGRhdGUgaW50byBkYXRlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVTdHJpbmdUb09iamVjdChkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVDb21wb25lbnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XG5cbiAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGVDb21wb25lbnRzWzBdKTtcbiAgY29uc3QgbW9udGggPSBwYXJzZUludChkYXRlQ29tcG9uZW50c1sxXSkgLSAxOyAvLyBNb250aHMgYXJlIHplcm8tYmFzZWRcbiAgY29uc3QgZGF5ID0gcGFyc2VJbnQoZGF0ZUNvbXBvbmVudHNbMl0pO1xuXG4gIGNvbnN0IGRhdGVEdWUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICByZXR1cm4gZGF0ZUR1ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2xvYWRIb21lXCI7XG5cbmxvYWRIb21lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=