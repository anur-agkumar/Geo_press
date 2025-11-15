import { useState } from "react"
import Menu from "./Menu";

function Nav({ismenuopen,setismenuopen}) {
    
        

  return (
    <div className="text-white flex flex-row justify-around  pt-5 backdrop-blur-xs">
        <div className="flex flex-row">
            <img src="https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65877317a643aef5d531635e_Symbol_White.svg" 
        alt="logo"
        width="50px"
        height="40px" />
        <h1 className="p-3 ">GEOPRESS</h1>
        </div>
        <div className="flex flex-row justify-center">
            <img src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E" 
            alt=""
            width="10px"
            height="10px" />
            <h2 className="p-3">{ismenuopen?"Menu":"Welcome"}</h2>
        </div>
        <button 
        
        className="border-[#E0FF00]  flex flex-row justify-center gap-4 items-center border-2 rounded-3xl w-[170px] h-[52px] hover:translate-x-2 " onClick={()=>
            setismenuopen(!ismenuopen)
        }>

          {ismenuopen?"close":"Menu"}
          <div className="flex flex-col justify-between w-6 h-4 cursor-pointer group">
<span className="block h-0.5 w-full bg-[#E0FF00] rounded transition-all duration-300 group-hover:translate-y-0.5"></span>
<span className="block h-0.5 w-full bg-[#E0FF00] rounded transition-all duration-300 group-hover:-translate-y-0.5"></span>
</div>
          </button>
    </div>
  )
}

export default Nav