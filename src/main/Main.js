import React from "react"
import style from "./main.module.scss"
import styleCom from "../common/styles/styles.module.css"
import PortfolioIMG from "../assets/img/ForPortfolioBlackWhite.jpg";

export const Main = () => {
    const imageForPortfolio = {
        backgroundImage:`url(${PortfolioIMG})`
    }
    return (
        <div className={style.main}>
            <div className={styleCom.container}>
                <div className={style.text}>
                    <h5>Hello,my name is</h5>
                    <h1>Nikiforov <br/><br/>    Viacheslav</h1>
                    <p>Frontend Developer </p>
                </div>
                <div>
                <div style={imageForPortfolio} className={style.photo}></div>
                </div>
            </div>

        </div>

    )
}