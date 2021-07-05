import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../Item/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ItemListContainer = ({ greeting }) => {
    // const onAdd = (amount) => {
    //     alert(`Agregaste ${amount} ${amount === 1 ? 'producto' : 'productos'}`)
    // }

    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: "AA00",
                    title: "Producto1",
                    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas consectetur.",
                    price: 500,
                    pictureUrl: 'https://via.placeholder.com/300x200?text=ImagePlaceholder',
                    category: "aa00"
                },
                {
                    id: "AA02",
                    title: "Producto2",
                    description: "Morbi et venenatis purus. Fusce est tellus, maximus in elit sed, egestas tincidunt sem. Nullam.",
                    price: 1270,
                    pictureUrl: 'https://via.placeholder.com/300x200?text=ImagePlaceholder',
                    category: "aa00"
                },
                {
                    id: "AB02",
                    title: "Producto3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nibh interdum, dignissim arcu quis.",
                    price: 3555,
                    pictureUrl: 'https://via.placeholder.com/300x200?text=ImagePlaceholder',
                    category: "aa01"
                }
            ]);

        }, 1000);
    });

    useEffect(() => {
        setLoading(true);
        getItems.then(response => {
            const filterItems = id === undefined ? response : response.filter(item => { if (item.category === id) return item });
            setItems(filterItems);
            setLoading(false);
        })

    }, [id]);
    return (
        <div >
            <h1>
                {greeting}
            </h1>
            {loading ?
                <h2>Cargando</h2> :
                <ItemList items={items} />
            }
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}
        </div>
    )
}

export default ItemListContainer;