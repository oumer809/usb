
import React from 'react'
import Sidebar from './components/Sidebar'
import MainComponent from './components/MainComponent'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full bg-slate-800'>
    <main className='max-w-[1240px] mx-auto '>        
     <Navbar />
      <div className='flex '>
      <Sidebar />
      <div>
      <MainComponent />
      </div>
      </div>
      
    </main>
    </div>
  )
}

export default App