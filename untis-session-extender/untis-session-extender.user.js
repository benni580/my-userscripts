// ==UserScript==
// @name         untis-session-extender
// @version      1.1
// @description  Prevents automatic logout in WebUntis by silently refreshing the session in the background.
// @author       You
// @match        https://*.webuntis.com/*
// @downloadURL  https://raw.githubusercontent.com/benni580/my-userscripts/main/session-extender/untis-session-extender.user.js
// @updateURL    https://raw.githubusercontent.com/benni580/my-userscripts/main/session-extender/untis-session-extender.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // The interval in minutes at which to refresh the session.
    // WebUntis typically has a 15-30 minute timeout, so 5-10 minutes is a safe value.
    const REFRESH_INTERVAL_MINUTES = 5;
    const intervalMilliseconds = REFRESH_INTERVAL_MINUTES * 60 * 1000;

    function extendSession() {
        // The fetch request is all that's needed to signal activity to the server.
        fetch(window.location.href);
    }
    setInterval(extendSession, intervalMilliseconds);
    console.log(`WebUntis Session Extender: Active. Refreshing session every ${REFRESH_INTERVAL_MINUTES} minutes.`);

})();