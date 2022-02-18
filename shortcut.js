/*
    shortcut js
    created by : ryan phenix
    license: GPLv3
*/

/* objects simplers */

// document object
const doc = document;

// window object
const win = window;

// document element object
const docElm = doc.documentElement;

// body element
const body = doc.getElementsByTagName("body")[0];

/* properties simplers */

// screen width
const screenX = win.innerWidth || docElm.clientWidth || body.clientWidth;

// screen height
const screenY = win.innerHeight || docElm.clientHeight || body.clientHeight;

/* functions simplers */

// select element by id
const id = (id) => doc.getElementById(id);

// select elements by class name
const classes = (classes) => doc.getElementsByClassName(classes);

// select element by class name
const getClass = (className, num = 0) => doc.getElementsByClassName(className)[num];

// get elements by tag name
const tags = (tag) => doc.getElementsByTagName(tag);

// get element by tag name
const tag = (tag, num = 0) => doc.getElementsByTagName(tag)[num];

// select element/s by query
const q = (q) => doc.querySelector(q);

// get inner html of a tag
const html = (elm) => elm.innerHTML;

// all events handler
const on = (elm, event, callback) => elm.addEventListener(event, callback);

// click event handler
const onClick = (elm, callback) => elm.addEventListener("click", callback);

// change event handler
const onChange = (elm, callback) => elm.addEventListener("change", callback);

// console log
const log = (...logs) => console.log(...logs);

// set html attribute
const setAttr = (elm, attr, val) => elm.setAttribute(attr, val);

// create new element
const create = (tagName, txt, styles) => {
    let elm = doc.createElement(tagName);
    elm.textContent = txt;
    for(key in styles) {
        elm.style[key] = styles[key];
    }
    return elm;
}
