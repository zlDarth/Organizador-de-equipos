import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const background = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const color = {
        borderColor: colorPrimario
    }
    
    return <>
    {
        colaboradores.length > 0 &&
        <section className='equipo' style={background}>
            <input
                type="color"
                className="input-color"
                value={hexToRgba(colorPrimario, 0.6)}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}
            
            />
            <h3 style={color}>{titulo}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                /> ) 
                }
            </div>
        </section>
    }
    </>

}

export default Equipo