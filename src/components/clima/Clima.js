import React from 'react'
import {Card } from "react-bootstrap"

export default function Clima({resultado}) {

 const { main, name } = resultado

 if(!name) return null

 const kelvin = 273.15


    return (
        <div className="text-center clima" >
            <Card>
            <Card.Header as="h5"> Ciudad de {name} </Card.Header>
            <Card.Body>
                <Card.Text>
               la temperatura es de: {Math.round(main.temp - kelvin, 10 )} <span> &#x2103; </span>
                </Card.Text>
                <Card.Text>
               la temperatura Maxima es: {Math.round(main.temp_max - kelvin, 10 )} <span> &#x2103; </span>
                </Card.Text>
                <Card.Text>
               la temperatura Minima es: {Math.round(main.temp_min - kelvin, 10 )} <span> &#x2103; </span>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
