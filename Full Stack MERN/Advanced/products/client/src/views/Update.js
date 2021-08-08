import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from '../components/ProductForm'



const Update = (props) => {
    const {id}=props;
    const [Product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const [Errors, setErrors] =useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/Products/' + id)
            .then(res => {
                setProduct(res.data);
                console.log(res.data);
                setLoaded(true);
            })
    }, [])

    const onSubmitHandler = (title,price,description) => {
        axios.put('http://localhost:8000/api/Products/'+id, 
            title,
            price,
            description
        )
            .then(res=>navigate("/"))
            .catch(err=>{
            
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })  
        }
    return (
        <div>
            <h1>Update Product</h1>
            <Link to="/">Home</Link>
            {loaded && (
        <ProductForm errors={Errors} tit={Product.title} desc={Product.description} prc={Product.price} successfulfunction={onSubmitHandler} />
            )}
        </div>
    )
}

export default Update