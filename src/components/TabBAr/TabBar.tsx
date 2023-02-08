import React from 'react'
import './TabBar.scss'
import {NavLink} from 'react-router-dom'
import {appWindow} from '@tauri-apps/api/window'
function TabBar() {
  return (
    <div data-tauri-drag-region className="bar">
    <div className="titlebar-button flex" id="titlebar-close" onClick={()=> appWindow.close()}>
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
    </div>
    <div className="titlebar-button flex" id="titlebar-maximize" onClick={()=> appWindow.toggleMaximize()}>
        <img
        src="https://api.iconify.design/mdi:window-maximize.svg"
        alt="maximize"
        />
    </div>
    <div className="titlebar-button flex " id="titlebar-minimize" onClick={()=> appWindow.minimize()}>
        <img
        src="https://api.iconify.design/mdi:window-minimize.svg"
        alt="minimize"
        />
    </div>
</div>
  )
}

export default TabBar