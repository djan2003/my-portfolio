import React from "react"
import style from "./header.module.scss"
import {Nav} from "../navbar/Nav";

export const Header=()=>{
    return(
        <div className={style.header} >
            <Nav/>
        </div>

    )
}