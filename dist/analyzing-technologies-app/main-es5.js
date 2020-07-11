function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tag-input/tag-input.component */
    "./src/app/tag-input/tag-input.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'analyzing-technologies-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tag-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_1__["TagInputComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["p[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tag-input/tag-input.component */
    "./src/app/tag-input/tag-input.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js"); // this is needed!


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([]), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _tag_input_tag_input_component__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([]), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/orgao.ts":
  /*!*********************************!*\
    !*** ./src/app/models/orgao.ts ***!
    \*********************************/

  /*! exports provided: Orgao */

  /***/
  function srcAppModelsOrgaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Orgao", function () {
      return Orgao;
    });

    var Orgao = function Orgao() {
      _classCallCheck(this, Orgao);
    };
    /***/

  },

  /***/
  "./src/app/services/orgao.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/orgao.service.ts ***!
    \*******************************************/

  /*! exports provided: OrgaoService */

  /***/
  function srcAppServicesOrgaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrgaoService", function () {
      return OrgaoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrgaoService =
    /*#__PURE__*/
    function () {
      function OrgaoService(http) {
        _classCallCheck(this, OrgaoService);

        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
      }

      _createClass(OrgaoService, [{
        key: "postEvento",
        value: function postEvento(orgaos) {
          var url = this.baseURL + "/api/v1/orgaos";
          return this.http.post(this.baseURL, orgaos);
        }
      }]);

      return OrgaoService;
    }();

    OrgaoService.ɵfac = function OrgaoService_Factory(t) {
      return new (t || OrgaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    OrgaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrgaoService,
      factory: OrgaoService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tag-input/tag-input.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/tag-input/tag-input.component.ts ***!
    \**************************************************/

  /*! exports provided: TagInputComponent */

  /***/
  function srcAppTagInputTagInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputComponent", function () {
      return TagInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_orgao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/orgao */
    "./src/app/models/orgao.ts");
    /* harmony import */


    var _services_orgao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/orgao.service */
    "./src/app/services/orgao.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return [13, 32, 188, 9, 191];
    };

    var TagInputComponent =
    /*#__PURE__*/
    function () {
      function TagInputComponent(orgaoService) {
        _classCallCheck(this, TagInputComponent);

        this.orgaoService = orgaoService;
        this.items = [];
        this.urls = [];
        this.splitPattern = new RegExp("[,;]");
        this.orgaos = new Array();
        this.html = "<span class=\"text-white\">Adicione os links independentemente ou cole todos podendo ser separdos com v\xEDrgula, espa\xE7o ou ponto e v\xEDrgula.</span>";
      }

      _createClass(TagInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onItemAdded",
        value: function onItemAdded(value) {
          var item = value.value;
          this.orgaos.push(this.addOrgao(item));
          console.log("Resultado: ", this.orgaos);
          this.urls.push();
        }
      }, {
        key: "addOrgao",
        value: function addOrgao(item) {
          var valores = item.split("-");
          var orgao = new _models_orgao__WEBPACK_IMPORTED_MODULE_1__["Orgao"]();

          if (valores) {
            orgao.nome = valores[0].trim();
            orgao.linkWebSite = valores[1].trim();
            orgao.status = false;
          }

          return orgao;
        }
      }, {
        key: "onItemRemove",
        value: function onItemRemove($event) {
          var indexValue = this.urls.indexOf($event);
          this.urls.splice(indexValue, 1);
        }
      }, {
        key: "salvarAlteracao",
        value: function salvarAlteracao() {
          this.orgaoService.postEvento(this.orgaos).subscribe(function (novoEvento) {
            console.log("teste >>>>> ", novoEvento); // this.toastr.success('Inserido com Sucesso!');
          }, function (error) {// this.toastr.error(`Erro ao inserir: ${error}`);
          });
        }
      }]);

      return TagInputComponent;
    }();

    TagInputComponent.ɵfac = function TagInputComponent_Factory(t) {
      return new (t || TagInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orgao_service__WEBPACK_IMPORTED_MODULE_2__["OrgaoService"]));
    };

    TagInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagInputComponent,
      selectors: [["app-tag-input"]],
      decls: 21,
      vars: 10,
      consts: [[1, "container-fluid"], [1, "navbar", "navbar-light", "bg-light", "d-flex", "justify-content-center"], ["href", "#", 1, "navbar-brand", "text-primary"], ["heading", "Clique para adicionar URL's dos sites"], [1, "force-to-the-down"], ["ngbTooltip", "Adicione os links independentemente ou cole todos podendo ser separdos com v\xEDrgula, ponto e v\xEDrgula.", "tooltipClass", "my-custom-class", "placement", "bottom", 3, "ngModel", "addOnPaste", "separatorKeyCodes", "modelAsStrings", "pasteSplitPattern", "theme", "ngModelChange", "onAdd", "onRemove"], [3, "autocompleteItems", "showDropdownIfEmpty", "dynamicUpdate"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
      template: function TagInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Analisador de sites p\xFAblicos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "accordion-group", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Adicione os link's seguindo o seguinte padr\xE3o: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "<nome do org\xE3o - link do website>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tag-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TagInputComponent_Template_tag_input_ngModelChange_17_listener($event) {
            return ctx.items = $event;
          })("onAdd", function TagInputComponent_Template_tag_input_onAdd_17_listener($event) {
            return ctx.onItemAdded($event);
          })("onRemove", function TagInputComponent_Template_tag_input_onRemove_17_listener($event) {
            return ctx.onItemRemove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tag-input-dropdown", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagInputComponent_Template_button_click_19_listener() {
            return ctx.salvarAlteracao();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("addOnPaste", true)("separatorKeyCodes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("modelAsStrings", true)("pasteSplitPattern", ctx.splitPattern)("theme", "bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteItems", ctx.items)("showDropdownIfEmpty", true)("dynamicUpdate", false);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionPanelComponent"], ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputDropdown"]],
      styles: [".force-to-the-bottom[_ngcontent-%COMP%] {\r\n  margin-top: 90vh;\r\n}\r\n\r\n.my-custom-class[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\r\n  background-color: darkgreen;\r\n  font-size: 125%;\r\n}\r\n\r\n.my-custom-class[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\r\n  border-top-color: darkgreen;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnLWlucHV0L3RhZy1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC90YWctaW5wdXQvdGFnLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yY2UtdG8tdGhlLWJvdHRvbSB7XHJcbiAgbWFyZ2luLXRvcDogOTB2aDtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyAudG9vbHRpcC1pbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxufVxyXG4ubXktY3VzdG9tLWNsYXNzIC5hcnJvdzo6YmVmb3JlIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tag-input",
          templateUrl: "./tag-input.component.html",
          styleUrls: ["./tag-input.component.css"]
        }]
      }], function () {
        return [{
          type: _services_orgao_service__WEBPACK_IMPORTED_MODULE_2__["OrgaoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseURL: "http://localhost:8080"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\dev\tcc\analyzing-technologies-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map