// ==UserScript==
// @name         Sourcehut Lists Line Wrap Fix
// @namespace    https://sr.ht/~logankirkland/
// @version      0.1
// @description  Fixes line wrap issue on sourcehut lists by adding CSS
// @author       Logan Kirkland <logan@logankirk.land>
// @match        https://lists.sr.ht/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const css = `
        .message-body {
            white-space: pre-wrap;
        }
    `;

    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();