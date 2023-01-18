import Contact from './elements/Contact'
import Home from './elements/Home'
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
      <Navigation></Navigation>

      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/Contact' element={<Contact />}> </Route>
      </Routes>


      
    </div>
  )
}

export default App
