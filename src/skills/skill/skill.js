import React from "react"
import style from "./skill.module.css"

export const Skill = (props) => {
    return (
        <div className={style.skillContainer}>
            <div className={style.icon}></div>
            <h3>{props.title} </h3>
            <span className={style.description} > {props.description}</span>
        </div>

    )
}