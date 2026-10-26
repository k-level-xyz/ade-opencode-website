import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

const app = new Hono()

const Layout = (props: { children: any }) => {
  return (
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joshua Krause</title>
        <meta name="description" content="Landingpage von Joshua Krause" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-white text-gray-900">
        <main class="max-w-2xl mx-auto px-4 py-12">{props.children}</main>
        <footer class="max-w-2xl mx-auto px-4 pb-8 text-sm text-gray-500">
          Übungsprojekt – KI-unterstützt erstellt
        </footer>
      </body>
    </html>
  )
}

const Section = (props: { title: string; children: any }) => {
  return (
    <section class="mt-8">
      <h2 class="text-xl font-semibold mb-2">{props.title}</h2>
      <div class="text-base leading-relaxed">{props.children}</div>
    </section>
  )
}

app.get('/', (c) => {
  return c.html(
    <Layout>
      <header>
        <h1 class="text-3xl font-bold">Joshua Krause</h1>
        <p class="mt-2 text-lg text-gray-700">
          Master Wirtschaftspsychologie an der FernUniversität in Hagen
        </p>
      </header>
      <Section title="Seminar">
        <p>
          Ich nehme am Seminar „Angewandtes digitales Entrepreneurship für nachhaltigen Impact“ (WiSe 2026/27) teil.
        </p>
      </Section>
      <Section title="Diese Seite">
        <p>
          Diese Seite ist ein kleines Übungsprojekt, erstellt mit Hono, Tailwind und Cloudflare Workers unter Verwendung des AI-Coding-Agenten OpenCode, als Seminarvorbereitung.
        </p>
      </Section>
    </Layout>
  )
})

app.get('/health', (c) => {
  return c.json({ status: 'ok' })
})

export default app
