// ==UserScript==
// @name         elearning-session-extender
// @version      1.0
// @description  Prevents automatic logout on elearning.tgm.ac.at by silently refreshing the session.
// @author       Benjamin Gyemant
// @match        https://elearning.tgm.ac.at/*
// @downloadURL  https://raw.githubusercontent.com/benni580/my-userscripts/refs/heads/main/elearning-session-extender/elearning-session-extender.user.js
// @updateURL    https://raw.githubusercontent.com/benni580/my-userscripts/refs/heads/main/elearning-session-extender/elearning-session-extender.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // The interval in minutes at which to refresh the session.
    // Moodle timeouts can be long, so 10 minutes is a very safe value.
    const REFRESH_INTERVAL_MINUTES = 10;
    const intervalMilliseconds = REFRESH_INTERVAL_MINUTES * 60 * 1000;
    
    function extendSession() {
        // The fetch request is all that's needed to signal activity to the server.
        fetch(window.location.href);
    }
    setInterval(extendSession, intervalMilliseconds);
    console.log(`Elearning Session Extender: Active. Refreshing session every ${REFRESH_INTERVAL_MINUTES} minutes.`);

})();