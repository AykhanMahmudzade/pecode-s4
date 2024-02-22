import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'

// * Komponentler gelecek

import NavbarKomponenti from './components/Navbar'
import Intro from './components/Intro'

function App() {

  return (
    <>
    < NavbarKomponenti />
    <Intro/>
    </>
  )
}

export default App
