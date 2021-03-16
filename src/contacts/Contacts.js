import React from "react"
import styles from "./contacts.module.css"
import styleCom from "../common/styles/styles.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleCom.container} ${styles.contactsContainer}`}>
    <h2>Контакты</h2>
    <form className={styles.form} >
        <input />
        <input/>
        <textarea/>
    </form>
    <button>Отправить</button>
            </div>

        </div>

    )
}