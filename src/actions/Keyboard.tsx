import React from "react";
import {appWindow} from '@tauri-apps/api/window'

export default function KeyBoard(event:React.KeyboardEvent){
 if(event.key === ' '){
    appWindow.toggleMaximize()
 }
}