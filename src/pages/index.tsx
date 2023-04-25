import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-4 py-16 md:p-24 bg-purple-200 ${inter.className}`}
    >
      <h2 className='text-blue-500 text-3xl md:text-3xl mb-4'>Hello</h2>
      <h1 className='text-blue-400 text-4xl md:text-5xl mb-4'>I&apos;m <span className='text-blue-500 font-semibold'>Ahmad Syauqi</span></h1>
      <h2 className='text-blue-400 text-4xl md:text-5xl mb-8'><span className='text-blue-500 font-semibold'>a </span>Software Engineer</h2>
    </main>
  )
}
