import './App.css'
import Rendering from './Components/Rendering'
import Search from './Components/Search'
import { ImageProvider } from './Context/Context'

function App() {
  return (
    <ImageProvider >
      <Search/>
      <Rendering/>
    </ImageProvider>
  )
}

export default App
