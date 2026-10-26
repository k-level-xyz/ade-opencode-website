# Landingpage – ADE-Seminar (Übungsprojekt)

Kleine Landingpage von Joshua Krause (Master Wirtschaftspsychologie, FernUniversität in Hagen) im Rahmen der Exercise „Build a website“
des Seminars „Angewandtes digitales Entrepreneurship für nachhaltigen Impact“ (WiSe 2026/27).

- **Stack:** [Hono](https://hono.dev) (JSX) · [Tailwind CSS](https://tailwindcss.com) (CDN-Play-Script) · [Cloudflare Workers](https://workers.cloudflare.com) (Wrangler)
- **Routen:** `/` (Landingpage), `/health` (JSON `{"status":"ok"}`)
- **KI-Unterstützung (transparent):** Projekt-Scaffold mit `npm create hono@latest`; die JSX-Seite und das Styling wurden mit dem KI-Coding-Agenten
  [OpenCode](https://opencode.ai) (Gratis-Modell `opencode/big-pickle`) erzeugt, danach manuell geprüft und angepasst.

## Lokal starten
Wrangler 4 benötigt **Node.js ≥ 22**.
```bash
npm install
npm run dev        # http://localhost:8787
```

## Deployment (erst nach Cloudflare-Login)
```bash
npx wrangler login
npm run deploy     # -> https://<name>.<subdomain>.workers.dev
```
