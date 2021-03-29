import React from "react"
import style from "./TitleForSkill/titleForSkill.module.scss"

export const TitleForSkill = (props) => {
    return (
                <div className={style.title} >
                    <h5>{props.title}</h5>
                </div>
    )
}