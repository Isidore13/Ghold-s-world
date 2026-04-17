import { useState } from 'react'
import { Home } from './components/Home';
import { AceAttorney } from './components/AceAttorney';
import './App.css'

type World = 'home' | 'aa';

function App() {
  const [world, setWorld] = useState<World>('home');

  const switchWorld = (newWorld: World) => {
    setWorld(newWorld);
  };




  return (


      <>
          <nav className="mode-nav">
              <button
                  className={world === 'home' ? 'active' : ''}
                  onClick={() => switchWorld('home')}
              >
                  Étude
              </button>
              <button
                  className={world === 'aa' ? 'active' : ''}
                  onClick={() => switchWorld('aa')}
              >
                  Quiz
              </button>
          </nav>


          <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/2680034792" width="100%"
                  height="600" frameBorder="0"
                  allow="encrypted-media; clipboard-write"></iframe>

          <main className="app-main">
              {world === 'home' && (
                  <Home/>
              )}
              {world === 'aa' && (
                  <AceAttorney/>
              )}
          </main>
      </>


  )
}

export default App
