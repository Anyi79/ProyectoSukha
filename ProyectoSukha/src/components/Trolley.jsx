import Product from './Product';
import { useLoaderData } from "react-router-dom";


function Trolley() {
    const { products } = useLoaderData();
    return(
     <div className='item-list'>
        {
            products.map((product, idx)=>{
                return <Product key={product.id} {...product} />
            })
        }
     </div>
         
   
    );
    }
    export default Trolley;