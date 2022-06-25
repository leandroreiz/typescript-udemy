"use strict";
const button = document.querySelector('.btn');
const add = (n1, n2) => {
    if (n1 + n2 > 0)
        return n1 + n2;
    return;
};
const clickHandler = (message) => {
    alert(message);
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', clickHandler.bind(null, 'Clicked!'));
//# sourceMappingURL=app.js.map