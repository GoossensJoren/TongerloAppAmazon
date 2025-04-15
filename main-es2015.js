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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n<p class=\"title\">Kerstconcert</p>\r\n<p class=\"info\">Naast het dorpsfeest in mei organiseert Tongerlo Leeft ! ook elk jaar in december een openlucht Kerst-Rock-Concert. In principe steeds op de vrijdagavond aan het begin van het kerstverlof.\r\n    Een fijne start van de feestdagen met live muziek, glühwein en jenever, vuurkorven, soep en warme choco, kerstmutsen en pintjes op buitentemperatuur.</p>\r\n\r\n    <div class=\"tempWarning\">\r\n        <img src=\"../../../assets/images/error.png\" class=\"warnImage\"/>\r\n        <p class=\"warnText\">\r\n            Het kerstconcert zal dit jaar niet kunnen doorgaan door het corona-virus\r\n        </p>\r\n    </div>\r\n\r\n<div class=\"flyerImg\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"12\">\r\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n      <agm-info-window [isOpen]=true>\r\n\r\n        <div>\r\n            <p class=\"infoWindowTitle\">LOCATIE :</p>\r\n            <p>Tongerlodorp 2260 Tongerlo, Antwerpen, België</p>\r\n        </div>\r\n\r\n    </agm-info-window>\r\n    </agm-marker>\r\n</agm-map>\r\n\r\n<form class=\"form\" [formGroup]=\"myForm\" #contactForm=\"ngForm\">\r\n    <mat-form-field appearance=\"outline\" class=\"name\">\r\n        <mat-label>naam</mat-label>\r\n        <input matInput placeholder=\"naam\" type=\"text\" formControlName=\"name\">\r\n        <mat-error *ngIf=\"myForm.get('name').hasError('required')\">\r\n            Dit veld is verplicht\r\n          </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field appearance=\"outline\" class=\"mail\">\r\n        <mat-label>e-mail</mat-label>\r\n        <input matInput placeholder=\"e-mail\" type=\"email\" formControlName=\"mail\">\r\n        <mat-error *ngIf=\"myForm.get('mail').hasError('email') && !myForm.get('mail').hasError('required')\">\r\n            Gelieve een geldig e-mailadres in te vullen\r\n          </mat-error>\r\n          <mat-error *ngIf=\"myForm.get('mail').hasError('required')\">\r\n            Dit veld is verplicht\r\n          </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>vraag aan</mat-label>\r\n        <mat-select formControlName=\"organisation\">\r\n            <mat-option value=\"option1\">Organisatie Comité</mat-option>\r\n            <mat-option value=\"option2\">Webmaster</mat-option>\r\n          </mat-select>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-form-field appearance=\"outline\" class=\"mail\">\r\n        <mat-label>Vraag of opmerking</mat-label>\r\n        <textarea rows=\"5\" matInput placeholder=\"Opmerking\" formControlName=\"question\"></textarea>\r\n        <mat-error *ngIf=\"myForm.get('question').hasError('required')\">\r\n            Dit veld is verplicht\r\n          </mat-error>\r\n    </mat-form-field>\r\n    <br/>\r\n    <div class=\"submitLoaderContainer\">\r\n    <button mat-raised-button type=\"submit\" (click)=\"submit(contactForm)\" [disabled]=\"!myForm.valid || !enabled\" class=\"submitButton\">verstuur</button>\r\n    <mat-spinner [diameter]=\"30\" class=\"spinner\" *ngIf=\"loading\"></mat-spinner>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footerContainer\">\r\n    <div class=\"logo\"></div>\r\n   <div (click)=\"redirect()\" class=\"fbLogo\"></div>\r\n    <p class=\"copyright\">@2020 TVH</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"topImage\">\r\n    <div class=\"mainText\">\r\n        <h1>Tongels Dorpsfeest 2025</h1>\r\n        <h2>9, 10 en & 11 mei</h2>\r\n    </div>\r\n</header>\r\n<mat-grid-list cols=\"4\" rowHeight=\"{{rowHeight}}\" (window:resize)=\"onResize($event)\" class=\"navContainer\">\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(info)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/feast.png\" alt=\"Info\" />\r\n            </div>\r\n            <p class=\"navInfo\">Nieuws</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(lineup)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/lineup.png\" alt=\"Line Up\" />\r\n            </div>\r\n            <p class=\"navInfo\">Programma</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(gallery)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/photo.png\" alt=\"Foto's\" />\r\n            </div>\r\n            <p class=\"navInfo\">Foto's</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile>\r\n        <div class=\"navigationDiv\">\r\n            <div class=\"navigationImg\" (click)=\"scroll(sponsors)\">\r\n                <img class=\"linkImg\" src=\"../../../assets/images/sponsor.png\" alt=\"Sponsors\" />\r\n            </div>\r\n            <p class=\"navInfo\">Sponsors</p>\r\n        </div>\r\n    </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n<div class=\"infoDiv\" #info id=\"info\">\r\n    <div class=\"infoText\">\r\n        <p class=\"infoTitle\">Tongels Dorpsfeest 2025</p>\r\n        <p>Het 38e Tongels Dorpsfeest zal dit jaar doorgaan op vrijdag 9, zaterdag 10 & zondag 11 mei 2025. Vrijdag bedraagt de inkomprijs €5, zaterdag €15 en zondag is de toegang gratis.</p>\r\n        <div class=\"info-buttons\">\r\n            <div class=\"info-button\" (click)=\"navigateToInfo()\">Praktische info</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"infoImage\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"lineupDiv\" #lineup>\r\n    <div class=\"imagePdfContainer\">\r\n        <div class=\"lineupImage\"></div>\r\n        <a *ngIf=\"false\" href=\"../../../assets/files/Line-Up.pdf\" download>\r\n            <div class=\"pdfButton\" (mouseover)=\"onHovered()\" (mouseleave)=\"onHovered()\"><img\r\n                    src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\r\n                <p class=\"downloadText\" [@hoveredState]=\"state\">download line up</p>\r\n            </div>\r\n        </a>\r\n    </div>\r\n    <div class=\"lineupText\">\r\n        <p class=\"lineupTitle\">Programma</p>\r\n        <mat-accordion>\r\n            <mat-expansion-panel (opened)=\"onExpand1()\" (afterCollapse)=\"onClosed1()\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <i class=\"material-icons\">\r\n                            date_range\r\n                        </i>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Vrijdag 9 mei\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <p class=\"location\">TENTFUIF</p>\r\n                <mat-card>\r\n                    <mat-card-title>50 SHADES</mat-card-title>\r\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/50 Shades.jpg\" alt=\"Photo of 50 SHADES\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>JOHAN VEUGELERS</mat-card-title>\r\n                    <mat-card-subtitle>23h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Johan Veugelers.png\" alt=\"Photo of JOHAN VEUGELERS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>PAT KRIMSON</mat-card-title>\r\n                    <mat-card-subtitle>00h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Pat Krimson.jpg\" alt=\"Photo of PAT KRIMSON\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>MICHAEL SCHACK</mat-card-title>\r\n                    <mat-card-subtitle>01h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Michael Schack.jpg\" alt=\"Photo of MICHAEL SCHACK\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>DB DISCOVID</mat-card-title>\r\n                    <mat-card-subtitle>02h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Discovid.jpg\" alt=\"Photo of DB DISCOVID\">\r\n                </mat-card>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"onExpand2()\" (afterCollapse)=\"onClosed2()\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <i class=\"material-icons\">\r\n                            date_range\r\n                        </i>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Zaterdag 10 mei\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <p class=\"location\">B&C TECHNICS STAGE</p>\r\n                <mat-card>\r\n                    <mat-card-title>MAF</mat-card-title>\r\n                    <mat-card-subtitle>18h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/MAF Logo.png\" alt=\"Photo of MAF\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>TIJS VANNESTE & DE PARADIJSVOGELS</mat-card-title>\r\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\r\n                    <img id=\"image\" mat-card-image src=\"../../../assets/images/line-up/Tijs Vanneste & De Paradijsvogels.jpg\"\r\n                        alt=\"Photo of TIJS VANNESTE & DE PARADIJSVOGELS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>RADIO RONNY & TONNY</mat-card-title>\r\n                    <mat-card-subtitle>23h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Ronny & Tonny.jpg\"\r\n                        alt=\"Photo of RADIO RONNY & TONNY \">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>RONNY RETRO</mat-card-title>\r\n                    <mat-card-subtitle>00:15</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Ronny Retro.jpg\"\r\n                        alt=\"Photo of RONNY RETRO\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>SYLVER</mat-card-title>\r\n                    <mat-card-subtitle>01:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/sylver-persfoto.jpg\"\r\n                        alt=\"Photo of SYLVER\">\r\n                </mat-card>\r\n                <p class=\"location\">MERCEDES VDH STAGE</p>\r\n                <mat-card>\r\n                    <mat-card-title>FLASHMATIC & THE SPACE COMMANDERS</mat-card-title>\r\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Flashmatic & The Space Commanders.jpg\"\r\n                        alt=\"Photo of FLASHMATIC & THE SPACE COMMANDERS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>BOENK EROEP</mat-card-title>\r\n                    <mat-card-subtitle>20h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Boenk Eroep.jpg\"\r\n                        alt=\"Photo of BOENK EROEP\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>THE TRAMPLERS</mat-card-title>\r\n                    <mat-card-subtitle>23:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Tramplers.jpg\" alt=\"Photo of THE TRAMPLERS\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HIGH LEVEL</mat-card-title>\r\n                    <mat-card-subtitle>01:30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/High Level.jpg\" alt=\"Photo of HIGH LEVEL\">\r\n                </mat-card>\r\n                <p class=\"location\">TENTFUIF</p>\r\n                <mat-card>\r\n                    <mat-card-title>SENNE</mat-card-title>\r\n                    <mat-card-subtitle>21:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Senne.jpg\" alt=\"Photo of SENNE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>MCALISTER</mat-card-title>\r\n                    <mat-card-subtitle>23:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/McAlister.png\" alt=\"Photo of MCALISTER\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>CALLE</mat-card-title>\r\n                    <mat-card-subtitle>00:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Calle.jpg\" alt=\"Photo of CALLE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HATTRICK</mat-card-title>\r\n                    <mat-card-subtitle>01:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Hattrick.jpg\" alt=\"Photo of HATTRICK\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>FRENKY</mat-card-title>\r\n                    <mat-card-subtitle>02:00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Frenky.jpg\" alt=\"Photo of FRENKY\">\r\n                </mat-card>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"onExpand3()\" (afterCollapse)=\"onClosed3()\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <i class=\"material-icons\">\r\n                            date_range\r\n                        </i>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Zondag 11 mei\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <p class=\"location\">B&C Technics Podium</p>\r\n                <mat-card>\r\n                    <mat-card-title>SHAKE</mat-card-title>\r\n                    <mat-card-subtitle>13h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Shake.png\" alt=\"Photo of SHAKE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HET SHOWORKEST & BARBARA DEX</mat-card-title>\r\n                    <mat-card-subtitle>16h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Barbara Dex.jpg\"\r\n                        alt=\"Photo of HET SHOWORKEST & BARBARA DEX\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>METTE-MARIE</mat-card-title>\r\n                    <mat-card-subtitle>19h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Mette-Marie.jpg\" alt=\"Photo of METTE-MARIE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>THE OLD FARTS</mat-card-title>\r\n                    <mat-card-subtitle>22h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/The Old Farts.jpg\" alt=\"Photo of THE OLD FARTS\">\r\n                </mat-card>\r\n                <p class=\"location\">MERCEDES VDH STAGE</p>\r\n                <mat-card>\r\n                    <mat-card-title>PRINS JR. BAND</mat-card-title>\r\n                    <mat-card-subtitle>15h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/PrinsJrBand.jpg\"\r\n                        alt=\"Photo of PRINS JR. BAND\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>HARDDAY @ THEOFFICE</mat-card-title>\r\n                    <mat-card-subtitle>18h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Hard Day At The Office.jpg\"\r\n                        alt=\"Photo of HARDDAY @ THEOFFICE\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>TRAINBILLS</mat-card-title>\r\n                    <mat-card-subtitle>21h00</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Trainbills.jpg\"\r\n                        alt=\"Photo of TRAINBILL\">\r\n                </mat-card>\r\n                <mat-card>\r\n                    <mat-card-title>DB WA KLEUR HEE AAVEN TRAKTEUR?!</mat-card-title>\r\n                    <mat-card-subtitle>23h30</mat-card-subtitle>\r\n                    <img mat-card-image src=\"../../../assets/images/line-up/Wa Kleur Hee Aaven Trakteur Zondag.jpg\"\r\n                        alt=\"Photo of Wa Kleur Hee Aaven Trakteur\">\r\n                </mat-card>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n        <a *ngIf=\"false\" href=\"../../../assets/files/Line-Up.pdf\" download>\r\n            <div class=\"pdfButton2\"><img src=\"../../../assets/images/pdf.png\" class=\"pdfImage\" />\r\n                <p class=\"downloadText\">download line up</p>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div [style.height]=\"margin\"></div>\r\n\r\n<div class=\"imagesDiv\" #gallery>\r\n    <div class=\"imagesHeading\">\r\n        <p class=\"imagesTitle\">Foto's</p>\r\n        <p>Bekijk hier de foto's van voorgaande edities</p>\r\n    </div>\r\n    <div class=\"imageContainer\">\r\n        <img src=\"../../../assets/images/play.png\" class=\"playButton\" [@popOverState]=\"stateName()\"\r\n            (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\" (click)=\"navigateToPictures()\" />\r\n        <img src=\"../../../assets/images/gallery/5.jpg\" class=\"imageLink\" (mouseover)=\"toggle()\" (mouseleave)=\"toggle()\"\r\n            (click)=\"navigateToPictures()\" />\r\n    </div>\r\n</div>\r\n\r\n<div class=\"sponsorsDiv\" #sponsors>\r\n    <p class=\"sponsorTitle\">sponsors</p>\r\n    <div class=\"sponsors\">\r\n        <div class=\"row justify-content-md-center all-sponsors\">\r\n            <img src=\"../../../assets/images/sponsors/sponsors1.png\"/>\r\n        </div>\r\n        <div class=\"row justify-content-md-center all-sponsors\">\r\n            <img src=\"../../../assets/images/sponsors/sponsors2.png\"/>\r\n        </div>\r\n        <!-- <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-2\" ><img src=\"../../../assets/images/sponsors/sponsor1.1.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.2.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.3.png\" class=\"sponsor1\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.4.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.5.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.6.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.7.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.8.png\" class=\"sponsor1\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.9.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.10.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.11.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.12.png\" class=\"sponsor1\"/></div>\r\n            <div class=\"col-2\"><img src=\"../../../assets/images/sponsors/sponsor1.13.png\" class=\"sponsor1\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.1.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.2.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.3.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.4.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.5.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.6.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.7.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.8.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.9.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.10.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.11.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.12.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.13.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.14.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.15.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.16.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.17.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.18.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.19.png\" class=\"sponsor2\"/></div>\r\n            <div class=\"custom-col-1-5\"><img src=\"../../../assets/images/sponsors/sponsor2.20.png\" class=\"sponsor2\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.1.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.2.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.3.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.4.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.5.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.6.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.7.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.8.png\" class=\"sponsor3\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.9.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.10.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.11.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.12.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.13.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.14.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.15.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.16.png\" class=\"sponsor3\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.17.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.18.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.19.png\" class=\"sponsor3\"/></div>\r\n            <div class=\"custom-col-1-2\"><img src=\"../../../assets/images/sponsors/sponsor3.20.png\" class=\"sponsor3\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.1.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.2.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.3.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.4.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.5.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.6.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.7.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.8.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.9.png\" class=\"sponsor4\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor4.10.png\" class=\"sponsor4\"/></div>\r\n        </div>\r\n        <div class=\"row justify-content-md-center\">\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.1.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.2.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.3.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.4.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.5.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.6.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.7.png\" class=\"sponsor5\"/></div>\r\n            <div class=\"col-1\"><img src=\"../../../assets/images/sponsors/sponsor5.8.png\" class=\"sponsor5\"/></div>\r\n        </div>\r\n        <div class=\"row sponsor-names\">SND Sound & Light &#8227; Kineteam &#8227; Heracles &#8227; Haarstudio Marleen &#8227; Van Hove Begrafenissen &#8227; Bakkerij De Becker &#8227; Hadebo &#8227; Keurslager David &#8227; Foto Karel &#8227; Het Houten Huizeke &#8227; De Broodkruimel &#8227; Beauty Art &#8227; Slagerij Marleen & Co &#8227; Kapsalon Mabo &#8227; 't Kippefestijntje &#8227; Dakwerken Daneels &#8227; KeapSolutions &#8227; De verzekeringswinkel &#8227; Dave's Hairstudio</div> -->\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/images/images.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" (window:resize)=\"onResize($event)\">\r\n    <div class=\"heading\">\r\n        <p class=\"title\">Foto's</p>\r\n        <p class=\"description\">Bekijk hier al de foto's van eerdere edities</p>\r\n    </div>\r\n    <div class=\"selectedImageContainer\">\r\n        <div class=\"prevButton\" (click)=\"prevImage()\" *ngIf=\"buttonsVisible\">\r\n            <img class=\"prevNextImage\" src=\"../../../assets/images/backArrow.png\">\r\n        </div>\r\n        <div class=\"nextButton\" (click)=\"nextImage()\" *ngIf=\"buttonsVisible\">\r\n            <img class=\"prevNextImage\" src=\"../../../assets/images/NextArrow.png\">\r\n        </div>\r\n        <div *ngFor=\"let image of images; let i = index\">\r\n        <img class=\"selectedImage\" @scale [src]=\"'../../../assets/images/gallery/' + (i+1) +'.jpg'\" (swiperight)=\"nextImage()\" (swipeleft)=\"prevImage()\" *ngIf=\"(i+1) == selectedIndex\"/>\r\n        </div>\r\n    </div>\r\n    <div class=\"allImages\">\r\n        <mat-grid-list [cols]=\"amountCols\" [@listStagger]='images.length' class=\"imageList\">\r\n            <mat-grid-tile *ngFor=\"let image of images; let i = index\">\r\n                <img class=\"subImage\" [ngStyle]=\"((i + 1) == selectedIndex) ? selectedImageStyle : notSelectedImageStyle\" [src]=\"'../../../assets/images/gallery/' + (i+1) +'.jpg'\" (click)=\"ImageSelected(i);\"/>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\"\r\n      [ngClass]=\"{hidden: (isHandset$ | async) === false}\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"(isHandset$ | async) === false\"\r\n      position=\"end\">\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item [routerLink]=\"['/home']\">Home</a>\r\n      <a mat-list-item [routerLink]=\"['/images']\">Foto's</a>\r\n      <a mat-list-item [routerLink]=\"['/info']\">Praktische Info</a>\r\n      <a mat-list-item [routerLink]=\"['/concert']\">Kerstconcert</a>\r\n      <a mat-list-item [routerLink]=\"['/tongerloleeft']\">Tongerlo Leeft</a>\r\n      <a mat-list-item [routerLink]=\"['/contact']\">Contact</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <img class=\"logo\" src=\"../../../assets/images/logo.png\"/>\r\n      <span class=\"spacer\"></span>\r\n      <p class=\"sloganSpan\" [ngClass]=\"{hidden: (isHandset$ | async) === false}\">Tongerlo leeft!</p>\r\n      <div class=\"toolbarItems\" [ngClass]=\"{hidden: (isHandset$ | async) === true}\">\r\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"active-link\">Home</a>\r\n        <a [routerLink]=\"['/images']\" routerLinkActive=\"active-link\">Foto's</a>\r\n        <a [routerLink]=\"['/info']\" routerLinkActive=\"active-link\">Praktische Info</a>\r\n        <a [routerLink]=\"['/concert']\" routerLinkActive=\"active-link\">Kerstconcert</a>\r\n        <a [routerLink]=\"['/tongerloleeft']\" routerLinkActive=\"active-link\">Tongerlo Leeft</a>\r\n        <a [routerLink]=\"['/contact']\" routerLinkActive=\"active-link\">Contact</a>\r\n      </div>\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/practical-info/practical-info.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h2>Praktische info</h2>\r\n    <h3>Inkom</h3>\r\n    <p>Het terein is te betreden via 3 inkoms:</p>\r\n    <ul>\r\n        <li>Kruispunt Geelsestraat/Kerkplein/Abdijstraat</li>\r\n        <li>Langstraat</li>\r\n        <li>Lange Nieuwstraat</li>\r\n    </ul>\r\n    <p>Deze zijn op zaterdag geopend vanaf 16h en zondag vanaf 13h. Indien er aan een bepaalde inkom een te lange wachtrij staat, kan je altijd bij een andere ingang proberen. Inkom Langstraat en inkom Lange Nieuwstraat zijn meestal het minst druk.</p>\r\n    <p>De inkom kan enkel contant betaald worden.</p>\r\n    <p>Voor je eigen veiligheid zullen er bewakingsagenten aanwezig zijn op het terrein. Zij hebben het recht om controles uit te voeren. Bij verzet of weigering kan de toegang ontzegd worden.</p>\r\n    <p>Door het betreden van het festivalterrein geef je als bezoeker stilzwijgend toestemming aan de organisatie om (audio-)visuele opnames te maken.</p>\r\n    <h3>Geen vestiare</h3>\r\n    <p>Er is geen vestiaire op het terrein. Spullen achterlaten gebeurt op eigen verantwoordelijkheid.</p>\r\n    <h3>Drankjetons</h3>\r\n    <p>Drankjetons kunnen zowel contant als met bankkaart gekocht worden aan onze kassa’s. Deze jetons worden niet terugbetaald. Vrijdag zullen er andere jetons gebruikt worden dan zaterdag en zondag.</p>\r\n    <h3>Milieu</h3>\r\n    <p>We proberen zoveel mogelijk afval te sorteren. Werp daarom plastiek bekers in de daarvoor voorziene plaatsen. Uitdelen van flyers kan op ons festival terrein niet toegestaan worden.</p>\r\n    <h3>Toiletten</h3>\r\n    <p>Er zijn ruim voldoende en aangepaste toiletten op het terrein. Deze zijn gratis te gebruiken. We verwachten dat alle toiletten proper achter gelaten worden. Gelieve enkel de toiletten te gebruiken en nergens tegen omheiningen of gebouwen te urineren.</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tvh/tvh.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n<p class=\"title\">Tongerlo Leeft!</p>\r\n<p>In 1987 werd “Tongels Dorpsfeest\" opgericht door Jan Michiels, die samen met Erik van Eynde en Willy Van Eysendeyk -allen actief in het verenigingsleven- een nieuw openluchtfeest wilden organiseren. Dit ter vervanging van de ter ziele gegane lichtstoet in de jaren 60.</p>\r\n<P>Sinds vele jaren wordt het “Tongels Dorpsfeest” georganiseerd door ‘Tongerlo Leeft’ : een groep van tien echte Tongelse verenigingen.</P>\r\n<p>Het zijn deze sport-, culturele en jeugdverenigingen die telkens 2 personen afvaardigen op de maandelijkse vergaderingen en die beslissen over het concept en de organisatie van het dorpsfeest.</p>\r\n<p>Ook de samenwerking met onze lokale en regionale sponsors blijft een onmiskenbaar gegeven om sociale consumptie-en toegangsprijzen samen met een sfeervol programma mogelijk te maken.</p>\r\n<p class=\"title\">DEELNEEMENDE VERENGINGEN</p>\r\n<p>Organisatiecomité met deelnemende Tongelse verenigingen voor het 38 ste Tongels Dorpsfeest op vrijdag 9, zaterdag 10 en zondag 11 mei 2025:</p>\r\n<mat-list [@listStagger]='groups.length' class=\"groups\">\r\n    <mat-list-item *ngFor=\"let group of groups; let i = index \" class=\"group\">\r\n      <i class=\"material-icons\">\r\n        play_arrow\r\n        </i>\r\n      <a *ngIf=\"group.link else withoutLink\" class=\"group\" [href]=\"group.link\" (mouseover)=\"toggle(i)\" (mouseleave)=\"toggle(i)\">{{group.name}}</a>\r\n      <ng-template #withoutLink><p class=\"group\">{{group.name}}</p></ng-template>\r\n      <p *ngIf=\"group.link\" class=\"link\" [@popOverState]=\"stateName(i)\">->{{group.link | stringlimit}}</p>\r\n</mat-list-item>\r\n</mat-list>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/fade-in/fade-in.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@foobar]=\"state\">\r\n    <ng-content></ng-content>\r\n</div>");

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
    { path: "tongerloleeft", component: _components_tvh_tvh_component__WEBPACK_IMPORTED_MODULE_6__["TvhComponent"] },
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.flyerImg {\n  background-image: url('flyer.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 40vh;\n  width: 40vh;\n  margin-top: 5%;\n}\n\n@media (max-width: 500px) {\n  .flyerImg {\n    width: 100%;\n  }\n}\n\n@media (max-width: 700px) {\n  .tempWarning {\n    height: 15vh;\n  }\n\n  .warnImage {\n    width: auto;\n    height: 50%;\n    margin-right: 20px;\n  }\n}\n\n.tempWarning {\n  height: 10vh;\n  margin: 5%;\n  border: solid 3px #f5df1d;\n  border-radius: 20px;\n  background-color: #fdfd94;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.warnText {\n  font-size: 2vh;\n}\n\n.warnImage {\n  width: auto;\n  height: 65%;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25jZXJ0L0M6XFxwcm9qZWN0c1xcdG9uZ2VybG9Db2RlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb25jZXJ0XFxjb25jZXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbmNlcnQvY29uY2VydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksWUFBQTtFQ0FOOztFREdFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25jZXJ0L2NvbmNlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4uZmx5ZXJJbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mbHllci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB3aWR0aDogNDB2aDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAuZmx5ZXJJbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIC50ZW1wV2FybmluZ3tcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLndhcm5JbWFnZXtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZW1wV2FybmluZ3tcclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMjQ1LCAyMjMsIDI5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTMsIDE0OCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLndhcm5UZXh0e1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbn1cclxuXHJcbi53YXJuSW1hZ2V7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG5cbi5mbHllckltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZseWVyLnBuZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogNDB2aDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmx5ZXJJbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnRlbXBXYXJuaW5nIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gIH1cblxuICAud2FybkltYWdlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi50ZW1wV2FybmluZyB7XG4gIGhlaWdodDogMTB2aDtcbiAgbWFyZ2luOiA1JTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2Y1ZGYxZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmQ5NDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi53YXJuVGV4dCB7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ud2FybkltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjUlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 40vh;\n}\n\nmat-form-field {\n  margin-bottom: 1vh;\n}\n\n.form {\n  padding: 4% 10% 10% 10%;\n  width: 80%;\n}\n\n.mail {\n  width: 40%;\n}\n\n.name {\n  width: 20%;\n}\n\n.infoWindowTitle {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 1.7vh;\n}\n\n.submitLoaderContainer {\n  width: 20%;\n}\n\n.submitButton {\n  width: 75%;\n  float: left;\n}\n\n.spinner {\n  float: right;\n}\n\n@media (max-width: 1000px) {\n  .mail {\n    width: 80%;\n  }\n\n  .name {\n    width: 50%;\n  }\n\n  .submitLoaderContainer {\n    width: 40%;\n  }\n}\n\n@media (max-width: 500px) {\n  .mail {\n    width: 100%;\n  }\n\n  .name {\n    width: 100%;\n  }\n\n  .submitLoaderContainer {\n    width: 55%;\n    margin-bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxwcm9qZWN0c1xcdG9uZ2VybG9Db2RlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJO0lBQ0ksVUFBQTtFQ0VOOztFRENFO0lBQ0ksVUFBQTtFQ0VOOztFREFFO0lBQ0ksVUFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSTtJQUNJLFdBQUE7RUNFTjs7RURDRTtJQUNJLFdBQUE7RUNFTjs7RURBRTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmc6NCUgMTAlIDEwJSAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmluZm9XaW5kb3dUaXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43dmg7XHJcbn1cclxuXHJcbi5zdWJtaXRMb2FkZXJDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uc3VibWl0QnV0dG9ue1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc3Bpbm5lcntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgLm1haWx7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hbWV7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zdWJtaXRMb2FkZXJDb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLm1haWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYW1le1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdExvYWRlckNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIH1cclxufSIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDQlIDEwJSAxMCUgMTAlO1xuICB3aWR0aDogODAlO1xufVxuXG4ubWFpbCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmluZm9XaW5kb3dUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDEuN3ZoO1xufVxuXG4uc3VibWl0TG9hZGVyQ29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnN1Ym1pdEJ1dHRvbiB7XG4gIHdpZHRoOiA3NSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc3Bpbm5lciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubWFpbCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLnN1Ym1pdExvYWRlckNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5tYWlsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zdWJtaXRMb2FkZXJDb250YWluZXIge1xuICAgIHdpZHRoOiA1NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICB9XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".fbLogo {\n  background-image: url('facebook.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 4vh;\n  width: 4vh;\n}\n\n.fbLogo:hover {\n  cursor: pointer;\n}\n\n.logo {\n  width: 100%;\n  height: 10vh;\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-bottom: 2vh;\n}\n\n.footerContainer {\n  background-color: rgba(245, 245, 245, 0.733);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 25vh;\n  width: 100%;\n  position: relative;\n  bottom: 0px;\n}\n\n@media (max-width: 500px) {\n  .logo {\n    margin-top: 2vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXHByb2plY3RzXFx0b25nZXJsb0NvZGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxlQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYkxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNHZoO1xyXG4gICAgd2lkdGg6IDR2aDtcclxufVxyXG5cclxuLmZiTG9nbzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbn1cclxuXHJcbi5mb290ZXJDb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNzMzKTtcclxuICAgIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIH1cclxufSIsIi5mYkxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0dmg7XG4gIHdpZHRoOiA0dmg7XG59XG5cbi5mYkxvZ286aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xufVxuXG4uZm9vdGVyQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjczMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDI1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgfVxufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep mat-expansion-panel > .mat-expansion-panel-content > .mat-expansion-panel-body {\n  text-align: center;\n}\n\n.tempWarning {\n  height: 10vh;\n  margin: 5%;\n  border: solid 3px #f5df1d;\n  border-radius: 20px;\n  background-color: #fdfd94;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.warnText {\n  font-size: 2vh;\n}\n\n.warnImage {\n  width: auto;\n  height: 65%;\n  margin-right: 20px;\n}\n\n.topImage {\n  margin-top: 0px;\n  background-image: url('tongerloMainImage.jpg');\n  background-repeat: no-repeat;\n  position: top center;\n  background-size: 100%;\n  z-index: 3;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5% 0% 2% 0%;\n}\n\nmat-expansion-panel {\n  margin-bottom: 1vh;\n}\n\n.mainText {\n  padding: 5%;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  text-align: center;\n}\n\nh1 {\n  font-size: 3vw;\n  color: white;\n}\n\nh2 {\n  font-size: 1.5vw;\n  color: #edeae9;\n}\n\n.navContainer {\n  margin-top: 5vh;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.linkImg {\n  height: 6vw;\n}\n\n.navigationImg {\n  width: 10vw;\n  height: 10vw;\n  border-radius: 50%;\n  background-color: lightgray;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.navigationImg:hover {\n  background-color: #7c7a7a;\n  cursor: pointer;\n}\n\n.navigationDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.navInfo {\n  font-size: 1.5vw;\n  font-family: sans-serif;\n}\n\n.infoDiv {\n  height: 50vh;\n  background-color: #eeecec;\n  margin-top: 5vh;\n  width: 100%;\n}\n\n.infoText {\n  float: left;\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5%;\n}\n\n.infoImage {\n  background-image: url('tongerloInfo.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 40%;\n  height: 100%;\n  float: right;\n}\n\n.infoTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n  padding-bottom: 1vh;\n  border-bottom: black solid 2px;\n}\n\n.lineupDiv {\n  padding-top: 60px;\n  width: 90%;\n  margin-left: 10%;\n  height: 30%;\n}\n\nmat-panel-title {\n  flex-basis: 0;\n}\n\nmat-panel-description {\n  margin-left: 5%;\n  flex-basis: 100%;\n  color: black;\n  font-weight: 800;\n}\n\n.location {\n  margin-bottom: 5vh;\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.lineupText {\n  width: 50%;\n  margin-right: 10%;\n  display: block;\n  float: right;\n  height: 20% !important;\n}\n\n.imagePdfContainer {\n  width: 30%;\n  height: 100%;\n  float: left;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.pdfButton, .pdfButton2 {\n  height: 40px;\n  width: 250px;\n  border: solid 1px black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: middle;\n  margin-top: 4%;\n  padding: 1%;\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.pdfButton2 {\n  visibility: hidden;\n}\n\n.pdfButton:hover, .pdfButton2:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.pdfImage {\n  width: auto;\n  height: 100%;\n  float: left;\n  margin-right: 15%;\n}\n\n.lineupImage {\n  background-image: url('band.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 200px;\n  display: block;\n}\n\n.imagesDiv {\n  width: 100%;\n  text-align: center;\n  background-color: #eeecec;\n  margin-top: 10%;\n  padding: 3% 0% 5% 0%;\n}\n\n.imagesTitle {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.imageContainer {\n  position: relative;\n}\n\n.playButton {\n  position: absolute;\n  height: 30%;\n  top: 40%;\n  left: 45%;\n  cursor: pointer;\n}\n\n.imageLink {\n  width: 50%;\n  height: auto;\n  margin-top: 3%;\n  cursor: pointer;\n}\n\n.sponsorsDiv {\n  padding-top: 2vh;\n  margin-top: 5vh;\n  -webkit-box-align: center;\n          align-items: center;\n  height: auto;\n  text-align: center;\n}\n\n.image-swiper {\n  margin-top: 2%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15%;\n  position: relative;\n  width: 1000px;\n  height: 50vh;\n}\n\n.custom-col-1-5 {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n  max-width: 15%;\n  padding: 0 6px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-5 {\n    -webkit-box-flex: 0;\n            flex: 0 0 45%;\n    max-width: 45%;\n    padding: 0 8px;\n  }\n}\n\n.custom-col-1-2 {\n  -webkit-box-flex: 0;\n          flex: 0 0 11%;\n  max-width: 11%;\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .custom-col-1-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 22%;\n    max-width: 22%;\n  }\n}\n\n@media (max-width: 600px) {\n  .custom-col-1-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 30%;\n    max-width: 30%;\n  }\n}\n\n.custom-col-1-5, .custom-col-1-2 {\n  -webkit-box-flex: 0;\n  position: relative;\n  width: 100%;\n}\n\n.custom-col-1-2, .custom-col-1-5, .col-1, .col-2 {\n  margin-bottom: 20px;\n}\n\n.col-2 {\n  padding: 0 5px;\n}\n\n@media (max-width: 1000px) {\n  .col-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 33%;\n    max-width: 33%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-2 {\n    -webkit-box-flex: 0;\n            flex: 0 0 45%;\n    max-width: 45%;\n  }\n}\n\n.col-1 {\n  padding: 0 3px;\n  -webkit-box-flex: 0;\n          flex: 0 0 9%;\n  max-width: 9%;\n}\n\n@media (max-width: 1000px) {\n  .col-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 18%;\n    max-width: 18%;\n  }\n}\n\n@media (max-width: 600px) {\n  .col-1 {\n    -webkit-box-flex: 0;\n            flex: 0 0 23%;\n    max-width: 23%;\n  }\n}\n\n.row {\n  -webkit-box-pack: center !important;\n  justify-content: center !important;\n}\n\n.sponsor5 {\n  max-width: 90%;\n  border: solid 1px black;\n}\n\n.sponsor1, .sponsor2, .sponsor3, .sponsor4 {\n  max-width: 100%;\n  border: solid 1px black;\n}\n\n.sponsors {\n  margin-bottom: 50px;\n}\n\n:host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n  height: 650px;\n}\n\n@media (max-width: 1200px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 520px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 800px;\n  }\n}\n\n@media (max-width: 900px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 390px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 600px;\n  }\n}\n\n@media (max-width: 700px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 260px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 400px;\n  }\n}\n\n@media (max-width: 500px) {\n  :host::ng-deep ngx-image-swiper > .ngx-image-swiper {\n    height: 195px;\n  }\n  :host::ng-deep .image-swiper {\n    width: 300px;\n  }\n}\n\n.sponsor-names {\n  padding: 15px 25px;\n}\n\n.sponsorTitle {\n  font-family: sans-serif;\n  font-size: 3vh;\n}\n\n.all-sponsors > * {\n  width: 80%;\n}\n\n.all-sponsors.split > *:first-child {\n  width: 50%;\n}\n\n.all-sponsors.split > *:last-child {\n  width: 30%;\n}\n\n.info-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 30px;\n  height: 75px;\n  width: 100%;\n}\n\n.info-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n  max-width: 175px;\n  min-height: 50px;\n  height: 50px;\n  border: solid 1px black;\n  border-radius: 5px;\n  margin: 0 15px;\n}\n\n.info-button:hover {\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.35);\n  font-weight: bolder;\n}\n\n@media (max-width: 1000px) {\n  .lineupDiv {\n    height: 30%;\n  }\n\n  .infoDiv {\n    height: 70vh;\n  }\n}\n\n@media (max-width: 700px) {\n  .tempWarning {\n    height: 15vh;\n  }\n\n  .warnImage {\n    width: auto;\n    height: 50%;\n    margin-right: 20px;\n  }\n\n  .imageLink {\n    width: 60%;\n  }\n\n  .imagePdfContainer {\n    visibility: hidden;\n    width: 0%;\n  }\n\n  .lineupText {\n    width: 100%;\n    float: none;\n    margin-right: 0%;\n  }\n\n  .pdfButton2 {\n    width: 80%;\n    height: 40px;\n    margin-top: 10%;\n    visibility: visible;\n  }\n\n  .lineupDiv {\n    padding-top: 100px;\n    height: 40%;\n    margin-left: 5%;\n  }\n\n  .info-buttons {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .info-button {\n    max-width: 100%;\n    margin: 10px 15px;\n    min-height: 35px;\n    height: 35px;\n  }\n\n  .all-sponsors > * {\n    width: 90%;\n  }\n  .all-sponsors.split > *:first-child {\n    width: 55%;\n  }\n  .all-sponsors.split > *:last-child {\n    width: 35%;\n  }\n}\n\n@media (max-width: 500px) {\n  .lineupDiv {\n    padding-top: 150px;\n  }\n\n  .navInfo {\n    font-size: 3vw;\n  }\n\n  .navContainer {\n    margin-left: 2%;\n    margin-right: 2%;\n  }\n\n  .linkImg {\n    height: 10vw;\n  }\n\n  .navigationImg {\n    width: 18vw;\n    height: 18vw;\n  }\n\n  .infoText {\n    float: none;\n    width: 90%;\n  }\n\n  .infoImage {\n    float: none;\n    width: 100%;\n    height: 30vh;\n  }\n\n  .infoDiv {\n    margin-bottom: 3vh;\n    height: 65vh;\n  }\n\n  .imageLink {\n    width: 80%;\n  }\n\n  .info-button {\n    margin: 5px 15px;\n  }\n\n  .info-buttons {\n    margin-bottom: 25px;\n  }\n\n  .all-sponsors > * {\n    width: 96%;\n  }\n  .all-sponsors.split > *:first-child {\n    width: 58%;\n  }\n  .all-sponsors.split > *:last-child {\n    width: 38%;\n  }\n}\n\n@media (max-width: 400px) {\n  .lineupDiv {\n    height: 70%;\n    padding-top: 200px;\n  }\n}\n\n@media (max-width: 300px) {\n  .lineupDiv {\n    padding-top: 250x;\n  }\n}\n\n@media (min-width: 500px) {\n  .topImage {\n    background-attachment: fixed;\n  }\n\n  .infoImage {\n    background-attachment: fixed;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxwcm9qZWN0c1xcdG9uZ2VybG9Db2RlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVI7O0FESUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FDREo7O0FES0E7RUFDSSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksd0VBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURLQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7VUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNGSjs7QURJSTtFQUxKO0lBTVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ0ROO0FBQ0Y7O0FERUk7RUFUSjtJQVVRLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLG1CQUFBO1VBQUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0k7RUFMSjtJQU1RLG1CQUFBO1lBQUEsYUFBQTtJQUNBLGNBQUE7RUNFTjtBQUNGOztBRERJO0VBVEo7SUFVUSxtQkFBQTtZQUFBLGFBQUE7SUFDQSxjQUFBO0VDSU47QUFDRjs7QUREQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSUo7O0FEREE7RUFDSSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREZJO0VBSEo7SUFJUSxtQkFBQTtZQUFBLGFBQUE7SUFDQSxjQUFBO0VDS047QUFDRjs7QURKSTtFQVBKO0lBUVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ09OO0FBQ0Y7O0FESkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsYUFBQTtBQ09KOztBRExJO0VBTEo7SUFNUSxtQkFBQTtZQUFBLGFBQUE7SUFDQSxjQUFBO0VDUU47QUFDRjs7QURQSTtFQVRKO0lBVVEsbUJBQUE7WUFBQSxhQUFBO0lBQ0EsY0FBQTtFQ1VOO0FBQ0Y7O0FEUEE7RUFDSSxtQ0FBQTtFQUNBLGtDQUFBO0FDVUo7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUNVSjs7QURQQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQ1VKOztBRFBBO0VBQ0ksbUJBQUE7QUNVSjs7QUROSTtFQUNJLGFBQUE7QUNTUjs7QUROSTtFQUNJO0lBQ0ksYUFBQTtFQ1FWO0VETE07SUFDSSxZQUFBO0VDT1Y7QUFDRjs7QURKSTtFQUNJO0lBQ0ksYUFBQTtFQ01WO0VESE07SUFDSSxZQUFBO0VDS1Y7QUFDRjs7QURGSTtFQUNJO0lBQ0ksYUFBQTtFQ0lWO0VERE07SUFDSSxZQUFBO0VDR1Y7QUFDRjs7QURBSTtFQUNJO0lBQ0ksYUFBQTtFQ0VWO0VEQ007SUFDSSxZQUFBO0VDQ1Y7QUFDRjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNBSjs7QURJSTtFQUNJLFVBQUE7QUNEUjs7QURJSTtFQUNJLFVBQUE7QUNGUjs7QURLSTtFQUNJLFVBQUE7QUNIUjs7QURPQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSko7O0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNKSjs7QURNSTtFQUNJLHdFQUFBO0VBQ0EsbUJBQUE7QUNKUjs7QURRQTtFQUNJO0lBQ0ksV0FBQTtFQ0xOOztFRFFFO0lBQ0ksWUFBQTtFQ0xOO0FBQ0Y7O0FEUUE7RUFDSTtJQUNJLFlBQUE7RUNOTjs7RURTRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNOTjs7RURTRTtJQUNJLFVBQUE7RUNOTjs7RURTRTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtFQ05OOztFRFNFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ05OOztFRFNFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUNOTjs7RURTRTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNOTjs7RURTRTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ05OOztFRFNFO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDTk47O0VEVU07SUFDSSxVQUFBO0VDUFY7RURVTTtJQUNJLFVBQUE7RUNSVjtFRFdNO0lBQ0ksVUFBQTtFQ1RWO0FBQ0Y7O0FEYUE7RUFDSTtJQUNJLGtCQUFBO0VDWE47O0VEYUU7SUFDSSxjQUFBO0VDVk47O0VEWUU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUNUTjs7RURXRTtJQUNJLFlBQUE7RUNSTjs7RURXRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDUk47O0VEVUU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ1BOOztFRFNFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDTk47O0VEU0U7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNOTjs7RURTRTtJQUNJLFVBQUE7RUNOTjs7RURTRTtJQUNJLGdCQUFBO0VDTk47O0VEU0U7SUFDSSxtQkFBQTtFQ05OOztFRFVNO0lBQ0ksVUFBQTtFQ1BWO0VEVU07SUFDSSxVQUFBO0VDUlY7RURXTTtJQUNJLFVBQUE7RUNUVjtBQUNGOztBRGFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUNYTjtBQUNGOztBRGNBO0VBQ0k7SUFDSSxpQkFBQTtFQ1pOO0FBQ0Y7O0FEZUE7RUFDSTtJQUNJLDRCQUFBO0VDYk47O0VEZUU7SUFDSSw0QkFBQTtFQ1pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcbiAgICBtYXQtZXhwYW5zaW9uLXBhbmVsID4gLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCA+IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnRlbXBXYXJuaW5ne1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigyNDUsIDIyMywgMjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MywgMTQ4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ud2FyblRleHR7XHJcbiAgICBmb250LXNpemU6IDJ2aDtcclxufVxyXG5cclxuLndhcm5JbWFnZXtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50b3BJbWFnZXtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RvbmdlcmxvTWFpbkltYWdlLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUlIDAlIDIlIDAlO1xyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4ubWFpblRleHR7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiByZ2IoMCwgMCwgMCksICRhbHBoYTogMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICBjb2xvcjogcmdiYSgkY29sb3I6ICNFREVBRTksICRhbHBoYTogMS4wKTtcclxufVxyXG5cclxuLm5hdkNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmxpbmtJbWd7XHJcbiAgICBoZWlnaHQ6IDZ2dztcclxufVxyXG5cclxuLm5hdmlnYXRpb25JbWd7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGhlaWdodDogMTB2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uSW1nOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNCwgMTIyLCAxMjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbkRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubmF2SW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmluZm9EaXZ7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzYsIDIzNik7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmluZm9UZXh0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcblxyXG4uaW5mb0ltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9uZ2VybG9JbmZvLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbmZvVGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDJweDtcclxufVxyXG5cclxuLmxpbmV1cERpdntcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxubWF0LXBhbmVsLXRpdGxlIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgfVxyXG4gIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuXHJcblxyXG4ubG9jYXRpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4ubGluZXVwVGV4dHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlUGRmQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBkZkJ1dHRvbiwgLnBkZkJ1dHRvbjJ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnBkZkJ1dHRvbjJ7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wZGZCdXR0b246aG92ZXIsIC5wZGZCdXR0b24yOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsMCwwLC4yNSksIDNweCAzcHggN3B4IHJnYmEoMCwwLDAsLjM1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wZGZJbWFnZXtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuLmxpbmV1cEltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltYWdlc0RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM2LCAyMzYpO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZzogMyUgMCUgNSUgMCU7XHJcbn1cclxuXHJcbi5pbWFnZXNUaXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4uaW1hZ2VDb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wbGF5QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlTGlua3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNwb25zb3JzRGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1zd2lwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sLTEtNSB7XHJcbiAgICBmbGV4OiAwIDAgMTUlO1xyXG4gICAgbWF4LXdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIFxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20tY29sLTEtMiB7XHJcbiAgICBmbGV4OiAwIDAgMTElO1xyXG4gICAgbWF4LXdpZHRoOiAxMSU7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgIGZsZXg6IDAgMCAyMiU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMiU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDMwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1jb2wtMS01LCAuY3VzdG9tLWNvbC0xLTIge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbC0xLTIsIC5jdXN0b20tY29sLTEtNSwgLmNvbC0xLCAuY29sLTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNvbC0yIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMzJTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgNDUlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29sLTEge1xyXG4gICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICBmbGV4OiAwIDAgOSU7XHJcbiAgICBtYXgtd2lkdGg6IDklO1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgZmxleDogMCAwIDE4JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE4JTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBmbGV4OiAwIDAgMjMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMjMlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwb25zb3I1IHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5zcG9uc29yMSwgLnNwb25zb3IyLCAuc3BvbnNvcjMsIC5zcG9uc29yNCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLnNwb25zb3JzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwIHtcclxuICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAgICAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzOTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgICAgICBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTk1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Utc3dpcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNwb25zb3ItbmFtZXMge1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG59XHJcblxyXG4uc3BvbnNvclRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxufVxyXG5cclxuLmFsbC1zcG9uc29ycyB7XHJcbiAgICA+ICoge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zcGxpdCA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zcGxpdCA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmluZm8tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mby1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLDAsMCwuMjUpLCAzcHggM3B4IDdweCByZ2JhKDAsMCwwLC4zNSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9EaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAudGVtcFdhcm5pbmd7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC53YXJuSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZUxpbmt7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2VQZGZDb250YWluZXJ7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubGluZXVwVGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZGZCdXR0b24ye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1idXR0b25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWJ1dHRvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbGwtc3BvbnNvcnMge1xyXG4gICAgICAgID4gKiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNwbGl0ID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNwbGl0ID4gKjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdkluZm97XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcbiAgICAubmF2Q29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgfVxyXG4gICAgLmxpbmtJbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2aWdhdGlvbkltZ3tcclxuICAgICAgICB3aWR0aDogMTh2dztcclxuICAgICAgICBoZWlnaHQ6IDE4dnc7XHJcbiAgICB9XHJcbiAgICAuaW5mb1RleHR7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5pbmZvSW1hZ2V7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvRGl2e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgICAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlTGlua3tcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1idXR0b25zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbGwtc3BvbnNvcnMge1xyXG4gICAgICAgID4gKiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNwbGl0ID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1OCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNwbGl0ID4gKjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM4JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgIC5saW5ldXBEaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAzMDBweCl7XHJcbiAgICAubGluZXVwRGl2e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNTB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA1MDBweCl7XHJcbiAgICAudG9wSW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIH1cclxuICAgIC5pbmZvSW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgbWF0LWV4cGFuc2lvbi1wYW5lbCA+IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQgPiAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVtcFdhcm5pbmcge1xuICBoZWlnaHQ6IDEwdmg7XG4gIG1hcmdpbjogNSU7XG4gIGJvcmRlcjogc29saWQgM3B4ICNmNWRmMWQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkOTQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ud2FyblRleHQge1xuICBmb250LXNpemU6IDJ2aDtcbn1cblxuLndhcm5JbWFnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDY1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udG9wSW1hZ2Uge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RvbmdlcmxvTWFpbkltYWdlLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1JSAwJSAyJSAwJTtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbn1cblxuLm1haW5UZXh0IHtcbiAgcGFkZGluZzogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBjb2xvcjogI2VkZWFlOTtcbn1cblxuLm5hdkNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5saW5rSW1nIHtcbiAgaGVpZ2h0OiA2dnc7XG59XG5cbi5uYXZpZ2F0aW9uSW1nIHtcbiAgd2lkdGg6IDEwdnc7XG4gIGhlaWdodDogMTB2dztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2aWdhdGlvbkltZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzdhN2E7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmlnYXRpb25EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hdkluZm8ge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmluZm9EaXYge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZWM7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvVGV4dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmluZm9JbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RvbmdlcmxvSW5mby5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmluZm9UaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDN2aDtcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMnB4O1xufVxuXG4ubGluZXVwRGl2IHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG5tYXQtcGFuZWwtdGl0bGUge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG5tYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG5cbi5saW5ldXBUZXh0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMjAlICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZVBkZkNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wZGZCdXR0b24sIC5wZGZCdXR0b24yIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnBkZkJ1dHRvbjIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wZGZCdXR0b246aG92ZXIsIC5wZGZCdXR0b24yOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAzcHggM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wZGZJbWFnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cblxuLmxpbmV1cEltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFuZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWFnZXNEaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2VjO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmc6IDMlIDAlIDUlIDAlO1xufVxuXG4uaW1hZ2VzVGl0bGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG5cbi5pbWFnZUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsYXlCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzAlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNDUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZUxpbmsge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDMlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcG9uc29yc0RpdiB7XG4gIHBhZGRpbmctdG9wOiAydmg7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1zd2lwZXIge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLmN1c3RvbS1jb2wtMS01IHtcbiAgZmxleDogMCAwIDE1JTtcbiAgbWF4LXdpZHRoOiAxNSU7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY3VzdG9tLWNvbC0xLTUge1xuICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY3VzdG9tLWNvbC0xLTUge1xuICAgIGZsZXg6IDAgMCA0NSU7XG4gICAgbWF4LXdpZHRoOiA0NSU7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gIH1cbn1cblxuLmN1c3RvbS1jb2wtMS0yIHtcbiAgZmxleDogMCAwIDExJTtcbiAgbWF4LXdpZHRoOiAxMSU7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuY3VzdG9tLWNvbC0xLTIge1xuICAgIGZsZXg6IDAgMCAyMiU7XG4gICAgbWF4LXdpZHRoOiAyMiU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY3VzdG9tLWNvbC0xLTIge1xuICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIH1cbn1cblxuLmN1c3RvbS1jb2wtMS01LCAuY3VzdG9tLWNvbC0xLTIge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWNvbC0xLTIsIC5jdXN0b20tY29sLTEtNSwgLmNvbC0xLCAuY29sLTIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29sLTIge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNvbC0yIHtcbiAgICBmbGV4OiAwIDAgMzMlO1xuICAgIG1heC13aWR0aDogMzMlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbC0yIHtcbiAgICBmbGV4OiAwIDAgNDUlO1xuICAgIG1heC13aWR0aDogNDUlO1xuICB9XG59XG5cbi5jb2wtMSB7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBmbGV4OiAwIDAgOSU7XG4gIG1heC13aWR0aDogOSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jb2wtMSB7XG4gICAgZmxleDogMCAwIDE4JTtcbiAgICBtYXgtd2lkdGg6IDE4JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2wtMSB7XG4gICAgZmxleDogMCAwIDIzJTtcbiAgICBtYXgtd2lkdGg6IDIzJTtcbiAgfVxufVxuXG4ucm93IHtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5zcG9uc29yNSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbn1cblxuLnNwb25zb3IxLCAuc3BvbnNvcjIsIC5zcG9uc29yMywgLnNwb25zb3I0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbn1cblxuLnNwb25zb3JzIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcbiAgICBoZWlnaHQ6IDUyMHB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5pbWFnZS1zd2lwZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIG5neC1pbWFnZS1zd2lwZXIgPiAubmd4LWltYWdlLXN3aXBlciB7XG4gICAgaGVpZ2h0OiAzOTBweDtcbiAgfVxuICA6aG9zdDo6bmctZGVlcCAuaW1hZ2Utc3dpcGVyIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICA6aG9zdDo6bmctZGVlcCBuZ3gtaW1hZ2Utc3dpcGVyID4gLm5neC1pbWFnZS1zd2lwZXIge1xuICAgIGhlaWdodDogMjYwcHg7XG4gIH1cbiAgOmhvc3Q6Om5nLWRlZXAgLmltYWdlLXN3aXBlciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgbmd4LWltYWdlLXN3aXBlciA+IC5uZ3gtaW1hZ2Utc3dpcGVyIHtcbiAgICBoZWlnaHQ6IDE5NXB4O1xuICB9XG4gIDpob3N0OjpuZy1kZWVwIC5pbWFnZS1zd2lwZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuXG4uc3BvbnNvci1uYW1lcyB7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbn1cblxuLnNwb25zb3JUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmFsbC1zcG9uc29ycyA+ICoge1xuICB3aWR0aDogODAlO1xufVxuLmFsbC1zcG9uc29ycy5zcGxpdCA+ICo6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuLmFsbC1zcG9uc29ycy5zcGxpdCA+ICo6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5pbmZvLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZm8tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5pbmZvLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgM3B4IDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubGluZXVwRGl2IHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxuXG4gIC5pbmZvRGl2IHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAudGVtcFdhcm5pbmcge1xuICAgIGhlaWdodDogMTV2aDtcbiAgfVxuXG4gIC53YXJuSW1hZ2Uge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5pbWFnZUxpbmsge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuICAuaW1hZ2VQZGZDb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMCU7XG4gIH1cblxuICAubGluZXVwVGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgfVxuXG4gIC5wZGZCdXR0b24yIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5saW5ldXBEaXYge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICAuaW5mby1idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmluZm8tYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgbWluLWhlaWdodDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cblxuICAuYWxsLXNwb25zb3JzID4gKiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuYWxsLXNwb25zb3JzLnNwbGl0ID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxuICAuYWxsLXNwb25zb3JzLnNwbGl0ID4gKjpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmxpbmV1cERpdiB7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICB9XG5cbiAgLm5hdkluZm8ge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG5cbiAgLm5hdkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gIH1cblxuICAubGlua0ltZyB7XG4gICAgaGVpZ2h0OiAxMHZ3O1xuICB9XG5cbiAgLm5hdmlnYXRpb25JbWcge1xuICAgIHdpZHRoOiAxOHZ3O1xuICAgIGhlaWdodDogMTh2dztcbiAgfVxuXG4gIC5pbmZvVGV4dCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5pbmZvSW1hZ2Uge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzB2aDtcbiAgfVxuXG4gIC5pbmZvRGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICB9XG5cbiAgLmltYWdlTGluayB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5pbmZvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHggMTVweDtcbiAgfVxuXG4gIC5pbmZvLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cblxuICAuYWxsLXNwb25zb3JzID4gKiB7XG4gICAgd2lkdGg6IDk2JTtcbiAgfVxuICAuYWxsLXNwb25zb3JzLnNwbGl0ID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDU4JTtcbiAgfVxuICAuYWxsLXNwb25zb3JzLnNwbGl0ID4gKjpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogMzglO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmxpbmV1cERpdiB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmxpbmV1cERpdiB7XG4gICAgcGFkZGluZy10b3A6IDI1MHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAudG9wSW1hZ2Uge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIH1cblxuICAuaW5mb0ltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB9XG59Il19 */");

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
        let card = document.getElementById('image');
        let height = card.scrollHeight;
        this.margin = (height * 6 + 450) + "px";
    }
    onExpand2() {
        this.opened = 2;
        let card = document.getElementById('image');
        let height = card.scrollHeight;
        if (height < 400) {
            height += ((600 - height) / 10);
        }
        this.margin = (height * 15 + 1150) + "px";
    }
    onExpand3() {
        this.opened = 3;
        let card = document.getElementById('image');
        let height = card.scrollHeight;
        if (height < 400) {
            height += ((400 - height) / 4);
        }
        this.margin = (height * 9 + 550) + "px";
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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  margin-bottom: 5%;\n  height: auto;\n}\n\n.heading {\n  padding: 2% 5% 2% 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.selectedImageContainer {\n  position: relative;\n  width: 45%;\n  float: left;\n  margin-left: 4%;\n  margin-bottom: 5%;\n}\n\n.selectedImage {\n  border-radius: 2%;\n  width: 100%;\n  height: auto;\n}\n\n.prevButton {\n  position: absolute;\n  float: left;\n  left: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 0px 10% 10% 0px;\n}\n\n.nextButton {\n  position: absolute;\n  float: right;\n  right: 0px;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 30%;\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 10% 0px 0px 10%;\n}\n\n.prevButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.nextButton:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n\n.prevNextImage {\n  opacity: 1;\n  width: 100%;\n  height: 50%;\n  margin-left: 20%;\n}\n\n.subImage {\n  border-radius: 5%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 90%;\n  height: auto;\n}\n\n.imageList {\n  margin-bottom: 5%;\n}\n\n.subImage:hover {\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 25px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n\n.allImages {\n  width: 45%;\n  height: 100%;\n  float: right;\n  margin-bottom: 5%;\n  margin-right: 4%;\n}\n\n@media (max-width: 1000px) {\n  .selectedImageContainer {\n    width: 90%;\n    margin-bottom: 2%;\n  }\n\n  .allImages {\n    width: 90%;\n    margin-right: 6%;\n  }\n\n  .selectedImage {\n    background-size: contain;\n    height: 75%;\n    margin-top: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZXMvQzpcXHByb2plY3RzXFx0b25nZXJsb0NvZGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGltYWdlc1xcaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsb0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLDZFQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RBOztBRElBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsaUJBQUE7RUNETjs7RURJRTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQ0ROOztFRElFO0lBQ0ksd0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBwYWRkaW5nIDogMiUgNSUgMiUgNSU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4uc2VsZWN0ZWRJbWFnZUNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWRJbWFnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wcmV2QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQgOiBsZWZ0O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAzNSU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC4yKTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTAlIDEwJSAwcHg7XHJcbn1cclxuXHJcbi5uZXh0QnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQgOiByaWdodDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuMik7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlIDBweCAwcHggMTAlO1xyXG59XHJcblxyXG4ucHJldkJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDAuNik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uZXh0QnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsMC42KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByZXZOZXh0SW1hZ2V7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5zdWJJbWFnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZUxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnN1YkltYWdlOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYWxsSW1hZ2Vze1xyXG53aWR0aDogNDUlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmZsb2F0IDogcmlnaHQ7XHJcbm1hcmdpbi1ib3R0b206IDUlO1xyXG5tYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoIDogMTAwMHB4KXtcclxuICAgIC5zZWxlY3RlZEltYWdlQ29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsbEltYWdlc3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdGVkSW1hZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaGVhZGluZyB7XG4gIHBhZGRpbmc6IDIlIDUlIDIlIDUlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG5cbi5zZWxlY3RlZEltYWdlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnNlbGVjdGVkSW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnByZXZCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGhlaWdodDogMzAlO1xuICB3aWR0aDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwJSAxMCUgMHB4O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMHB4O1xuICB0b3A6IDM1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJSAwcHggMHB4IDEwJTtcbn1cblxuLnByZXZCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5leHRCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByZXZOZXh0SW1hZ2Uge1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5zdWJJbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2VMaXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5zdWJJbWFnZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbGxJbWFnZXMge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNlbGVjdGVkSW1hZ2VDb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cblxuICAuYWxsSW1hZ2VzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG4gIH1cblxuICAuc2VsZWN0ZWRJbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGhlaWdodDogNzUlO1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICB9XG59Il19 */");

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
        this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
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
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.toolbarItems a {\n  display: inline-block;\n  margin: 0 10px;\n  color: white;\n}\n\n.toolbarItems a:hover {\n  text-shadow: 3px 3px 5px #000000;\n}\n\n.sloganSpan {\n  margin-right: 5%;\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 1.5vh;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.logo {\n  height: 75%;\n}\n\nmat-toolbar {\n  height: 100px !important;\n  min-height: 100px !important;\n}\n\n.active-link {\n  font-weight: 900;\n}\n\na {\n  text-decoration: none;\n  color: black !important;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n@media (max-width: 1000px) {\n  mat-toolbar {\n    height: 75px !important;\n    min-height: 75px !important;\n  }\n}\n\n@media (max-width: 500px) {\n  mat-toolbar {\n    height: 50px !important;\n    min-height: 50px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxccHJvamVjdHNcXHRvbmdlcmxvQ29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpbi1uYXZcXG1haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsMkJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLDJCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvb2xiYXJJdGVtcyBhe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b29sYmFySXRlbXMgYTpob3ZlcntcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDtcclxufVxyXG5cclxuLnNsb2dhblNwYW57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDEuNXZoO1xyXG59XHJcblxyXG4uc3BhY2Vye1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlLWxpbmt7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgbWF0LXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgbWF0LXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b29sYmFySXRlbXMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXJJdGVtcyBhOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMwMDAwMDA7XG59XG5cbi5zbG9nYW5TcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjV2aDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogNzUlO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDc1cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBtYXQtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: 60px 100px 100px 100px;\n  width: 60%;\n  margin-bottom: 75px;\n}\n\n.link {\n  color: black;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.link:hover {\n  font-weight: 600;\n}\n\n.map {\n  height: 400px;\n}\n\n@media (max-width: 900px) {\n  .container {\n    margin: 60px 60px 100px 60px;\n    width: 75%;\n  }\n}\n\n@media (max-width: 500px) {\n  .container {\n    margin: 40px 20px 100px 20px;\n    width: 90%;\n    margin-bottom: 50px;\n  }\n\n  .map {\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmFjdGljYWwtaW5mby9DOlxccHJvamVjdHNcXHRvbmdlcmxvQ29kZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJhY3RpY2FsLWluZm9cXHByYWN0aWNhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ByYWN0aWNhbC1pbmZvL3ByYWN0aWNhbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxnQkFBQTtBQ0NSOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLFVBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ0ROOztFREdFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmFjdGljYWwtaW5mby9wcmFjdGljYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA2MHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjkwMHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogNjBweCA2MHB4IDEwMHB4IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDQwcHggMjBweCAxMDBweCAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICAgIC5tYXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDYwcHggMTAwcHggMTAwcHggMTAwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1ib3R0b206IDc1cHg7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubGluazpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYXAge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA2MHB4IDYwcHggMTAwcHggNjBweDtcbiAgICB3aWR0aDogNzUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA0MHB4IDIwcHggMTAwcHggMjBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICAubWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 5%;\n}\n\n.title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3vh;\n}\n\n.group {\n  text-decoration: none;\n  color: black;\n  font-weight: bolder;\n  margin-left: 2%;\n}\n\na:hover {\n  font-size: 2vh;\n}\n\n.link {\n  margin-left: 2%;\n  color: #b1b1b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dmgvQzpcXHByb2plY3RzXFx0b25nZXJsb0NvZGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHR2aFxcdHZoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3R2aC90dmguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90dmgvdHZoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDN2aDtcclxufVxyXG5cclxuLmdyb3Vwe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMnZoO1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLmdyb3VwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuYTpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4ubGluayB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgY29sb3I6ICNiMWIxYjE7XG59Il19 */");

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
            { name: "KKSVWO", link: "https://www.kksvwo.be/", show: false },
            { name: "FCL Victoria" }
        ];
    }
    stateName(i) {
        return this.groups[i].show ? 'show' : 'hide';
    }
    toggle(i) {
        if (!i.link) {
            return;
        }
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

module.exports = __webpack_require__(/*! C:\projects\tongerloCode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map