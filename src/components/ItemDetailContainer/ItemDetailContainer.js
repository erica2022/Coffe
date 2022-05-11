import axios from "axios";
import React from "react";
import Coffee from "../ItemDetail/ItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer () {
    const [coffee, setCoffee] = React.useState ([])

    const getITem = () => {
        axios.get("https://api.mercadolibre.com/sites/MLA/search?q=coffee")
        .then(result => {
            setCoffee(result.data.results[0])
            console.log(coffee.id)
            console.log(coffee.title)
        })     
    }

    React.useEffect( () => {
        getITem();
    },[])

    return(
        <ItemDetail coffee={coffee}/>
    )
}