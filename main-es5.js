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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-nav></app-main-nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/concert/concert.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/concert/concert.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsConcertConcertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n<p class=\"title\">Kerstconcert</p>\n<p class=\"info\">Naast het dorpsfeest in mei organiseert Tongerlo Leeft ! ook elk jaar in december een openlucht Kerst-Rock-Concert. In principe steeds op de vrijdagavond aan het begin van het kerstverlof.\n    Een fijne start van de feestdagen met live muziek, glühwein en jenever, vuurkorven, soep en warme choco, kerstmutsen en pintjes op buitentemperatuur.</p>\n\n    <div class=\"tempWarning\">\n        <img src=\"../../../assets/images/error.png\" class=\"warnImage\"/>\n        <p class=\"warnText\">\n            Het kerstconcert zal dit jaar niet kunnen doorgaan door het corona-virus\n        </p>\n    </div>\n\n<div class=\"flyerImg\"></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"12\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\n      <agm-info-window [isOpen]=true>\n\n        <div>\n            <p class=\"infoWindowTitle\">LOCATIE :</p>\n            <p>Tongerlodorp 2260 Tongerlo, Antwerpen, België</p>\n        </div>\n\n    </agm-info-window>\n    </agm-marker>\n</agm-map>\n\n<form class=\"form\" [formGroup]=\"myForm\" #contactForm=\"ngForm\">\n    <mat-form-field appearance=\"outline\" class=\"name\">\n        <mat-label>naam</mat-label>\n        <input matInput placeholder=\"naam\" type=\"text\" formControlName=\"name\">\n        <mat-error *ngIf=\"myForm.get('name').hasError('required')\">\n            Dit veld is verplicht\n          </mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field appearance=\"outline\" class=\"mail\">\n        <mat-label>e-mail</mat-label>\n        <input matInput placeholder=\"e-mail\" type=\"email\" formControlName=\"mail\">\n        <mat-error *ngIf=\"myForm.get('mail').hasError('email') && !myForm.get('mail').hasError('required')\">\n            Gelieve een geldig e-mailadres in te vullen\n          </mat-error>\n          <mat-error *ngIf=\"myForm.get('mail').hasError('required')\">\n            Dit veld is verplicht\n          </mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>vraag aan</mat-label>\n        <mat-select formControlName=\"organisation\">\n            <mat-option value=\"option1\">Organisatie Comité</mat-option>\n            <mat-option value=\"option2\">Webmaster</mat-option>\n          </mat-select>\n    </mat-form-field>\n    <br/>\n    <mat-form-field appearance=\"outline\" class=\"mail\">\n        <mat-label>Vraag of opmerking</mat-label>\n        <textarea rows=\"5\" matInput placeholder=\"Opmerking\" formControlName=\"question\"></textarea>\n        <mat-error *ngIf=\"myForm.get('question').hasError('required')\">\n            Dit veld is verplicht\n          </mat-error>\n    </mat-form-field>\n    <br/>\n    <div class=\"submitLoaderContainer\">\n    <button mat-raised-button type=\"submit\" (click)=\"submit(contactForm)\" [disabled]=\"!myForm.valid || !enabled\" class=\"submitButton\">verstuur</button>\n    <mat-spinner [diameter]=\"30\" class=\"spinner\" *ngIf=\"loading\"></mat-spinner>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footerContainer\">\n    <div class=\"logo\"></div>\n   <div (click)=\"redirect()\" class=\"fbLogo\"></div>\n    <p class=\"copyright\">@2020 TVH</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"topImage\">\n    <div class=\"mainText\">\n        <h1>Tongels Dorpsfeest 2022</h1>\n        <h2>6, 7 en 8 mei</h2>\n    </div>\n</header>\n<mat-grid-list cols=\"4\" rowHeight=\"{{rowHeight}}\" (window:resize)=\"onResize($event)\" class=\"navContainer\">\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(info)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/feast.png\" alt=\"Info\" />\n            </div>\n            <p class=\"navInfo\">Nieuws</p>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(lineup)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/lineup.png\" alt=\"Line Up\" />\n            </div>\n            <p class=\"navInfo\">Programma</p>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(gallery)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/photo.png\" alt=\"Foto's\" />\n            </div>\n            <p class=\"navInfo\">Foto's</p>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(sponsors)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/sponsor.png\" alt=\"Sponsors\" />\n            </div>\n            <p class=\"navInfo\">Sponsors</p>\n        </div>\n    </mat-grid-tile>\n</mat-grid-list>\n\n<div class=\"infoDiv\" #info id=\"info\">\n    <div class=\"infoText\">\n        <p class=\"infoTitle\">Tongels Dorpsfeest 2022</p>\n        <p>Het 35e Tongels Dorpsfeest zal dit jaar doorgaan op vrijdag 6, zaterdag 7 & zondag 8 mei 2022. Vrijdag en zondag is de toegang gratis. Zaterdag bedraagt de inkomprijs €10.</p>\n        <div class=\"info-buttons\">\n            <div class=\"info-button\" (click)=\"navigateToInfo()\">Praktische info</div>\n        </div>\n    </div>\n    <div class=\"infoImage\">\n    </div>\n</div>\n\n<div class=\"lineupDiv\" #lineup>\n    <div class=\"imagePdfContainer\">\n        <div class=\"lineupImage\"></div>\n        <a href=\"../../../assets/files/Line-Up.pdf\" download>\n            <div class=\"pdfButton\" (mouseover)=\"onHovered()\" (mouseleave)=\"onHovered()\"><img\n                    src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\n                <p class=\"downloadText\" [@hoveredState]=\"state\">download line up</p>\n            </div>\n        </a>\n    </div>\n    <div class=\"lineupText\">\n        <p class=\"lineupTitle\">Programma</p>\n        <mat-accordion>\n            <mat-expansion-panel (opened)=\"onExpand1()\" (afterCollapse)=\"onClosed1()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <i class=\"material-icons\">\n                            date_range\n                        </i>\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Vrijdag 6 mei\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <p class=\"location\">Fuiftent</p>\n                <mat-card>\n                    <mat-card-title>Kontrair</mat-card-title>\n                    <mat-card-subtitle>22h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Kontrair.jpg\" alt=\"Photo of Kontrair\">\n                </mat-card>\n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"onExpand2()\" (afterCollapse)=\"onClosed2()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <i class=\"material-icons\">\n                            date_range\n                        </i>\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Zaterdag 7 mei\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <p class=\"location\">B&C Technics Podium</p>\n                <mat-card>\n                    <mat-card-title>The Cover Up</mat-card-title>\n                    <mat-card-subtitle>19h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Cover Up.png\" alt=\"Photo of The Cover Up\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>REGI & special guest Olivia</mat-card-title>\n                    <mat-card-subtitle>23h00</mat-card-subtitle>\n                    <img id=\"image\" mat-card-image src=\"../../../assets/images/line-up/Regi Olivia.png\"\n                        alt=\"Photo of Regi & Olivia\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Fenix</mat-card-title>\n                    <mat-card-subtitle>1h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Fenix.png\"\n                        alt=\"Photo of Ilsen & Verhulst\">\n                </mat-card>\n                <p class=\"location\">Vincent Peeters Tuincreaties Podium</p>\n                <mat-card>\n                    <mat-card-title>Three of  kind</mat-card-title>\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Three of a kind.png\"\n                        alt=\"Photo of Three of a kind\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>The Dukes Band</mat-card-title>\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Dukes Band.png\"\n                        alt=\"Photo of The Dukes Band\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Farce Fatale</mat-card-title>\n                    <mat-card-subtitle>00:30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Farce Fatale.jpg\" alt=\"Photo of Farce Fatale\">\n                </mat-card>\n                <p class=\"location\">Feesttent</p>\n                <mat-card>\n                    <mat-card-title>Tieson</mat-card-title>\n                    <mat-card-subtitle>22:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Tieson.jpg\" alt=\"Photo of Tieson\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>BRØM</mat-card-title>\n                    <mat-card-subtitle>24:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/BRØM.png\" alt=\"Photo of BRØM\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Allesto</mat-card-title>\n                    <mat-card-subtitle>01:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Allesto.png\" alt=\"Photo of Allesto\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Ekke</mat-card-title>\n                    <mat-card-subtitle>02:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Ekke.jpg\" alt=\"Photo of Ekko\">\n                </mat-card>\n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"onExpand3()\" (afterCollapse)=\"onClosed3()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <i class=\"material-icons\">\n                            date_range\n                        </i>\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Zondag 8 mei\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <p class=\"location\">B&C Technics Podium</p>\n                <mat-card>\n                    <mat-card-title>Sasha & Davy</mat-card-title>\n                    <mat-card-subtitle>17h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Sasha & Davy.jpg\"\n                        alt=\"Photo of Sasha & Davy\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Level Six</mat-card-title>\n                    <mat-card-subtitle>20h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Level Six.png\"\n                        alt=\"Photo of Level Six\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>TUSH</mat-card-title>\n                    <mat-card-subtitle>23h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Tush.jpg\" alt=\"Photo of TUSH\">\n                </mat-card>\n                <p class=\"location\">Vincent Peeters Tuincreaties Podium</p>\n                <mat-card>\n                    <mat-card-title>Sam Gooris</mat-card-title>\n                    <mat-card-subtitle>15h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Sam Gooris.png\"\n                        alt=\"Photo of Sam Gooris\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Stage Revolver</mat-card-title>\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Stage Revolver.jpg\"\n                        alt=\"Photo of Stage Revolver\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Cosmo's Foger-T</mat-card-title>\n                    <mat-card-subtitle>21h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Cosmo's Foger-T.png\"\n                        alt=\"Photo of Cosmo's Foger-T\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>DB Wa Kleur Hee Aaven Trakteur?!</mat-card-title>\n                    <mat-card-subtitle>23h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Wa Kleur Hee Aaven Trakteur.png\"\n                        alt=\"Photo of Wa Kleur Hee Aaven Trakteur\">\n                </mat-card>\n            </mat-expansion-panel>\n        </mat-accordion>\n        <a href=\"../../../assets/files/Line-Up.pdf\" download>\n            <div class=\"pdfButton2\"><img src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\n                <p class=\"downloadText\">download line up</p>\n            </div>\n        </a>\n    </div>\n</div>\n\n<div [style.height]=\"margin\"></div>\n\n<div class=\"imagesDiv\" #gallery>\n    <div class=\"imagesHeading\">\n        <p class=\"imagesTitle\">Foto's</p>\n        <p>Bekijk hier de foto's van voorgaande edities</p>\n    </div>\n    <div class=\"imageContainer\">\n        <img src=\"../../../assets/images/play.png\" class=\"playButton\" [@popOverState]=\"stateName()\"\n            (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\" (click)=\"navigateToPictures()\" />\n        <img src=\"../../../assets/images/gallery/5.jpg\" class=\"imageLink\" (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\"\n            (click)=\"navigateToPictures()\" />\n    </div>\n</div>\n\n<div class=\"sponsorsDiv\" #sponsors>\n    <p class=\"sponsorTitle\">sponsors</p>\n    <div class=\"sponsors\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-2\" ><img src=\"../../../assets/images/sponsors/sponsor1.1.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.2.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.3.png\" class=\"sponsor1\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.4.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.5.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.6.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.7.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.8.png\" class=\"sponsor1\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.9.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.10.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.11.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.12.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.13.png\" class=\"sponsor1\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.1.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.2.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.3.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.4.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.5.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.6.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.7.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.8.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.9.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.10.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.11.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.12.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.13.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.14.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.15.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.16.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.17.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.18.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.19.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.20.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.1.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.2.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.3.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.4.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.5.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.6.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.7.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.8.png\" class=\"sponsor3\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.9.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.10.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.11.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.12.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.13.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.14.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.15.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.16.png\" class=\"sponsor3\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.17.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.18.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.19.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.20.png\" class=\"sponsor3\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.1.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.2.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.3.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.4.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.5.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.6.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.7.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.8.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.9.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.10.png\" class=\"sponsor4\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.1.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.2.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.3.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.4.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.5.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.6.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.7.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.8.png\" class=\"sponsor5\"/></div>\n        </div>\n        <div class=\"row sponsor-names\">SND Sound & Light &#8227; Kineteam &#8227; Heracles &#8227; Haarstudio Marleen &#8227; Van Hove Begrafenissen &#8227; Bakkerij De Becker &#8227; Hadebo &#8227; Keurslager David &#8227; Foto Karel &#8227; Het Houten Huizeke &#8227; De Broodkruimel &#8227; Beauty Art &#8227; Slagerij Marleen & Co &#8227; Kapsalon Mabo &#8227; 't Kippefestijntje &#8227; Dakwerken Daneels &#8227; KeapSolutions &#8227; De verzekeringswinkel &#8227; Dave's Hairstudio</div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImagesImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" (window:resize)=\"onResize($event)\">\n    <div class=\"heading\">\n        <p class=\"title\">Foto's</p>\n        <p class=\"description\">Bekijk hier al de foto's van eerdere edities</p>\n    </div>\n    <div class=\"selectedImageContainer\">\n        <div class=\"prevButton\" (click)=\"prevImage()\" *ngIf=\"buttonsVisible\">\n            <img class=\"prevNextImage\" src=\"../../../assets/images/backArrow.png\">\n        </div>\n        <div class=\"nextButton\" (click)=\"nextImage()\" *ngIf=\"buttonsVisible\">\n            <img class=\"prevNextImage\" src=\"../../../assets/images/NextArrow.png\">\n        </div>\n        <div *ngFor=\"let image of images; let i = index\">\n        <img class=\"selectedImage\" @scale [src]=\"'../../../assets/images/gallery/' + (i+1) +'.jpg'\" (swiperight)=\"nextImage()\" (swipeleft)=\"prevImage()\" *ngIf=\"(i+1) == selectedIndex\"/>\n        </div>\n    </div>\n    <div class=\"allImages\">\n        <mat-grid-list [cols]=\"amountCols\" [@listStagger]='images.length' class=\"imageList\">\n            <mat-grid-tile *ngFor=\"let image of images; let i = index\">\n                <img class=\"subImage\" [ngStyle]=\"((i + 1) == selectedIndex) ? selectedImageStyle : notSelectedImageStyle\" [src]=\"'../../../assets/images/gallery/icons/icon' + (i+1) +'.jpg'\" (click)=\"ImageSelected(i);\"/>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainNavMainNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\"\n      [ngClass]=\"{hidden: (isHandset$ | async) === false}\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\"\n      position=\"end\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"['/home']\">Home</a>\n      <a mat-list-item [routerLink]=\"['/images']\">Foto's</a>\n      <a mat-list-item [routerLink]=\"['/info']\">Praktische Info</a>\n      <a mat-list-item [routerLink]=\"['/concert']\">Kerstconcert</a>\n      <a mat-list-item [routerLink]=\"['/tvh']\">TVH</a>\n      <a mat-list-item [routerLink]=\"['/contact']\">Contact</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <img class=\"logo\" src=\"../../../assets/images/logo.png\"/>\n      <span class=\"spacer\"></span>\n      <p class=\"sloganSpan\" [ngClass]=\"{hidden: (isHandset$ | async) === false}\">Tongerlo leeft!</p>\n      <div class=\"toolbarItems\" [ngClass]=\"{hidden: (isHandset$ | async) === true}\">\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"active-link\">Home</a>\n        <a [routerLink]=\"['/images']\" routerLinkActive=\"active-link\">Foto's</a>\n        <a [routerLink]=\"['/info']\" routerLinkActive=\"active-link\">Praktische Info</a>\n        <a [routerLink]=\"['/concert']\" routerLinkActive=\"active-link\">Kerstconcert</a>\n        <a [routerLink]=\"['/tvh']\" routerLinkActive=\"active-link\">TVH</a>\n        <a [routerLink]=\"['/contact']\" routerLinkActive=\"active-link\">Contact</a>\n      </div>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPracticalInfoPracticalInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h2>Praktische info</h2>\n    <h3>Inkom</h3>\n    <p>Het terein is te betreden via 3 inkoms:</p>\n    <ul>\n        <li>Kruispunt Geelsestraat/Kerkplein/Abdijstraat</li>\n        <li>Langstraat</li>\n        <li>Lange Nieuwstraat</li>\n    </ul>\n    <p>Deze zijn op zaterdag geopend vanaf 16h en zondag vanaf 13h. Indien er aan een bepaalde inkom een te lange wachtrij staat, kan je altijd bij een andere ingang proberen. Inkom Langstraat en inkom Lange Nieuwstraat zijn meestal het minst druk.</p>\n    <p>De inkom kan enkel contant betaald worden.</p>\n    <p>Voor je eigen veiligheid zullen er bewakingsagenten aanwezig zijn op het terrein. Zij hebben het recht om controles uit te voeren. Bij verzet of weigering kan de toegang ontzegd worden.</p>\n    <p>Door het betreden van het festivalterrein geef je als bezoeker stilzwijgend toestemming aan de organisatie om (audio-)visuele opnames te maken.</p>\n    <h3>Geen vestiare</h3>\n    <p>Er is geen vestiaire op het terrein. Spullen achterlaten gebeurt op eigen verantwoordelijkheid.</p>\n    <h3>Drankjetons</h3>\n    <p>Drankjetons kan je kopen (contant) aan onze kassa’s. Deze jetons worden niet terugbetaald. Vrijdag zullen er andere jetons gebruikt worden dan zaterdag en zondag.</p>\n    <h3>Milieu</h3>\n    <p>We proberen zoveel mogelijk afval te sorteren. Werp daarom plastiek bekers in de daarvoor voorziene plaatsen. Uitdelen van flyers kan op ons festival terrein niet toegestaan worden.</p>\n    <h3>Toiletten</h3>\n    <p>Er zijn ruim voldoende en aangepaste toiletten op het terrein. Deze zijn gratis te gebruiken. We verwachten dat alle toiletten proper achter gelaten worden. Gelieve enkel de toiletten te gebruiken en nergens tegen omheiningen of gebouwen te urineren.</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTvhTvhComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n<p class=\"title\">KERN COMITEE</p>\n<p>In 1987 werd het \"Tongels Dorpsfeest\" geboren,naar een idee van Jan Michiels die samen met Erik Van Eynde en Willy Van Eysendeyk, tussen pot en pint in het legendarisch restaurant \"den Toerist\"beslisten,om na de ter ziele gegane lichtstoet van Tongerlo in de jaren 60, opnieuw een openluchtfeest te organiseren tijdens de meikermis. Na 34 edities bestaat het huidige kerncomite uit 6 personen: bezieler Jan Michiels, Jan Martens, Conny Van Dyck, Hans Hufkens, Jules Baerts en Niels Spruyt. Zij werken belangeloos talloze uren als hobby,in hun vrije tijd aan de jaarlijkse voorbereiding van dit unieke dorpsfeest,onder voogdij van een tiental Tongelse deelnemende verenigingen die nog steeds de eindbeslissingen nemen tijdens de maandelijkse vergaderingen,met 1 of 2 afgevaardigden per deelnemende vereniging. Ook de samenwerking met onze lokale en regionale sponsors blijft een onmisbaar gegeven om sociale consumptie- en toegangsprijzen en een sfeervol programma mogelijk te maken.</p>\n<p class=\"title\">DEELNEEMENDE VERENGINGEN</p>\n<p>Organisatiecomité met deelnemende Tongelse verenigingen voor het 35 ste Tongels Dorpsfeest op vrijdag 6, zaterdag 7 en zondag 8 mei 2022:</p>\n<mat-list [@listStagger]='groups.length' class=\"groups\">\n    <mat-list-item *ngFor=\"let group of groups; let i = index \" class=\"group\">\n      <i class=\"material-icons\">\n        play_arrow\n        </i>\n      <a href=\"{{group.link}}\" (mouseover)=\"toggle(i)\" (mouseleave)=\"toggle(i)\">{{group.name}}</a>\n      <p class=\"link\" [@popOverState]=\"stateName(i)\">->{{group.link | stringlimit}}</p>\n</mat-list-item>\n</mat-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFadeInFadeInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@foobar]=\"state\">\n    <ng-content></ng-content>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
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
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
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

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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

        while (_) {
          try {
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
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
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
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

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
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Models/form-model.ts":
  /*!**************************************!*\
    !*** ./src/app/Models/form-model.ts ***!
    \**************************************/

  /*! exports provided: FormModel */

  /***/
  function srcAppModelsFormModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormModel", function () {
      return FormModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FormModel = function FormModel() {
      _classCallCheck(this, FormModel);
    };
    /***/

  },

  /***/
  "./src/app/Services/email.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/Services/email.service.ts ***!
    \*******************************************/

  /*! exports provided: EmailService */

  /***/
  function srcAppServicesEmailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailService", function () {
      return EmailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EmailService =
    /*#__PURE__*/
    function () {
      function EmailService(http) {
        _classCallCheck(this, EmailService);

        this.http = http;
      }

      _createClass(EmailService, [{
        key: "sendMail",
        value: function sendMail(content) {
          return this.http.post("https://xhkctsd01c.execute-api.eu-central-1.amazonaws.com/Prod/api/email", content);
        }
      }]);

      return EmailService;
    }();

    EmailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmailService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/concert/concert.component */
    "./src/app/components/concert/concert.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/tvh/tvh.component */
    "./src/app/components/tvh/tvh.component.ts");
    /* harmony import */


    var _components_images_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/images/images.component */
    "./src/app/components/images/images.component.ts");
    /* harmony import */


    var _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/practical-info/practical-info.component */
    "./src/app/components/practical-info/practical-info.component.ts");

    var routes = [{
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }, {
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "images",
      component: _components_images_images_component__WEBPACK_IMPORTED_MODULE_7__["ImagesComponent"]
    }, {
      path: "concert",
      component: _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_4__["ConcertComponent"]
    }, {
      path: "contact",
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }, {
      path: "tvh",
      component: _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_6__["TvhComponent"]
    }, {
      path: "info",
      component: _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_8__["PracticalInfoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'tongerlo';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/main-nav/main-nav.component */
    "./src/app/components/main-nav/main-nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _app_material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../app/material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/concert/concert.component */
    "./src/app/components/concert/concert.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/tvh/tvh.component */
    "./src/app/components/tvh/tvh.component.ts");
    /* harmony import */


    var _pipes_limitStringPipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pipes/limitStringPipe */
    "./src/app/pipes/limitStringPipe.ts");
    /* harmony import */


    var _components_images_images_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/images/images.component */
    "./src/app/components/images/images.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/practical-info/practical-info.component */
    "./src/app/components/practical-info/practical-info.component.ts");
    /* harmony import */


    var _features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./features/fade-in/fade-in.component */
    "./src/app/features/fade-in/fade-in.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_12__["ConcertComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_15__["TvhComponent"], _pipes_limitStringPipe__WEBPACK_IMPORTED_MODULE_16__["LimitStringPipe"], _components_images_images_component__WEBPACK_IMPORTED_MODULE_17__["ImagesComponent"], _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_19__["PracticalInfoComponent"], _features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_20__["FadeInComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _app_material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDxz70THIVZwo8vmwqdT3-aI928wkx3mac'
      })],
      exports: [_features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_20__["FadeInComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/concert/concert.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/concert/concert.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsConcertConcertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.flyerImg {\n  background-image: url('flyer.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 40vh;\n  width: 40vh;\n  margin-top: 5%;\n}\n\n@media (max-width: 500px) {\n  .flyerImg {\n    width: 100%;\n  }\n}\n\n@media (max-width: 700px) {\n  .tempWarning {\n    height: 15vh;\n  }\n\n  .warnImage {\n    width: auto;\n    height: 50%;\n    margin-right: 20px;\n  }\n}\n\n.tempWarning {\n  height: 10vh;\n  margin: 5%;\n  border: solid 3px #f5df1d;\n  border-radius: 20px;\n  background-color: #fdfd94;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.warnText {\n  font-size: 2vh;\n}\n\n.warnImage {\n  width: auto;\n  height: 65%;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25jZXJ0L0M6XFxVc2Vyc1xcSm9yZW5cXHRvbmdlcmxvQ29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29uY2VydFxcY29uY2VydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb25jZXJ0L2NvbmNlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLFlBQUE7RUNBTjs7RURHRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uY2VydC9jb25jZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxufVxyXG5cclxuLmZseWVySW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmx5ZXIucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgd2lkdGg6IDQwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLmZseWVySW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAudGVtcFdhcm5pbmd7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC53YXJuSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGVtcFdhcm5pbmd7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDI0NSwgMjIzLCAyOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxNDgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53YXJuVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ud2FybkltYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG4uZmx5ZXJJbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mbHllci5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDQwdmg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmZseWVySW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC50ZW1wV2FybmluZyB7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICB9XG5cbiAgLndhcm5JbWFnZSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4udGVtcFdhcm5pbmcge1xuICBoZWlnaHQ6IDEwdmg7XG4gIG1hcmdpbjogNSU7XG4gIGJvcmRlcjogc29saWQgM3B4ICNmNWRmMWQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkOTQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ud2FyblRleHQge1xuICBmb250LXNpemU6IDJ2aDtcbn1cblxuLndhcm5JbWFnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDY1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/concert/concert.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/concert/concert.component.ts ***!
    \*********************************************************/

  /*! exports provided: ConcertComponent */

  /***/
  function srcAppComponentsConcertConcertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConcertComponent", function () {
      return ConcertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ConcertComponent =
    /*#__PURE__*/
    function () {
      function ConcertComponent(title, meta) {
        _classCallCheck(this, ConcertComponent);

        this.title = title;
        this.meta = meta;
        this.title.setTitle("Kerstconcert");
        this.meta.addTag({
          name: 'description',
          content: "Naast het dorpsfeest in mei organiseert Tongerlo Leeft ! ook elk jaar in december een openlucht Kerst-Rock-Concert."
        });
        this.meta.addTag({
          name: 'keywords',
          content: "Kerstconcert Tongerlo, Kerstconcert"
        });
      }

      _createClass(ConcertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConcertComponent;
    }();

    ConcertComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
      }];
    };

    ConcertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-concert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./concert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/concert/concert.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./concert.component.scss */
      "./src/app/components/concert/concert.component.scss")).default]
    })], ConcertComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/contact/contact.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "agm-map {\n  height: 40vh;\n}\n\nmat-form-field {\n  margin-bottom: 1vh;\n}\n\n.form {\n  padding: 4% 10% 10% 10%;\n  width: 80%;\n}\n\n.mail {\n  width: 40%;\n}\n\n.name {\n  width: 20%;\n}\n\n.infoWindowTitle {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 1.7vh;\n}\n\n.submitLoaderContainer {\n  width: 20%;\n}\n\n.submitButton {\n  width: 75%;\n  float: left;\n}\n\n.spinner {\n  float: right;\n}\n\n@media (max-width: 1000px) {\n  .mail {\n    width: 80%;\n  }\n\n  .name {\n    width: 50%;\n  }\n\n  .submitLoaderContainer {\n    width: 40%;\n  }\n}\n\n@media (max-width: 500px) {\n  .mail {\n    width: 100%;\n  }\n\n  .name {\n    width: 100%;\n  }\n\n  .submitLoaderContainer {\n    width: 55%;\n    margin-bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcSm9yZW5cXHRvbmdlcmxvQ29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSTtJQUNJLFVBQUE7RUNFTjs7RURDRTtJQUNJLFVBQUE7RUNFTjs7RURBRTtJQUNJLFVBQUE7RUNHTjtBQUNGOztBREFBO0VBQ0k7SUFDSSxXQUFBO0VDRU47O0VEQ0U7SUFDSSxXQUFBO0VDRU47O0VEQUU7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwe1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgICBwYWRkaW5nOjQlIDEwJSAxMCUgMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1haWx7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4ubmFtZXtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5pbmZvV2luZG93VGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEuN3ZoO1xyXG59XHJcblxyXG4uc3VibWl0TG9hZGVyQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnN1Ym1pdEJ1dHRvbntcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnNwaW5uZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIC5tYWlse1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYW1le1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0TG9hZGVyQ29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgIC5tYWlse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmFtZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5zdWJtaXRMb2FkZXJDb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICB9XHJcbn0iLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiA0JSAxMCUgMTAlIDEwJTtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm1haWwge1xuICB3aWR0aDogNDAlO1xufVxuXG4ubmFtZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5pbmZvV2luZG93VGl0bGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjd2aDtcbn1cblxuLnN1Ym1pdExvYWRlckNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5zdWJtaXRCdXR0b24ge1xuICB3aWR0aDogNzUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNwaW5uZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1haWwge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAubmFtZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5zdWJtaXRMb2FkZXJDb250YWluZXIge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubWFpbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3VibWl0TG9hZGVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogNTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_Models_form_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/form-model */
    "./src/app/Models/form-model.ts");
    /* harmony import */


    var src_app_Services_email_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/email.service */
    "./src/app/Services/email.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(snackBar, mailService, title, meta) {
        _classCallCheck(this, ContactComponent);

        this.snackBar = snackBar;
        this.mailService = mailService;
        this.title = title;
        this.meta = meta;
        this.loading = false;
        this.enabled = true;
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

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            organisation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('option1', []),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "submit",
        value: function submit(contactForm) {
          var _this = this;

          this.loading = true;
          var formContent = new src_app_Models_form_model__WEBPACK_IMPORTED_MODULE_4__["FormModel"]();
          formContent.Email = this.myForm.get('mail').value;
          formContent.Name = this.myForm.get('name').value;
          formContent.Option = this.myForm.get('organisation').value;
          formContent.Text = this.myForm.get('question').value;
          this.mailService.sendMail(formContent).subscribe(function (response) {
            _this.snackBar.open('Succes, het formulier is verzonden', "Ok", {
              duration: 5000
            });

            _this.enabled = false;
            contactForm.resetForm();

            _this.myForm.reset();
          }, function (error) {
            _this.snackBar.open('Error, er is iets fout gegaan, bereik ons via facebook bij dringende vragen', "Ok", {
              duration: 5000
            });
          }).add(function () {
            _this.loading = false;
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_Services_email_service__WEBPACK_IMPORTED_MODULE_5__["EmailService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/components/contact/contact.component.scss")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fbLogo {\n  background-image: url('facebook.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 4vh;\n  width: 4vh;\n}\n\n.fbLogo:hover {\n  cursor: pointer;\n}\n\n.logo {\n  width: 100%;\n  height: 10vh;\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-bottom: 2vh;\n}\n\n.footerContainer {\n  background-color: rgba(245, 245, 245, 0.733);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 25vh;\n  width: 100%;\n  position: relative;\n  bottom: 0px;\n}\n\n@media (max-width: 500px) {\n  .logo {\n    margin-top: 2vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxKb3JlblxcdG9uZ2VybG9Db2RlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksZUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmJMb2dve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFjZWJvb2sucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDR2aDtcclxuICAgIHdpZHRoOiA0dmg7XHJcbn1cclxuXHJcbi5mYkxvZ286aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4uZm9vdGVyQ29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjczMyk7XHJcbiAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICB9XHJcbn0iLCIuZmJMb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFjZWJvb2sucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogNHZoO1xuICB3aWR0aDogNHZoO1xufVxuXG4uZmJMb2dvOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLmZvb3RlckNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC43MzMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAyNXZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirect",
        value: function redirect() {
          window.location.href = 'https://www.facebook.com/TongerloLeeft';
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep mat-expansion-panel > .mat-expansion-panel-content > .mat-expansion-panel-body {\n  text-align: center;\n}\n\n.tempWarning {\n  height: 10vh;\n  margin: 5%;\n  border: solid 3px #f5df1d;\n  border-radius: 20px;\n  background-color: #fdfd94;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.warnText {\n  font-size: 2vh;\n}\n\n.warnImage {\n  width: auto;\n  height: 65%;\n  margin-right: 20px;\n}\n\n.topImage {\n  margin-top: 0px;\n  background-image: url('tongerloMainImage.jpg');\n  background-repeat: no-repeat;\n  position: top center;\n  background-size: 100%;\n  z-index: 3;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5% 0% 2% 0%;\n}\n\nmat-expansion-panel {\n  margin-bottom: 1vh;\n}\n\n.mainText {\n  padding: 5%;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  text-align: center;\n}\n\nh1 {\n  font-size: 3vw;\n  color: white;\n}\n\nh2 {\n  font-size: 1.5vw;\n  color: #edeae9;\n}\n\n.navContainer {\n  margin-top: 5vh;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.linkImg {\n  height: 6vw;\n}\n\n.navigationImg {\n  width: 10vw;\n  height: 10vw;\n  border-radius: 50%;\n  background-color: lightgray;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navigationImg:hover {\n  background-color: #7c7a7a;\n  cursor: pointer;\n}\n\n.navigationDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.navInfo {\n  font-size: 1.5vw;\n  font-family: sans-serif;\n}\n\n.infoDiv {\n  height: 50vh;\n  background-color: #eeecec;\n  margin-top: 5vh;\n  width: 100%;\n}\n\n.infoText {\n  float: left;\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5%;\n}\n\n.infoImage {\n  background-image: url('tongerloInfo.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 40%;\n  height: 100%;\n  float: right;\n}\n\n.infoTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n  padding-bottom: 1vh;\n  border-bottom: black solid 2px;\n}\n\n.lineupDiv {\n  padding-top: 60px;\n  width: 90%;\n  margin-left: 10%;\n  height: 30%;\n}\n\nmat-panel-title {\n  flex-basis: 0;\n}\n\nmat-panel-description {\n  margin-left: 5%;\n  flex-basis: 100%;\n  color: black;\n  font-weight: 800;\n}\n\n.location {\n  margin-bottom: 5vh;\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.lineupText {\n  width: 50%;\n  margin-right: 10%;\n  display: block;\n  float: right;\n  height: 20% !important;\n}\n\n.imagePdfContainer {\n  width: 30%;\n  height: 100%;\n  float: left;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.pdfButton, .pdfButton2 {\n  height: 40px;\n  width: 250px;\n  border: solid 1px black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: middle;\n  margin-top: 4%;\n  padding: 1%;\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.pdfButton2 {\n  visibility: hidden;\n}\n\n.pdfButton:hover, .pdfButton2:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.pdfImage {\n  width: auto;\n  height: 100%;\n  float: left;\n  margin-right: 15%;\n}\n\n.lineupImage {\n  background-image: url('band.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 200px;\n  display: block;\n}\n\n.imagesDiv {\n  width: 100%;\n  text-align: center;\n  background-color: #eeecec;\n  margin-top: 10%;\n  padding: 3% 0% 5% 0%;\n}\n\n.imagesTitle {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.imageContainer {\n  position: relative;\n}\n\n.playButton {\n  position: absolute;\n  height: 30%;\n  top: 40%;\n  left: 45%;\n  cursor: pointer;\n}\n\n.imageLink {\n  width: 50%;\n  height: auto;\n  margin-top: 3%;\n  cursor: pointer;\n}\n\n.sponsorsDiv {\n  padding-top: 2vh;\n  margin-top: 5vh;\n  -webkit-box-align: center;\n          align-items: center;\n  height: auto;\n  text-align: center;\n}\n\n.image-swiper {\n  margin-top: 2%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15%;\n  position: relative;\n  width: 1000px;\n  height: 50vh;\n}\n\n.custom-col-1-5 {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n  max-width: 15%;\n  padding: 0 6px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 45%;\n    max-width: 45%;\n    padding: 0 8px;\n  }\n}\n\n.custom-col-1-2 {\n  -webkit-box-flex: 0;\n          flex: 0 0 11%;\n  max-width: 11%;\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 22%;\n    max-width: 22%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n.custom-col-1-5, .custom-col-1-2 {\n  -webkit-box-flex: 0;\n  position: relative;\n  width: 100%;\n}\n\n.custom-col-1-2, .custom-col-1-5, .col-1, .col-2 {\n  margin-bottom: 20px;\n}\n\n.col-2 {\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .col-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 33%;\n    max-width: 33%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 45%;\n    max-width: 45%;\n  }\n}\n\n.col-1 {\n  padding: 0 3px;\n  -webkit-box-flex: 0;\n          flex: 0 0 9%;\n  max-width: 9%;\n}\n\n@media (max-width: 1000px) {\n  .col-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 18%;\n    max-width: 18%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 23%;\n    max-width: 23%;\n  }\n}\n\n.row {\n  -webkit-box-pack: center !important;\n  justify-content: center !important;\n}\n\n.sponsor5 {\n  max-width: 90%;\n  border: solid 1px black;\n}\n\n.sponsor1, .sponsor2, .sponsor3, .sponsor4 {\n  max-width: 100%;\n  border: solid 1px black;\n}\n\n.sponsors {\n  margin-bottom: 30px;\n}\n\n:host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n  height: 650px;\n}\n\n@media (max-width: 1200px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 520px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 800px;\n  }\n}\n\n@media (max-width: 900px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 390px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 600px;\n  }\n}\n\n@media (max-width: 700px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 260px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 400px;\n  }\n}\n\n@media (max-width: 500px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 195px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 300px;\n  }\n}\n\n.sponsor-names {\n  padding: 15px 25px;\n}\n\n.sponsorTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.info-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 30px;\n  height: 75px;\n  width: 100%;\n}\n\n.info-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n  max-width: 175px;\n  min-height: 50px;\n  height: 50px;\n  border: solid 1px black;\n  border-radius: 5px;\n  margin: 0 15px;\n}\n\n.info-button:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\n@media (max-width: 1000px) {\n  .lineupDiv {\n    height: 30%;\n  }\n\n  .infoDiv {\n    height: 70vh;\n  }\n}\n\n@media (max-width: 700px) {\n  .tempWarning {\n    height: 15vh;\n  }\n\n  .warnImage {\n    width: auto;\n    height: 50%;\n    margin-right: 20px;\n  }\n\n  .imageLink {\n    width: 60%;\n  }\n\n  .imagePdfContainer {\n    visibility: hidden;\n    width: 0%;\n  }\n\n  .lineupText {\n    width: 100%;\n    float: none;\n    margin-right: 0%;\n  }\n\n  .pdfButton2 {\n    width: 80%;\n    height: 40px;\n    margin-top: 10%;\n    visibility: visible;\n  }\n\n  .lineupDiv {\n    padding-top: 100px;\n    height: 40%;\n    margin-left: 5%;\n  }\n\n  .info-buttons {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .info-button {\n    max-width: 100%;\n    margin: 10px 15px;\n    min-height: 35px;\n    height: 35px;\n  }\n}\n\n@media (max-width: 500px) {\n  .lineupDiv {\n    padding-top: 150px;\n  }\n\n  .navInfo {\n    font-size: 3vw;\n  }\n\n  .navContainer {\n    margin-left: 2%;\n    margin-right: 2%;\n  }\n\n  .linkImg {\n    height: 10vw;\n  }\n\n  .navigationImg {\n    width: 18vw;\n    height: 18vw;\n  }\n\n  .infoText {\n    float: none;\n    width: 90%;\n  }\n\n  .infoImage {\n    float: none;\n    width: 100%;\n    height: 30vh;\n  }\n\n  .infoDiv {\n    margin-bottom: 3vh;\n    height: 65vh;\n  }\n\n  .imageLink {\n    width: 80%;\n  }\n\n  .info-button {\n    margin: 5px 15px;\n  }\n\n  .info-buttons {\n    margin-bottom: 25px;\n  }\n}\n\n@media (max-width: 400px) {\n  .lineupDiv {\n    height: 70%;\n    padding-top: 200px;\n  }\n}\n\n@media (max-width: 300px) {\n  .lineupDiv {\n    padding-top: 250x;\n  }\n}\n\n@media (min-width: 500px) {\n  .topImage {\n    background-attachment: fixed;\n  }\n\n  .infoImage {\n    background-attachment: fixed;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcSm9yZW5cXHRvbmdlcmxvQ29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREtBO0VBQ0kseUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLHdFQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDRko7O0FES0E7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO1VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRko7O0FESUk7RUFMSjtJQU1RLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7RUNETjtBQUNGOztBREVJO0VBVEo7SUFVUSxtQkFBQTtZQUFBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxtQkFBQTtVQUFBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENJO0VBTEo7SUFNUSxtQkFBQTtZQUFBLGFBQUE7SUFDQSxjQUFBO0VDRU47QUFDRjs7QURESTtFQVRKO0lBVVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ0lOO0FBQ0Y7O0FEREE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0lKOztBRERBO0VBQ0ksbUJBQUE7QUNJSjs7QUREQTtFQUNJLGNBQUE7QUNJSjs7QURGSTtFQUhKO0lBSVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ0tOO0FBQ0Y7O0FESkk7RUFQSjtJQVFRLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7RUNPTjtBQUNGOztBREpBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGFBQUE7QUNPSjs7QURMSTtFQUxKO0lBTVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ1FOO0FBQ0Y7O0FEUEk7RUFUSjtJQVVRLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7RUNVTjtBQUNGOztBRFBBO0VBQ0ksbUNBQUE7RUFDQSxrQ0FBQTtBQ1VKOztBRFBBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FDVUo7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUNVSjs7QURQQTtFQUNJLG1CQUFBO0FDVUo7O0FETkk7RUFDSSxhQUFBO0FDU1I7O0FETkk7RUFDSTtJQUNJLGFBQUE7RUNRVjtFRExNO0lBQ0ksWUFBQTtFQ09WO0FBQ0Y7O0FESkk7RUFDSTtJQUNJLGFBQUE7RUNNVjtFREhNO0lBQ0ksWUFBQTtFQ0tWO0FBQ0Y7O0FERkk7RUFDSTtJQUNJLGFBQUE7RUNJVjtFRERNO0lBQ0ksWUFBQTtFQ0dWO0FBQ0Y7O0FEQUk7RUFDSTtJQUNJLGFBQUE7RUNFVjtFRENNO0lBQ0ksWUFBQTtFQ0NWO0FBQ0Y7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUk7RUFDSSx3RUFBQTtFQUNBLG1CQUFBO0FDQVI7O0FESUE7RUFDSTtJQUNJLFdBQUE7RUNETjs7RURJRTtJQUNJLFlBQUE7RUNETjtBQUNGOztBRElBO0VBQ0k7SUFDSSxZQUFBO0VDRk47O0VES0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDRk47O0VES0U7SUFDSSxVQUFBO0VDRk47O0VES0U7SUFDSSxrQkFBQTtJQUNBLFNBQUE7RUNGTjs7RURLRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNGTjs7RURLRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDRk47O0VES0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDRk47O0VES0U7SUFDSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNGTjs7RURLRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFDSTtJQUNJLGtCQUFBO0VDSE47O0VES0U7SUFDSSxjQUFBO0VDRk47O0VESUU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUNETjs7RURHRTtJQUNJLFlBQUE7RUNBTjs7RURHRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDQU47O0VERUU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0NOOztFRENFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDRU47O0VEQ0U7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNFTjs7RURDRTtJQUNJLFVBQUE7RUNFTjs7RURDRTtJQUNJLGdCQUFBO0VDRU47O0VEQ0U7SUFDSSxtQkFBQTtFQ0VOO0FBQ0Y7O0FEQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLGlCQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksNEJBQUE7RUNETjs7RURHRTtJQUNJLDRCQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwgPiAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50ID4gLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGVtcFdhcm5pbmd7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDI0NSwgMjIzLCAyOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxNDgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53YXJuVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ud2FybkltYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnRvcEltYWdle1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9NYWluSW1hZ2UuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNSUgMCUgMiUgMCU7XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn1cclxuXHJcbi5tYWluVGV4dHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHJnYigwLCAwLCAwKSwgJGFscGhhOiAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogI0VERUFFOSwgJGFscGhhOiAxLjApO1xyXG59XHJcblxyXG4ubmF2Q29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ubGlua0ltZ3tcclxuICAgIGhlaWdodDogNnZ3O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbkltZ3tcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmlnYXRpb25JbWc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAxMjIsIDEyMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5uYXZJbmZve1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW5mb0RpdntcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNiwgMjM2KTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb1RleHR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuXHJcbi5pbmZvSW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90b25nZXJsb0luZm8uanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmluZm9UaXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMnB4O1xyXG59XHJcblxyXG4ubGluZXVwRGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG5tYXQtcGFuZWwtdGl0bGUge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcbiAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuXHJcbi5sb2NhdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi5saW5ldXBUZXh0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2VQZGZDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGRmQnV0dG9uLCAucGRmQnV0dG9uMntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ucGRmQnV0dG9uMntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnBkZkJ1dHRvbjpob3ZlciwgLnBkZkJ1dHRvbjI6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwwLDAsLjI1KSwgM3B4IDNweCA3cHggcmdiYSgwLDAsMCwuMzUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBkZkltYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG4ubGluZXVwSW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2VzRGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzYsIDIzNik7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBwYWRkaW5nOiAzJSAwJSA1JSAwJTtcclxufVxyXG5cclxuLmltYWdlc1RpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi5pbWFnZUNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBsYXlCdXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2VMaW5re1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3BvbnNvcnNEaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXN3aXBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLmN1c3RvbS1jb2wtMS01IHtcclxuICAgIGZsZXg6IDAgMCAxNSU7XHJcbiAgICBtYXgtd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDQ1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1jb2wtMS0yIHtcclxuICAgIGZsZXg6IDAgMCAxMSU7XHJcbiAgICBtYXgtd2lkdGg6IDExJTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDIyJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDIyJTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWNvbC0xLTUsIC5jdXN0b20tY29sLTEtMiB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sLTEtMiwgLmN1c3RvbS1jb2wtMS01LCAuY29sLTEsIC5jb2wtMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29sLTIge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2wtMSB7XHJcbiAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgIGZsZXg6IDAgMCA5JTtcclxuICAgIG1heC13aWR0aDogOSU7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMTglO1xyXG4gICAgICAgIG1heC13aWR0aDogMTglO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCAyMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3BvbnNvcjUge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLnNwb25zb3IxLCAuc3BvbnNvcjIsIC5zcG9uc29yMywgLnNwb25zb3I0IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uc3BvbnNvcnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAge1xyXG4gICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAgICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3BvbnNvci1uYW1lcyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbn1cclxuXHJcbi5zcG9uc29yVGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4uaW5mby1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsMCwwLC4yNSksIDNweCAzcHggN3B4IHJnYmEoMCwwLDAsLjM1KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mb0RpdntcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIC50ZW1wV2FybmluZ3tcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLndhcm5JbWFnZXtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlTGlua3tcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZVBkZkNvbnRhaW5lcntcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5ldXBUZXh0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBkZkJ1dHRvbjJ7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWJ1dHRvbnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tYnV0dG9uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdkluZm97XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcbiAgICAubmF2Q29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgfVxyXG4gICAgLmxpbmtJbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2aWdhdGlvbkltZ3tcclxuICAgICAgICB3aWR0aDogMTh2dztcclxuICAgICAgICBoZWlnaHQ6IDE4dnc7XHJcbiAgICB9XHJcbiAgICAuaW5mb1RleHR7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5pbmZvSW1hZ2V7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvRGl2e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgICAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlTGlua3tcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1idXR0b25zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgICAubGluZXVwRGl2e1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMzAwcHgpe1xyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjUweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNTAwcHgpe1xyXG4gICAgLnRvcEltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB9XHJcbiAgICAuaW5mb0ltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiOmhvc3QgOjpuZy1kZWVwIG1hdC1leHBhbnNpb24tcGFuZWwgPiAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50ID4gLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRlbXBXYXJuaW5nIHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBtYXJnaW46IDUlO1xuICBib3JkZXI6IHNvbGlkIDNweCAjZjVkZjFkO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZDk0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLndhcm5UZXh0IHtcbiAgZm9udC1zaXplOiAydmg7XG59XG5cbi53YXJuSW1hZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2NSU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRvcEltYWdlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90b25nZXJsb01haW5JbWFnZS5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNSUgMCUgMiUgMCU7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG5cbi5tYWluVGV4dCB7XG4gIHBhZGRpbmc6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgY29sb3I6ICNlZGVhZTk7XG59XG5cbi5uYXZDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ubGlua0ltZyB7XG4gIGhlaWdodDogNnZ3O1xufVxuXG4ubmF2aWdhdGlvbkltZyB7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDEwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdmlnYXRpb25JbWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YTdhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXZJbmZvIHtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5pbmZvRGl2IHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2VjO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5mb1RleHQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5pbmZvSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90b25nZXJsb0luZm8uanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pbmZvVGl0bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDJweDtcbn1cblxuLmxpbmV1cERpdiB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxubWF0LXBhbmVsLXRpdGxlIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxubWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5sb2NhdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG4ubGluZXVwVGV4dCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2VQZGZDb250YWluZXIge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGRmQnV0dG9uLCAucGRmQnV0dG9uMiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wZGZCdXR0b24yIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ucGRmQnV0dG9uOmhvdmVyLCAucGRmQnV0dG9uMjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgM3B4IDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGRmSW1hZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbi5saW5ldXBJbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhbmQucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1hZ2VzRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlYztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwYWRkaW5nOiAzJSAwJSA1JSAwJTtcbn1cblxuLmltYWdlc1RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG4uaW1hZ2VDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbGF5QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMwJTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDQ1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2VMaW5rIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3BvbnNvcnNEaXYge1xuICBwYWRkaW5nLXRvcDogMnZoO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Utc3dpcGVyIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwMHB4O1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5jdXN0b20tY29sLTEtNSB7XG4gIGZsZXg6IDAgMCAxNSU7XG4gIG1heC13aWR0aDogMTUlO1xuICBwYWRkaW5nOiAwIDZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmN1c3RvbS1jb2wtMS01IHtcbiAgICBmbGV4OiAwIDAgMzAlO1xuICAgIG1heC13aWR0aDogMzAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmN1c3RvbS1jb2wtMS01IHtcbiAgICBmbGV4OiAwIDAgNDUlO1xuICAgIG1heC13aWR0aDogNDUlO1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICB9XG59XG5cbi5jdXN0b20tY29sLTEtMiB7XG4gIGZsZXg6IDAgMCAxMSU7XG4gIG1heC13aWR0aDogMTElO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmN1c3RvbS1jb2wtMS0yIHtcbiAgICBmbGV4OiAwIDAgMjIlO1xuICAgIG1heC13aWR0aDogMjIlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmN1c3RvbS1jb2wtMS0yIHtcbiAgICBmbGV4OiAwIDAgMzAlO1xuICAgIG1heC13aWR0aDogMzAlO1xuICB9XG59XG5cbi5jdXN0b20tY29sLTEtNSwgLmN1c3RvbS1jb2wtMS0yIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1jb2wtMS0yLCAuY3VzdG9tLWNvbC0xLTUsIC5jb2wtMSwgLmNvbC0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbC0yIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb2wtMiB7XG4gICAgZmxleDogMCAwIDMzJTtcbiAgICBtYXgtd2lkdGg6IDMzJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2wtMiB7XG4gICAgZmxleDogMCAwIDQ1JTtcbiAgICBtYXgtd2lkdGg6IDQ1JTtcbiAgfVxufVxuXG4uY29sLTEge1xuICBwYWRkaW5nOiAwIDNweDtcbiAgZmxleDogMCAwIDklO1xuICBtYXgtd2lkdGg6IDklO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29sLTEge1xuICAgIGZsZXg6IDAgMCAxOCU7XG4gICAgbWF4LXdpZHRoOiAxOCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sLTEge1xuICAgIGZsZXg6IDAgMCAyMyU7XG4gICAgbWF4LXdpZHRoOiAyMyU7XG4gIH1cbn1cblxuLnJvdyB7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc3BvbnNvcjUge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG59XG5cbi5zcG9uc29yMSwgLnNwb25zb3IyLCAuc3BvbnNvcjMsIC5zcG9uc29yNCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG59XG5cbi5zcG9uc29ycyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbjpob3N0OjpuZy1kZWVwIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XG4gIGhlaWdodDogNjUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgfVxuICA6aG9zdDo6bmctZGVlcCAuaW1hZ2Utc3dpcGVyIHtcbiAgICB3aWR0aDogODAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICA6aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICAgIGhlaWdodDogMzkwcHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmltYWdlLXN3aXBlciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5pbWFnZS1zd2lwZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XG4gICAgaGVpZ2h0OiAxOTVweDtcbiAgfVxuICA6aG9zdDo6bmctZGVlcCAuaW1hZ2Utc3dpcGVyIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cblxuLnNwb25zb3ItbmFtZXMge1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG59XG5cbi5zcG9uc29yVGl0bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG5cbi5pbmZvLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZm8tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5pbmZvLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgM3B4IDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxuXG4gIC5pbmZvRGl2IHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAudGVtcFdhcm5pbmcge1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxuXG4gIC53YXJuSW1hZ2Uge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5pbWFnZUxpbmsge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuICAuaW1hZ2VQZGZDb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMCU7XG4gIH1cblxuICAubGluZXVwVGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgfVxuXG4gIC5wZGZCdXR0b24yIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5saW5ldXBEaXYge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICAuaW5mby1idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmluZm8tYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgbWluLWhlaWdodDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIH1cblxuICAubmF2SW5mbyB7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gIH1cblxuICAubmF2Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgfVxuXG4gIC5saW5rSW1nIHtcbiAgICBoZWlnaHQ6IDEwdnc7XG4gIH1cblxuICAubmF2aWdhdGlvbkltZyB7XG4gICAgd2lkdGg6IDE4dnc7XG4gICAgaGVpZ2h0OiAxOHZ3O1xuICB9XG5cbiAgLmluZm9UZXh0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmluZm9JbWFnZSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICB9XG5cbiAgLmluZm9EaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICBoZWlnaHQ6IDY1dmg7XG4gIH1cblxuICAuaW1hZ2VMaW5rIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgLmluZm8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweCAxNXB4O1xuICB9XG5cbiAgLmluZm8tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5saW5ldXBEaXYge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5saW5ldXBEaXYge1xuICAgIHBhZGRpbmctdG9wOiAyNTB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLnRvcEltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB9XG5cbiAgLmluZm9JbWFnZSB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
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

      _createClass(HomeComponent, [{
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
          var height = window.innerWidth / 4 + 400;
          this.margin = height + "px";
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

          this.margin = height * 11 + 700 + "px";
        }
      }, {
        key: "onExpand3",
        value: function onExpand3() {
          this.opened = 3;
          var card = document.getElementById('image');
          var height = card.scrollHeight;

          if (height < 400) {
            height += (400 - height) / 10;
          }

          this.margin = height * 8 + 650 + "px";
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

      return HomeComponent;
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('popOverState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('hoveredState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('notHovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(-20px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('notHovered => hovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hovered => notHovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/images/images.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/images/images.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImagesImagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 100%;\n  margin-bottom: 5%;\n  height: auto;\n}\n\n.heading {\n  padding: 2% 5% 2% 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.selectedImageContainer {\n  position: relative;\n  width: 45%;\n  float: left;\n  margin-left: 4%;\n  margin-bottom: 5%;\n}\n\n.selectedImage {\n  border-radius: 2%;\n  width: 100%;\n  height: auto;\n}\n\n.prevButton {\n  position: absolute;\n  float: left;\n  left: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 0px 10% 10% 0px;\n}\n\n.nextButton {\n  position: absolute;\n  float: right;\n  right: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 10% 0px 0px 10%;\n}\n\n.prevButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.nextButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.prevNextImage {\n  opacity: 1;\n  width: 100%;\n  height: 50%;\n  margin-left: 20%;\n}\n\n.subImage {\n  border-radius: 5%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 90%;\n  height: auto;\n}\n\n.imageList {\n  margin-bottom: 5%;\n}\n\n.subImage:hover {\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 25px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n\n.allImages {\n  width: 45%;\n  height: 100%;\n  float: right;\n  margin-bottom: 5%;\n  margin-right: 4%;\n}\n\n@media (max-width: 1000px) {\n  .selectedImageContainer {\n    width: 90%;\n    margin-bottom: 2%;\n  }\n\n  .allImages {\n    width: 90%;\n    margin-right: 6%;\n  }\n\n  .selectedImage {\n    background-size: contain;\n    height: 75%;\n    margin-top: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvQzpcXFVzZXJzXFxKb3JlblxcdG9uZ2VybG9Db2RlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbWFnZXNcXGltYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSw2RUFBQTtFQUNBLGVBQUE7QUNBSjs7QURJQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNEQTs7QURJQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0VDRE47O0VESUU7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7RUNETjs7RURJRTtJQUNJLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgcGFkZGluZyA6IDIlIDUlIDIlIDUlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1hZ2VDb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1hZ2V7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucHJldkJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsb2F0IDogbGVmdDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMzUlO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuMik7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwJSAxMCUgMHB4O1xyXG59XHJcblxyXG4ubmV4dEJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsb2F0IDogcmlnaHQ7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjIpO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJSAwcHggMHB4IDEwJTtcclxufVxyXG5cclxuLnByZXZCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmV4dEJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuNik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmV2TmV4dEltYWdle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4uc3ViSW1hZ2V7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2VMaXN0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5zdWJJbWFnZTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmFsbEltYWdlc3tcclxud2lkdGg6IDQ1JTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5mbG9hdCA6IHJpZ2h0O1xyXG5tYXJnaW4tYm90dG9tOiA1JTtcclxubWFyZ2luLXJpZ2h0OiA0JTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aCA6IDEwMDBweCl7XHJcbiAgICAuc2VsZWN0ZWRJbWFnZUNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbGxJbWFnZXN7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3RlZEltYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIH1cclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRpbmcge1xuICBwYWRkaW5nOiAyJSA1JSAyJSA1JTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG4uc2VsZWN0ZWRJbWFnZUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5zZWxlY3RlZEltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5wcmV2QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMCUgMTAlIDBweDtcbn1cblxuLm5leHRCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAzNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMCUgMHB4IDBweCAxMCU7XG59XG5cbi5wcmV2QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXh0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcmV2TmV4dEltYWdlIHtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4uc3ViSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltYWdlTGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uc3ViSW1hZ2U6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxsSW1hZ2VzIHtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5zZWxlY3RlZEltYWdlQ29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG5cbiAgLmFsbEltYWdlcyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDYlO1xuICB9XG5cbiAgLnNlbGVjdGVkSW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/images/images.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/images/images.component.ts ***!
    \*******************************************************/

  /*! exports provided: ImagesComponent */

  /***/
  function srcAppComponentsImagesImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesComponent", function () {
      return ImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ImagesComponent =
    /*#__PURE__*/
    function () {
      function ImagesComponent(title, meta) {
        _classCallCheck(this, ImagesComponent);

        this.title = title;
        this.meta = meta;
        this.images = [1, 2, 3, 4, 5];
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

      _createClass(ImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.setButtonsVisibility();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ImageSelected",
        value: function ImageSelected(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedIndex = index + 1;
                    _context2.next = 3;
                    return this.setButtonsVisibility();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.buttonsVisible = false;
                    _context3.next = 3;
                    return this.delay(300);

                  case 3:
                    this.buttonsVisible = true;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "nextImage",
        value: function nextImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.selectedIndex == this.images.length)) {
                      _context4.next = 5;
                      break;
                    }

                    this.selectedIndex = 1;
                    _context4.next = 4;
                    return this.setButtonsVisibility();

                  case 4:
                    return _context4.abrupt("return");

                  case 5:
                    ++this.selectedIndex;
                    _context4.next = 8;
                    return this.setButtonsVisibility();

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "prevImage",
        value: function prevImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(this.selectedIndex == 1)) {
                      _context5.next = 5;
                      break;
                    }

                    this.selectedIndex = this.images.length;
                    _context5.next = 4;
                    return this.setButtonsVisibility();

                  case 4:
                    return _context5.abrupt("return");

                  case 5:
                    --this.selectedIndex;
                    _context5.next = 8;
                    return this.setButtonsVisibility();

                  case 8:
                  case "end":
                    return _context5.stop();
                }
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

      return ImagesComponent;
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html")).default,
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
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./images.component.scss */
      "./src/app/components/images/images.component.scss")).default]
    })], ImagesComponent);
    /***/
  },

  /***/
  "./src/app/components/main-nav/main-nav.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/main-nav/main-nav.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainNavMainNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.toolbarItems a {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n}\n\n.toolbarItems a:hover {\n  text-shadow: 3px 3px 5px #000000;\n}\n\n.sloganSpan {\n  margin-right: 5%;\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 1.5vh;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.logo {\n  height: 75%;\n}\n\nmat-toolbar {\n  height: 100px !important;\n  min-height: 100px !important;\n}\n\n.active-link {\n  font-weight: 900;\n}\n\na {\n  text-decoration: none;\n  color: black !important;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n@media (max-width: 1000px) {\n  mat-toolbar {\n    height: 75px !important;\n    min-height: 75px !important;\n  }\n}\n\n@media (max-width: 500px) {\n  mat-toolbar {\n    height: 50px !important;\n    min-height: 50px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxcVXNlcnNcXEpvcmVuXFx0b25nZXJsb0NvZGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW4tbmF2XFxtYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLDJCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSwyQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGlkZGVue1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9vbGJhckl0ZW1zIGF7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXJJdGVtcyBhOmhvdmVye1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDtcbn1cblxuLnNsb2dhblNwYW57XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG59XG5cbi5zcGFjZXJ7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubG9nb3tcbiAgaGVpZ2h0OiA3NSU7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlLWxpbmt7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xuICBtYXQtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvb2xiYXJJdGVtcyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udG9vbGJhckl0ZW1zIGE6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDtcbn1cblxuLnNsb2dhblNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDEuNXZoO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiA3NSU7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-nav/main-nav.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/main-nav/main-nav.component.ts ***!
    \***********************************************************/

  /*! exports provided: MainNavComponent */

  /***/
  function srcAppComponentsMainNavMainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MainNavComponent = function MainNavComponent(breakpointObserver) {
      _classCallCheck(this, MainNavComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    };

    MainNavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }];
    };

    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-nav.component.scss */
      "./src/app/components/main-nav/main-nav.component.scss")).default]
    })], MainNavComponent);
    /***/
  },

  /***/
  "./src/app/components/practical-info/practical-info.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/practical-info/practical-info.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPracticalInfoPracticalInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  margin: 60px 100px 100px 100px;\n  width: 60%;\n  margin-bottom: 75px;\n}\n\n.link {\n  color: black;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.link:hover {\n  font-weight: 600;\n}\n\n.map {\n  height: 400px;\n}\n\n@media (max-width: 900px) {\n  .container {\n    margin: 60px 60px 100px 60px;\n    width: 75%;\n  }\n}\n\n@media (max-width: 500px) {\n  .container {\n    margin: 40px 20px 100px 20px;\n    width: 90%;\n    margin-bottom: 50px;\n  }\n\n  .map {\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmFjdGljYWwtaW5mby9DOlxcVXNlcnNcXEpvcmVuXFx0b25nZXJsb0NvZGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByYWN0aWNhbC1pbmZvXFxwcmFjdGljYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmFjdGljYWwtaW5mby9wcmFjdGljYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxVQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUNETjs7RURHRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJhY3RpY2FsLWluZm8vcHJhY3RpY2FsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNjBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5MDBweCl7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDYwcHggNjBweCAxMDBweCA2MHB4O1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NTAwcHgpe1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDIwcHggMTAwcHggMjBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubWFwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiA2MHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tYm90dG9tOiA3NXB4O1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxpbms6aG92ZXIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogNjBweCA2MHB4IDEwMHB4IDYwcHg7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogNDBweCAyMHB4IDEwMHB4IDIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLm1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/practical-info/practical-info.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/practical-info/practical-info.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PracticalInfoComponent */

  /***/
  function srcAppComponentsPracticalInfoPracticalInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PracticalInfoComponent", function () {
      return PracticalInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PracticalInfoComponent =
    /*#__PURE__*/
    function () {
      function PracticalInfoComponent() {
        _classCallCheck(this, PracticalInfoComponent);
      }

      _createClass(PracticalInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PracticalInfoComponent;
    }();

    PracticalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-practical-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./practical-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./practical-info.component.scss */
      "./src/app/components/practical-info/practical-info.component.scss")).default]
    })], PracticalInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/tvh/tvh.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/components/tvh/tvh.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTvhTvhComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\na {\n  text-decoration: none;\n  color: black;\n  font-weight: bolder;\n  margin-left: 2%;\n}\n\na:hover {\n  font-size: 2vh;\n}\n\n.link {\n  margin-left: 2%;\n  color: #b1b1b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dmgvQzpcXFVzZXJzXFxKb3JlblxcdG9uZ2VybG9Db2RlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0dmhcXHR2aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dmgvdHZoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHZoL3R2aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbn1cclxuXHJcbi5saW5re1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuYTpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ubGluayB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgY29sb3I6ICNiMWIxYjE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tvh/tvh.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/tvh/tvh.component.ts ***!
    \*************************************************/

  /*! exports provided: TvhComponent */

  /***/
  function srcAppComponentsTvhTvhComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvhComponent", function () {
      return TvhComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var TvhComponent =
    /*#__PURE__*/
    function () {
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

      _createClass(TvhComponent, [{
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
          this.groups[i].show = !this.groups[i].show;
        }
      }]);

      return TvhComponent;
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tvh.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html")).default,
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
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tvh.component.scss */
      "./src/app/components/tvh/tvh.component.scss")).default]
    })], TvhComponent);
    /***/
  },

  /***/
  "./src/app/features/fade-in/fade-in.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/features/fade-in/fade-in.component.ts ***!
    \*******************************************************/

  /*! exports provided: FadeInComponent */

  /***/
  function srcAppFeaturesFadeInFadeInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FadeInComponent", function () {
      return FadeInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var style1 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
      opacity: 1
    });
    var style2 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
      opacity: 0
    });

    var FadeInComponent =
    /*#__PURE__*/
    function () {
      function FadeInComponent(el) {
        _classCallCheck(this, FadeInComponent);

        this.el = el;
        this.state = 'hide';
      }

      _createClass(FadeInComponent, [{
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

      return FadeInComponent;
    }();

    FadeInComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FadeInComponent.prototype, "scrollEvent", void 0);
    FadeInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fade-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fade-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('foobar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', style1), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', style2), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in'))])]
    })], FadeInComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/pipes/limitStringPipe.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/limitStringPipe.ts ***!
    \******************************************/

  /*! exports provided: LimitStringPipe */

  /***/
  function srcAppPipesLimitStringPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LimitStringPipe", function () {
      return LimitStringPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LimitStringPipe =
    /*#__PURE__*/
    function () {
      function LimitStringPipe() {
        _classCallCheck(this, LimitStringPipe);
      }

      _createClass(LimitStringPipe, [{
        key: "transform",
        value: function transform(text) {
          if (text.length > 50) {
            text = text.slice(0, 50) + "...";
          }

          return text;
        }
      }]);

      return LimitStringPipe;
    }();

    LimitStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'stringlimit'
    })], LimitStringPipe);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\Joren\tongerloCode\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map