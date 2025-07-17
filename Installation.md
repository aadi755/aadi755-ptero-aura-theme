# 🔧 Aura Theme Installation Guide

Aura Theme is a fully customizable Pterodactyl theme with modern design and one-command Blueprint support. Follow the instructions below to install it.

---

## 🚀 Option 1: One-Command Blueprint Install (Recommended)

> Make sure you have `aura-theme.blueprint` in `/var/www/pterodactyl`

```bash
# 1. Go to your Pterodactyl directory
cd /var/www/pterodactyl

# 2. Install the Aura Theme
php artisan p:themes:install aura-theme.blueprint

# 3. Fix permissions
chown -R www-data:www-data /var/www/pterodactyl

# 4. Clear cache
php artisan optimize:clear
php artisan view:clear
