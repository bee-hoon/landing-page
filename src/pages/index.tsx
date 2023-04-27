import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-4 py-20 md:p-20 bg-purple-200 ${inter.className}`}
    >
      <h2 className='text-blue-500 text-2xl md:text-2xl mb-4'>Hello</h2>
      <h1 className='text-blue-400 text-4xl md:text-5xl mb-4'>I&apos;m <span className='text-blue-500 font-semibold'>Ahmad Syauqi</span></h1>
      <h2 className='text-blue-400 text-3xl md:text-4xl mb-8'><span className='text-blue-500 font-semibold'>a </span>Software Engineer</h2>

      <section className='call-to-action mt-10'>
        <a href="mailto:syauqeesy@gmail.com" className='border-2 border-blue-500 hover:border-blue-700 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-8 rounded'>Hire me!</a>
        <a href="https://github.com/bee-hoon" className='border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-2 px-4 rounded'>Portfolio</a>
      </section>

      <footer className='mt-auto'>
        <p className='text-center text-blue-400 text-xs'>made with love by Syauqi.</p>
      </footer>
    </main>
  )
}
