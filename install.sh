#!/bin/bash

echo "🚀 Installing Aura Theme..."

# Paths
PTERO_DIR="/var/www/pterodactyl"
THEMES_DIR="$PTERO_DIR/public/themes"
BLADE_FILE="$PTERO_DIR/resources/views/layouts/app.blade.php"
AURA_JS="$THEMES_DIR/aura.js"
SCRIPT_TAG='<script src="/themes/aura.js"></script>'

# Make sure the themes directory exists
mkdir -p "$THEMES_DIR"

# Download inject.js into aura.js
curl -s https://raw.githubusercontent.com/aadi755/aadi755-ptero-aura-theme/main/inject.js -o "$AURA_JS"

# Inject <script> into app.blade.php if not already present
if grep -Fxq "$SCRIPT_TAG" "$BLADE_FILE"; then
    echo "ℹ️ Aura script already injected in app.blade.php"
else
    echo "$SCRIPT_TAG" >> "$BLADE_FILE"
    echo "✅ Injected Aura Theme script into app.blade.php"
fi

echo "🎉 Done! Refresh your panel to see Aura Theme."
