import React from "react"
import style from "./separateExample.module.scss"

export const SeparateExample = (props) => {
    return (
       <div className={style.separeteExample} >
           <div className={style.imgBlock} style={props.style}>

                   <a href={`https://yandex.ru/`}>
                       <button>
                           смотреть
                       </button>
                   </a>


           </div>
           <div className={style.descriptionBlock}>
               <h3> {props.title}</h3>
               <span> {props.description} </span>
           </div>
       </div>

    )
}