import React from "react"
import style from "./skill.module.scss"
import {TitleForSkill} from "../../common/components/TitleForSkill";

export const Skill = (props) => {
    return (
        <div className={style.skillContainer}>

            <div className={style.icon}>
                <i className={props.icon}></i>
            </div>
            <TitleForSkill title={props.title}/>
            <p className={style.description}> {props.description}</p>
        </div>

    )
}