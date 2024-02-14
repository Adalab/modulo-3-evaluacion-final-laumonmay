import '../scss/App.scss'

import Header from './Header'
import Filters from './Filters'
import Gallery from './Gallery'

function App() {
  return (
    <div className="app">
      <Header/>

      <main>
        <Filters/>

        <Gallery/>
      </main>
     
    </div>
  )
}

export default App
