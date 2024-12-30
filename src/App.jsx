import { useState } from 'react'


import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'






function App() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
 <>
 
 
 <div> 
 <Navbar setSearchQuery={setSearchQuery} />
 <Home searchQuery={searchQuery} />
 <Footer/>
 </div>


 
 </>
  )
}

export default App
