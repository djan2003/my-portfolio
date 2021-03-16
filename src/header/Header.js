import React from "react"
import style from"./header.module.css"
import {Nav} from "../navbar/Nav";

export const Header=()=>{
    return(
        <div className={style.header} >
            <Nav/>
        </div>

    )
}