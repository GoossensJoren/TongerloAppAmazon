(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-nav></app-main-nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/concert/concert.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/concert/concert.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<p class=\"title\">Kerstconcert</p>\n<p class=\"info\">Naast het dorpsfeest in mei organiseert Tongerlo Leeft ! ook elk jaar in december een openlucht Kerst-Rock-Concert. In principe steeds op de vrijdagavond aan het begin van het kerstverlof.\n    Een fijne start van de feestdagen met live muziek, glühwein en jenever, vuurkorven, soep en warme choco, kerstmutsen en pintjes op buitentemperatuur.</p>\n\n    <div class=\"tempWarning\">\n        <img src=\"../../../assets/images/error.png\" class=\"warnImage\"/>\n        <p class=\"warnText\">\n            Het kerstconcert zal dit jaar niet kunnen doorgaan door het corona-virus\n        </p>\n    </div>\n\n<div class=\"flyerImg\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"12\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\n      <agm-info-window [isOpen]=true>\n\n        <div>\n            <p class=\"infoWindowTitle\">LOCATIE :</p>\n            <p>Tongerlodorp 2260 Tongerlo, Antwerpen, België</p>\n        </div>\n\n    </agm-info-window>\n    </agm-marker>\n</agm-map>\n\n<form class=\"form\" [formGroup]=\"myForm\" #contactForm=\"ngForm\">\n    <mat-form-field appearance=\"outline\" class=\"name\">\n        <mat-label>naam</mat-label>\n        <input matInput placeholder=\"naam\" type=\"text\" formControlName=\"name\">\n        <mat-error *ngIf=\"myForm.get('name').hasError('required')\">\n            Dit veld is verplicht\n          </mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field appearance=\"outline\" class=\"mail\">\n        <mat-label>e-mail</mat-label>\n        <input matInput placeholder=\"e-mail\" type=\"email\" formControlName=\"mail\">\n        <mat-error *ngIf=\"myForm.get('mail').hasError('email') && !myForm.get('mail').hasError('required')\">\n            Gelieve een geldig e-mailadres in te vullen\n          </mat-error>\n          <mat-error *ngIf=\"myForm.get('mail').hasError('required')\">\n            Dit veld is verplicht\n          </mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>vraag aan</mat-label>\n        <mat-select formControlName=\"organisation\">\n            <mat-option value=\"option1\">Organisatie Comité</mat-option>\n            <mat-option value=\"option2\">Webmaster</mat-option>\n          </mat-select>\n    </mat-form-field>\n    <br/>\n    <mat-form-field appearance=\"outline\" class=\"mail\">\n        <mat-label>Vraag of opmerking</mat-label>\n        <textarea rows=\"5\" matInput placeholder=\"Opmerking\" formControlName=\"question\"></textarea>\n        <mat-error *ngIf=\"myForm.get('question').hasError('required')\">\n            Dit veld is verplicht\n          </mat-error>\n    </mat-form-field>\n    <br/>\n    <div class=\"submitLoaderContainer\">\n    <button mat-raised-button type=\"submit\" (click)=\"submit(contactForm)\" [disabled]=\"!myForm.valid || !enabled\" class=\"submitButton\">verstuur</button>\n    <mat-spinner [diameter]=\"30\" class=\"spinner\" *ngIf=\"loading\"></mat-spinner>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footerContainer\">\n    <div class=\"logo\"></div>\n   <div (click)=\"redirect()\" class=\"fbLogo\"></div>\n    <p class=\"copyright\">@2020 TVH</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"topImage\">\n    <div class=\"mainText\">\n        <h1>Tongels Dorpsfeest 2022</h1>\n        <h2>6, 7 en 8 mei</h2>\n    </div>\n</header>\n<mat-grid-list cols=\"4\" rowHeight=\"{{rowHeight}}\" (window:resize)=\"onResize($event)\" class=\"navContainer\">\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(info)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/feast.png\" alt=\"Info\" />\n            </div>\n            <p class=\"navInfo\">Nieuws</p>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(lineup)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/lineup.png\" alt=\"Line Up\" />\n            </div>\n            <p class=\"navInfo\">Programma</p>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(gallery)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/photo.png\" alt=\"Foto's\" />\n            </div>\n            <p class=\"navInfo\">Foto's</p>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <div class=\"navigationDiv\">\n            <div class=\"navigationImg\" (click)=\"scroll(sponsors)\">\n                <img class=\"linkImg\" src=\"../../../assets/images/sponsor.png\" alt=\"Sponsors\" />\n            </div>\n            <p class=\"navInfo\">Sponsors</p>\n        </div>\n    </mat-grid-tile>\n</mat-grid-list>\n\n<div class=\"infoDiv\" #info id=\"info\">\n    <div class=\"infoText\">\n        <p class=\"infoTitle\">Tongels Dorpsfeest 2022</p>\n        <p>Het 35e Tongels Dorpsfeest zal dit jaar doorgaan op vrijdag 6, zaterdag 7 & zondag 8 mei 2022. Vrijdag en zondag is de toegang gratis. Zaterdag bedraagt de inkomprijs €10.</p>\n        <div class=\"info-buttons\">\n            <div class=\"info-button\" (click)=\"navigateToInfo()\">Praktische info</div>\n        </div>\n    </div>\n    <div class=\"infoImage\">\n    </div>\n</div>\n\n<div class=\"lineupDiv\" #lineup>\n    <div class=\"imagePdfContainer\">\n        <div class=\"lineupImage\"></div>\n        <a href=\"../../../assets/files/Line-Up.pdf\" download>\n            <div class=\"pdfButton\" (mouseover)=\"onHovered()\" (mouseleave)=\"onHovered()\"><img\n                    src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\n                <p class=\"downloadText\" [@hoveredState]=\"state\">download line up</p>\n            </div>\n        </a>\n    </div>\n    <div class=\"lineupText\">\n        <p class=\"lineupTitle\">Programma</p>\n        <mat-accordion>\n            <mat-expansion-panel (opened)=\"onExpand1()\" (afterCollapse)=\"onClosed1()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <i class=\"material-icons\">\n                            date_range\n                        </i>\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Vrijdag 6 mei\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <p class=\"location\">Fuiftent</p>\n                <mat-card>\n                    <mat-card-title>Kontrair</mat-card-title>\n                    <mat-card-subtitle>22h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Kontrair.jpg\" alt=\"Photo of Kontrair\">\n                </mat-card>\n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"onExpand2()\" (afterCollapse)=\"onClosed2()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <i class=\"material-icons\">\n                            date_range\n                        </i>\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Zaterdag 7 mei\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <p class=\"location\">Podium Fortis</p>\n                <mat-card>\n                    <mat-card-title>The Cover Up</mat-card-title>\n                    <mat-card-subtitle>19h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Cover Up.png\" alt=\"Photo of The Cover Up\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>REGI & special guest Olivia</mat-card-title>\n                    <mat-card-subtitle>23h00</mat-card-subtitle>\n                    <img id=\"image\" mat-card-image src=\"../../../assets/images/line-up/Regi Olivia.png\"\n                        alt=\"Photo of Regi & Olivia\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Fenix</mat-card-title>\n                    <mat-card-subtitle>1h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Fenix.png\"\n                        alt=\"Photo of Ilsen & Verhulst\">\n                </mat-card>\n                <p class=\"location\">Podium Kerk</p>\n                <mat-card>\n                    <mat-card-title>Three of  kind</mat-card-title>\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Three of a kind.png\"\n                        alt=\"Photo of Three of a kind\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>The Dukes Band</mat-card-title>\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Dukes Band.png\"\n                        alt=\"Photo of The Dukes Band\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Farce Fatale</mat-card-title>\n                    <mat-card-subtitle>00:30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Farce Fatale.jpg\" alt=\"Photo of Farce Fatale\">\n                </mat-card>\n                <p class=\"location\">Feesttent</p>\n                <mat-card>\n                    <mat-card-title>Tieson</mat-card-title>\n                    <mat-card-subtitle>22:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Tieson.jpg\" alt=\"Photo of Tieson\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>BRØM</mat-card-title>\n                    <mat-card-subtitle>24:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/BRØM.png\" alt=\"Photo of BRØM\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Allesto</mat-card-title>\n                    <mat-card-subtitle>01:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Allesto.png\" alt=\"Photo of Allesto\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Ekke</mat-card-title>\n                    <mat-card-subtitle>02:00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Ekke.jpg\" alt=\"Photo of Ekko\">\n                </mat-card>\n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"onExpand3()\" (afterCollapse)=\"onClosed3()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <i class=\"material-icons\">\n                            date_range\n                        </i>\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Zondag 8 mei\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <p class=\"location\">Podium Fortis</p>\n                <mat-card>\n                    <mat-card-title>Sasha & Davy</mat-card-title>\n                    <mat-card-subtitle>17h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Sasha & Davy.jpg\"\n                        alt=\"Photo of Sasha & Davy\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Level Six</mat-card-title>\n                    <mat-card-subtitle>20h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Level Six.png\"\n                        alt=\"Photo of Level Six\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>TUSH</mat-card-title>\n                    <mat-card-subtitle>23h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Tush.jpg\" alt=\"Photo of TUSH\">\n                </mat-card>\n                <p class=\"location\">Podium Kerk</p>\n                <mat-card>\n                    <mat-card-title>Sam Gooris</mat-card-title>\n                    <mat-card-subtitle>15h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Sam Gooris.png\"\n                        alt=\"Photo of Sam Gooris\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Stage Revolver</mat-card-title>\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Stage Revolver.jpg\"\n                        alt=\"Photo of Stage Revolver\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>Cosmo's Foger-T</mat-card-title>\n                    <mat-card-subtitle>21h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Cosmo's Foger-T.png\"\n                        alt=\"Photo of Cosmo's Foger-T\">\n                </mat-card>\n                <mat-card>\n                    <mat-card-title>DB Wa Kleur Hee Aaven Trakteur?!</mat-card-title>\n                    <mat-card-subtitle>23h30</mat-card-subtitle>\n                    <img mat-card-image src=\"../../../assets/images/line-up/Wa Kleur Hee Aaven Trakteur.png\"\n                        alt=\"Photo of Wa Kleur Hee Aaven Trakteur\">\n                </mat-card>\n            </mat-expansion-panel>\n        </mat-accordion>\n        <a href=\"../../../assets/files/Line-Up.pdf\" download>\n            <div class=\"pdfButton2\"><img src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\n                <p class=\"downloadText\">download line up</p>\n            </div>\n        </a>\n    </div>\n</div>\n\n<div [style.height]=\"margin\"></div>\n\n<div class=\"imagesDiv\" #gallery>\n    <div class=\"imagesHeading\">\n        <p class=\"imagesTitle\">Foto's</p>\n        <p>Bekijk hier de foto's van voorgaande edities</p>\n    </div>\n    <div class=\"imageContainer\">\n        <img src=\"../../../assets/images/play.png\" class=\"playButton\" [@popOverState]=\"stateName()\"\n            (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\" (click)=\"navigateToPictures()\" />\n        <img src=\"../../../assets/images/gallery/5.jpg\" class=\"imageLink\" (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\"\n            (click)=\"navigateToPictures()\" />\n    </div>\n</div>\n\n<div class=\"sponsorsDiv\" #sponsors>\n    <p class=\"sponsorTitle\">sponsors</p>\n    <div class=\"sponsors\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-2\" ><img src=\"../../../assets/images/sponsors/sponsor1.1.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.2.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.3.png\" class=\"sponsor1\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.4.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.5.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.6.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.7.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.8.png\" class=\"sponsor1\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.9.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.10.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.11.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.12.png\" class=\"sponsor1\"/></div>\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.13.png\" class=\"sponsor1\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.1.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.2.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.3.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.4.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.5.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.6.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.7.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.8.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.9.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.10.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.11.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.12.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.13.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.14.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.15.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.16.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.17.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.18.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.19.png\" class=\"sponsor2\"/></div>\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.20.png\" class=\"sponsor2\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.1.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.2.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.3.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.4.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.5.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.6.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.7.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.8.png\" class=\"sponsor3\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.9.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.10.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.11.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.12.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.13.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.14.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.15.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.16.png\" class=\"sponsor3\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.17.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.18.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.19.png\" class=\"sponsor3\"/></div>\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.20.png\" class=\"sponsor3\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.1.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.2.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.3.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.4.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.5.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.6.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.7.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.8.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.9.png\" class=\"sponsor4\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.10.png\" class=\"sponsor4\"/></div>\n        </div>\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.1.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.2.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.3.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.4.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.5.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.6.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.7.png\" class=\"sponsor5\"/></div>\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.8.png\" class=\"sponsor5\"/></div>\n        </div>\n        <div class=\"row sponsor-names\">SND Sound & Light &#8227; Kineteam &#8227; Heracles &#8227; Haarstudio Marleen &#8227; Van Hove Begrafenissen &#8227; Bakkerij De Becker &#8227; Hadebo &#8227; Keurslager David &#8227; Foto Karel &#8227; Het Houten Huizeke &#8227; De Broodkruimel &#8227; Beauty Art &#8227; Slagerij Marleen & Co &#8227; Kapsalon Mabo &#8227; 't Kippefestijntje &#8227; Dakwerken Daneels &#8227; KeapSolutions &#8227; De verzekeringswinkel &#8227; Dave's Hairstudio</div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" (window:resize)=\"onResize($event)\">\n    <div class=\"heading\">\n        <p class=\"title\">Foto's</p>\n        <p class=\"description\">Bekijk hier al de foto's van eerdere edities</p>\n    </div>\n    <div class=\"selectedImageContainer\">\n        <div class=\"prevButton\" (click)=\"prevImage()\" *ngIf=\"buttonsVisible\">\n            <img class=\"prevNextImage\" src=\"../../../assets/images/backArrow.png\">\n        </div>\n        <div class=\"nextButton\" (click)=\"nextImage()\" *ngIf=\"buttonsVisible\">\n            <img class=\"prevNextImage\" src=\"../../../assets/images/NextArrow.png\">\n        </div>\n        <div *ngFor=\"let image of images; let i = index\">\n        <img class=\"selectedImage\" @scale [src]=\"'../../../assets/images/gallery/' + (i+1) +'.jpg'\" (swiperight)=\"nextImage()\" (swipeleft)=\"prevImage()\" *ngIf=\"(i+1) == selectedIndex\"/>\n        </div>\n    </div>\n    <div class=\"allImages\">\n        <mat-grid-list [cols]=\"amountCols\" [@listStagger]='images.length' class=\"imageList\">\n            <mat-grid-tile *ngFor=\"let image of images; let i = index\">\n                <img class=\"subImage\" [ngStyle]=\"((i + 1) == selectedIndex) ? selectedImageStyle : notSelectedImageStyle\" [src]=\"'../../../assets/images/gallery/icons/icon' + (i+1) +'.jpg'\" (click)=\"ImageSelected(i);\"/>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\"\n      [ngClass]=\"{hidden: (isHandset$ | async) === false}\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\"\n      position=\"end\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"['/home']\">Home</a>\n      <a mat-list-item [routerLink]=\"['/images']\">Foto's</a>\n      <a mat-list-item [routerLink]=\"['/info']\">Praktische Info</a>\n      <a mat-list-item [routerLink]=\"['/concert']\">Kerstconcert</a>\n      <a mat-list-item [routerLink]=\"['/tvh']\">TVH</a>\n      <a mat-list-item [routerLink]=\"['/contact']\">Contact</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <img class=\"logo\" src=\"../../../assets/images/logo.png\"/>\n      <span class=\"spacer\"></span>\n      <p class=\"sloganSpan\" [ngClass]=\"{hidden: (isHandset$ | async) === false}\">Tongerlo leeft!</p>\n      <div class=\"toolbarItems\" [ngClass]=\"{hidden: (isHandset$ | async) === true}\">\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"active-link\">Home</a>\n        <a [routerLink]=\"['/images']\" routerLinkActive=\"active-link\">Foto's</a>\n        <a [routerLink]=\"['/info']\" routerLinkActive=\"active-link\">Praktische Info</a>\n        <a [routerLink]=\"['/concert']\" routerLinkActive=\"active-link\">Kerstconcert</a>\n        <a [routerLink]=\"['/tvh']\" routerLinkActive=\"active-link\">TVH</a>\n        <a [routerLink]=\"['/contact']\" routerLinkActive=\"active-link\">Contact</a>\n      </div>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h2>Praktische info</h2>\n    <h3>Inkom</h3>\n    <p>Het terein is te betreden via 3 inkoms:</p>\n    <ul>\n        <li>Kruispunt Geelsestraat/Kerkplein/Abdijstraat</li>\n        <li>Langstraat</li>\n        <li>Lange Nieuwstraat</li>\n    </ul>\n    <p>Deze zijn op zaterdag geopend vanaf 16h en zondag vanaf 13h. Indien er aan een bepaalde inkom een te lange wachtrij staat, kan je altijd bij een andere ingang proberen. Inkom Langstraat en inkom Lange Nieuwstraat zijn meestal het minst druk.</p>\n    <p>De inkom kan enkel contant betaald worden.</p>\n    <p>Voor je eigen veiligheid zullen er bewakingsagenten aanwezig zijn op het terrein. Zij hebben het recht om controles uit te voeren. Bij verzet of weigering kan de toegang ontzegd worden.</p>\n    <p>Door het betreden van het festivalterrein geef je als bezoeker stilzwijgend toestemming aan de organisatie om (audio-)visuele opnames te maken.</p>\n    <h3>Geen vestiare</h3>\n    <p>Er is geen vestiaire op het terrein. Spullen achterlaten gebeurt op eigen verantwoordelijkheid.</p>\n    <h3>Drankjetons</h3>\n    <p>Drankjetons kan je kopen (contant) aan onze kassa’s. Deze jetons worden niet terugbetaald. Vrijdag zullen er andere jetons gebruikt worden dan zaterdag en zondag.</p>\n    <h3>Milieu</h3>\n    <p>We proberen zoveel mogelijk afval te sorteren. Werp daarom plastiek bekers in de daarvoor voorziene plaatsen. Uitdelen van flyers kan op ons festival terrein niet toegestaan worden.</p>\n    <h3>Toiletten</h3>\n    <p>Er zijn ruim voldoende en aangepaste toiletten op het terrein. Deze zijn gratis te gebruiken. We verwachten dat alle toiletten proper achter gelaten worden. Gelieve enkel de toiletten te gebruiken en nergens tegen omheiningen of gebouwen te urineren.</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<p class=\"title\">KERN COMITEE</p>\n<p>In 1987 werd het \"Tongels Dorpsfeest\" geboren,naar een idee van Jan Michiels die samen met Erik Van Eynde en Willy Van Eysendeyk, tussen pot en pint in het legendarisch restaurant \"den Toerist\"beslisten,om na de ter ziele gegane lichtstoet van Tongerlo in de jaren 60, opnieuw een openluchtfeest te organiseren tijdens de meikermis. Na 34 edities bestaat het huidige kerncomite uit 6 personen: bezieler Jan Michiels, Jan Martens, Conny Van Dyck, Hans Hufkens, Jules Baerts en Niels Spruyt. Zij werken belangeloos talloze uren als hobby,in hun vrije tijd aan de jaarlijkse voorbereiding van dit unieke dorpsfeest,onder voogdij van een tiental Tongelse deelnemende verenigingen die nog steeds de eindbeslissingen nemen tijdens de maandelijkse vergaderingen,met 1 of 2 afgevaardigden per deelnemende vereniging. Ook de samenwerking met onze lokale en regionale sponsors blijft een onmisbaar gegeven om sociale consumptie- en toegangsprijzen en een sfeervol programma mogelijk te maken.</p>\n<p class=\"title\">DEELNEEMENDE VERENGINGEN</p>\n<p>Organisatiecomité met deelnemende Tongelse verenigingen voor het 35 ste Tongels Dorpsfeest op vrijdag 6, zaterdag 7 en zondag 8 mei 2022:</p>\n<mat-list [@listStagger]='groups.length' class=\"groups\">\n    <mat-list-item *ngFor=\"let group of groups; let i = index \" class=\"group\">\n      <i class=\"material-icons\">\n        play_arrow\n        </i>\n      <a href=\"{{group.link}}\" (mouseover)=\"toggle(i)\" (mouseleave)=\"toggle(i)\">{{group.name}}</a>\n      <p class=\"link\" [@popOverState]=\"stateName(i)\">->{{group.link | stringlimit}}</p>\n</mat-list-item>\n</mat-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@foobar]=\"state\">\n    <ng-content></ng-content>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Models/form-model.ts":
/*!**************************************!*\
  !*** ./src/app/Models/form-model.ts ***!
  \**************************************/
/*! exports provided: FormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return FormModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FormModel {
}


/***/ }),

/***/ "./src/app/Services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
    }
    sendMail(content) {
        return this.http.post("https://xhkctsd01c.execute-api.eu-central-1.amazonaws.com/Prod/api/email", content);
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmailService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/concert/concert.component */ "./src/app/components/concert/concert.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tvh/tvh.component */ "./src/app/components/tvh/tvh.component.ts");
/* harmony import */ var _components_images_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/images/images.component */ "./src/app/components/images/images.component.ts");
/* harmony import */ var _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/practical-info/practical-info.component */ "./src/app/components/practical-info/practical-info.component.ts");









const routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "images", component: _components_images_images_component__WEBPACK_IMPORTED_MODULE_7__["ImagesComponent"] },
    { path: "concert", component: _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_4__["ConcertComponent"] },
    { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: "tvh", component: _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_6__["TvhComponent"] },
    { path: "info", component: _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_8__["PracticalInfoComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tongerlo';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/concert/concert.component */ "./src/app/components/concert/concert.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tvh/tvh.component */ "./src/app/components/tvh/tvh.component.ts");
/* harmony import */ var _pipes_limitStringPipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/limitStringPipe */ "./src/app/pipes/limitStringPipe.ts");
/* harmony import */ var _components_images_images_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/images/images.component */ "./src/app/components/images/images.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/practical-info/practical-info.component */ "./src/app/components/practical-info/practical-info.component.ts");
/* harmony import */ var _features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./features/fade-in/fade-in.component */ "./src/app/features/fade-in/fade-in.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _components_concert_concert_component__WEBPACK_IMPORTED_MODULE_12__["ConcertComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_15__["TvhComponent"],
            _pipes_limitStringPipe__WEBPACK_IMPORTED_MODULE_16__["LimitStringPipe"],
            _components_images_images_component__WEBPACK_IMPORTED_MODULE_17__["ImagesComponent"],
            _components_practical_info_practical_info_component__WEBPACK_IMPORTED_MODULE_19__["PracticalInfoComponent"],
            _features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_20__["FadeInComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _app_material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDxz70THIVZwo8vmwqdT3-aI928wkx3mac'
            })
        ],
        exports: [
            _features_fade_in_fade_in_component__WEBPACK_IMPORTED_MODULE_20__["FadeInComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/concert/concert.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/concert/concert.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.flyerImg {\n  background-image: url('flyer.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 40vh;\n  width: 40vh;\n  margin-top: 5%;\n}\n\n@media (max-width: 500px) {\n  .flyerImg {\n    width: 100%;\n  }\n}\n\n@media (max-width: 700px) {\n  .tempWarning {\n    height: 15vh;\n  }\n\n  .warnImage {\n    width: auto;\n    height: 50%;\n    margin-right: 20px;\n  }\n}\n\n.tempWarning {\n  height: 10vh;\n  margin: 5%;\n  border: solid 3px #f5df1d;\n  border-radius: 20px;\n  background-color: #fdfd94;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.warnText {\n  font-size: 2vh;\n}\n\n.warnImage {\n  width: auto;\n  height: 65%;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbmNlcnQvQzpcXFVzZXJzXFxKb3JlblxcdG9uZ2VybG9Db2RlXFxzcmNcXGFzc2V0c1xcaW1hZ2VzXFxsaW5lLXVwLy4uXFwuLlxcLi5cXGFwcFxcY29tcG9uZW50c1xcY29uY2VydFxcY29uY2VydC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbmNlcnQvY29uY2VydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksWUFBQTtFQ0FOOztFREdFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6Ii4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbmNlcnQvY29uY2VydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi5mbHllckltZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZseWVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIHdpZHRoOiA0MHZoO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgIC5mbHllckltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgLnRlbXBXYXJuaW5ne1xyXG4gICAgICAgIGhlaWdodDogMTV2aDtcclxuICAgIH1cclxuXHJcbiAgICAud2FybkltYWdle1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRlbXBXYXJuaW5ne1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyNDUsIDIyMywgMjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MywgMTQ4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ud2FyblRleHR7XHJcbiAgICBmb250LXNpemU6IDJ2aDtcclxufVxyXG5cclxuLndhcm5JbWFnZXtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmZseWVySW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmx5ZXIucG5nKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA0MHZoO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mbHllckltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAudGVtcFdhcm5pbmcge1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxuXG4gIC53YXJuSW1hZ2Uge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuLnRlbXBXYXJuaW5nIHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBtYXJnaW46IDUlO1xuICBib3JkZXI6IHNvbGlkIDNweCAjZjVkZjFkO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZDk0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLndhcm5UZXh0IHtcbiAgZm9udC1zaXplOiAydmg7XG59XG5cbi53YXJuSW1hZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2NSU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/concert/concert.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/concert/concert.component.ts ***!
  \*********************************************************/
/*! exports provided: ConcertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertComponent", function() { return ConcertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let ConcertComponent = class ConcertComponent {
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
        this.title.setTitle("Kerstconcert");
        this.meta.addTag({ name: 'description', content: "Naast het dorpsfeest in mei organiseert Tongerlo Leeft ! ook elk jaar in december een openlucht Kerst-Rock-Concert." });
        this.meta.addTag({ name: 'keywords', content: "Kerstconcert Tongerlo, Kerstconcert" });
    }
    ngOnInit() {
    }
};
ConcertComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
ConcertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-concert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./concert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/concert/concert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./concert.component.scss */ "./src/app/components/concert/concert.component.scss")).default]
    })
], ConcertComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 40vh;\n}\n\nmat-form-field {\n  margin-bottom: 1vh;\n}\n\n.form {\n  padding: 4% 10% 10% 10%;\n  width: 80%;\n}\n\n.mail {\n  width: 40%;\n}\n\n.name {\n  width: 20%;\n}\n\n.infoWindowTitle {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 1.7vh;\n}\n\n.submitLoaderContainer {\n  width: 20%;\n}\n\n.submitButton {\n  width: 75%;\n  float: left;\n}\n\n.spinner {\n  float: right;\n}\n\n@media (max-width: 1000px) {\n  .mail {\n    width: 80%;\n  }\n\n  .name {\n    width: 50%;\n  }\n\n  .submitLoaderContainer {\n    width: 40%;\n  }\n}\n\n@media (max-width: 500px) {\n  .mail {\n    width: 100%;\n  }\n\n  .name {\n    width: 100%;\n  }\n\n  .submitLoaderContainer {\n    width: 55%;\n    margin-bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvQzpcXFVzZXJzXFxKb3JlblxcdG9uZ2VybG9Db2RlXFxzcmNcXGFzc2V0c1xcaW1hZ2VzXFxsaW5lLXVwLy4uXFwuLlxcLi5cXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJO0lBQ0ksVUFBQTtFQ0VOOztFRENFO0lBQ0ksVUFBQTtFQ0VOOztFREFFO0lBQ0ksVUFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSTtJQUNJLFdBQUE7RUNFTjs7RURDRTtJQUNJLFdBQUE7RUNFTjs7RURBRTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcHtcclxuICAgIGhlaWdodDogNDB2aDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gICAgcGFkZGluZzo0JSAxMCUgMTAlIDEwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWlse1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uaW5mb1dpbmRvd1RpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjd2aDtcclxufVxyXG5cclxuLnN1Ym1pdExvYWRlckNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b257XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zcGlubmVye1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAubWFpbHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmFtZXtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdExvYWRlckNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAubWFpbHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hbWV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0TG9hZGVyQ29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgfVxyXG59IiwiYWdtLW1hcCB7XG4gIGhlaWdodDogNDB2aDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogNCUgMTAlIDEwJSAxMCU7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tYWlsIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLm5hbWUge1xuICB3aWR0aDogMjAlO1xufVxuXG4uaW5mb1dpbmRvd1RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMS43dmg7XG59XG5cbi5zdWJtaXRMb2FkZXJDb250YWluZXIge1xuICB3aWR0aDogMjAlO1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgd2lkdGg6IDc1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zcGlubmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tYWlsIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuc3VibWl0TG9hZGVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1haWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnN1Ym1pdExvYWRlckNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_Models_form_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/form-model */ "./src/app/Models/form-model.ts");
/* harmony import */ var src_app_Services_email_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/email.service */ "./src/app/Services/email.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let ContactComponent = class ContactComponent {
    constructor(snackBar, mailService, title, meta) {
        this.snackBar = snackBar;
        this.mailService = mailService;
        this.title = title;
        this.meta = meta;
        this.loading = false;
        this.enabled = true;
        this.latitude = 51.107379;
        this.longitude = 4.915008;
        this.title.setTitle("Contact");
        this.meta.addTag({ name: 'description', content: "Het adres van de Tongelse Dorpsfeesten is: Tongerlodorp 2260 Tongerlo. Bereik ons via een formulier met alle vragen." });
        this.meta.addTag({ name: 'keywords', content: "Tongels dorpsfeest contact, tongelse dorpsfeesten contact, tongels dorpsfeest adres, Tongelse Dorpsfeesten adres, Tongelse Dorpsfeesten vragen" });
    }
    ngOnInit() {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            organisation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('option1', []),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    submit(contactForm) {
        this.loading = true;
        var formContent = new src_app_Models_form_model__WEBPACK_IMPORTED_MODULE_4__["FormModel"]();
        formContent.Email = this.myForm.get('mail').value;
        formContent.Name = this.myForm.get('name').value;
        formContent.Option = this.myForm.get('organisation').value;
        formContent.Text = this.myForm.get('question').value;
        this.mailService.sendMail(formContent).subscribe(response => {
            this.snackBar.open('Succes, het formulier is verzonden', "Ok", {
                duration: 5000
            });
            this.enabled = false;
            contactForm.resetForm();
            this.myForm.reset();
        }, error => {
            this.snackBar.open('Error, er is iets fout gegaan, bereik ons via facebook bij dringende vragen', "Ok", {
                duration: 5000
            });
        }).add(() => {
            this.loading = false;
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: src_app_Services_email_service__WEBPACK_IMPORTED_MODULE_5__["EmailService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fbLogo {\n  background-image: url('facebook.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 4vh;\n  width: 4vh;\n}\n\n.fbLogo:hover {\n  cursor: pointer;\n}\n\n.logo {\n  width: 100%;\n  height: 10vh;\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-bottom: 2vh;\n}\n\n.footerContainer {\n  background-color: rgba(245, 245, 245, 0.733);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 25vh;\n  width: 100%;\n  position: relative;\n  bottom: 0px;\n}\n\n@media (max-width: 500px) {\n  .logo {\n    margin-top: 2vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXEpvcmVuXFx0b25nZXJsb0NvZGVcXHNyY1xcYXNzZXRzXFxpbWFnZXNcXGxpbmUtdXAvLi5cXC4uXFwuLlxcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxlQUFBO0VDQU47QUFDRiIsImZpbGUiOiIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZiTG9nb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0dmg7XHJcbiAgICB3aWR0aDogNHZoO1xyXG59XHJcblxyXG4uZmJMb2dvOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuLmZvb3RlckNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC43MzMpO1xyXG4gICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgfVxyXG59IiwiLmZiTG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDR2aDtcbiAgd2lkdGg6IDR2aDtcbn1cblxuLmZiTG9nbzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi5mb290ZXJDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNzMzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
    redirect() {
        window.location.href = 'https://www.facebook.com/TongerloLeeft';
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tempWarning {\n  height: 10vh;\n  margin: 5%;\n  border: solid 3px #f5df1d;\n  border-radius: 20px;\n  background-color: #fdfd94;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.warnText {\n  font-size: 2vh;\n}\n\n.warnImage {\n  width: auto;\n  height: 65%;\n  margin-right: 20px;\n}\n\n.topImage {\n  margin-top: 0px;\n  background-image: url('tongerloMainImage.jpg');\n  background-repeat: no-repeat;\n  position: top center;\n  background-size: 100%;\n  z-index: 3;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5% 0% 2% 0%;\n}\n\nmat-expansion-panel {\n  margin-bottom: 1vh;\n}\n\n.mainText {\n  padding: 5%;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  text-align: center;\n}\n\nh1 {\n  font-size: 3vw;\n  color: white;\n}\n\nh2 {\n  font-size: 1.5vw;\n  color: #edeae9;\n}\n\n.navContainer {\n  margin-top: 5vh;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.linkImg {\n  height: 6vw;\n}\n\n.navigationImg {\n  width: 10vw;\n  height: 10vw;\n  border-radius: 50%;\n  background-color: lightgray;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navigationImg:hover {\n  background-color: #7c7a7a;\n  cursor: pointer;\n}\n\n.navigationDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.navInfo {\n  font-size: 1.5vw;\n  font-family: sans-serif;\n}\n\n.infoDiv {\n  height: 50vh;\n  background-color: #eeecec;\n  margin-top: 5vh;\n  width: 100%;\n}\n\n.infoText {\n  float: left;\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5%;\n}\n\n.infoImage {\n  background-image: url('tongerloInfo.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 40%;\n  height: 100%;\n  float: right;\n}\n\n.infoTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n  padding-bottom: 1vh;\n  border-bottom: black solid 2px;\n}\n\n.lineupDiv {\n  padding-top: 60px;\n  width: 90%;\n  margin-left: 10%;\n  height: 30%;\n}\n\nmat-panel-title {\n  flex-basis: 0;\n}\n\nmat-panel-description {\n  margin-left: 5%;\n  flex-basis: 100%;\n  color: black;\n  font-weight: 800;\n}\n\n.location {\n  margin-left: 40%;\n  margin-bottom: 5vh;\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.lineupText {\n  width: 50%;\n  margin-right: 10%;\n  display: block;\n  float: right;\n  height: 20% !important;\n}\n\n.imagePdfContainer {\n  width: 30%;\n  height: 100%;\n  float: left;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.pdfButton, .pdfButton2 {\n  height: 40px;\n  width: 250px;\n  border: solid 1px black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: middle;\n  margin-top: 4%;\n  padding: 1%;\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.pdfButton2 {\n  visibility: hidden;\n}\n\n.pdfButton:hover, .pdfButton2:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.pdfImage {\n  width: auto;\n  height: 100%;\n  float: left;\n  margin-right: 15%;\n}\n\n.lineupImage {\n  background-image: url('band.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 200px;\n  display: block;\n}\n\n.imagesDiv {\n  width: 100%;\n  text-align: center;\n  background-color: #eeecec;\n  margin-top: 10%;\n  padding: 3% 0% 5% 0%;\n}\n\n.imagesTitle {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.imageContainer {\n  position: relative;\n}\n\n.playButton {\n  position: absolute;\n  height: 30%;\n  top: 40%;\n  left: 45%;\n  cursor: pointer;\n}\n\n.imageLink {\n  width: 50%;\n  height: auto;\n  margin-top: 3%;\n  cursor: pointer;\n}\n\n.sponsorsDiv {\n  padding-top: 2vh;\n  margin-top: 5vh;\n  -webkit-box-align: center;\n          align-items: center;\n  height: auto;\n  text-align: center;\n}\n\n.image-swiper {\n  margin-top: 2%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15%;\n  position: relative;\n  width: 1000px;\n  height: 50vh;\n}\n\n.custom-col-1-5 {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n  max-width: 15%;\n  padding: 0 6px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 45%;\n    max-width: 45%;\n    padding: 0 8px;\n  }\n}\n\n.custom-col-1-2 {\n  -webkit-box-flex: 0;\n          flex: 0 0 11%;\n  max-width: 11%;\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 22%;\n    max-width: 22%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n.custom-col-1-5, .custom-col-1-2 {\n  -webkit-box-flex: 0;\n  position: relative;\n  width: 100%;\n}\n\n.custom-col-1-2, .custom-col-1-5, .col-1, .col-2 {\n  margin-bottom: 20px;\n}\n\n.col-2 {\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .col-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 33%;\n    max-width: 33%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 45%;\n    max-width: 45%;\n  }\n}\n\n.col-1 {\n  padding: 0 3px;\n  -webkit-box-flex: 0;\n          flex: 0 0 9%;\n  max-width: 9%;\n}\n\n@media (max-width: 1000px) {\n  .col-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 18%;\n    max-width: 18%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 23%;\n    max-width: 23%;\n  }\n}\n\n.row {\n  -webkit-box-pack: center !important;\n  justify-content: center !important;\n}\n\n.sponsor5 {\n  max-width: 90%;\n  border: solid 1px black;\n}\n\n.sponsor1, .sponsor2, .sponsor3, .sponsor4 {\n  max-width: 100%;\n  border: solid 1px black;\n}\n\n.sponsors {\n  margin-bottom: 30px;\n}\n\n:host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n  height: 650px;\n}\n\n@media (max-width: 1200px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 520px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 800px;\n  }\n}\n\n@media (max-width: 900px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 390px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 600px;\n  }\n}\n\n@media (max-width: 700px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 260px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 400px;\n  }\n}\n\n@media (max-width: 500px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 195px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 300px;\n  }\n}\n\n.sponsor-names {\n  padding: 15px 25px;\n}\n\n.sponsorTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.info-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 30px;\n  height: 75px;\n  width: 100%;\n}\n\n.info-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n  max-width: 175px;\n  min-height: 50px;\n  height: 50px;\n  border: solid 1px black;\n  border-radius: 5px;\n  margin: 0 15px;\n}\n\n.info-button:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\n@media (max-width: 1000px) {\n  .lineupDiv {\n    height: 30%;\n  }\n\n  .infoDiv {\n    height: 70vh;\n  }\n}\n\n@media (max-width: 700px) {\n  .tempWarning {\n    height: 15vh;\n  }\n\n  .warnImage {\n    width: auto;\n    height: 50%;\n    margin-right: 20px;\n  }\n\n  .imageLink {\n    width: 60%;\n  }\n\n  .imagePdfContainer {\n    visibility: hidden;\n    width: 0%;\n  }\n\n  .lineupText {\n    width: 100%;\n    float: none;\n    margin-right: 0%;\n  }\n\n  .pdfButton2 {\n    width: 80%;\n    height: 40px;\n    margin-top: 10%;\n    visibility: visible;\n  }\n\n  .lineupDiv {\n    padding-top: 100px;\n    height: 40%;\n    margin-left: 5%;\n  }\n\n  .info-buttons {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .info-button {\n    max-width: 100%;\n    margin: 10px 15px;\n    min-height: 35px;\n    height: 35px;\n  }\n}\n\n@media (max-width: 500px) {\n  .lineupDiv {\n    padding-top: 150px;\n  }\n\n  .navInfo {\n    font-size: 3vw;\n  }\n\n  .navContainer {\n    margin-left: 2%;\n    margin-right: 2%;\n  }\n\n  .linkImg {\n    height: 10vw;\n  }\n\n  .navigationImg {\n    width: 18vw;\n    height: 18vw;\n  }\n\n  .infoText {\n    float: none;\n    width: 90%;\n  }\n\n  .infoImage {\n    float: none;\n    width: 100%;\n    height: 30vh;\n  }\n\n  .infoDiv {\n    margin-bottom: 3vh;\n    height: 65vh;\n  }\n\n  .imageLink {\n    width: 80%;\n  }\n\n  .info-button {\n    margin: 5px 15px;\n  }\n\n  .info-buttons {\n    margin-bottom: 25px;\n  }\n}\n\n@media (max-width: 400px) {\n  .lineupDiv {\n    height: 70%;\n    padding-top: 200px;\n  }\n}\n\n@media (max-width: 300px) {\n  .lineupDiv {\n    padding-top: 250x;\n  }\n}\n\n@media (min-width: 500px) {\n  .topImage {\n    background-attachment: fixed;\n  }\n\n  .infoImage {\n    background-attachment: fixed;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2hvbWUvQzpcXFVzZXJzXFxKb3JlblxcdG9uZ2VybG9Db2RlXFxzcmNcXGFzc2V0c1xcaW1hZ2VzXFxsaW5lLXVwLy4uXFwuLlxcLi5cXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURHQTtFQUNJLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLHdFQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO1VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUk7RUFMSjtJQU1RLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7RUNDTjtBQUNGOztBREFJO0VBVEo7SUFVUSxtQkFBQTtZQUFBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSSxtQkFBQTtVQUFBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERJO0VBTEo7SUFNUSxtQkFBQTtZQUFBLGFBQUE7SUFDQSxjQUFBO0VDSU47QUFDRjs7QURISTtFQVRKO0lBVVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ01OO0FBQ0Y7O0FESEE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0ksbUJBQUE7QUNNSjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURKSTtFQUhKO0lBSVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ09OO0FBQ0Y7O0FETkk7RUFQSjtJQVFRLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7RUNTTjtBQUNGOztBRE5BO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGFBQUE7QUNTSjs7QURQSTtFQUxKO0lBTVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ1VOO0FBQ0Y7O0FEVEk7RUFUSjtJQVVRLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7RUNZTjtBQUNGOztBRFRBO0VBQ0ksbUNBQUE7RUFDQSxrQ0FBQTtBQ1lKOztBRFRBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FDWUo7O0FEVEE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUNZSjs7QURUQTtFQUNJLG1CQUFBO0FDWUo7O0FEUkk7RUFDSSxhQUFBO0FDV1I7O0FEUkk7RUFDSTtJQUNJLGFBQUE7RUNVVjtFRFBNO0lBQ0ksWUFBQTtFQ1NWO0FBQ0Y7O0FETkk7RUFDSTtJQUNJLGFBQUE7RUNRVjtFRExNO0lBQ0ksWUFBQTtFQ09WO0FBQ0Y7O0FESkk7RUFDSTtJQUNJLGFBQUE7RUNNVjtFREhNO0lBQ0ksWUFBQTtFQ0tWO0FBQ0Y7O0FERkk7RUFDSTtJQUNJLGFBQUE7RUNJVjtFRERNO0lBQ0ksWUFBQTtFQ0dWO0FBQ0Y7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUk7RUFDSSx3RUFBQTtFQUNBLG1CQUFBO0FDRVI7O0FERUE7RUFDSTtJQUNJLFdBQUE7RUNDTjs7RURFRTtJQUNJLFlBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxZQUFBO0VDQU47O0VER0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDQU47O0VER0U7SUFDSSxVQUFBO0VDQU47O0VER0U7SUFDSSxrQkFBQTtJQUNBLFNBQUE7RUNBTjs7RURHRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNBTjs7RURHRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDQU47O0VER0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDQU47O0VER0U7SUFDSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNBTjs7RURHRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSTtJQUNJLGtCQUFBO0VDRE47O0VER0U7SUFDSSxjQUFBO0VDQU47O0VERUU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUNDTjs7RURDRTtJQUNJLFlBQUE7RUNFTjs7RURDRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDRU47O0VEQUU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0dOOztFRERFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDSU47O0VEREU7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNJTjs7RURERTtJQUNJLFVBQUE7RUNJTjs7RURERTtJQUNJLGdCQUFBO0VDSU47O0VEREU7SUFDSSxtQkFBQTtFQ0lOO0FBQ0Y7O0FEREE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSTtJQUNJLGlCQUFBO0VDRU47QUFDRjs7QURDQTtFQUNJO0lBQ0ksNEJBQUE7RUNDTjs7RURDRTtJQUNJLDRCQUFBO0VDRU47QUFDRiIsImZpbGUiOiIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVtcFdhcm5pbmd7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDI0NSwgMjIzLCAyOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxNDgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53YXJuVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ud2FybkltYWdle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnRvcEltYWdle1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9NYWluSW1hZ2UuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNSUgMCUgMiUgMCU7XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn1cclxuXHJcbi5tYWluVGV4dHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHJnYigwLCAwLCAwKSwgJGFscGhhOiAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogI0VERUFFOSwgJGFscGhhOiAxLjApO1xyXG59XHJcblxyXG4ubmF2Q29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ubGlua0ltZ3tcclxuICAgIGhlaWdodDogNnZ3O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbkltZ3tcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmlnYXRpb25JbWc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAxMjIsIDEyMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5uYXZJbmZve1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW5mb0RpdntcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNiwgMjM2KTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb1RleHR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuXHJcbi5pbmZvSW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90b25nZXJsb0luZm8uanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmluZm9UaXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMnB4O1xyXG59XHJcblxyXG4ubGluZXVwRGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG5tYXQtcGFuZWwtdGl0bGUge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcbiAgbWF0LXBhbmVsLWRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuXHJcbi5sb2NhdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4ubGluZXVwVGV4dHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlUGRmQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBkZkJ1dHRvbiwgLnBkZkJ1dHRvbjJ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnBkZkJ1dHRvbjJ7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wZGZCdXR0b246aG92ZXIsIC5wZGZCdXR0b24yOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsMCwwLC4yNSksIDNweCAzcHggN3B4IHJnYmEoMCwwLDAsLjM1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wZGZJbWFnZXtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuLmxpbmV1cEltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltYWdlc0RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM2LCAyMzYpO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZzogMyUgMCUgNSUgMCU7XHJcbn1cclxuXHJcbi5pbWFnZXNUaXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4uaW1hZ2VDb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wbGF5QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlTGlua3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNwb25zb3JzRGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1zd2lwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sLTEtNSB7XHJcbiAgICBmbGV4OiAwIDAgMTUlO1xyXG4gICAgbWF4LXdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIFxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20tY29sLTEtMiB7XHJcbiAgICBmbGV4OiAwIDAgMTElO1xyXG4gICAgbWF4LXdpZHRoOiAxMSU7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCAyMiU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMiU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDMwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1jb2wtMS01LCAuY3VzdG9tLWNvbC0xLTIge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbC0xLTIsIC5jdXN0b20tY29sLTEtNSwgLmNvbC0xLCAuY29sLTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNvbC0yIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMzJTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgNDUlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29sLTEge1xyXG4gICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICBmbGV4OiAwIDAgOSU7XHJcbiAgICBtYXgtd2lkdGg6IDklO1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDE4JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE4JTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMjMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMjMlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwb25zb3I1IHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5zcG9uc29yMSwgLnNwb25zb3IyLCAuc3BvbnNvcjMsIC5zcG9uc29yNCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLnNwb25zb3JzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwIHtcclxuICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAgICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgICAgICBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTk1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNwb25zb3ItbmFtZXMge1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG59XHJcblxyXG4uc3BvbnNvclRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxufVxyXG5cclxuLmluZm8tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mby1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLDAsMCwuMjUpLCAzcHggM3B4IDdweCByZ2JhKDAsMCwwLC4zNSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9EaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAudGVtcFdhcm5pbmd7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC53YXJuSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZUxpbmt7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2VQZGZDb250YWluZXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubGluZXVwVGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZGZCdXR0b24ye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1idXR0b25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWJ1dHRvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAubGluZXVwRGl2e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5uYXZJbmZve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgfVxyXG4gICAgLm5hdkNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgIH1cclxuICAgIC5saW5rSW1ne1xyXG4gICAgICAgIGhlaWdodDogMTB2dztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hdmlnYXRpb25JbWd7XHJcbiAgICAgICAgd2lkdGg6IDE4dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHZ3O1xyXG4gICAgfVxyXG4gICAgLmluZm9UZXh0e1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuaW5mb0ltYWdle1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mb0RpdntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZUxpbmt7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tYnV0dG9ucyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgLmxpbmV1cERpdntcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDMwMHB4KXtcclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI1MHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDUwMHB4KXtcclxuICAgIC50b3BJbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgfVxyXG4gICAgLmluZm9JbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi50ZW1wV2FybmluZyB7XG4gIGhlaWdodDogMTB2aDtcbiAgbWFyZ2luOiA1JTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2Y1ZGYxZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmQ5NDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi53YXJuVGV4dCB7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ud2FybkltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50b3BJbWFnZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9NYWluSW1hZ2UuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlIDAlIDIlIDAlO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuXG4ubWFpblRleHQge1xuICBwYWRkaW5nOiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDN2dztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGNvbG9yOiAjZWRlYWU5O1xufVxuXG4ubmF2Q29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmxpbmtJbWcge1xuICBoZWlnaHQ6IDZ2dztcbn1cblxuLm5hdmlnYXRpb25JbWcge1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiAxMHZ3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uSW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2E3YTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2aWdhdGlvbkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmF2SW5mbyB7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uaW5mb0RpdiB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlYztcbiAgbWFyZ2luLXRvcDogNXZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZm9UZXh0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uaW5mb0ltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9JbmZvLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaW5mb1RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAycHg7XG59XG5cbi5saW5ldXBEaXYge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbm1hdC1wYW5lbC10aXRsZSB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbm1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubG9jYXRpb24ge1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmxpbmV1cFRleHQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cblxuLmltYWdlUGRmQ29udGFpbmVyIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBkZkJ1dHRvbiwgLnBkZkJ1dHRvbjIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucGRmQnV0dG9uMiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnBkZkJ1dHRvbjpob3ZlciwgLnBkZkJ1dHRvbjI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDNweCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBkZkltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG4ubGluZXVwSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5kLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltYWdlc0RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZWM7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZzogMyUgMCUgNSUgMCU7XG59XG5cbi5pbWFnZXNUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmltYWdlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGxheUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA0NSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlTGluayB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwb25zb3JzRGl2IHtcbiAgcGFkZGluZy10b3A6IDJ2aDtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLXN3aXBlciB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uY3VzdG9tLWNvbC0xLTUge1xuICBmbGV4OiAwIDAgMTUlO1xuICBtYXgtd2lkdGg6IDE1JTtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtNSB7XG4gICAgZmxleDogMCAwIDMwJTtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtNSB7XG4gICAgZmxleDogMCAwIDQ1JTtcbiAgICBtYXgtd2lkdGg6IDQ1JTtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgfVxufVxuXG4uY3VzdG9tLWNvbC0xLTIge1xuICBmbGV4OiAwIDAgMTElO1xuICBtYXgtd2lkdGg6IDExJTtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtMiB7XG4gICAgZmxleDogMCAwIDIyJTtcbiAgICBtYXgtd2lkdGg6IDIyJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jdXN0b20tY29sLTEtMiB7XG4gICAgZmxleDogMCAwIDMwJTtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgfVxufVxuXG4uY3VzdG9tLWNvbC0xLTUsIC5jdXN0b20tY29sLTEtMiB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tY29sLTEtMiwgLmN1c3RvbS1jb2wtMS01LCAuY29sLTEsIC5jb2wtMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtMiB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY29sLTIge1xuICAgIGZsZXg6IDAgMCAzMyU7XG4gICAgbWF4LXdpZHRoOiAzMyU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sLTIge1xuICAgIGZsZXg6IDAgMCA0NSU7XG4gICAgbWF4LXdpZHRoOiA0NSU7XG4gIH1cbn1cblxuLmNvbC0xIHtcbiAgcGFkZGluZzogMCAzcHg7XG4gIGZsZXg6IDAgMCA5JTtcbiAgbWF4LXdpZHRoOiA5JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbC0xIHtcbiAgICBmbGV4OiAwIDAgMTglO1xuICAgIG1heC13aWR0aDogMTglO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbC0xIHtcbiAgICBmbGV4OiAwIDAgMjMlO1xuICAgIG1heC13aWR0aDogMjMlO1xuICB9XG59XG5cbi5yb3cge1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnNwb25zb3I1IHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufVxuXG4uc3BvbnNvcjEsIC5zcG9uc29yMiwgLnNwb25zb3IzLCAuc3BvbnNvcjQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufVxuXG4uc3BvbnNvcnMge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG46aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICA6aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICAgIGhlaWdodDogNTIwcHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmltYWdlLXN3aXBlciB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcbiAgICBoZWlnaHQ6IDM5MHB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5pbWFnZS1zd2lwZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgfVxuICA6aG9zdDo6bmctZGVlcCAuaW1hZ2Utc3dpcGVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICA6aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICAgIGhlaWdodDogMTk1cHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmltYWdlLXN3aXBlciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbi5zcG9uc29yLW5hbWVzIHtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xufVxuXG4uc3BvbnNvclRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG4uaW5mby1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMTc1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4uaW5mby1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDNweCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmxpbmV1cERpdiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cblxuICAuaW5mb0RpdiB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnRlbXBXYXJuaW5nIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gIH1cblxuICAud2FybkltYWdlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAuaW1hZ2VMaW5rIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLmltYWdlUGRmQ29udGFpbmVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IDAlO1xuICB9XG5cbiAgLmxpbmV1cFRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG4gIH1cblxuICAucGRmQnV0dG9uMiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAubGluZXVwRGl2IHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG5cbiAgLmluZm8tYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5pbmZvLWJ1dHRvbiB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmxpbmV1cERpdiB7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICB9XG5cbiAgLm5hdkluZm8ge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG5cbiAgLm5hdkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gIH1cblxuICAubGlua0ltZyB7XG4gICAgaGVpZ2h0OiAxMHZ3O1xuICB9XG5cbiAgLm5hdmlnYXRpb25JbWcge1xuICAgIHdpZHRoOiAxOHZ3O1xuICAgIGhlaWdodDogMTh2dztcbiAgfVxuXG4gIC5pbmZvVGV4dCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5pbmZvSW1hZ2Uge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzB2aDtcbiAgfVxuXG4gIC5pbmZvRGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICB9XG5cbiAgLmltYWdlTGluayB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5pbmZvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHggMTVweDtcbiAgfVxuXG4gIC5pbmZvLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBwYWRkaW5nLXRvcDogMjUweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC50b3BJbWFnZSB7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgfVxuXG4gIC5pbmZvSW1hZ2Uge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let HomeComponent = class HomeComponent {
    constructor(router, title, meta) {
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.rowHeight = "15vw";
        this.margin = "0px";
        this.opened = 0;
        this.show = false;
        this.state = "notHovered";
        this.images = [
            '../../../assets/images/sponsors/sponsors1.jpg',
            '../../../assets/images/sponsors/sponsors2.jpg',
            '../../../assets/images/sponsors/sponsors3.jpg',
            '../../../assets/images/sponsors/sponsors4.jpg'
        ];
        this.title.setTitle("Home");
        this.meta.addTag({ name: 'description', content: "Vind hier alle informatie over de 34ste editie van de tongelse dorpsfeesten." });
        this.meta.addTag({ name: 'keywords', content: "Tongels dorpsfeest, tongelse dorpsfeesten, feest tongerlo, dorpsfeesten tongerlo" });
        let width = window.innerWidth;
        if (width <= 500) {
            this.rowHeight = "30vw";
        }
    }
    ngOnInit() { }
    onHovered() {
        this.state == "notHovered" ? this.state = "hovered" : this.state = "notHovered";
    }
    onExpand1() {
        this.opened = 1;
        let height = window.innerWidth / 4 + 400;
        this.margin = height + "px";
    }
    onExpand2() {
        this.opened = 2;
        let card = document.getElementById('image');
        let height = card.scrollHeight;
        if (height < 400) {
            height += ((600 - height) / 10);
        }
        this.margin = (height * 11 + 700) + "px";
    }
    onExpand3() {
        this.opened = 3;
        let card = document.getElementById('image');
        let height = card.scrollHeight;
        if (height < 400) {
            height += ((400 - height) / 10);
        }
        this.margin = (height * 8 + 650) + "px";
    }
    onClosed1() {
        if (this.opened == 1) {
            this.margin = "0px";
            this.opened = 0;
        }
    }
    onClosed2() {
        if (this.opened == 2) {
            this.margin = "0px";
            this.opened = 0;
        }
    }
    onClosed3() {
        if (this.opened == 3) {
            this.margin = "0px";
            this.opened = 0;
        }
    }
    stateName() {
        return this.show ? 'show' : 'hide';
    }
    toggle() {
        this.show = !this.show;
    }
    navigateToPictures() {
        this.router.navigate(['images']);
    }
    navigateToInfo() {
        this.router.navigate(['info']);
    }
    navigateToCovid() {
        this.router.navigate(['covid']);
    }
    asd() {
        console.log('scrolling');
    }
    onResize(event) {
        let width = event.target.innerWidth;
        if (width <= 500) {
            this.rowHeight = "30vw";
        }
        else {
            this.rowHeight = "15vw";
        }
        switch (this.opened) {
            case 0:
                break;
            case 1:
                let height1 = window.innerWidth / 4 + 400;
                this.margin = height1 + "px";
                break;
            case 2:
                let card1 = document.getElementById('image');
                let height2 = card1.scrollHeight;
                if (height2 < 400) {
                    height2 += ((400 - height2) / 10);
                }
                this.margin = (height2 * 9 + 900) + "px";
                break;
            case 3:
                let card2 = document.getElementById('image');
                let height3 = card2.scrollHeight;
                if (height3 < 400) {
                    height3 += ((400 - height3) / 10);
                }
                this.margin = (height3 * 10 + 800) + "px";
                break;
        }
    }
    scroll(el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll')
], HomeComponent.prototype, "asd", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], HomeComponent.prototype, "onResize", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('popOverState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('hoveredState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('notHovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-20px)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('notHovered => hovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hovered => notHovered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/images/images.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/images/images.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  margin-bottom: 5%;\n  height: auto;\n}\n\n.heading {\n  padding: 2% 5% 2% 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.selectedImageContainer {\n  position: relative;\n  width: 45%;\n  float: left;\n  margin-left: 4%;\n  margin-bottom: 5%;\n}\n\n.selectedImage {\n  border-radius: 2%;\n  width: 100%;\n  height: auto;\n}\n\n.prevButton {\n  position: absolute;\n  float: left;\n  left: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 0px 10% 10% 0px;\n}\n\n.nextButton {\n  position: absolute;\n  float: right;\n  right: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 10% 0px 0px 10%;\n}\n\n.prevButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.nextButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.prevNextImage {\n  opacity: 1;\n  width: 100%;\n  height: 50%;\n  margin-left: 20%;\n}\n\n.subImage {\n  border-radius: 5%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 90%;\n  height: auto;\n}\n\n.imageList {\n  margin-bottom: 5%;\n}\n\n.subImage:hover {\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 25px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n\n.allImages {\n  width: 45%;\n  height: 100%;\n  float: right;\n  margin-bottom: 5%;\n  margin-right: 4%;\n}\n\n@media (max-width: 1000px) {\n  .selectedImageContainer {\n    width: 90%;\n    margin-bottom: 2%;\n  }\n\n  .allImages {\n    width: 90%;\n    margin-right: 6%;\n  }\n\n  .selectedImage {\n    background-size: contain;\n    height: 75%;\n    margin-top: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2ltYWdlcy9DOlxcVXNlcnNcXEpvcmVuXFx0b25nZXJsb0NvZGVcXHNyY1xcYXNzZXRzXFxpbWFnZXNcXGxpbmUtdXAvLi5cXC4uXFwuLlxcYXBwXFxjb21wb25lbnRzXFxpbWFnZXNcXGltYWdlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsb0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLDZFQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RBOztBRElBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsaUJBQUE7RUNETjs7RURJRTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQ0ROOztFRElFO0lBQ0ksd0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIHBhZGRpbmcgOiAyJSA1JSAyJSA1JTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZEltYWdlQ29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZEltYWdle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnByZXZCdXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbG9hdCA6IGxlZnQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDM1JTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjIpO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMCUgMTAlIDBweDtcclxufVxyXG5cclxuLm5leHRCdXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbG9hdCA6IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC4yKTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCUgMHB4IDBweCAxMCU7XHJcbn1cclxuXHJcbi5wcmV2QnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC42KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5leHRCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwLjYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJldk5leHRJbWFnZXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLnN1YkltYWdle1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmltYWdlTGlzdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uc3ViSW1hZ2U6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5hbGxJbWFnZXN7XHJcbndpZHRoOiA0NSU7XHJcbmhlaWdodDogMTAwJTtcclxuZmxvYXQgOiByaWdodDtcclxubWFyZ2luLWJvdHRvbTogNSU7XHJcbm1hcmdpbi1yaWdodDogNCU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGggOiAxMDAwcHgpe1xyXG4gICAgLnNlbGVjdGVkSW1hZ2VDb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWxsSW1hZ2Vze1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2JTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0ZWRJbWFnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5oZWFkaW5nIHtcbiAgcGFkZGluZzogMiUgNSUgMiUgNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLnNlbGVjdGVkSW1hZ2VDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uc2VsZWN0ZWRJbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucHJldkJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAzNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTAlIDEwJSAwcHg7XG59XG5cbi5uZXh0QnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGhlaWdodDogMzAlO1xuICB3aWR0aDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAlIDBweCAwcHggMTAlO1xufVxuXG4ucHJldkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV4dEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJldk5leHRJbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLnN1YkltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZUxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnN1YkltYWdlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFsbEltYWdlcyB7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuc2VsZWN0ZWRJbWFnZUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgfVxuXG4gIC5hbGxJbWFnZXMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA2JTtcbiAgfVxuXG4gIC5zZWxlY3RlZEltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/images/images.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/images/images.component.ts ***!
  \*******************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let ImagesComponent = class ImagesComponent {
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
        this.images = [1, 2, 3, 4, 5];
        this.selectedIndex = 1;
        this.amountCols = 4;
        this.buttonsVisible = true;
        this.selectedImageStyle = { border: 'solid 5px rgb(235, 161, 25)' };
        this.notSelectedImageStyle = {};
        this.title.setTitle("Foto's");
        this.meta.addTag({ name: 'description', content: "bekijk hier alle foto's van eerdere edities van de tongerlse dorpsfeesten." });
        this.meta.addTag({ name: 'keywords', content: "Tongels dorpsfeest foto's, tongelse dorpsfeesten foto's, tongels dorpsfeest gallerij" });
        let width = window.innerWidth;
        if (width <= 500) {
            this.amountCols = 3;
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.setButtonsVisibility();
        });
    }
    ImageSelected(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedIndex = (index + 1);
            yield this.setButtonsVisibility();
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    setButtonsVisibility() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.buttonsVisible = false;
            yield this.delay(300);
            this.buttonsVisible = true;
        });
    }
    nextImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedIndex == this.images.length) {
                this.selectedIndex = 1;
                yield this.setButtonsVisibility();
                return;
            }
            ++this.selectedIndex;
            yield this.setButtonsVisibility();
        });
    }
    prevImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedIndex == 1) {
                this.selectedIndex = this.images.length;
                yield this.setButtonsVisibility();
                return;
            }
            --this.selectedIndex;
            yield this.setButtonsVisibility();
        });
    }
    onResize(event) {
        let width = event.target.innerWidth;
        if (width <= 500) {
            this.amountCols = 3;
        }
        else {
            this.amountCols = 4;
        }
    }
};
ImagesComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], ImagesComponent.prototype, "onResize", null);
ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listStagger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })), {
                        optional: true
                    })
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scale', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => *", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: "scale(0.5)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("300ms cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: "scale(1)" }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./images.component.scss */ "./src/app/components/images/images.component.scss")).default]
    })
], ImagesComponent);



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.toolbarItems a {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n}\n\n.toolbarItems a:hover {\n  text-shadow: 3px 3px 5px #000000;\n}\n\n.sloganSpan {\n  margin-right: 5%;\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 1.5vh;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.logo {\n  height: 75%;\n}\n\nmat-toolbar {\n  height: 100px !important;\n  min-height: 100px !important;\n}\n\n.active-link {\n  font-weight: 900;\n}\n\na {\n  text-decoration: none;\n  color: black !important;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n@media (max-width: 1000px) {\n  mat-toolbar {\n    height: 75px !important;\n    min-height: 75px !important;\n  }\n}\n\n@media (max-width: 500px) {\n  mat-toolbar {\n    height: 50px !important;\n    min-height: 50px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL21haW4tbmF2L0M6XFxVc2Vyc1xcSm9yZW5cXHRvbmdlcmxvQ29kZVxcc3JjXFxhc3NldHNcXGltYWdlc1xcbGluZS11cC8uLlxcLi5cXC4uXFxhcHBcXGNvbXBvbmVudHNcXG1haW4tbmF2XFxtYWluLW5hdi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsMkJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLDJCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvb2xiYXJJdGVtcyBhe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b29sYmFySXRlbXMgYTpob3ZlcntcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA7XG59XG5cbi5zbG9nYW5TcGFue1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDEuNXZoO1xufVxuXG4uc3BhY2Vye1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmxvZ297XG4gIGhlaWdodDogNzUlO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZS1saW5re1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XG4gIG1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b29sYmFySXRlbXMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXJJdGVtcyBhOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA7XG59XG5cbi5zbG9nYW5TcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjV2aDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogNzUlO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBtYXQtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let MainNavComponent = class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/components/main-nav/main-nav.component.scss")).default]
    })
], MainNavComponent);



/***/ }),

/***/ "./src/app/components/practical-info/practical-info.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/practical-info/practical-info.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: 60px 100px 100px 100px;\n  width: 60%;\n  margin-bottom: 75px;\n}\n\n.link {\n  color: black;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.link:hover {\n  font-weight: 600;\n}\n\n.map {\n  height: 400px;\n}\n\n@media (max-width: 900px) {\n  .container {\n    margin: 60px 60px 100px 60px;\n    width: 75%;\n  }\n}\n\n@media (max-width: 500px) {\n  .container {\n    margin: 40px 20px 100px 20px;\n    width: 90%;\n    margin-bottom: 50px;\n  }\n\n  .map {\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3ByYWN0aWNhbC1pbmZvL0M6XFxVc2Vyc1xcSm9yZW5cXHRvbmdlcmxvQ29kZVxcc3JjXFxhc3NldHNcXGltYWdlc1xcbGluZS11cC8uLlxcLi5cXC4uXFxhcHBcXGNvbXBvbmVudHNcXHByYWN0aWNhbC1pbmZvXFxwcmFjdGljYWwtaW5mby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3ByYWN0aWNhbC1pbmZvL3ByYWN0aWNhbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxnQkFBQTtBQ0NSOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLFVBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ0ROOztFREdFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNBTjtBQUNGIiwiZmlsZSI6Ii4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3ByYWN0aWNhbC1pbmZvL3ByYWN0aWNhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDYwcHggMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFwIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTAwcHgpe1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiA2MHB4IDYwcHggMTAwcHggNjBweDtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjUwMHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogNDBweCAyMHB4IDEwMHB4IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNjBweCAxMDBweCAxMDBweCAxMDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWJvdHRvbTogNzVweDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saW5rOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1hcCB7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDYwcHggNjBweCAxMDBweCA2MHB4O1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDQwcHggMjBweCAxMDBweCAyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/practical-info/practical-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/practical-info/practical-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: PracticalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticalInfoComponent", function() { return PracticalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PracticalInfoComponent = class PracticalInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PracticalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-practical-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./practical-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./practical-info.component.scss */ "./src/app/components/practical-info/practical-info.component.scss")).default]
    })
], PracticalInfoComponent);



/***/ }),

/***/ "./src/app/components/tvh/tvh.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/tvh/tvh.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\na {\n  text-decoration: none;\n  color: black;\n  font-weight: bolder;\n  margin-left: 2%;\n}\n\na:hover {\n  font-size: 2vh;\n}\n\n.link {\n  margin-left: 2%;\n  color: #b1b1b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3R2aC9DOlxcVXNlcnNcXEpvcmVuXFx0b25nZXJsb0NvZGVcXHNyY1xcYXNzZXRzXFxpbWFnZXNcXGxpbmUtdXAvLi5cXC4uXFwuLlxcYXBwXFxjb21wb25lbnRzXFx0dmhcXHR2aC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3R2aC90dmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6Ii4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3R2aC90dmguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbmE6aG92ZXIge1xuICBmb250LXNpemU6IDJ2aDtcbn1cblxuLmxpbmsge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGNvbG9yOiAjYjFiMWIxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/tvh/tvh.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tvh/tvh.component.ts ***!
  \*************************************************/
/*! exports provided: TvhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvhComponent", function() { return TvhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let TvhComponent = class TvhComponent {
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
        this.title.setTitle("TVH");
        this.meta.addTag({ name: 'description', content: "De Tongelse Dorpsfeesten zijn ontstaan in 1987. Het wordt georganiseerd door een comite dat bestaat uit 6 personen." });
        this.meta.addTag({ name: 'keywords', content: "Tongelse Dorpsfeesten, organisatoren, tvh, oprichters" });
    }
    ngOnInit() {
        this.groups = [{ name: "HSV", link: "https://www.facebook.com/pages/category/Soccer-Field/HSV-Tongerlo-832768450409166/", show: false },
            { name: "FIEN BOYS", link: "http://fienboys.be/", show: false },
            { name: "KFC TONGERLO", link: "https://www.kfctongerlo.be/", show: false },
            { name: "CHIRO", link: "http://www.chirotongerlo.be/", show: false },
            { name: "KLJ", link: "http://kljtongerlo.be/", show: false },
            { name: "LANDELIJKE GILDE", link: "http://www.lgtongerlo.be/", show: false },
            { name: "VOLLEY WESTERLO", link: "https://www.volleywesterlo.be/", show: false },
            { name: "T-BLAZERS", link: "https://www.facebook.com/fanfareTblazers/", show: false },
            { name: "KKSVWO", link: "https://www.kksvwo.be/", show: false }
        ];
    }
    stateName(i) {
        return this.groups[i].show ? 'show' : 'hide';
    }
    toggle(i) {
        this.groups[i].show = !this.groups[i].show;
    }
};
TvhComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }
];
TvhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tvh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tvh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listStagger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })), {
                        optional: true
                    })
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('popOverState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('600ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tvh.component.scss */ "./src/app/components/tvh/tvh.component.scss")).default]
    })
], TvhComponent);



/***/ }),

/***/ "./src/app/features/fade-in/fade-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/fade-in/fade-in.component.ts ***!
  \*******************************************************/
/*! exports provided: FadeInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeInComponent", function() { return FadeInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



const style1 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
    opacity: 1
});
const style2 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
    opacity: 0
});
let FadeInComponent = class FadeInComponent {
    constructor(el) {
        this.el = el;
        this.state = 'hide';
    }
    ngOnChanges(changes) {
        if (changes.scrollEvent) {
            const componentPosition = this.el.nativeElement.offsetTop;
            const scrollPosition = window.pageYOffset;
            if (scrollPosition >= componentPosition - 250) {
                this.state = 'show';
            }
            else {
                this.state = 'hide';
            }
        }
    }
};
FadeInComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FadeInComponent.prototype, "scrollEvent", void 0);
FadeInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fade-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fade-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('foobar', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', style1),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', style2),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in'))
            ])
        ]
    })
], FadeInComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pipes/limitStringPipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/limitStringPipe.ts ***!
  \******************************************/
/*! exports provided: LimitStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitStringPipe", function() { return LimitStringPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LimitStringPipe = class LimitStringPipe {
    transform(text) {
        if (text.length > 50) {
            text = text.slice(0, 50) + "...";
        }
        return text;
    }
};
LimitStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'stringlimit' })
], LimitStringPipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Joren\tongerloCode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map