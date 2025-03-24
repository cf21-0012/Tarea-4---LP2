import { useState } from "react"
import productosData from "./productos.json";

export const ProductApp = () =>{
        const[productos] = useState(productosData)
        return(
                <>
                <h1>Lista de Productos</h1>
                <table border = "1">
                        <thead>
                                <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Existencias</th>
                                        <th>Precio</th>
                                        <th>Porcentaje de <br></br> Descuento</th>
                                        <th>Descuento Aplicado</th>
                                </tr>
                        </thead>
                        <tbody>
                                {productos.map(prd => {
                                        return(
                                                <>
                                                <tr>
                                                                <td>{prd.id}</td>
                                                                <td> {prd.nombre} </td>
                                                                <td>{prd.cantidad_existencia}</td>
                                                                <td>${prd.precio}</td>
                                                                <td>{prd.porcentaje_descuento}%</td>
                                                                <td>${Math.round(prd.precio * (prd.porcentaje_descuento/100))}</td>
                                                </tr>
                                                </>
                                        )
                                })}
                        </tbody>
                </table>
                </>
        )
}