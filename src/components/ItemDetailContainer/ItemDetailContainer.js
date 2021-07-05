import React, { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { id } = useParams();
    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let itemList = [
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
                ]

                const itemData = itemList.find((item) => item.id === id);
                resolve(itemData);
            }, 1000);

        })
    }
    const [item, setItem] = useState({});
    useEffect(() => {
        getItems().then(response => {
            setItem(response);
        })
    }, [])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer
