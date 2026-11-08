import { Hono } from 'hono'

const app = new Hono()

const Layout = (props: { children: any }) => {
  return (
    <html lang="de" class="dark">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joshua Krause</title>
        <meta name="description" content="Persönliche Seite von Joshua Krause" />
<script src="https://cdn.tailwindcss.com"></script>
          <script dangerouslySetInnerHTML={{ __html: "tailwind.config = { darkMode: 'class', theme: { extend: { colors: { primary: '#10B981' } } } }" }} />
      </head>
      <body class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <main class="flex-grow container mx-auto px-4 py-12">
          {props.children}
        </main>
        <footer class="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
          Erstellt mit OpenCode und KI:connect.nrw, gehostet auf Cloudflare Workers
        </footer>
      </body>
    </html>
  )
}

const Hero = () => (
  <section class="bg-gradient-to-r from-primary to-green-400 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center text-white mb-12 shadow-lg">
    <h1 class="text-4xl font-extrabold mb-2">Joshua Krause</h1>
    <p class="text-xl">M.Sc. Wirtschaftspsychologie – FernUniversität in Hagen</p>
    <p class="mt-2 text-sm italic">WiSe 2026/27 – Angewandtes digitales Entrepreneurship für nachhaltigen Impact</p>
  </section>
)

const Card = ({ title, children }: { title: string; children: any }) => (
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
    <h2 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{title}</h2>
    <div class="text-gray-700 dark:text-gray-300">{children}</div>
  </div>
)

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Hero />
      <Card title="Studium 📚">
        <p>M.Sc. Wirtschaftspsychologie an der FernUniversität in Hagen.</p>
      </Card>
      <Card title="Seminar 🎓">
        <p>„Angewandtes digitales Entrepreneurship für nachhaltigen Impact“ (WiSe 2026/27).</p>
      </Card>
    </Layout>
  )
})

app.get('/health', (c) => {
  return c.json({ status: 'ok' })
})

export default app
