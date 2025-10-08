// ==UserScript==
// @name         untis-redirect-watcher
// @version      1.1
// @description  Actively watches for the /today page after login and clicks the timetable link. Works with SPAs.
// @author       Benjamin Gyemant
// @match        https://*.webuntis.com/*
// @downloadURL  https://raw.githubusercontent.com/benni580/my-userscripts/refs/heads/main/smart-redirector/untis-redirect-watcher.user.js
// @updateURL    https://raw.githubusercontent.com/benni580/my-userscripts/refs/heads/main/smart-redirector/untis-redirect-watcher.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- Configuration ---
    const timetableLinkSelector = 'a[href="/timetable/class"]';

    console.log('Untis Redirect Watcher: Script injected. Now watching for /today page...');
    const pageWatcher = setInterval(function() {

        // Check if the current URL is the one we want to redirect FROM.
        if (window.location.href.includes('/today')) {
            const timetableLink = document.querySelector(timetableLinkSelector);
            if (timetableLink) {
                console.log('Untis Redirect Watcher: Detected /today page with timetable link. Clicking now!');
                clearInterval(pageWatcher);
                timetableLink.click();
            }
        }
    }, 250); // Check every quarter of a second.
})();