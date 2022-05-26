import { useState } from "react";
import React, {} from "react";

function Element(props){
    const [item, setItem] = useState([]);

    const addItem = (props) =>{
        const newItems = {
            name:props.value,
            id: 20,
            cantidad:props.cantidad,

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
                                <li className="cabeza" key={item.id}>{item.id}
                                </li>
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

export default Element;