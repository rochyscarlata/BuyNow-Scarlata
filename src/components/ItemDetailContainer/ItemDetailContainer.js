import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import picture1 from '../../assets/Productos/maceta1.jpg';
import picture2 from '../../assets/Productos/maceta2.jpg';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase';


function ItemDetailContainer () {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection.get().then(querySnapshot => {
      if (querySnapshot.size === 0) {
        console.log('No se encontraron resultados');
        setLoading(false);
      }
      if(id){
        let item = querySnapshot.docs.map(doc => doc.data());
        item.forEach(function agregarId(element, index) {
          element.id = querySnapshot.docs[index].id;
        });
        const found = item.find(element => element.id === id);
        setItems(found);
        if(found){ setLoading(false); }            
      }
    });
  }, [id]);
  
  return (
    <div className="itemList">
      {loading ? <p>Cargando...</p> : 
        <ItemDetail
          key={items.id}
          id={items.id}
          title={items.title}
          description={items.description}
          price={items.price}
          pictureUrl={items.pictureUrl}
          stock={items.stock}
        />
      }
    </div>
  );
}
  
export default ItemDetailContainer;