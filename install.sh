
#!/bin/bash
echo "🚀 Installing Aura Theme..."
curl -s https://raw.githubusercontent.com/aadi755/ptero-aura-theme/main/inject.js -o /var/www/pterodactyl/public/themes/aura.js
echo '<script src="/themes/aura.js"></script>' >> /var/www/pterodactyl/resources/views/layouts/app.blade.php
echo "✅ Aura Theme injected! Refresh your panel."
