#!/bin/bash

# Aura Theme Auto Installer for Pterodactyl Panel
# Author: @aadi755

echo "🚀 Starting Aura Theme Installation..."

# Step 1: Go to Pterodactyl directory
cd /var/www/pterodactyl || {
  echo "❌ Could not find /var/www/pterodactyl."
  echo "Please make sure you're running this on a working panel installation."
  exit 1
}

# Step 2: Check for blueprint file
if [ ! -f "aura-theme.blueprint" ]; then
  echo "❌ 'aura-theme.blueprint' file is missing!"
  echo "Please upload it to /var/www/pterodactyl before running this script."
  exit 1
fi

# Step 3: Install the Aura Theme via Blueprint
echo "📦 Installing Aura Theme from blueprint..."
php artisan p:themes:install aura-theme.blueprint

# Step 4: Set correct permissions
echo "🔐 Fixing permissions..."
chown -R www-data:www-data /var/www/pterodactyl

# Step 5: Clear Laravel cache
echo "🧹 Clearing Laravel cache..."
php artisan optimize:clear
php artisan view:clear

# Step 6: Done!
echo ""
echo "✅ Aura Theme has been successfully installed!"
echo "🎨 Visit your Pterodactyl panel to see the changes."
