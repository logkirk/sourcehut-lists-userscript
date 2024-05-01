// ==UserScript==
// @name         Sourcehut Lists Line Wrap Fix
// @namespace    https://git.sr.ht/~logankirkland/sourcehut-lists-userscript/tree/main/item/sourcehut_lists.user.js
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