# 🌌 Aura Theme — A Fully Customizable Pterodactyl Theme

Aura Theme is a **modern, stylish, and fully customizable** theme for the [Pterodactyl Panel](https://pterodactyl.io), designed to enhance your hosting experience with sleek visuals and simple controls.

![Preview](preview.png)

---

## 🚀 Features

- 🎨 Fully customizable UI (colors, fonts, logo, etc.)
- 🧩 Built-in Player Manager
- 📁 Clean and modern interface inspired by Nebula
- 📦 Blueprint support for one-command install
- ⚡ Lightweight and fast

---

## 📥 Installation

### 🔹 One-Command Blueprint Installation (Recommended)

> Make sure you have the `aura-theme.blueprint` file uploaded in your panel directory (`/var/www/pterodactyl`).

```bash
# 1. Go to your Pterodactyl directory
cd /var/www/pterodactyl

# 2. Install the Aura Theme blueprint
php artisan p:themes:install aura-theme.blueprint

# 3. Fix ownership/permissions
chown -R www-data:www-data /var/www/pterodactyl

# 4. Clear caches
php artisan optimize:clear
php artisan view:clear
