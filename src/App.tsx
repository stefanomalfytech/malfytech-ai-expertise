
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Welcome to MalfyTech
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 text-center">
              Your application is now ready to use!
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm">
            <p>MalfyTech SRL | P.IVA: 14225300962 | Via Pellegrino Rossi 15 / 1, 20161 Milano | Capitale Sociale 10.000€</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
