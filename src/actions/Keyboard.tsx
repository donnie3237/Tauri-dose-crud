import React from "react";
import {appWindow} from '@tauri-apps/api/window'

export function KeyBoard(event:React.KeyboardEvent){
 if(event.key === ' '){
    appWindow.toggleMaximize()
 }
}
export function OnlyNumber(event:React.KeyboardEvent){
   if(event.key === 'e' || event.key === '-'){
      event.preventDefault()
   }
}
export function OnlyAlphabetThai(event: React.KeyboardEvent) {

   const alphabetThaiRegex = /[a-zA-Zก-ฮเแโใไๅะาิีึืุูัฎัฑธํ๎]/;
 
   if (alphabetThaiRegex.test(event.key)) {
     return;
   }

   event.preventDefault();
 }