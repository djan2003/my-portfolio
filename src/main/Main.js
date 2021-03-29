import React from "react"
import style from "./main.module.scss"
import styleCom from "../common/styles/styles.module.css"

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleCom.container} >
                <div className={style.text}>
                    <p>Hello everybody</p>
                        <h2> I am Nikiforov Viacheslav</h2>

                    <span>Frontend Developer </span>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>

    )
}