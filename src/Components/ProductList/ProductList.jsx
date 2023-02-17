import React, { useState } from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram"

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зелёного цвета'},
    {id: '3', title: 'Джинсы 2', price: 15000, description: 'Красного цвета'},
    {id: '4', title: 'Куртка 2', price: 1000, description: 'Фиолетового цвета'},
    {id: '5', title: 'Джинсы 3', price: 500, description: 'Пурпурного цвета'},
    {id: '6', title: 'куртка 3', price: 8000, description: 'белого цвета'},
]

const getTotalPrice = (items=[])=>{
    return items.reduce((acc,item)=>{
        return acc += item.price
    },0)
}
const ProductList = ()=> {
    const [addedItems,setAddedItems]=useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) =>{
        const alreadyAdded = addedItems.find(item=>item.id===product.id)
        let newItems = [];

        if(alreadyAdded){
            newItems = addedItems.filter(item=>item.id !==product.id)
        } else{
            newItems = [...addedItems,product];
        }

        setAddedItems(newItems)
        if(newItems.length ===0)
            tg.MainButton.hide();
        else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text:'Купить ${getTotalPrice(newItems)}'
            })
        }

    }
    return (
        <div className={'list'}>
            {products.map(item =>(
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
            
        </div>
    )
}

export default ProductList;