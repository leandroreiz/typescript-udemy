export class Component {
    constructor(templateId, hostElementId, afterBegin, newElementId) {
        this.templateElement = document === null || document === void 0 ? void 0 : document.getElementById(templateId);
        this.hostElement = document === null || document === void 0 ? void 0 : document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId)
            this.element.id = newElementId;
        this.attach(afterBegin);
    }
    attach(afterBegin) {
        this.hostElement.insertAdjacentElement(afterBegin ? 'afterbegin' : 'beforeend', this.element);
    }
}
//# sourceMappingURL=base-component.js.map