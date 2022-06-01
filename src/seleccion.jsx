import React, {} from "react";
import Mostrar from "./mostrarImagen";
import { useState } from "react";

function Seleccion(){
    const [value, setNewValue] = useState('Articulo');
    const [precio, setNewPrecio] = useState('6');
    const [cant, setNewCant] = useState(0);

    const multiEvent =(e)=>{
        setNewValue(e.target.value);
    }

            return(
            <div>
                <div className='seleccion'>
                    <label className='cabeza'>Escoja su producto
                        <select defaultValue={value} clasname="lista" onChange= {multiEvent} >
                            <option precio="12.4" value="camisa">Camisa</option>
                            <option precio="41.75" value="Pantalon">Pantalon</option>
                            <option precio="71.25" value="Blusa">Blusa</option>
                            <option precio="82.7" value="Calcetas">Calcetas</option>
                            <option precio="18.4" value="Ropa interior">Ropa interior</option>
                            <option precio="147.2" value="Bufanda">Bufanda</option>
                            <option precio="27.4" value="Saco">Saco</option>
                            <option precio="27.7" value="Camison">Camison</option>
                            <option precio="152.4" value="Vestido">Vestido</option>
                            <option precio="18.4" value="Corbata">Corbata</option>
                        <button className="botonMenor" onClick={multiEvent}>Agregar</button>
                        </select>
                    <div>
                        <Mostrar value={value}/>
                    </div>
                    </label>
                    <button onClick={()=>setNewCant(cant - 1)} className="botonMenor" >-</button>
                    <button onClick={()=>setNewCant(cant + 1)} className="botonMenor" >+</button>
                    <h3>{cant}</h3>

                    <Element value={value} precio={precio} cantidad={cant}></Element>
                
                </div>  
            </div>
        )
}


function Element(cant, value, precio){
    const [item, setItem] = useState([]);

    const addItem = (props) =>{
        const newItems = {
            name:props.value,
            id: 20,
            cantidad:props.cant,
            preci:props.precio
        }
        setItem([...item, newItems]);
    }

    const removeItem=(id)=>{
        const newItem = item.filter((item)=> item.id === id);
        setItem(newItem);
    };

    return(
        <div className="cabeza">
            <h4>Nota de Venta</h4>
                    <table class="default">
                        <tr>
                            <th>Articulo</th>
                            <th>Id</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td className="cabeza">
                            <ul className="cabeza">
                                {item.map((item)=>(
                                <li className="cabeza" key={item.name}>{item.name}
                                </li>
                                ))}
                            </ul>
                            </td>
                            <td className="cabeza">
                            <ul className="cabeza" key={item.id}>
                            {item.map((item)=>(
                                <ul className="cabeza"> {item.id}</ul>
                                ))}
                            </ul>
                            </td>
                            <td className="cabeza">
                            <ul className="cabeza" key={item.cantidad}>
                            {item.map((item)=>(
                                <ul className="cabeza"> {item.cantidad}</ul>
                                ))}
                            </ul>
                            </td>
                        </tr>
                        </table>
            <button className="botonEliminar" onClick={removeItem}>Eliminar</button>
            <button onClick={addItem} className="botonAgregar" >Agregar</button>
            <div>
        </div>
        </div>
    );
}


export default Seleccion;