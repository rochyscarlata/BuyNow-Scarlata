import "./ItemListContainer.css";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";

import { getFirestore } from "../../factory/firebase";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No se encontraron resultados");
        setLoading(false);
      }
      if (id) {
        let item = querySnapshot.docs.map((doc) => doc.data());
        item.forEach(function agregarId(element, index) {
          element.id = querySnapshot.docs[index].id;
        });
        const found = item.filter((element) => element.category == id);
        setItems(found);
        if (found) {
          setLoading(false);
        }
      } else {
        let item = querySnapshot.docs.map((doc) => doc.data());
        item.forEach(function agregarId(element, index) {
          element.id = querySnapshot.docs[index].id;
        });
        setItems(item);
        setLoading(false);
      }
    });
  }, [id]);




  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>{props.greeting}</h1>
          <br></br>
        </Col>
      </Row>
      
          {loading && <div className="loader">Cargando...</div>}
          <ItemList items={items} />
        
    </Container>
  );
}

export default ItemListContainer;
