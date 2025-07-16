// ==Aura Theme with Customization==
(function () {
  const savedColor = localStorage.getItem("aura_color") || "purple";
  const footerText = localStorage.getItem("aura_footer") || "🚀 Powered by AuraNodesXAdvik";

  const themeColors = {
    purple: "#7c3aed",
    blue: "#3b82f6",
    green: "#10b981"
  };

  const applyCustomStyles = () => {
    const color = themeColors[savedColor] || themeColors.purple;
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        font-family: 'Poppins', sans-serif !important;
        background-color: #0d0d19 !important;
      }

      .sidebar-nav a:hover {
        background-color: ${color} !important;
      }

      .btn, .bg-purple-600 {
        background-color: ${color} !important;
      }

      footer::after {
        content: "${footerText}" !important;
        display: block;
        margin-top: 10px;
        font-size: 12px;
        color: #ccc;
      }
    `;
    document.head.appendChild(style);
  };

  const injectSettingsPanel = () => {
    const sidebar = document.querySelector('.sidebar-nav');
    if (!sidebar) return;

    const settingsLink = document.createElement('a');
    settingsLink.href = '#';
    settingsLink.className = 'group flex items-center px-4 py-2 text-sm text-white hover:bg-purple-600 rounded transition';
    settingsLink.innerHTML = `
      <svg class="mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"/>
      </svg>
      Theme Settings
    `;
    settingsLink.onclick = (e) => {
      e.preventDefault();
      showSettingsModal();
    };

    sidebar.appendChild(settingsLink);
  };

  const showSettingsModal = () => {
    if (document.getElementById("aura-settings-modal")) return;

    const modal = document.createElement("div");
    modal.id = "aura-settings-modal";
    modal.innerHTML = `
      <div class="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center font-poppins">
        <div class="bg-[#1e1e2f] text-white p-6 rounded-xl w-[450px]">
          <h2 class="text-2xl font-bold mb-4">🎨 Aura Theme Settings</h2>

          <label class="block mb-2">Choose Theme Color</label>
          <select id="themeColor" class="w-full p-2 rounded bg-[#2a2a40] text-white">
            <option value="purple" ${savedColor === "purple" ? "selected" : ""}>Purple</option>
            <option value="blue" ${savedColor === "blue" ? "selected" : ""}>Blue</option>
            <option value="green" ${savedColor === "green" ? "selected" : ""}>Green</option>
          </select>

          <label class="block mt-4 mb-2">Custom Footer Text</label>
          <input type="text" id="footerText" class="w-full p-2 rounded bg-[#2a2a40] text-white" value="${footerText}">

          <div class="mt-6 flex justify-between">
            <button onclick="document.getElementById('aura-settings-modal').remove()" class="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded">Cancel</button>
            <button onclick="saveThemeSettings()" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded">Save</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  };

  window.saveThemeSettings = () => {
    const color = document.getElementById("themeColor").value;
    const footer = document.getElementById("footerText").value;

    localStorage.setItem("aura_color", color);
    localStorage.setItem("aura_footer", footer);

    alert("✅ Settings saved! Reloading...");
    location.reload();
  };

  window.addEventListener("load", () => {
    applyCustomStyles();
    injectSettingsPanel();
  });
})();
