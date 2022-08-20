import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
  return (
    <div className="Card">
      <Card style={{ width: "18rem" }}>
<Card.Img variant="top" src={props.picture} alt={props.alt}
/>
<Card.Body>
<Card.Title><h3 className="brand"> {props.brand}</h3></Card.Title>
<Card.Text>
<p className="model">{props.model}</p>
</Card.Text>
<Button variant="primary">See more</Button>
</Card.Body>
</Card>
    </div>
  )
}

export default Cards