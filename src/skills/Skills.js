import React from "react"
import styleCom from "../common/styles/styles.module.css"
import style from "./skills.module.scss"
import {Skill} from "./skill/skill";
import {Title} from "../common/components/Title";

export const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleCom.container} ${style.container}`} >
                <Title title={"skills"}/>

                <div className={style.skills} >
                    <Skill title={"HTML"} description={"some text how i am awesome" +
                    "some text how i am awesome some text how i am awesome "}/>
                    <Skill title={"CSS"}  description={"some text how i am awesome"} />
                    <Skill title={"React js"} description={"some text how i am awesome"} />
                    <Skill title={"React js"} description={"some text how i am awesome"} />
                    <Skill title={"React js"} description={"some text how i am awesome"} />

                </div>

            </div>

        </div>

    )
}