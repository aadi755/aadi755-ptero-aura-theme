
// inject.js - Inject aura.css into Pterodactyl Panel
(function() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://raw.githubusercontent.com/aadi755/ptero-aura-theme/main/aura.css';
  document.head.appendChild(link);
})();
