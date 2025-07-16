// ==Aura Theme Enhancer==
window.addEventListener('load', () => {
  const sidebar = document.querySelector('.sidebar-nav');
  if (!sidebar) return;

  // 🌌 Inject Player Manager Sidebar Link
  const playersLink = document.createElement('a');
  playersLink.href = '#';
  playersLink.className = 'group flex items-center px-4 py-2 text-sm text-white hover:bg-purple-600 rounded transition';
  playersLink.innerHTML = `
    <svg class="mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M17 20h5v-2a4 4 0 0 0-5-4h-1m-4 6H7a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4h1m4 6v-4m0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
    </svg>
    Players
  `;
  playersLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPlayerManager();
  });
  sidebar.appendChild(playersLink);
});

// 🎮 Player Manager Page
function showPlayerManager() {
  const content = document.querySelector('#app');
  if (!content) return;

  content.innerHTML = `
    <div class="p-6 text-white font-poppins">
      <h1 class="text-3xl font-bold mb-4">👥 Player Manager</h1>
      <div class="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl shadow-xl overflow-auto">
        <table class="min-w-full text-sm text-left">
          <thead>
            <tr class="border-b border-white/20 text-purple-300">
              <th class="py-2">Player</th>
              <th class="py-2">UUID</th>
              <th class="py-2">IP</th>
              <th class="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${generateFakePlayers(5)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 🔧 Fake Data Generator
function generateFakePlayers(count) {
  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `
      <tr class="hover:bg-purple-800/30 transition border-b border-white/10">
        <td class="py-2">Player${i}</td>
        <td class="py-2">uuid-000${i}</td>
        <td class="py-2">192.168.0.${i}</td>
        <td class="py-2 space-x-2">
          <button class="bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 rounded">Kick</button>
          <button class="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded">Ban</button>
          <button class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">Msg</button>
        </td>
      </tr>
    `;
  }
  return html;
}
