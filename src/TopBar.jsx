import React, {useEffect, useState} from "react";

function TopBar(props){



    return(
        <div className="bg-green-700 grid grid-cols-15 z-2">
            <img src={props.icon} className="size-10 col-start-1"></img>
            <h1 className="self-center">{props.name}</h1>
            <span className="col-start-3 col-span-11 w-full cursor-grab z-1"></span>
            <button className="self-start col-start-14 border-2 m-1 rounded-full bg-yellow-300 hover:bg-yellow-500 w-full z-1" onClick={() => (props.onMinimize())}>-</button>
            <button className="self-start col-start-15 border-2 m-1 rounded-full bg-red-300 hover:bg-red-500 w-full z-1" onClick={() => (props.onClose(props.id))}>X</button>
        </div>
    )
}

export default TopBar;