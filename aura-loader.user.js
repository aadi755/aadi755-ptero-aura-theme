
// ==UserScript==
// @name         Aura Theme for Pterodactyl
// @namespace    https://free.mcwild.fun/
// @version      1.0
// @description  Injects Aura Nebula-style theme into Pterodactyl panel.
// @author       AuraNodesXAdvik
// @match        *://*/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://raw.githubusercontent.com/aadi755/ptero-aura-theme/main/aura.css';
  document.head.appendChild(link);
})();
