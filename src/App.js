import React,{useState} from 'react'
import Navbar from './components/Navbar'
import LoadingBar from "react-top-loading-bar";
import Footer from './components/Footer';

export default function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Navbar setProgress={setProgress}/>
      <LoadingBar color="#f11946" height="5px" progress={progress} />
      <Footer/>
    </div>
  )
}
