import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Bonjour Tristan 👋</h1>
        <p className="py-6">En avant pour une nouvelle journée !</p>
      </div>
    </div>
   </main>
  )
}
