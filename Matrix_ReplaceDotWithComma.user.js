// ==UserScript==
// @name         Matrix - Replace . par ,
// @version      1.0
// @description  Replace dot with comma in number input fields
// @author       Pierre GARDIE - Compass Group France
// @match        https://apps.compass-group.digital/*
// @updateURL    https://github.com/PGCompass/Matrix/raw/refs/heads/main/Matrix_ReplaceDotWithComma.user.js
// @downloadURL  https://github.com/PGCompass/Matrix/raw/refs/heads/main/Matrix_ReplaceDotWithComma.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keypress', function(event) {
        // Check if the key pressed is a dot (.)
        if (event.key === '.') {
            // Prevent the default action (adding the dot to the input)
            event.preventDefault();

            // Get the target element
            let target = event.target;

            // If the target is an input or textarea element, replace the dot with a comma
            if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
                let start = target.selectionStart;
                let end = target.selectionEnd;

                // Insert a comma at the current cursor position
                target.value = target.value.substring(0, start) + ',' + target.value.substring(end);

                // Move the cursor to the right position after the comma
                target.selectionStart = target.selectionEnd = start + 1;
            }
        }
    });
})();
