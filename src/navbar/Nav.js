import React from "react"
import style from"./nav.module.css"

export const Nav=()=>{
    return(
        <div className={style.nav} >
<a href="">Главная</a>
<a href="">Скилы</a>
<a href="">Работа</a>
<a href="">Контакты</a>
        </div>

    )
}