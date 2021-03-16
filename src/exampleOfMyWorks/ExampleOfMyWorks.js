import React from "react"
import styles from "./MyWorksExample.module.css"
import styleCom from "../common/styles/styles.module.css";
import {SeparateExample} from "./separate example/separateExample";


export const MyWorksExample = () => {
    return (
        <div className={styles.exampleBlock}>
            <div className={`${styleCom.container} ${styles.exampleContainer}`}>
                <h2>My works example </h2>
                <div className={styles.exampls}>

                    <SeparateExample title={"первый пример"}
                                     description={"тут я сделал это"}
                    />

                    <SeparateExample title={"третий пример"}
                                     description={"тут тоже хорошо"}
                    />
                    <SeparateExample title={"третий пример"}
                                     description={"тут тоже хорошо"}
                    />


                </div>
            </div>


        </div>

    )
}