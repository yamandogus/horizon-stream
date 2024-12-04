import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Horizon Stream. Tüm hakları saklıdır.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-300">Hakkımızda</a>
          <a href="#" className="hover:text-gray-300">İletişim</a>
          <a href="#" className="hover:text-gray-300">Gizlilik Politikası</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
