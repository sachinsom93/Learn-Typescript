"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log3(target, methodName, discriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(methodName);
    console.log(discriptor);
}
let phone3 = (() => {
    class phone3 {
        constructor(n) {
            this._name = n;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
    }
    __decorate([
        log3
    ], phone3.prototype, "name", null);
    return phone3;
})();
