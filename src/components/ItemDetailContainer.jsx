import React,{useState, useEffect} from 'react'
import './styles/ItemDetailContainer.css';
import { getProductById } from '../helpers/getData.js';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({ id }) => {
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      getProductById(Number(id), setProduct);
      console.log(product);
    }, [id]);
  
    return (
      <section className="item-detail-container">
        {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
      </section>
    );
  };
  
  export default ItemDetailContainer;