import createElement from "./createElement";
const renderElem = (vNode) => {
    const $element = document.createElement(vNode.tagName);

    // set the attributes
    for (const [k, v] of Object.entries(vNode.attrs)) {
        $element.setAttribute(k, v);
    }

    // set the children
    for (const child of vNode.children) {
        const $child = render(child);
        $element.appendChild($child);
    }
    return $element;
};

const render = (vNode) => {
    if (typeof vNode === 'string') return document.createTextNode(vNode);
    return renderElem(vNode);
};
export default render;