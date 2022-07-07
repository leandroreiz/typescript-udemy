"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Leandro', hobbies: ['guitar', 'games'] }, { age: 38 });
console.log(mergeObj);
console.log(mergeObj.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got ' + element.length + ' element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['guitar', 'playing']));
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Leandro' }, 'name');
//# sourceMappingURL=app.js.map