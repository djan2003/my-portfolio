import React from "react"
import style from "./skill.module.css"

export const Skill = (props) => {
    return (
        <div className={style.skillContainer}>
            <div className={style.icon}></div>
            <h5 className={style.titleForSkill}>{props.title} </h5>
            <hr className={style.line}/>
            <span className={style.description} > {props.description}</span>
        </div>

    )
}