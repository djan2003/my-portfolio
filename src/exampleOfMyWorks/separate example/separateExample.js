import React from "react"
import style from "./separateExample.module.css"

export const SeparateExample = (props) => {
    return (
       <div className={style.separeteExample} >
           <div className={style.imgBlock}>
               <a href={`https://yandex.ru/`}>смотреть</a>
           </div>
           <div className={style.descriptionBlock}>
               <h3> {props.title}</h3>
               <span> {props.description} </span>
           </div>
       </div>

    )
}