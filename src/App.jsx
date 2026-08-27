import './App.css'
import { Navbar } from './features/navbar'
import { Hero } from './features/hero'

function App() {
    return(
        <div className='bg-[#FFF8EA] min-h-screen'>
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default App
