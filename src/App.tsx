import { useState } from 'react'
import { Home } from './components/Home';
import { AceAttorney } from './components/AceAttorney';
import { YokaiWatch } from './components/YokaiWatch';
import { Zelda } from './components/Zelda';
import { Danganronpa } from './components/Danganronpa';
import { Persona } from './components/Persona';
import './App.css'

type World = 'home' | 'aa' | 'yokai' | 'zelda' |'danganronpa'|'persona';

function App() {
  const [world, setWorld] = useState<World>('home');

  const switchWorld = (newWorld: World) => {
    setWorld(newWorld);
  };




  return (
      <>
          <h1>Bienvenue à Wande Land</h1>

          <nav className="mode-nav d-flex gap-2">
              <button
                  className={world === 'home' ? 'active': ''}
                  onClick={() => switchWorld('home')}
              >
                  Home
              </button>
              <button
                  className={world === 'home' ? 'active' : ''}
                  onClick={() => switchWorld('aa')}
              >
                  Ace Attorney
              </button>
              <button
                  className={world === 'home' ? 'active' : ''}
                  onClick={() => switchWorld('yokai')}
              >
                  Yokai World
              </button>
              <button
                  className={world === 'home' ? 'active' : ''}
                  onClick={() => switchWorld('zelda')}
              >
                  Royaume d'Hyrule
              </button>
              <button
                  className={world === 'home' ? 'active' : ''}
                  onClick={() => switchWorld('danganronpa')}
              >
                  Danganronpa
              </button>
              <button
                  className={world === 'home' ? 'active' : ''}
                  onClick={() => switchWorld('persona')}
              >
                  Persona
              </button>
          </nav>


          <main className="app-main">
              {world === 'home' && (
                  <Home/>
              )}
              {world === 'aa' && (
                  <AceAttorney/>
              )}
              {world === 'yokai' && (
                  <YokaiWatch/>
              )}
              {world === 'zelda' && (
                  <Zelda/>
              )}
              {world === 'danganronpa' && (
                  <Danganronpa/>
              )}
              {world === 'persona' && (
                  <Persona/>
              )}
          </main>
      </>


  )
}

export default App
