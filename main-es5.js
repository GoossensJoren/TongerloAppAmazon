function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
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
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-main-nav></app-main-nav>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_contact_contactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"12\">\r\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n      <agm-info-window [isOpen]=true>\r\n\r\n        <div>\r\n          <p class=\"infoWindowTitle\">LOCATIE :</p>\r\n          <p>Tongerlodorp 2260 Tongerlo, Antwerpen, België</p>\r\n        </div>\r\n\r\n      </agm-info-window>\r\n    </agm-marker>\r\n  </agm-map>\r\n\r\n  <div (click)=\"redirect('facebook')\" class=\"fbLogo socials-button\">Facebook</div>\r\n  <div (click)=\"redirect()\" class=\"instagramLogo socials-button\">Instagram</div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_footer_footerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"footerContainer\">\r\n    <div class=\"logo\"></div>\r\n   <div (click)=\"redirect()\" class=\"fbLogo\"></div>\r\n    <p class=\"copyright\">@2020 TVH</p>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": (
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_home_homeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<header class=\"topImage\">\r\n    <div class=\"mainText\">\r\n        <h1>Tongels Dorpsfeest 2026</h1>\r\n        <h2>8, 9 en & 10 mei</h2>\r\n    </div>\r\n</header>\r\n<mat-grid-list cols=\"4\" rowHeight=\"{{rowHeight}}\" (window:resize)=\"onResize($event)\" class=\"navContainer\">\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(info)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/feast.png\" alt=\"Info\" />\r\n            </div>\r\n            <p class=\"navInfo\">Nieuws</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(lineup)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/lineup.png\" alt=\"Line Up\" />\r\n            </div>\r\n            <p class=\"navInfo\">Programma</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(gallery)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/photo.png\" alt=\"Foto's\" />\r\n            </div>\r\n            <p class=\"navInfo\">Foto's</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(sponsors)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/sponsor.png\" alt=\"Sponsors\" />\r\n            </div>\r\n            <p class=\"navInfo\">Sponsors</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n<div class=\"infoDiv\" #info id=\"info\">\r\n    <div class=\"infoText\">\r\n        <p class=\"infoTitle\">Tongels Dorpsfeest 2025</p>\r\n        <p>Het 39e Tongels Dorpsfeest zal doorgaan op vrijdag 8, zaterdag 9 & zondag 10 mei 2026. Vrijdag bedraagt de inkomprijs €5, zaterdag €15 en zondag is de toegang gratis.</p>\r\n        <div class=\"info-buttons\">\r\n            <div class=\"info-button\" (click)=\"navigateToInfo()\">Praktische info</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"infoImage\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"lineupDiv\" #lineup>\r\n    <div class=\"imagePdfContainer\">\r\n        <div class=\"lineupImage\"></div>\r\n        <a *ngIf=\"false\" href=\"../../../assets/files/Line-Up.pdf\" download>\r\n            <div class=\"pdfButton\" (mouseover)=\"onHovered()\" (mouseleave)=\"onHovered()\"><img\r\n                    src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\r\n                <p class=\"downloadText\" [@hoveredState]=\"state\">download line up</p>\r\n            </div>\r\n        </a>\r\n    </div>\r\n    <div class=\"lineupText\">\r\n        <p class=\"lineupTitle\">Programma</p>\r\n        <p class=\"lineupDescription\">Later meer info</p>\r\n        <mat-accordion *ngIf=\"false\">\r\n            <mat-expansion-panel (opened)=\"onExpand1()\" (afterCollapse)=\"onClosed1()\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <i class=\"material-icons\">\r\n                            date_range\r\n                        </i>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Vrijdag 9 mei\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <p class=\"location\">TENTFUIF</p>\r\n                <mat-card>\r\n                    <mat-card-title>50 SHADES</mat-card-title>\r\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/50 Shades.jpg\" alt=\"Photo of 50 SHADES\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>JOHAN VEUGELERS</mat-card-title>\r\n                    <mat-card-subtitle>23h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Johan Veugelers.png\" alt=\"Photo of JOHAN VEUGELERS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>PAT KRIMSON</mat-card-title>\r\n                    <mat-card-subtitle>00h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Pat Krimson.jpg\" alt=\"Photo of PAT KRIMSON\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>MICHAEL SCHACK</mat-card-title>\r\n                    <mat-card-subtitle>01h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Michael Schack.jpg\" alt=\"Photo of MICHAEL SCHACK\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>DB DISCOVID</mat-card-title>\r\n                    <mat-card-subtitle>02h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Discovid.jpg\" alt=\"Photo of DB DISCOVID\">\r\n                </mat-card>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"onExpand2()\" (afterCollapse)=\"onClosed2()\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <i class=\"material-icons\">\r\n                            date_range\r\n                        </i>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Zaterdag 10 mei\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <p class=\"location\">B&C TECHNICS STAGE</p>\r\n                <mat-card>\r\n                    <mat-card-title>MAF</mat-card-title>\r\n                    <mat-card-subtitle>18h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/MAF Logo.png\" alt=\"Photo of MAF\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>TIJS VANNESTE & DE PARADIJSVOGELS</mat-card-title>\r\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\r\n                    <img id=\"image\" mat-card-image src=\"../../../assets/images/line-up/Tijs Vanneste & De Paradijsvogels.jpg\"\r\n                        alt=\"Photo of TIJS VANNESTE & DE PARADIJSVOGELS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>RADIO RONNY & TONNY</mat-card-title>\r\n                    <mat-card-subtitle>23h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Ronny & Tonny.jpg\"\r\n                        alt=\"Photo of RADIO RONNY & TONNY \">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>RONNY RETRO</mat-card-title>\r\n                    <mat-card-subtitle>00:15</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Ronny Retro.jpg\"\r\n                        alt=\"Photo of RONNY RETRO\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>SYLVER</mat-card-title>\r\n                    <mat-card-subtitle>01:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/sylver-persfoto.jpg\"\r\n                        alt=\"Photo of SYLVER\">\r\n                </mat-card>\r\n                <p class=\"location\">MERCEDES VDH STAGE</p>\r\n                <mat-card>\r\n                    <mat-card-title>FLASHMATIC & THE SPACE COMMANDERS</mat-card-title>\r\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Flashmatic & The Space Commanders.jpg\"\r\n                        alt=\"Photo of FLASHMATIC & THE SPACE COMMANDERS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>BOENK EROEP</mat-card-title>\r\n                    <mat-card-subtitle>20h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Boenk Eroep.jpg\"\r\n                        alt=\"Photo of BOENK EROEP\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>THE TRAMPLERS</mat-card-title>\r\n                    <mat-card-subtitle>23:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Tramplers.jpg\" alt=\"Photo of THE TRAMPLERS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HIGH LEVEL</mat-card-title>\r\n                    <mat-card-subtitle>01:30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/High Level.jpg\" alt=\"Photo of HIGH LEVEL\">\r\n                </mat-card>\r\n                <p class=\"location\">TENTFUIF</p>\r\n                <mat-card>\r\n                    <mat-card-title>SENNE</mat-card-title>\r\n                    <mat-card-subtitle>21:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Senne.jpg\" alt=\"Photo of SENNE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>MCALISTER</mat-card-title>\r\n                    <mat-card-subtitle>23:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/McAlister.png\" alt=\"Photo of MCALISTER\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>CALLE</mat-card-title>\r\n                    <mat-card-subtitle>00:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Calle.jpg\" alt=\"Photo of CALLE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HATTRICK</mat-card-title>\r\n                    <mat-card-subtitle>01:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Hattrick.jpg\" alt=\"Photo of HATTRICK\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>FRENKY</mat-card-title>\r\n                    <mat-card-subtitle>02:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Frenky.jpg\" alt=\"Photo of FRENKY\">\r\n                </mat-card>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"onExpand3()\" (afterCollapse)=\"onClosed3()\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <i class=\"material-icons\">\r\n                            date_range\r\n                        </i>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Zondag 11 mei\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <p class=\"location\">B&C Technics Podium</p>\r\n                <mat-card>\r\n                    <mat-card-title>SHAKE</mat-card-title>\r\n                    <mat-card-subtitle>13h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Shake.png\" alt=\"Photo of SHAKE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HET SHOWORKEST & BARBARA DEX</mat-card-title>\r\n                    <mat-card-subtitle>16h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Barbara Dex.jpg\"\r\n                        alt=\"Photo of HET SHOWORKEST & BARBARA DEX\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>METTE-MARIE</mat-card-title>\r\n                    <mat-card-subtitle>19h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Mette-Marie.jpg\" alt=\"Photo of METTE-MARIE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>THE OLD FARTS</mat-card-title>\r\n                    <mat-card-subtitle>22h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Old Farts.jpg\" alt=\"Photo of THE OLD FARTS\">\r\n                </mat-card>\r\n                <p class=\"location\">MERCEDES VDH STAGE</p>\r\n                <mat-card>\r\n                    <mat-card-title>PRINS JR. BAND</mat-card-title>\r\n                    <mat-card-subtitle>15h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/PrinsJrBand.jpg\"\r\n                        alt=\"Photo of PRINS JR. BAND\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HARDDAY @ THEOFFICE</mat-card-title>\r\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Hard Day At The Office.jpg\"\r\n                        alt=\"Photo of HARDDAY @ THEOFFICE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>TRAINBILLS</mat-card-title>\r\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Trainbills.jpg\"\r\n                        alt=\"Photo of TRAINBILL\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>DB WA KLEUR HEE AAVEN TRAKTEUR?!</mat-card-title>\r\n                    <mat-card-subtitle>23h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Wa Kleur Hee Aaven Trakteur Zondag.jpg\"\r\n                        alt=\"Photo of Wa Kleur Hee Aaven Trakteur\">\r\n                </mat-card>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n        <a *ngIf=\"false\" href=\"../../../assets/files/Line-Up.pdf\" download>\r\n            <div class=\"pdfButton2\"><img src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\r\n                <p class=\"downloadText\">download line up</p>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div [style.height]=\"margin\"></div>\r\n\r\n<div class=\"imagesDiv\" #gallery>\r\n    <div class=\"imagesHeading\">\r\n        <p class=\"imagesTitle\">Foto's</p>\r\n        <p>Bekijk hier de foto's van voorgaande edities</p>\r\n    </div>\r\n    <div class=\"imageContainer\">\r\n        <img src=\"../../../assets/images/play.png\" class=\"playButton\" [@popOverState]=\"stateName()\"\r\n            (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\" (click)=\"navigateToPictures()\" />\r\n        <img src=\"../../../assets/images/gallery/5.jpg\" class=\"imageLink\" (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\"\r\n            (click)=\"navigateToPictures()\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"sponsorsDiv\" #sponsors>\r\n    <p class=\"sponsorTitle\">sponsors</p>\r\n    <div class=\"sponsors\">\r\n        <div class=\"row justify-content-md-center all-sponsors\">\r\n            <img src=\"../../../assets/images/sponsors/sponsors1.png\"/>\r\n        </div>\r\n        <div class=\"row justify-content-md-center all-sponsors\">\r\n            <img src=\"../../../assets/images/sponsors/sponsors2.png\"/>\r\n        </div>\r\n        <!-- <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-2\" ><img src=\"../../../assets/images/sponsors/sponsor1.1.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.2.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.3.png\" class=\"sponsor1\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.4.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.5.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.6.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.7.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.8.png\" class=\"sponsor1\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.9.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.10.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.11.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.12.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.13.png\" class=\"sponsor1\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.1.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.2.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.3.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.4.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.5.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.6.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.7.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.8.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.9.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.10.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.11.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.12.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.13.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.14.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.15.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.16.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.17.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.18.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.19.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.20.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.1.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.2.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.3.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.4.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.5.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.6.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.7.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.8.png\" class=\"sponsor3\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.9.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.10.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.11.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.12.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.13.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.14.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.15.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.16.png\" class=\"sponsor3\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.17.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.18.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.19.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.20.png\" class=\"sponsor3\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.1.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.2.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.3.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.4.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.5.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.6.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.7.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.8.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.9.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.10.png\" class=\"sponsor4\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.1.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.2.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.3.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.4.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.5.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.6.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.7.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.8.png\" class=\"sponsor5\"/></div>\r\n        </div>\r\n        <div class=\"row sponsor-names\">SND Sound & Light &#8227; Kineteam &#8227; Heracles &#8227; Haarstudio Marleen &#8227; Van Hove Begrafenissen &#8227; Bakkerij De Becker &#8227; Hadebo &#8227; Keurslager David &#8227; Foto Karel &#8227; Het Houten Huizeke &#8227; De Broodkruimel &#8227; Beauty Art &#8227; Slagerij Marleen & Co &#8227; Kapsalon Mabo &#8227; 't Kippefestijntje &#8227; Dakwerken Daneels &#8227; KeapSolutions &#8227; De verzekeringswinkel &#8227; Dave's Hairstudio</div> -->\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_images_imagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\" (window:resize)=\"onResize($event)\">\r\n    <div class=\"heading\">\r\n        <p class=\"title\">Foto's</p>\r\n        <p class=\"description\">Bekijk hier al de foto's van eerdere edities</p>\r\n    </div>\r\n    <div class=\"selectedImageContainer\">\r\n        <div class=\"prevButton\" (click)=\"prevImage()\" *ngIf=\"buttonsVisible\">\r\n            <img class=\"prevNextImage\" src=\"../../../assets/images/backArrow.png\">\r\n        </div>\r\n        <div class=\"nextButton\" (click)=\"nextImage()\" *ngIf=\"buttonsVisible\">\r\n            <img class=\"prevNextImage\" src=\"../../../assets/images/NextArrow.png\">\r\n        </div>\r\n        <div *ngFor=\"let image of images; let i = index\">\r\n        <img class=\"selectedImage\" @scale [src]=\"'../../../assets/images/gallery/' + (i+1) +'.jpg'\" (swiperight)=\"nextImage()\" (swipeleft)=\"prevImage()\" *ngIf=\"(i+1) == selectedIndex\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"allImages\">\r\n        <mat-grid-list [cols]=\"amountCols\" [@listStagger]='images.length' class=\"imageList\">\r\n            <mat-grid-tile *ngFor=\"let image of images; let i = index\">\r\n                <img class=\"subImage\" [ngStyle]=\"((i + 1) == selectedIndex) ? selectedImageStyle : notSelectedImageStyle\" [src]=\"'../../../assets/images/gallery/' + (i+1) +'.jpg'\" (click)=\"ImageSelected(i);\"/>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html": (
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_mainNav_mainNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" [ngClass]=\"{hidden: (isHandset$ | async) === false}\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"(isHandset$ | async) === false\" position=\"end\">\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item [routerLink]=\"['/home']\">Home</a>\r\n      <a mat-list-item [routerLink]=\"['/tickets']\">Tickets</a>\r\n      <a mat-list-item [routerLink]=\"['/images']\">Foto's</a>\r\n      <a mat-list-item [routerLink]=\"['/info']\">Praktische Info</a>\r\n      <a mat-list-item [routerLink]=\"['/tongerloleeft']\">Tongerlo Leeft</a>\r\n      <a mat-list-item [routerLink]=\"['/contact']\">Contact</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <img class=\"logo\" src=\"../../../assets/images/logo.png\" />\r\n      <span class=\"spacer\"></span>\r\n      <p class=\"sloganSpan\" [ngClass]=\"{hidden: (isHandset$ | async) === false}\">Tongerlo leeft!</p>\r\n      <div class=\"toolbarItems\" [ngClass]=\"{hidden: (isHandset$ | async) === true}\">\r\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"active-link\">Home</a>\r\n        <a [routerLink]=\"['/tickets']\" routerLinkActive=\"active-link\">Tickets</a>\r\n        <a [routerLink]=\"['/images']\" routerLinkActive=\"active-link\">Foto's</a>\r\n        <a [routerLink]=\"['/info']\" routerLinkActive=\"active-link\">Praktische Info</a>\r\n        <a [routerLink]=\"['/tongerloleeft']\" routerLinkActive=\"active-link\">Tongerlo Leeft</a>\r\n        <a [routerLink]=\"['/contact']\" routerLinkActive=\"active-link\">Contact</a>\r\n      </div>\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_practicalInfo_practicalInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h2>Praktische info</h2>\r\n    <h3>Inkom</h3>\r\n    <p>Het terein is te betreden via 2 ingangen:</p>\r\n    <ul>\r\n        <li>Kruispunt Geelsestraat/Kerkplein/Abdijstraat</li>\r\n        <li>Lange Nieuwstraat</li>\r\n    </ul>\r\n    <p>Deze zijn op zaterdag geopend vanaf 16h en zondag vanaf 13h. Indien er aan een bepaalde inkom een te lange wachtrij staat, kan je altijd bij een andere ingang proberen. Inkom Langstraat en inkom Lange Nieuwstraat zijn meestal het minst druk.</p>\r\n    <p>De inkom kan enkel contant betaald worden.</p>\r\n    <p>Voor je eigen veiligheid zullen er bewakingsagenten aanwezig zijn op het terrein. Zij hebben het recht om controles uit te voeren. Bij verzet of weigering kan de toegang ontzegd worden.</p>\r\n    <p>Door het betreden van het festivalterrein geef je als bezoeker stilzwijgend toestemming aan de organisatie om (audio-)visuele opnames te maken.</p>\r\n    <h3>Geen vestiare</h3>\r\n    <p>Er is geen vestiaire op het terrein. Spullen achterlaten gebeurt op eigen verantwoordelijkheid.</p>\r\n    <h3>Drankjetons</h3>\r\n    <p>Drankjetons kunnen zowel contant als met bankkaart gekocht worden aan onze kassa’s. Deze jetons worden niet terugbetaald.</p>\r\n    <h3>Milieu</h3>\r\n    <p>We proberen zoveel mogelijk afval te sorteren. Werp daarom plastiek bekers in de daarvoor voorziene plaatsen. Uitdelen van flyers kan op ons festival terrein niet toegestaan worden.</p>\r\n    <h3>Toiletten</h3>\r\n    <p>Er zijn ruim voldoende en aangepaste toiletten op het terrein. Deze zijn gratis te gebruiken. We verwachten dat alle toiletten proper achter gelaten worden. Gelieve enkel de toiletten te gebruiken en nergens tegen omheiningen of gebouwen te urineren.</p>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/tickets/tickets.component.html": (
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tickets/tickets.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_tickets_ticketsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\r\n        <div class=\"heading\">\r\n        <p class=\"title\">Tickets</p>\r\n    </div>\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th>Band</th>\r\n                <th>Voorverkoop</th>\r\n                <th>Kassa</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <th>Vrijdag</th>\r\n                <th>€3</th>\r\n                <th>€5</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Zaterdag</th>\r\n                <th>€10</th>\r\n                <th>€15</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Zondag</th>\r\n                <th>Gratis</th>\r\n                <th>Gratis</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Combi (vrijdag & zaterdag)</th>\r\n                <th>€12,50</th>\r\n                <th>n.v.t.</th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <p class=\"price-description\">Prijzen in voorverkoop zijn excl. servicekosten</p>\r\n\r\n    <a class=\"tickets-button\" href=\"https://eventix.shop/yga8ty5g\">Tickets</a>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html": (
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_components_tvh_tvhComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\r\n<p class=\"title\">Tongerlo Leeft!</p>\r\n<p>In 1987 werd “Tongels Dorpsfeest\" opgericht door Jan Michiels, die samen met Erik van Eynde en Willy Van Eysendeyk -allen actief in het verenigingsleven- een nieuw openluchtfeest wilden organiseren. Dit ter vervanging van de ter ziele gegane lichtstoet in de jaren 60.</p>\r\n<P>Sinds vele jaren wordt het “Tongels Dorpsfeest” georganiseerd door ‘Tongerlo Leeft’ : een groep van tien echte Tongelse verenigingen.</P>\r\n<p>Het zijn deze sport-, culturele en jeugdverenigingen die telkens 2 personen afvaardigen op de maandelijkse vergaderingen en die beslissen over het concept en de organisatie van het dorpsfeest.</p>\r\n<p>Ook de samenwerking met onze lokale en regionale sponsors blijft een onmiskenbaar gegeven om sociale consumptie-en toegangsprijzen samen met een sfeervol programma mogelijk te maken.</p>\r\n<p class=\"title\">DEELNEEMENDE VERENGINGEN</p>\r\n<p>Organisatiecomité met deelnemende Tongelse verenigingen voor het 39e Tongels Dorpsfeest op vrijdag 8, zaterdag 9 en zondag 10 mei 2026:</p>\r\n<mat-list [@listStagger]='groups.length' class=\"groups\">\r\n    <mat-list-item *ngFor=\"let group of groups; let i = index \" class=\"group\">\r\n      <i class=\"material-icons\">\r\n        play_arrow\r\n        </i>\r\n      <a *ngIf=\"group.link else withoutLink\" class=\"group\" [href]=\"group.link\" (mouseover)=\"toggle(i)\" (mouseleave)=\"toggle(i)\">{{group.name}}</a>\r\n      <ng-template #withoutLink><p class=\"group\">{{group.name}}</p></ng-template>\r\n      <p *ngIf=\"group.link\" class=\"link\" [@popOverState]=\"stateName(i)\">->{{group.link | stringlimit}}</p>\r\n</mat-list-item>\r\n</mat-list>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html": (
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_features_fadeIn_fadeInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div [@foobar]=\"state\">\r\n    <ng-content></ng-content>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    /* harmony import */
    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */"./src/app/components/contact/contact.component.ts");
    /* harmony import */
    var _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tvh/tvh.component */"./src/app/components/tvh/tvh.component.ts");
    /* harmony import */
    var _components_images_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/images/images.component */"./src/app/components/images/images.component.ts");
    /* harmony import */
    var _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/practical-info/practical-info.component */"./src/app/components/practical-info/practical-info.component.ts");
    /* harmony import */
    var _components_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tickets/tickets.component */"./src/app/components/tickets/tickets.component.ts");
    var routes = [{
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }, {
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "tickets",
      component: _components_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_8__["TicketsComponent"]
    }, {
      path: "images",
      component: _components_images_images_component__WEBPACK_IMPORTED_MODULE_6__["ImagesComponent"]
    }, {
      path: "contact",
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }, {
      path: "tongerloleeft",
      component: _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_5__["TvhComponent"]
    }, {
      path: "info",
      component: _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_7__["PracticalInfoComponent"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.scss": (
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'tongerlo';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */"./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */"./src/app/components/main-nav/main-nav.component.ts");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    /* harmony import */
    var _app_material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/material/material.module */"./src/app/material/material.module.ts");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */"./src/app/components/footer/footer.component.ts");
    /* harmony import */
    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */"./src/app/components/contact/contact.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tvh/tvh.component */"./src/app/components/tvh/tvh.component.ts");
    /* harmony import */
    var _pipes_limitStringPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/limitStringPipe */"./src/app/pipes/limitStringPipe.ts");
    /* harmony import */
    var _components_images_images_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/images/images.component */"./src/app/components/images/images.component.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/practical-info/practical-info.component */"./src/app/components/practical-info/practical-info.component.ts");
    /* harmony import */
    var _features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./features/fade-in/fade-in.component */"./src/app/features/fade-in/fade-in.component.ts");
    /* harmony import */
    var _components_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tickets/tickets.component */"./src/app/components/tickets/tickets.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_14__["TvhComponent"], _pipes_limitStringPipe__WEBPACK_IMPORTED_MODULE_15__["LimitStringPipe"], _components_images_images_component__WEBPACK_IMPORTED_MODULE_16__["ImagesComponent"], _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_18__["PracticalInfoComponent"], _features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_19__["FadeInComponent"], _components_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_20__["TicketsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDxz70THIVZwo8vmwqdT3-aI928wkx3mac'
      })],
      exports: [_features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_19__["FadeInComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/components/contact/contact.component.scss": (
  /*!***********************************************************!*\
    !*** ./src/app/components/contact/contact.component.scss ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_contact_contactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "agm-map {\n  height: 40vh;\n}\n\nmat-form-field {\n  margin-bottom: 1vh;\n}\n\n.container {\n  width: 100%;\n  height: auto;\n  min-height: calc(75vh - 50px);\n  padding: 0;\n  margin: 0;\n  max-width: none;\n}\n\n.socials-button {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n  max-width: 175px;\n  width: 175px;\n  min-height: 50px;\n  height: 50px;\n  border: solid 1px black;\n  border-radius: 5px;\n  text-decoration: none;\n  color: black;\n  margin: 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvQzpcXHByb2plY3RzXFx0b25nZXJsb0NvZGVcXHNyY1xcYXBwXFxjb21wb25lbnRzL2NvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJjb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoiY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcclxuICAgIGhlaWdodDogNDB2aDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNzV2aCAtIDUwcHgpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxufVxyXG5cclxuLnNvY2lhbHMtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxufSIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogY2FsYyg3NXZoIC0gNTBweCk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuXG4uc29jaWFscy1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/components/contact/contact.component.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/
  /*! exports provided: ContactComponent */
  /***/
  function _src_app_components_contact_contactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(title, meta) {
        _classCallCheck(this, ContactComponent);
        this.title = title;
        this.meta = meta;
        this.latitude = 51.107379;
        this.longitude = 4.915008;
        this.title.setTitle("Contact");
        this.meta.addTag({
          name: 'description',
          content: "Het adres van de Tongelse Dorpsfeesten is: Tongerlodorp 2260 Tongerlo. Bereik ons via een formulier met alle vragen."
        });
        this.meta.addTag({
          name: 'keywords',
          content: "Tongels dorpsfeest contact, tongelse dorpsfeesten contact, tongels dorpsfeest adres, Tongelse Dorpsfeesten adres, Tongelse Dorpsfeesten vragen"
        });
      }
      return _createClass(ContactComponent, [{
        key: "redirect",
        value: function redirect(location) {
          if (location === 'facebook') {
            window.location.href = 'https://www.facebook.com/TongerloLeeft';
          } else {
            window.location.href = 'https://www.instagram.com/tongerlo_leeft';
          }
        }
      }]);
    }();
    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
      }];
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */"./src/app/components/contact/contact.component.scss"))["default"]]
    })], ContactComponent);

    /***/
  }),
  /***/"./src/app/components/footer/footer.component.scss": (
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_footer_footerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".fbLogo {\n  background-image: url('facebook.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 4vh;\n  width: 4vh;\n}\n\n.fbLogo:hover {\n  cursor: pointer;\n}\n\n.logo {\n  width: 100%;\n  height: 10vh;\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-bottom: 2vh;\n}\n\n.footerContainer {\n  background-color: rgba(245, 245, 245, 0.733);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 25vh;\n  width: 100%;\n  position: relative;\n  bottom: 0px;\n}\n\n@media (max-width: 500px) {\n  .logo {\n    margin-top: 2vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci9DOlxccHJvamVjdHNcXHRvbmdlcmxvQ29kZVxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJmb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxlQUFBO0VDQU47QUFDRiIsImZpbGUiOiJmb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZiTG9nb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0dmg7XHJcbiAgICB3aWR0aDogNHZoO1xyXG59XHJcblxyXG4uZmJMb2dvOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuLmZvb3RlckNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC43MzMpO1xyXG4gICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgfVxyXG59IiwiLmZiTG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDR2aDtcbiAgd2lkdGg6IDR2aDtcbn1cblxuLmZiTG9nbzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi5mb290ZXJDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNzMzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICB9XG59Il19 */";

    /***/
  }),
  /***/"./src/app/components/footer/footer.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/
  /*! exports provided: FooterComponent */
  /***/
  function _src_app_components_footer_footerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      return _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirect",
        value: function redirect() {
          window.location.href = 'https://www.facebook.com/TongerloLeeft';
        }
      }]);
    }();
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */"./src/app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);

    /***/
  }),
  /***/"./src/app/components/home/home.component.scss": (
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_home_homeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ":host ::ng-deep mat-expansion-panel > .mat-expansion-panel-content > .mat-expansion-panel-body {\n  text-align: center;\n}\n\n.tempWarning {\n  height: 10vh;\n  margin: 5%;\n  border: solid 3px #f5df1d;\n  border-radius: 20px;\n  background-color: #fdfd94;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n\n.warnText {\n  font-size: 2vh;\n}\n\n.warnImage {\n  width: auto;\n  height: 65%;\n  margin-right: 20px;\n}\n\n.topImage {\n  margin-top: 0px;\n  background-image: url('tongerloMainImage.jpg');\n  background-repeat: no-repeat;\n  position: top center;\n  background-size: 100%;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5% 0% 2% 0%;\n}\n\nmat-expansion-panel {\n  margin-bottom: 1vh;\n}\n\n.mainText {\n  padding: 5%;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  text-align: center;\n}\n\nh1 {\n  font-size: 3vw;\n  color: white;\n}\n\nh2 {\n  font-size: 1.5vw;\n  color: #edeae9;\n}\n\n.navContainer {\n  margin-top: 5vh;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.linkImg {\n  height: 6vw;\n}\n\n.navigationImg {\n  width: 10vw;\n  height: 10vw;\n  border-radius: 50%;\n  background-color: lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navigationImg:hover {\n  background-color: #7c7a7a;\n  cursor: pointer;\n}\n\n.navigationDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.navInfo {\n  font-size: 1.5vw;\n  font-family: sans-serif;\n}\n\n.infoDiv {\n  height: 50vh;\n  background-color: #eeecec;\n  margin-top: 5vh;\n  width: 100%;\n}\n\n.infoText {\n  float: left;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5%;\n}\n\n.infoImage {\n  background-image: url('tongerloInfo.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 40%;\n  height: 100%;\n  float: right;\n}\n\n.infoTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n  padding-bottom: 1vh;\n  border-bottom: black solid 2px;\n}\n\n.lineupDiv {\n  padding-top: 60px;\n  width: 90%;\n  margin-left: 10%;\n  height: 30%;\n}\n\nmat-panel-title {\n  flex-basis: 0;\n}\n\nmat-panel-description {\n  margin-left: 5%;\n  flex-basis: 100%;\n  color: black;\n  font-weight: 800;\n}\n\n.location {\n  margin-bottom: 5vh;\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.lineupText {\n  width: 50%;\n  margin-right: 10%;\n  display: block;\n  float: right;\n  height: 20% !important;\n}\n\n.imagePdfContainer {\n  width: 30%;\n  height: 100%;\n  float: left;\n  align-items: center;\n}\n\n.pdfButton, .pdfButton2 {\n  height: 40px;\n  width: 250px;\n  border: solid 1px black;\n  display: flex;\n  align-items: center;\n  vertical-align: middle;\n  margin-top: 4%;\n  padding: 1%;\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.pdfButton2 {\n  visibility: hidden;\n}\n\n.pdfButton:hover, .pdfButton2:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.pdfImage {\n  width: auto;\n  height: 100%;\n  float: left;\n  margin-right: 15%;\n}\n\n.lineupImage {\n  background-image: url('band.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 200px;\n  display: block;\n}\n\n.imagesDiv {\n  width: 100%;\n  text-align: center;\n  background-color: #eeecec;\n  margin-top: 10%;\n  padding: 3% 0% 5% 0%;\n}\n\n.imagesTitle {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.imageContainer {\n  position: relative;\n}\n\n.playButton {\n  position: absolute;\n  height: 30%;\n  top: 40%;\n  left: 45%;\n  cursor: pointer;\n}\n\n.imageLink {\n  width: 50%;\n  height: auto;\n  margin-top: 3%;\n  cursor: pointer;\n}\n\n.sponsorsDiv {\n  padding-top: 2vh;\n  margin-top: 5vh;\n  align-items: center;\n  height: auto;\n  text-align: center;\n}\n\n.image-swiper {\n  margin-top: 2%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15%;\n  position: relative;\n  width: 1000px;\n  height: 50vh;\n}\n\n.custom-col-1-5 {\n  flex: 0 0 15%;\n  max-width: 15%;\n  padding: 0 6px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-5 {\n    flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-5 {\n    flex: 0 0 45%;\n    max-width: 45%;\n    padding: 0 8px;\n  }\n}\n\n.custom-col-1-2 {\n  flex: 0 0 11%;\n  max-width: 11%;\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-2 {\n    flex: 0 0 22%;\n    max-width: 22%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-2 {\n    flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n.custom-col-1-5, .custom-col-1-2 {\n  -webkit-box-flex: 0;\n  position: relative;\n  width: 100%;\n}\n\n.custom-col-1-2, .custom-col-1-5, .col-1, .col-2 {\n  margin-bottom: 20px;\n}\n\n.col-2 {\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .col-2 {\n    flex: 0 0 33%;\n    max-width: 33%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-2 {\n    flex: 0 0 45%;\n    max-width: 45%;\n  }\n}\n\n.col-1 {\n  padding: 0 3px;\n  flex: 0 0 9%;\n  max-width: 9%;\n}\n\n@media (max-width: 1000px) {\n  .col-1 {\n    flex: 0 0 18%;\n    max-width: 18%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-1 {\n    flex: 0 0 23%;\n    max-width: 23%;\n  }\n}\n\n.row {\n  justify-content: center !important;\n}\n\n.sponsor5 {\n  max-width: 90%;\n  border: solid 1px black;\n}\n\n.sponsor1, .sponsor2, .sponsor3, .sponsor4 {\n  max-width: 100%;\n  border: solid 1px black;\n}\n\n.sponsors {\n  margin-bottom: 50px;\n}\n\n:host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n  height: 650px;\n}\n\n@media (max-width: 1200px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 520px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 800px;\n  }\n}\n\n@media (max-width: 900px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 390px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 600px;\n  }\n}\n\n@media (max-width: 700px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 260px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 400px;\n  }\n}\n\n@media (max-width: 500px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 195px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 300px;\n  }\n}\n\n.sponsor-names {\n  padding: 15px 25px;\n}\n\n.sponsorTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.all-sponsors > * {\n  width: 80%;\n}\n\n.all-sponsors.split > *:first-child {\n  width: 50%;\n}\n\n.all-sponsors.split > *:last-child {\n  width: 30%;\n}\n\n.info-buttons {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 30px;\n  height: 75px;\n  width: 100%;\n}\n\n.info-button {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n  max-width: 175px;\n  min-height: 50px;\n  height: 50px;\n  border: solid 1px black;\n  border-radius: 5px;\n  margin: 0 15px;\n}\n\n.info-button:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\n@media (max-width: 1000px) {\n  .lineupDiv {\n    height: 30%;\n  }\n\n  .infoDiv {\n    height: 70vh;\n  }\n}\n\n@media (max-width: 700px) {\n  .tempWarning {\n    height: 15vh;\n  }\n\n  .warnImage {\n    width: auto;\n    height: 50%;\n    margin-right: 20px;\n  }\n\n  .imageLink {\n    width: 60%;\n  }\n\n  .imagePdfContainer {\n    visibility: hidden;\n    width: 0%;\n  }\n\n  .lineupText {\n    width: 100%;\n    float: none;\n    margin-right: 0%;\n  }\n\n  .pdfButton2 {\n    width: 80%;\n    height: 40px;\n    margin-top: 10%;\n    visibility: visible;\n  }\n\n  .lineupDiv {\n    padding-top: 100px;\n    height: 40%;\n    margin-left: 5%;\n  }\n\n  .info-buttons {\n    flex-direction: column;\n  }\n\n  .info-button {\n    max-width: 100%;\n    margin: 10px 15px;\n    min-height: 35px;\n    height: 35px;\n  }\n\n  .all-sponsors > * {\n    width: 90%;\n  }\n  .all-sponsors.split > *:first-child {\n    width: 55%;\n  }\n  .all-sponsors.split > *:last-child {\n    width: 35%;\n  }\n}\n\n@media (max-width: 500px) {\n  .lineupDiv {\n    padding-top: 150px;\n  }\n\n  .navInfo {\n    font-size: 3vw;\n  }\n\n  .navContainer {\n    margin-left: 2%;\n    margin-right: 2%;\n  }\n\n  .linkImg {\n    height: 10vw;\n  }\n\n  .navigationImg {\n    width: 18vw;\n    height: 18vw;\n  }\n\n  .infoText {\n    float: none;\n    width: 90%;\n  }\n\n  .infoImage {\n    float: none;\n    width: 100%;\n    height: 30vh;\n  }\n\n  .infoDiv {\n    margin-bottom: 3vh;\n    height: 65vh;\n  }\n\n  .imageLink {\n    width: 80%;\n  }\n\n  .info-button {\n    margin: 5px 15px;\n  }\n\n  .info-buttons {\n    margin-bottom: 25px;\n  }\n\n  .all-sponsors > * {\n    width: 96%;\n  }\n  .all-sponsors.split > *:first-child {\n    width: 58%;\n  }\n  .all-sponsors.split > *:last-child {\n    width: 38%;\n  }\n}\n\n@media (max-width: 400px) {\n  .lineupDiv {\n    height: 70%;\n    padding-top: 200px;\n  }\n}\n\n@media (max-width: 300px) {\n  .lineupDiv {\n    padding-top: 250x;\n  }\n}\n\n@media (min-width: 500px) {\n  .topImage {\n    background-attachment: fixed;\n  }\n\n  .infoImage {\n    background-attachment: fixed;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvQzpcXHByb2plY3RzXFx0b25nZXJsb0NvZGVcXHNyY1xcYXBwXFxjb21wb25lbnRzL2hvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREtBO0VBQ0kseUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLHdFQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDRko7O0FES0E7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNGSjs7QURJSTtFQUxKO0lBTVEsYUFBQTtJQUNBLGNBQUE7RUNETjtBQUNGOztBREVJO0VBVEo7SUFVUSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0k7RUFMSjtJQU1RLGFBQUE7SUFDQSxjQUFBO0VDRU47QUFDRjs7QURESTtFQVRKO0lBVVEsYUFBQTtJQUNBLGNBQUE7RUNJTjtBQUNGOztBRERBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNJSjs7QUREQTtFQUNJLG1CQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkk7RUFISjtJQUlRLGFBQUE7SUFDQSxjQUFBO0VDS047QUFDRjs7QURKSTtFQVBKO0lBUVEsYUFBQTtJQUNBLGNBQUE7RUNPTjtBQUNGOztBREpBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDT0o7O0FETEk7RUFMSjtJQU1RLGFBQUE7SUFDQSxjQUFBO0VDUU47QUFDRjs7QURQSTtFQVRKO0lBVVEsYUFBQTtJQUNBLGNBQUE7RUNVTjtBQUNGOztBRFBBO0VBRUksa0NBQUE7QUNVSjs7QURQQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtBQ1VKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FDVUo7O0FEUEE7RUFDSSxtQkFBQTtBQ1VKOztBRE5JO0VBQ0ksYUFBQTtBQ1NSOztBRE5JO0VBQ0k7SUFDSSxhQUFBO0VDUVY7RURMTTtJQUNJLFlBQUE7RUNPVjtBQUNGOztBREpJO0VBQ0k7SUFDSSxhQUFBO0VDTVY7RURITTtJQUNJLFlBQUE7RUNLVjtBQUNGOztBREZJO0VBQ0k7SUFDSSxhQUFBO0VDSVY7RURETTtJQUNJLFlBQUE7RUNHVjtBQUNGOztBREFJO0VBQ0k7SUFDSSxhQUFBO0VDRVY7RURDTTtJQUNJLFlBQUE7RUNDVjtBQUNGOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBRElJO0VBQ0ksVUFBQTtBQ0RSOztBRElJO0VBQ0ksVUFBQTtBQ0ZSOztBREtJO0VBQ0ksVUFBQTtBQ0hSOztBRE9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSko7O0FETUk7RUFDSSx3RUFBQTtFQUNBLG1CQUFBO0FDSlI7O0FEUUE7RUFDSTtJQUNJLFdBQUE7RUNMTjs7RURRRTtJQUNJLFlBQUE7RUNMTjtBQUNGOztBRFFBO0VBQ0k7SUFDSSxZQUFBO0VDTk47O0VEU0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDTk47O0VEU0U7SUFDSSxVQUFBO0VDTk47O0VEU0U7SUFDSSxrQkFBQTtJQUNBLFNBQUE7RUNOTjs7RURTRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNOTjs7RURTRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDTk47O0VEU0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDTk47O0VEU0U7SUFDSSxzQkFBQTtFQ05OOztFRFNFO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDTk47O0VEVU07SUFDSSxVQUFBO0VDUFY7RURVTTtJQUNJLFVBQUE7RUNSVjtFRFdNO0lBQ0ksVUFBQTtFQ1RWO0FBQ0Y7O0FEYUE7RUFDSTtJQUNJLGtCQUFBO0VDWE47O0VEYUU7SUFDSSxjQUFBO0VDVk47O0VEWUU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUNUTjs7RURXRTtJQUNJLFlBQUE7RUNSTjs7RURXRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDUk47O0VEVUU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ1BOOztFRFNFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDTk47O0VEU0U7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNOTjs7RURTRTtJQUNJLFVBQUE7RUNOTjs7RURTRTtJQUNJLGdCQUFBO0VDTk47O0VEU0U7SUFDSSxtQkFBQTtFQ05OOztFRFVNO0lBQ0ksVUFBQTtFQ1BWO0VEVU07SUFDSSxVQUFBO0VDUlY7RURXTTtJQUNJLFVBQUE7RUNUVjtBQUNGOztBRGFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUNYTjtBQUNGOztBRGNBO0VBQ0k7SUFDSSxpQkFBQTtFQ1pOO0FBQ0Y7O0FEZUE7RUFDSTtJQUNJLDRCQUFBO0VDYk47O0VEZUU7SUFDSSw0QkFBQTtFQ1pOO0FBQ0YiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwgPiAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50ID4gLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGVtcFdhcm5pbmd7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDI0NSwgMjIzLCAyOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxNDgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53YXJuVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ud2FybkltYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnRvcEltYWdle1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9NYWluSW1hZ2UuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNSUgMCUgMiUgMCU7XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn1cclxuXHJcbi5tYWluVGV4dHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHJnYigwLCAwLCAwKSwgJGFscGhhOiAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogI0VERUFFOSwgJGFscGhhOiAxLjApO1xyXG59XHJcblxyXG4ubmF2Q29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ubGlua0ltZ3tcclxuICAgIGhlaWdodDogNnZ3O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbkltZ3tcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmlnYXRpb25JbWc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAxMjIsIDEyMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5uYXZJbmZve1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW5mb0RpdntcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNiwgMjM2KTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb1RleHR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuXHJcbi5pbmZvSW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90b25nZXJsb0luZm8uanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmluZm9UaXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMnB4O1xyXG59XHJcblxyXG4ubGluZXVwRGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG5tYXQtcGFuZWwtdGl0bGUge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcbiAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuXHJcbi5sb2NhdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi5saW5ldXBUZXh0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2VQZGZDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGRmQnV0dG9uLCAucGRmQnV0dG9uMntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ucGRmQnV0dG9uMntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnBkZkJ1dHRvbjpob3ZlciwgLnBkZkJ1dHRvbjI6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwwLDAsLjI1KSwgM3B4IDNweCA3cHggcmdiYSgwLDAsMCwuMzUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBkZkltYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG4ubGluZXVwSW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2VzRGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzYsIDIzNik7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBwYWRkaW5nOiAzJSAwJSA1JSAwJTtcclxufVxyXG5cclxuLmltYWdlc1RpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi5pbWFnZUNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBsYXlCdXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2VMaW5re1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3BvbnNvcnNEaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXN3aXBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLmN1c3RvbS1jb2wtMS01IHtcclxuICAgIGZsZXg6IDAgMCAxNSU7XHJcbiAgICBtYXgtd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDQ1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1jb2wtMS0yIHtcclxuICAgIGZsZXg6IDAgMCAxMSU7XHJcbiAgICBtYXgtd2lkdGg6IDExJTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDIyJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDIyJTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWNvbC0xLTUsIC5jdXN0b20tY29sLTEtMiB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sLTEtMiwgLmN1c3RvbS1jb2wtMS01LCAuY29sLTEsIC5jb2wtMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29sLTIge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2wtMSB7XHJcbiAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgIGZsZXg6IDAgMCA5JTtcclxuICAgIG1heC13aWR0aDogOSU7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMTglO1xyXG4gICAgICAgIG1heC13aWR0aDogMTglO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCAyMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3BvbnNvcjUge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLnNwb25zb3IxLCAuc3BvbnNvcjIsIC5zcG9uc29yMywgLnNwb25zb3I0IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uc3BvbnNvcnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAge1xyXG4gICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAgICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3BvbnNvci1uYW1lcyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbn1cclxuXHJcbi5zcG9uc29yVGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4uYWxsLXNwb25zb3JzIHtcclxuICAgID4gKiB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLnNwbGl0ID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLnNwbGl0ID4gKjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5mby1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsMCwwLC4yNSksIDNweCAzcHggN3B4IHJnYmEoMCwwLDAsLjM1KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mb0RpdntcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIC50ZW1wV2FybmluZ3tcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLndhcm5JbWFnZXtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlTGlua3tcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZVBkZkNvbnRhaW5lcntcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5ldXBUZXh0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBkZkJ1dHRvbjJ7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWJ1dHRvbnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tYnV0dG9uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsbC1zcG9uc29ycyB7XHJcbiAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3BsaXQgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3BsaXQgPiAqOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2SW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuICAgIC5uYXZDb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICB9XHJcbiAgICAubGlua0ltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXZpZ2F0aW9uSW1ne1xyXG4gICAgICAgIHdpZHRoOiAxOHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTh2dztcclxuICAgIH1cclxuICAgIC5pbmZvVGV4dHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmluZm9JbWFnZXtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9EaXZ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG4gICAgICAgIGhlaWdodDogNjV2aDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2VMaW5re1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWJ1dHRvbnMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsbC1zcG9uc29ycyB7XHJcbiAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3BsaXQgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU4JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3BsaXQgPiAqOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzglO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDMwMHB4KXtcclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1MHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDUwMHB4KXtcclxuICAgIC50b3BJbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgfVxyXG4gICAgLmluZm9JbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIjpob3N0IDo6bmctZGVlcCBtYXQtZXhwYW5zaW9uLXBhbmVsID4gLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCA+IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZW1wV2FybmluZyB7XG4gIGhlaWdodDogMTB2aDtcbiAgbWFyZ2luOiA1JTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2Y1ZGYxZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmQ5NDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi53YXJuVGV4dCB7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ud2FybkltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50b3BJbWFnZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9NYWluSW1hZ2UuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlIDAlIDIlIDAlO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuXG4ubWFpblRleHQge1xuICBwYWRkaW5nOiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGNvbG9yOiAjZWRlYWU5O1xufVxuXG4ubmF2Q29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmxpbmtJbWcge1xuICBoZWlnaHQ6IDZ2dztcbn1cblxuLm5hdmlnYXRpb25JbWcge1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiAxMHZ3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uSW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2E3YTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2aWdhdGlvbkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmF2SW5mbyB7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uaW5mb0RpdiB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlYztcbiAgbWFyZ2luLXRvcDogNXZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZm9UZXh0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uaW5mb0ltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9JbmZvLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaW5mb1RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAycHg7XG59XG5cbi5saW5ldXBEaXYge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbm1hdC1wYW5lbC10aXRsZSB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbm1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubG9jYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmxpbmV1cFRleHQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cblxuLmltYWdlUGRmQ29udGFpbmVyIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBkZkJ1dHRvbiwgLnBkZkJ1dHRvbjIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucGRmQnV0dG9uMiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnBkZkJ1dHRvbjpob3ZlciwgLnBkZkJ1dHRvbjI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDNweCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBkZkltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG4ubGluZXVwSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5kLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltYWdlc0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZWM7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZzogMyUgMCUgNSUgMCU7XG59XG5cbi5pbWFnZXNUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmltYWdlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGxheUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA0NSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlTGluayB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwb25zb3JzRGl2IHtcbiAgcGFkZGluZy10b3A6IDJ2aDtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLXN3aXBlciB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uY3VzdG9tLWNvbC0xLTUge1xuICBmbGV4OiAwIDAgMTUlO1xuICBtYXgtd2lkdGg6IDE1JTtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtNSB7XG4gICAgZmxleDogMCAwIDMwJTtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtNSB7XG4gICAgZmxleDogMCAwIDQ1JTtcbiAgICBtYXgtd2lkdGg6IDQ1JTtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgfVxufVxuXG4uY3VzdG9tLWNvbC0xLTIge1xuICBmbGV4OiAwIDAgMTElO1xuICBtYXgtd2lkdGg6IDExJTtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtMiB7XG4gICAgZmxleDogMCAwIDIyJTtcbiAgICBtYXgtd2lkdGg6IDIyJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtMiB7XG4gICAgZmxleDogMCAwIDMwJTtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgfVxufVxuXG4uY3VzdG9tLWNvbC0xLTUsIC5jdXN0b20tY29sLTEtMiB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tY29sLTEtMiwgLmN1c3RvbS1jb2wtMS01LCAuY29sLTEsIC5jb2wtMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtMiB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29sLTIge1xuICAgIGZsZXg6IDAgMCAzMyU7XG4gICAgbWF4LXdpZHRoOiAzMyU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sLTIge1xuICAgIGZsZXg6IDAgMCA0NSU7XG4gICAgbWF4LXdpZHRoOiA0NSU7XG4gIH1cbn1cblxuLmNvbC0xIHtcbiAgcGFkZGluZzogMCAzcHg7XG4gIGZsZXg6IDAgMCA5JTtcbiAgbWF4LXdpZHRoOiA5JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbC0xIHtcbiAgICBmbGV4OiAwIDAgMTglO1xuICAgIG1heC13aWR0aDogMTglO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbC0xIHtcbiAgICBmbGV4OiAwIDAgMjMlO1xuICAgIG1heC13aWR0aDogMjMlO1xuICB9XG59XG5cbi5yb3cge1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnNwb25zb3I1IHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufVxuXG4uc3BvbnNvcjEsIC5zcG9uc29yMiwgLnNwb25zb3IzLCAuc3BvbnNvcjQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufVxuXG4uc3BvbnNvcnMge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG46aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICA6aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICAgIGhlaWdodDogNTIwcHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmltYWdlLXN3aXBlciB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcbiAgICBoZWlnaHQ6IDM5MHB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5pbWFnZS1zd2lwZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgfVxuICA6aG9zdDo6bmctZGVlcCAuaW1hZ2Utc3dpcGVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICA6aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICAgIGhlaWdodDogMTk1cHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmltYWdlLXN3aXBlciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbi5zcG9uc29yLW5hbWVzIHtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xufVxuXG4uc3BvbnNvclRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG4uYWxsLXNwb25zb3JzID4gKiB7XG4gIHdpZHRoOiA4MCU7XG59XG4uYWxsLXNwb25zb3JzLnNwbGl0ID4gKjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uYWxsLXNwb25zb3JzLnNwbGl0ID4gKjpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmluZm8tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5mby1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDE3NXB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLmluZm8tYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAzcHggM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5saW5ldXBEaXYge1xuICAgIGhlaWdodDogMzAlO1xuICB9XG5cbiAgLmluZm9EaXYge1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC50ZW1wV2FybmluZyB7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICB9XG5cbiAgLndhcm5JbWFnZSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmltYWdlTGluayB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5pbWFnZVBkZkNvbnRhaW5lciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAwJTtcbiAgfVxuXG4gIC5saW5ldXBUZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB9XG5cbiAgLnBkZkJ1dHRvbjIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLmxpbmV1cERpdiB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGhlaWdodDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuXG4gIC5pbmZvLWJ1dHRvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuaW5mby1idXR0b24ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuXG4gIC5hbGwtc3BvbnNvcnMgPiAqIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5hbGwtc3BvbnNvcnMuc3BsaXQgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG4gIC5hbGwtc3BvbnNvcnMuc3BsaXQgPiAqOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIH1cblxuICAubmF2SW5mbyB7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gIH1cblxuICAubmF2Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgfVxuXG4gIC5saW5rSW1nIHtcbiAgICBoZWlnaHQ6IDEwdnc7XG4gIH1cblxuICAubmF2aWdhdGlvbkltZyB7XG4gICAgd2lkdGg6IDE4dnc7XG4gICAgaGVpZ2h0OiAxOHZ3O1xuICB9XG5cbiAgLmluZm9UZXh0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmluZm9JbWFnZSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICB9XG5cbiAgLmluZm9EaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICBoZWlnaHQ6IDY1dmg7XG4gIH1cblxuICAuaW1hZ2VMaW5rIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgLmluZm8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweCAxNXB4O1xuICB9XG5cbiAgLmluZm8tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gIC5hbGwtc3BvbnNvcnMgPiAqIHtcbiAgICB3aWR0aDogOTYlO1xuICB9XG4gIC5hbGwtc3BvbnNvcnMuc3BsaXQgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG4gIC5hbGwtc3BvbnNvcnMuc3BsaXQgPiAqOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiAzOCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBwYWRkaW5nLXRvcDogMjUweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC50b3BJbWFnZSB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgfVxuXG4gIC5pbmZvSW1hZ2Uge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIH1cbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/components/home/home.component.ts": (
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function _src_app_components_home_homeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, title, meta) {
        _classCallCheck(this, HomeComponent);
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.rowHeight = "15vw";
        this.margin = "0px";
        this.opened = 0;
        this.show = false;
        this.state = "notHovered";
        this.images = ['../../../assets/images/sponsors/sponsors1.jpg', '../../../assets/images/sponsors/sponsors2.jpg', '../../../assets/images/sponsors/sponsors3.jpg', '../../../assets/images/sponsors/sponsors4.jpg'];
        this.title.setTitle("Home");
        this.meta.addTag({
          name: 'description',
          content: "Vind hier alle informatie over de 34ste editie van de tongelse dorpsfeesten."
        });
        this.meta.addTag({
          name: 'keywords',
          content: "Tongels dorpsfeest, tongelse dorpsfeesten, feest tongerlo, dorpsfeesten tongerlo"
        });
        var width = window.innerWidth;
        if (width <= 500) {
          this.rowHeight = "30vw";
        }
      }
      return _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onHovered",
        value: function onHovered() {
          this.state == "notHovered" ? this.state = "hovered" : this.state = "notHovered";
        }
      }, {
        key: "onExpand1",
        value: function onExpand1() {
          this.opened = 1;
          var card = document.getElementById('image');
          var height = card.scrollHeight;
          this.margin = height * 6 + 450 + "px";
        }
      }, {
        key: "onExpand2",
        value: function onExpand2() {
          this.opened = 2;
          var card = document.getElementById('image');
          var height = card.scrollHeight;
          if (height < 400) {
            height += (600 - height) / 10;
          }
          this.margin = height * 15 + 1150 + "px";
        }
      }, {
        key: "onExpand3",
        value: function onExpand3() {
          this.opened = 3;
          var card = document.getElementById('image');
          var height = card.scrollHeight;
          if (height < 400) {
            height += (400 - height) / 4;
          }
          this.margin = height * 9 + 550 + "px";
        }
      }, {
        key: "onClosed1",
        value: function onClosed1() {
          if (this.opened == 1) {
            this.margin = "0px";
            this.opened = 0;
          }
        }
      }, {
        key: "onClosed2",
        value: function onClosed2() {
          if (this.opened == 2) {
            this.margin = "0px";
            this.opened = 0;
          }
        }
      }, {
        key: "onClosed3",
        value: function onClosed3() {
          if (this.opened == 3) {
            this.margin = "0px";
            this.opened = 0;
          }
        }
      }, {
        key: "stateName",
        value: function stateName() {
          return this.show ? 'show' : 'hide';
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.show = !this.show;
        }
      }, {
        key: "navigateToPictures",
        value: function navigateToPictures() {
          this.router.navigate(['images']);
        }
      }, {
        key: "navigateToInfo",
        value: function navigateToInfo() {
          this.router.navigate(['info']);
        }
      }, {
        key: "navigateToCovid",
        value: function navigateToCovid() {
          this.router.navigate(['covid']);
        }
      }, {
        key: "asd",
        value: function asd() {
          console.log('scrolling');
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          var width = event.target.innerWidth;
          if (width <= 500) {
            this.rowHeight = "30vw";
          } else {
            this.rowHeight = "15vw";
          }
          switch (this.opened) {
            case 0:
              break;
            case 1:
              var height1 = window.innerWidth / 4 + 400;
              this.margin = height1 + "px";
              break;
            case 2:
              var card1 = document.getElementById('image');
              var height2 = card1.scrollHeight;
              if (height2 < 400) {
                height2 += (400 - height2) / 10;
              }
              this.margin = height2 * 9 + 900 + "px";
              break;
            case 3:
              var card2 = document.getElementById('image');
              var height3 = card2.scrollHeight;
              if (height3 < 400) {
                height3 += (400 - height3) / 10;
              }
              this.margin = height3 * 10 + 800 + "px";
              break;
          }
        }
      }, {
        key: "scroll",
        value: function scroll(el) {
          el.scrollIntoView({
            behavior: "smooth"
          });
        }
      }]);
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll')], HomeComponent.prototype, "asd", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], HomeComponent.prototype, "onResize", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('popOverState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('hoveredState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('notHovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(-20px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('notHovered => hovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hovered => notHovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */"./src/app/components/home/home.component.scss"))["default"]]
    })], HomeComponent);

    /***/
  }),
  /***/"./src/app/components/images/images.component.scss": (
  /*!*********************************************************!*\
    !*** ./src/app/components/images/images.component.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_images_imagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container {\n  width: 100%;\n  margin-bottom: 5%;\n  height: auto;\n}\n\n.heading {\n  padding: 2% 5% 2% 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.selectedImageContainer {\n  position: relative;\n  width: 45%;\n  float: left;\n  margin-left: 4%;\n  margin-bottom: 5%;\n}\n\n.selectedImage {\n  border-radius: 2%;\n  width: 100%;\n  height: auto;\n}\n\n.prevButton {\n  position: absolute;\n  float: left;\n  left: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px 10% 10% 0px;\n}\n\n.nextButton {\n  position: absolute;\n  float: right;\n  right: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10% 0px 0px 10%;\n}\n\n.prevButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.nextButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.prevNextImage {\n  opacity: 1;\n  width: 100%;\n  height: 50%;\n  margin-left: 20%;\n}\n\n.subImage {\n  border-radius: 5%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 90%;\n  height: auto;\n}\n\n.imageList {\n  margin-bottom: 5%;\n}\n\n.subImage:hover {\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 25px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n\n.allImages {\n  width: 45%;\n  height: 100%;\n  float: right;\n  margin-bottom: 5%;\n  margin-right: 4%;\n}\n\n@media (max-width: 1000px) {\n  .selectedImageContainer {\n    width: 90%;\n    margin-bottom: 2%;\n  }\n\n  .allImages {\n    width: 90%;\n    margin-right: 6%;\n  }\n\n  .selectedImage {\n    background-size: contain;\n    height: 75%;\n    margin-top: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy9DOlxccHJvamVjdHNcXHRvbmdlcmxvQ29kZVxcc3JjXFxhcHBcXGNvbXBvbmVudHMvaW1hZ2VzXFxpbWFnZXMuY29tcG9uZW50LnNjc3MiLCJpbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSw2RUFBQTtFQUNBLGVBQUE7QUNBSjs7QURJQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNEQTs7QURJQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0VDRE47O0VESUU7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7RUNETjs7RURJRTtJQUNJLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNETjtBQUNGIiwiZmlsZSI6ImltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBwYWRkaW5nIDogMiUgNSUgMiUgNSU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4uc2VsZWN0ZWRJbWFnZUNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWRJbWFnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wcmV2QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQgOiBsZWZ0O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAzNSU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC4yKTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTAlIDEwJSAwcHg7XHJcbn1cclxuXHJcbi5uZXh0QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQgOiByaWdodDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuMik7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlIDBweCAwcHggMTAlO1xyXG59XHJcblxyXG4ucHJldkJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuNik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uZXh0QnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC42KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByZXZOZXh0SW1hZ2V7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5zdWJJbWFnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZUxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnN1YkltYWdlOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYWxsSW1hZ2Vze1xyXG53aWR0aDogNDUlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmZsb2F0IDogcmlnaHQ7XHJcbm1hcmdpbi1ib3R0b206IDUlO1xyXG5tYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoIDogMTAwMHB4KXtcclxuICAgIC5zZWxlY3RlZEltYWdlQ29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsbEltYWdlc3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdGVkSW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaGVhZGluZyB7XG4gIHBhZGRpbmc6IDIlIDUlIDIlIDUlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG5cbi5zZWxlY3RlZEltYWdlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnNlbGVjdGVkSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnByZXZCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGhlaWdodDogMzAlO1xuICB3aWR0aDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwJSAxMCUgMHB4O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMHB4O1xuICB0b3A6IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJSAwcHggMHB4IDEwJTtcbn1cblxuLnByZXZCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5leHRCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByZXZOZXh0SW1hZ2Uge1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5zdWJJbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2VMaXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5zdWJJbWFnZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbGxJbWFnZXMge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNlbGVjdGVkSW1hZ2VDb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cblxuICAuYWxsSW1hZ2VzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG4gIH1cblxuICAuc2VsZWN0ZWRJbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGhlaWdodDogNzUlO1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICB9XG59Il19 */";

    /***/
  }),
  /***/"./src/app/components/images/images.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/components/images/images.component.ts ***!
    \*******************************************************/
  /*! exports provided: ImagesComponent */
  /***/
  function _src_app_components_images_imagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ImagesComponent", function () {
      return ImagesComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    var ImagesComponent = /*#__PURE__*/function () {
      function ImagesComponent(title, meta) {
        _classCallCheck(this, ImagesComponent);
        this.title = title;
        this.meta = meta;
        this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
        this.selectedIndex = 1;
        this.amountCols = 4;
        this.buttonsVisible = true;
        this.selectedImageStyle = {
          border: 'solid 5px rgb(235, 161, 25)'
        };
        this.notSelectedImageStyle = {};
        this.title.setTitle("Foto's");
        this.meta.addTag({
          name: 'description',
          content: "bekijk hier alle foto's van eerdere edities van de tongerlse dorpsfeesten."
        });
        this.meta.addTag({
          name: 'keywords',
          content: "Tongels dorpsfeest foto's, tongelse dorpsfeesten foto's, tongels dorpsfeest gallerij"
        });
        var width = window.innerWidth;
        if (width <= 500) {
          this.amountCols = 3;
        }
      }
      return _createClass(ImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return this.setButtonsVisibility();
                case 1:
                  return _context.a(2);
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ImageSelected",
        value: function ImageSelected(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  this.selectedIndex = index + 1;
                  _context2.n = 1;
                  return this.setButtonsVisibility();
                case 1:
                  return _context2.a(2);
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "setButtonsVisibility",
        value: function setButtonsVisibility() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  this.buttonsVisible = false;
                  _context3.n = 1;
                  return this.delay(300);
                case 1:
                  this.buttonsVisible = true;
                case 2:
                  return _context3.a(2);
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "nextImage",
        value: function nextImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.n) {
                case 0:
                  if (!(this.selectedIndex == this.images.length)) {
                    _context4.n = 2;
                    break;
                  }
                  this.selectedIndex = 1;
                  _context4.n = 1;
                  return this.setButtonsVisibility();
                case 1:
                  return _context4.a(2);
                case 2:
                  ++this.selectedIndex;
                  _context4.n = 3;
                  return this.setButtonsVisibility();
                case 3:
                  return _context4.a(2);
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "prevImage",
        value: function prevImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
            return _regenerator().w(function (_context5) {
              while (1) switch (_context5.n) {
                case 0:
                  if (!(this.selectedIndex == 1)) {
                    _context5.n = 2;
                    break;
                  }
                  this.selectedIndex = this.images.length;
                  _context5.n = 1;
                  return this.setButtonsVisibility();
                case 1:
                  return _context5.a(2);
                case 2:
                  --this.selectedIndex;
                  _context5.n = 3;
                  return this.setButtonsVisibility();
                case 3:
                  return _context5.a(2);
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          var width = event.target.innerWidth;
          if (width <= 500) {
            this.amountCols = 3;
          } else {
            this.amountCols = 4;
          }
        }
      }]);
    }();
    ImagesComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], ImagesComponent.prototype, "onResize", null);
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./images.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listStagger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: 'translateY(-15px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        transform: 'translateY(0px)'
      })))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), {
        optional: true
      })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scale', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: "scale(0.5)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("300ms cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        transform: "scale(1)"
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./images.component.scss */"./src/app/components/images/images.component.scss"))["default"]]
    })], ImagesComponent);

    /***/
  }),
  /***/"./src/app/components/main-nav/main-nav.component.scss": (
  /*!*************************************************************!*\
    !*** ./src/app/components/main-nav/main-nav.component.scss ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_mainNav_mainNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.toolbarItems a {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n}\n\n.toolbarItems a:hover {\n  text-shadow: 3px 3px 5px #000000;\n}\n\n.sloganSpan {\n  margin-right: 5%;\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 1.5vh;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.logo {\n  height: 75%;\n}\n\nmat-toolbar {\n  height: 100px !important;\n  min-height: 100px !important;\n}\n\n.active-link {\n  font-weight: 900;\n}\n\na {\n  text-decoration: none;\n  color: black !important;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n@media (max-width: 1000px) {\n  mat-toolbar {\n    height: 75px !important;\n    min-height: 75px !important;\n  }\n}\n\n@media (max-width: 500px) {\n  mat-toolbar {\n    height: 50px !important;\n    min-height: 50px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2L0M6XFxwcm9qZWN0c1xcdG9uZ2VybG9Db2RlXFxzcmNcXGFwcFxcY29tcG9uZW50cy9tYWluLW5hdlxcbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiLCJtYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSwyQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsMkJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6Im1haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b29sYmFySXRlbXMgYXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9vbGJhckl0ZW1zIGE6aG92ZXJ7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zbG9nYW5TcGFue1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxLjV2aDtcclxufVxyXG5cclxuLnNwYWNlcntcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmxvZ297XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5re1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gIG1hdC10b29sYmFyIHtcclxuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gIG1hdC10b29sYmFyIHtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9vbGJhckl0ZW1zIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b29sYmFySXRlbXMgYTpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwMDAwO1xufVxuXG4uc2xvZ2FuU3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDc1JTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBtYXQtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/components/main-nav/main-nav.component.ts": (
  /*!***********************************************************!*\
    !*** ./src/app/components/main-nav/main-nav.component.ts ***!
    \***********************************************************/
  /*! exports provided: MainNavComponent */
  /***/
  function _src_app_components_mainNav_mainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var MainNavComponent = /*#__PURE__*/_createClass(function MainNavComponent(breakpointObserver) {
      _classCallCheck(this, MainNavComponent);
      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    });
    MainNavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }];
    };
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.scss */"./src/app/components/main-nav/main-nav.component.scss"))["default"]]
    })], MainNavComponent);

    /***/
  }),
  /***/"./src/app/components/practical-info/practical-info.component.scss": (
  /*!*************************************************************************!*\
    !*** ./src/app/components/practical-info/practical-info.component.scss ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_practicalInfo_practicalInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container {\n  margin: 60px 100px 100px 100px;\n  width: 60%;\n  margin-bottom: 75px;\n}\n\n.link {\n  color: black;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.link:hover {\n  font-weight: 600;\n}\n\n.map {\n  height: 400px;\n}\n\n@media (max-width: 900px) {\n  .container {\n    margin: 60px 60px 100px 60px;\n    width: 75%;\n  }\n}\n\n@media (max-width: 500px) {\n  .container {\n    margin: 40px 20px 100px 20px;\n    width: 90%;\n    margin-bottom: 50px;\n  }\n\n  .map {\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByYWN0aWNhbC1pbmZvL0M6XFxwcm9qZWN0c1xcdG9uZ2VybG9Db2RlXFxzcmNcXGFwcFxcY29tcG9uZW50cy9wcmFjdGljYWwtaW5mb1xccHJhY3RpY2FsLWluZm8uY29tcG9uZW50LnNjc3MiLCJwcmFjdGljYWwtaW5mby9wcmFjdGljYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxVQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUNETjs7RURHRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDQU47QUFDRiIsImZpbGUiOiJwcmFjdGljYWwtaW5mby9wcmFjdGljYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA2MHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjkwMHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogNjBweCA2MHB4IDEwMHB4IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDQwcHggMjBweCAxMDBweCAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICAgIC5tYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDYwcHggMTAwcHggMTAwcHggMTAwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1ib3R0b206IDc1cHg7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubGluazpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYXAge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA2MHB4IDYwcHggMTAwcHggNjBweDtcbiAgICB3aWR0aDogNzUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA0MHB4IDIwcHggMTAwcHggMjBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICAubWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/components/practical-info/practical-info.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/components/practical-info/practical-info.component.ts ***!
    \***********************************************************************/
  /*! exports provided: PracticalInfoComponent */
  /***/
  function _src_app_components_practicalInfo_practicalInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PracticalInfoComponent", function () {
      return PracticalInfoComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PracticalInfoComponent = /*#__PURE__*/function () {
      function PracticalInfoComponent() {
        _classCallCheck(this, PracticalInfoComponent);
      }
      return _createClass(PracticalInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    PracticalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-practical-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./practical-info.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./practical-info.component.scss */"./src/app/components/practical-info/practical-info.component.scss"))["default"]]
    })], PracticalInfoComponent);

    /***/
  }),
  /***/"./src/app/components/tickets/tickets.component.scss": (
  /*!***********************************************************!*\
    !*** ./src/app/components/tickets/tickets.component.scss ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_tickets_ticketsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container {\n  width: 100%;\n  height: auto;\n  min-height: calc(75vh - 50px);\n}\n\n.heading {\n  padding: 2% 5% 2% 0;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.tickets-button {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n  max-width: 175px;\n  min-height: 50px;\n  height: 50px;\n  border: solid 1px black;\n  border-radius: 5px;\n  text-decoration: none;\n  color: black;\n  margin-top: 30px;\n}\n\nth {\n  text-align: left;\n  padding: 0 40px 15px 0;\n}\n\nthead th {\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldHMvQzpcXHByb2plY3RzXFx0b25nZXJsb0NvZGVcXHNyY1xcYXBwXFxjb21wb25lbnRzL3RpY2tldHNcXHRpY2tldHMuY29tcG9uZW50LnNjc3MiLCJ0aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDSSxvQkFBQTtBQ0FKIiwiZmlsZSI6InRpY2tldHMvdGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNzV2aCAtIDUwcHgpO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIHBhZGRpbmcgOiAyJSA1JSAyJSAwO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxufVxyXG5cclxuLnRpY2tldHMtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMCA0MHB4IDE1cHggMDtcclxuXHJcbn1cclxuXHJcbnRoZWFkIHRoIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBjYWxjKDc1dmggLSA1MHB4KTtcbn1cblxuLmhlYWRpbmcge1xuICBwYWRkaW5nOiAyJSA1JSAyJSAwO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG5cbi50aWNrZXRzLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMTc1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbnRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMCA0MHB4IDE1cHggMDtcbn1cblxudGhlYWQgdGgge1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/components/tickets/tickets.component.ts": (
  /*!*********************************************************!*\
    !*** ./src/app/components/tickets/tickets.component.ts ***!
    \*********************************************************/
  /*! exports provided: TicketsComponent */
  /***/
  function _src_app_components_tickets_ticketsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TicketsComponent", function () {
      return TicketsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    var TicketsComponent = /*#__PURE__*/function () {
      function TicketsComponent(title, meta) {
        _classCallCheck(this, TicketsComponent);
        this.title = title;
        this.meta = meta;
        this.title.setTitle("Tickets");
        this.meta.addTag({
          name: 'keywords',
          content: "Tongelse Dorpsfeesten, tickets"
        });
      }
      return _createClass(TicketsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    TicketsComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
      }];
    };
    TicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tickets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tickets.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/tickets/tickets.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tickets.component.scss */"./src/app/components/tickets/tickets.component.scss"))["default"]]
    })], TicketsComponent);

    /***/
  }),
  /***/"./src/app/components/tvh/tvh.component.scss": (
  /*!***************************************************!*\
    !*** ./src/app/components/tvh/tvh.component.scss ***!
    \***************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_components_tvh_tvhComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container {\n  padding: 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.group {\n  text-decoration: none;\n  color: black;\n  font-weight: bolder;\n  margin-left: 2%;\n}\n\na:hover {\n  font-size: 2vh;\n}\n\n.link {\n  margin-left: 2%;\n  color: #b1b1b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2aC9DOlxccHJvamVjdHNcXHRvbmdlcmxvQ29kZVxcc3JjXFxhcHBcXGNvbXBvbmVudHMvdHZoXFx0dmguY29tcG9uZW50LnNjc3MiLCJ0dmgvdHZoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJ0dmgvdHZoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxufVxyXG5cclxuLmdyb3Vwe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmdyb3VwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuYTpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ubGluayB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgY29sb3I6ICNiMWIxYjE7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/components/tvh/tvh.component.ts": (
  /*!*************************************************!*\
    !*** ./src/app/components/tvh/tvh.component.ts ***!
    \*************************************************/
  /*! exports provided: TvhComponent */
  /***/
  function _src_app_components_tvh_tvhComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TvhComponent", function () {
      return TvhComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    var TvhComponent = /*#__PURE__*/function () {
      function TvhComponent(title, meta) {
        _classCallCheck(this, TvhComponent);
        this.title = title;
        this.meta = meta;
        this.title.setTitle("TVH");
        this.meta.addTag({
          name: 'description',
          content: "De Tongelse Dorpsfeesten zijn ontstaan in 1987. Het wordt georganiseerd door een comite dat bestaat uit 6 personen."
        });
        this.meta.addTag({
          name: 'keywords',
          content: "Tongelse Dorpsfeesten, organisatoren, tvh, oprichters"
        });
      }
      return _createClass(TvhComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groups = [{
            name: "HSV",
            link: "https://www.facebook.com/pages/category/Soccer-Field/HSV-Tongerlo-832768450409166/",
            show: false
          }, {
            name: "FIEN BOYS",
            link: "http://fienboys.be/",
            show: false
          }, {
            name: "KFC TONGERLO",
            link: "https://www.kfctongerlo.be/",
            show: false
          }, {
            name: "CHIRO",
            link: "http://www.chirotongerlo.be/",
            show: false
          }, {
            name: "KLJ",
            link: "http://kljtongerlo.be/",
            show: false
          }, {
            name: "LANDELIJKE GILDE",
            link: "http://www.lgtongerlo.be/",
            show: false
          }, {
            name: "VOLLEY WESTERLO",
            link: "https://www.volleywesterlo.be/",
            show: false
          }, {
            name: "T-BLAZERS",
            link: "https://www.facebook.com/fanfareTblazers/",
            show: false
          }, {
            name: "KKSVWO",
            link: "https://www.kksvwo.be/",
            show: false
          }, {
            name: "FCL Victoria"
          }];
        }
      }, {
        key: "stateName",
        value: function stateName(i) {
          return this.groups[i].show ? 'show' : 'hide';
        }
      }, {
        key: "toggle",
        value: function toggle(i) {
          if (!i.link) {
            return;
          }
          this.groups[i].show = !this.groups[i].show;
        }
      }]);
    }();
    TvhComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]
      }];
    };
    TvhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tvh',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tvh.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listStagger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: 'translateY(-15px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        transform: 'translateY(0px)'
      })))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), {
        optional: true
      })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('popOverState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tvh.component.scss */"./src/app/components/tvh/tvh.component.scss"))["default"]]
    })], TvhComponent);

    /***/
  }),
  /***/"./src/app/features/fade-in/fade-in.component.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/features/fade-in/fade-in.component.ts ***!
    \*******************************************************/
  /*! exports provided: FadeInComponent */
  /***/
  function _src_app_features_fadeIn_fadeInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FadeInComponent", function () {
      return FadeInComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    var style1 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
      opacity: 1
    });
    var style2 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
      opacity: 0
    });
    var FadeInComponent = /*#__PURE__*/function () {
      function FadeInComponent(el) {
        _classCallCheck(this, FadeInComponent);
        this.el = el;
        this.state = 'hide';
      }
      return _createClass(FadeInComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.scrollEvent) {
            var componentPosition = this.el.nativeElement.offsetTop;
            var scrollPosition = window.pageYOffset;
            if (scrollPosition >= componentPosition - 250) {
              this.state = 'show';
            } else {
              this.state = 'hide';
            }
          }
        }
      }]);
    }();
    FadeInComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FadeInComponent.prototype, "scrollEvent", void 0);
    FadeInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fade-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fade-in.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('foobar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', style1), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', style2), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in'))])]
    })], FadeInComponent);

    /***/
  }),
  /***/"./src/app/material/material.module.ts": (
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/
  /*! exports provided: MaterialModule */
  /***/
  function _src_app_material_materialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    var MaterialModule = /*#__PURE__*/_createClass(function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    });
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]]
    })], MaterialModule);

    /***/
  }),
  /***/"./src/app/pipes/limitStringPipe.ts": (
  /*!******************************************!*\
    !*** ./src/app/pipes/limitStringPipe.ts ***!
    \******************************************/
  /*! exports provided: LimitStringPipe */
  /***/
  function _src_app_pipes_limitStringPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LimitStringPipe", function () {
      return LimitStringPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var LimitStringPipe = /*#__PURE__*/function () {
      function LimitStringPipe() {
        _classCallCheck(this, LimitStringPipe);
      }
      return _createClass(LimitStringPipe, [{
        key: "transform",
        value: function transform(text) {
          if (text.length > 50) {
            text = text.slice(0, 50) + "...";
          }
          return text;
        }
      }]);
    }();
    LimitStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'stringlimit'
    })], LimitStringPipe);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
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
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */"./node_modules/hammerjs/hammer.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! C:\projects\tongerloCode\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map