"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_radio-channels_radio-channels_module_ts"],{

/***/ 6195:
/*!*****************************************************************!*\
  !*** ./src/app/radio-channels/radio-channels-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioChannelsPageRoutingModule": () => (/* binding */ RadioChannelsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _radio_channels_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-channels.page */ 4691);






const routes = [
    {
        path: '',
        component: _radio_channels_page__WEBPACK_IMPORTED_MODULE_0__.RadioChannelsPage
    }
];
let RadioChannelsPageRoutingModule = class RadioChannelsPageRoutingModule {
};
RadioChannelsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RadioChannelsPageRoutingModule);



/***/ }),

/***/ 4014:
/*!*********************************************************!*\
  !*** ./src/app/radio-channels/radio-channels.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioChannelsPageModule": () => (/* binding */ RadioChannelsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _radio_channels_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-channels-routing.module */ 6195);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);







let RadioChannelsPageModule = class RadioChannelsPageModule {
};
RadioChannelsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _radio_channels_routing_module__WEBPACK_IMPORTED_MODULE_0__.RadioChannelsPageRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        declarations: []
    })
], RadioChannelsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_radio-channels_radio-channels_module_ts.js.map