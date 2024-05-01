// ==UserScript==
// @name         Sourcehut Lists Line Wrap Fix
// @namespace    https://git.sr.ht/~logankirkland/sourcehut-lists-userscript/tree/main/item/sourcehut_lists.user.js
// @version      1.1
// @description  Fixes line wrap issue on sourcehut lists by adding CSS
// @author       Logan Kirkland <logan@logankirk.land>
// @match        https://lists.sr.ht/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Add CSS for message body formatting and link styling
    var style = document.createElement('style');
    style.innerHTML = `
    .message-body { white-space: pre-wrap; }
    .message-body.original { white-space: pre; }
    .original-link { color: #CDC8C2; text-decoration: underline; }
    .original-link:hover { color: #CDC8C2; text-decoration: none; }
    `;
    document.head.appendChild(style);

    // Function to toggle message body formatting
    function toggleMessageBodyFormat(messageBody) {
        messageBody.classList.toggle('original');
    }

    // Add "Show original" links and attach click event handlers
    var messageDates = document.querySelectorAll('.date');
    messageDates.forEach(function (date) {
        var originalLink = document.createElement('a');
        originalLink.textContent = 'Show original';
        originalLink.href = '#';
        originalLink.classList.add('original-link');
        originalLink.addEventListener('click', function (event) {
            event.preventDefault();
            var messageHeader = event.target.closest('.message-header');
            var messageBody = messageHeader.nextElementSibling;
            if (messageBody && messageBody.classList.contains('message-body')) {
                toggleMessageBodyFormat(messageBody);
                event.target.textContent = messageBody.classList.contains('original') ? 'Show wrapped' : 'Show original';
            }
        });
        var separator = document.createTextNode('\xa0·\xa0\xa0');
        date.appendChild(separator);
        date.appendChild(originalLink);
    });
})();