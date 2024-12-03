import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Horizon Stream
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Ana Sayfa
          </Link>
          <Link href="/login" className="hover:text-gray-300">
            Giriş Yap
          </Link>
          <Link href="/register" className="hover:text-gray-300">
            Kayıt Ol
          </Link>
          <Link href="/testt" className="hover:text-gray-300">Testt</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
