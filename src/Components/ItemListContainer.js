import React,{useEffect,useState} from "react";
import ItemList from "./ItemList";
import {products} from '../Mock/ProducMock';


function ItemListContainer ({greeting}){
    //Promesa de los productos
    const[items,setItems] = useState([])
    
    useEffect(()=>{
        const misProductos = () => {
            return new Promise ((res,rej) => {
                setTimeout (()=>{
                     res(products) ;                     
                },2000);
            });
        };
        misProductos ()
            .then((res) =>{
               setItems(res);
           })
            .catch((error)=>{
               console.log(error);
            })
    },[]);

  return (
        <div>
         <h1 style={{"color": "yellow", "fontSize":"40px", "paddingleft":"50px"}}>{greeting} </h1>
         <ItemList items={items}/>
         </div>
    );
};

export default ItemListContainer;