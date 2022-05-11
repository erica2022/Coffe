import { Container, Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail ({coffee}){
    const img =
    {
        width: "50%",
        paddingLeft: "20px",
        paddingTop: "20px",
    }

    return(
        <Container>
            <Card border="light" style={{ width: '18rem', height: '500px', border: '3px solid #000000', margin:'30px'}}>
            <Card.Img className="text-center" style={img} variant="top" src={"http://http2.mlstatic.com/D_860323-MLA47965909503_102021-I.jpg"} alt={coffee.id}/>
            <Card.Body>
            <Card.Title className="text-center">{coffee.title}</Card.Title>
            <Card.Text className="text-center"> 
                <p>Stock: {coffee.available_quantity}</p>
                <p>Precio: {coffee.price}</p>
            </Card.Text>
            <ItemCount stock = {coffee.available_quantity}/>
            </Card.Body>
            </Card>   
        </Container>
    )
}