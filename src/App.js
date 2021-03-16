import React from "react"
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorksExample} from "./exampleOfMyWorks/ExampleOfMyWorks";
import {Telework} from "./telework/Telework";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

export const App=()=>{
return(
    <div>
        <Header/>
        <Main/>
        <Skills/>
        <MyWorksExample/>
        <Telework/>
        <Contacts/>
        <Footer/>
    </div>

)
}