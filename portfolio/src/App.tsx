import { useState, useEffect } from 'react'
import './App.css'
import LeftSection from './components/LeftSection'
// import MainNavBar from './components/MainNavBar'
import MainNavBarV2 from './components/MainNavBarV2'
import VerticalCarousel from './components/VerticalCarousel'

function App() {
    const [currentlySelectedID, setCurentlySelectedId] = useState<string>('')
    const [previouslySelectedID, setPreviouslySelectedID] = useState<string>('')
    const [display, setDisplay] = useState<boolean>(false);


    useEffect(() => {
        if(currentlySelectedID != "Project")
        {
            setPreviouslySelectedID(currentlySelectedID);
        }
    }, [currentlySelectedID])

  return (
    <>
      <main className="font-MainFont w-full h-full flex bg-MainColor">
        <LeftSection state={currentlySelectedID} setState={setCurentlySelectedId} previousState={previouslySelectedID}/>
        <MainNavBarV2 state={currentlySelectedID} setState={setCurentlySelectedId} previousState={previouslySelectedID}/>
        <VerticalCarousel state={currentlySelectedID} setState={setCurentlySelectedId} previousState={previouslySelectedID}/>
      </main>
    </>
  )
}

export default App