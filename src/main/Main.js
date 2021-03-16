import React from "react"
import style from "./main.module.css"
import styleCom from "../common/styles/styles.module.css"

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleCom.container} >
                <div className={style.text}>
                    <p>Hello everybody</p>
                    <h1> I am Nikiforov Viacheslav</h1>
                    <span>Frontend Developer </span>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>

    )
}