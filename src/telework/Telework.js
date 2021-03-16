import React from "react"
import style from "./Telework.module.css"
import styleCom from "../common/styles/styles.module.css";
import styles from "./Telework.module.css"

export const Telework = (props) => {
    return (
        <div className={style.teleworkBlock}>
<div className={`${styleCom.container} ${styles.teleworkContainer}`}>
    <div>
    <h3>Рассматриваю варианты удаленной работы</h3>
    </div>
    <div>
        <a
            href={`https://ru.wikipedia.org/wiki/%D0%A6%D1%83%D0%BA%D0%B5%D1%80%D0%B1%D0%B5%D1%80%D0%B3,_%D0%9C%D0%B0%D1%80%D0%BA`}>
            Нанять меня

        </a>
    </div>

</div>

        </div>

    )
}