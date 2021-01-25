"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function compare(name) {
    return function (target, _, _2) {
        if (name === target.constructor.name) {
            console.log('not allowed !');
        }
        else {
            target._name = name;
            console.log('done');
            console.log(name);
        }
    };
}
let phone6 = (() => {
    class phone6 {
        constructor(name) {
            this._name = name;
        }
        setName(name) {
            this._name = name;
        }
    }
    __decorate([
        compare("sachin")
    ], phone6.prototype, "setName", null);
    return phone6;
})();
const mi3 = new phone6('sachin');
mi3.setName("sachin");
