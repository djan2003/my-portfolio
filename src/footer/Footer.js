import React from "react"
import style from "./footer.module.css"

export const Footer=()=>{
    return(
        <footer className={style.footer} >
           <div>
               <h3>
                   Никифоров Вячеслав
               </h3>
           </div>
           <div className={style.socialNet}>
               <div className={style.nameOfSocial}>1</div>
               <div className={style.nameOfSocial}>2</div>
               <div className={style.nameOfSocial}>3</div>
               <div className={style.nameOfSocial}>4</div>
               <div className={style.nameOfSocial}>5</div>
               <div className={style.nameOfSocial}>6</div>
               <div className={style.nameOfSocial}>7</div>
           </div>
           <div>
              2021 Все права защищены
           </div>
        </footer>

    )
}