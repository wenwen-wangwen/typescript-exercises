"use strict";
var _a;
function render(document) {
}
let phone = document.getElementById('phone');
phone.value;
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let customers = [1, 2, 3];
function log(name) {
    console.log(name);
}
log('a');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}
let quantity = 50;
let measure = 'cm';
let textBox = {
    drag: () => { },
    resize: () => { }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
let employee = {
    id: 1,
    name: '',
    retire: (date) => console.log(date)
};
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(20, 2024);
let numbers = [1, 2, 3, '5'];
let user = [1, 'Wenwen'];
user.push('aha');
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
//# sourceMappingURL=index.js.map