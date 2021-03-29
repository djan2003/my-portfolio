import React from "react"
import styles from "./MyWorksExample.module.scss"
import styleCom from "../common/styles/styles.module.css";
import {SeparateExample} from "./separate example/separateExample";
import {Title} from "../common/components/Title/Title";
import socialImg from "./../assets/img/SocialNetwork.jpg"
import todolistImg from "./../assets/img/todolist.jpg"


export const MyWorksExample = () => {
    const socialImage = {
        backgroundImage:`url(${socialImg})`
    }
    const todolistImage = {
        backgroundImage:`url(${todolistImg})`
    }

    return (
        <div className={styles.exampleBlock}>
            <div className={`${styleCom.container} ${styles.exampleContainer}`}>
                    <Title title={"My projects"}/>
                <div className={styles.exampls}>
                    <SeparateExample
                        style={socialImage}
                        title={"Social Network"}
                        description={"тут я сделал это"}
                    />

                    <SeparateExample
                        style={todolistImage}
                        title={"To Do List"}
                        description={"тут тоже хорошо"}
                    />


                </div>
            </div>


        </div>

    )
}