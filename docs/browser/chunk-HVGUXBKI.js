import{A as e,l as a}from"./chunk-QXTYYPBS.js";import{W as n,aa as o}from"./chunk-RGB7EHB6.js";var u=(()=>{let t=class t{constructor(){this._HttpClient=o(a)}getAllBrands(){return this._HttpClient.get(`${e.baseurl}/api/v1/brands`)}getSpecificBrand(i){return this._HttpClient.get(`${e.baseurl}/api/v1/brands/${i}`)}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a};