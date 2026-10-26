import { Hono } from 'hono'

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
      <body class="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
        <main class="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
            {props.children}
          </div>
        </main>
        <footer class="max-w-2xl mx-auto px-4 sm:px-6 pb-8 text-sm text-gray-500">
          <div class="border-t border-gray-200 pt-4">
            Übungsprojekt – KI-unterstützt erstellt
          </div>
        </footer>
      </body>
    </html>
  )
}

const Section = (props: { title: string; children: any }) => {
  return (
    <section class="mt-8 sm:mt-10">
      <h2 class="text-xl sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-3">{props.title}</h2>
      <div class="text-base leading-relaxed text-gray-800">{props.children}</div>
    </section>
  )
}

app.get('/', (c) => {
  return c.html(
    <Layout>
      <header class="space-y-3">
        <div class="flex items-center gap-3 flex-wrap">
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Joshua Krause</h1>
          <span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs sm:text-sm font-medium text-emerald-800">
            WiSe 2026/27
          </span>
        </div>
        <p class="text-lg sm:text-xl text-gray-700 leading-relaxed">
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
