import { useState, useEffect } from 'react'
import './App.css'
import LeftSection from './components/LeftSection'
// import MainNavBar from './components/MainNavBar'
import MainNavBarV2 from './components/MainNavBarV2'
import VerticalCarousel from './components/VerticalCarousel'
import useMediaQuery from './modules/useMediaQuery'

function App() {
    const [currentlySelectedID, setCurentlySelectedId] = useState<string>('')
    const [previouslySelectedID, setPreviouslySelectedID] = useState<string>('')
    const desktopMatch = useMediaQuery('(min-width:1280px)')



    useEffect(() => {
        if(currentlySelectedID != "Project")
        {
            setPreviouslySelectedID(currentlySelectedID);
        }
    }, [currentlySelectedID])

  return (
    <>
      <main className="absolute inset-0 flex overflow-hidden bg-MainColor">
        <div className='flex grow'>
        <div className="absolute z-0 w-[120%] h-24 max-xl:h-[120%] max-xl:w-24 max-xl:left-1/2 max-xl:-translate-x-1/2 bg-CenterBand overflow-hidden self-center drop-shadow-[4px_0_4px_rgba(0,0,0,1)]"></div>
          <LeftSection state={currentlySelectedID} setState={setCurentlySelectedId} previousState={previouslySelectedID} isDesktop={desktopMatch}/>
          <MainNavBarV2 state={currentlySelectedID} setState={setCurentlySelectedId} previousState={previouslySelectedID} isDesktop={desktopMatch}/>
          <VerticalCarousel state={currentlySelectedID} setState={setCurentlySelectedId} previousState={previouslySelectedID} isDesktop={desktopMatch}/>
        </div>
      </main>
    </>
  )
}

export default App