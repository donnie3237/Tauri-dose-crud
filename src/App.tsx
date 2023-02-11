import { useEffect, useState } from "react";
import { HashRouter as Router , Route ,Routes } from 'react-router-dom'
import Menu from "./components/menu/Menu";
import TabBar from "./components/TabBAr/TabBar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import FP from "./pages/Main/Main";
import Mem from "./pages/Mem/Mem";
import Stat from "./pages/Stat/Stat";
import Update from "./pages/Update/Update";
import ScrollToTop from "./actions/ScrollToTop";
import {appWindow} from '@tauri-apps/api/window'
import KeyBoard  from "./actions/Keyboard";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //use cannot drag link web
  document.addEventListener("dragstart", function(event) {
    event.preventDefault();
  });
  //not allow right click
  // window.addEventListener("contextmenu", event => {
  //   event.preventDefault();
  // });
  const [loading,setLoading] = useState<boolean>(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    setTimeout(() => {
      const StacK = document.getElementById('stack') as HTMLElement;
      StacK.style.width = '100%'
      StacK.style.transition = 'all 4.8s'
    }, 100);
    if(loading === false){
      appWindow.toggleMaximize()
    }
  })
  return (
    <div className="App">
      {loading?
       <div className="load flex">
        <div className="loading">
          <div className="stack" id="stack">
            
          </div>
        </div>
        </div>
       :
       <Router>
        <ScrollToTop />
        <TabBar/>
        <Menu/>
        <div className="contents flex">
        <Routes>
          <Route path="/" element={<FP/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/stat" element={<Stat/>}></Route>
          <Route path="/db" element={<Mem/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Routes>
        </div>
      </Router>
      }
      <ToastContainer className="Toast"
            position="top-right"
        />
    </div>
  );
}

export default App;
