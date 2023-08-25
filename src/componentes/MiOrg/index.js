import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    return <section className="orgSction">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/boton_mas.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg