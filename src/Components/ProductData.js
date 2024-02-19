import React, { useState } from 'react'
import Data from '../utils/data.json'
import AddProduct from "./AddProduct";
import Modal from './Modal';

function ProductData() {

    // used usestate hook to store table rows so that we change it at any time
    const [data, setdata]= useState(Data); 
    const [get_data_to_be_edited, set_data_to_be_edited] = useState();
    const [getupdate,setupdate]=useState(false);
    const [geteditindex, seteditindex] = useState();
    
    

    // delete product funcion
    const deleteProductData=(i)=>
    {
        const updateddata= data.filter((cur,index)=> index !== i
        )
        setdata(updateddata);
    }

    //update product function
    const updateData=(index)=>
    {
        setupdate(true);    
        set_data_to_be_edited(data[index])
        seteditindex(index)
    }

    return (
        <div>

     
            <h1 className="title mt-5">Product Inventory Management System</h1> 
            <br/>
            {/* add product function    */}
            {
                <AddProduct setdata={setdata}/>
            }
            <br/>
            {/* Inventory table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Manufacturer</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Edit Product</th>
                        <th>Delete Product</th>
                    </tr>
                </thead>
                <tbody>
                {
                    //getting data from json file
                    data.map((current,index) => (
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.manufacturer}</td>
                            <td>{current.price}</td>
                            <td>{current.quantity}</td>
                            <td><button onClick={()=>updateData(index)}>Edit</button></td>
                            <td><button onClick={() => deleteProductData(index)}>Delete</button></td>

                        </tr>
                    ))
                }

                      
                </tbody>
            </table>
         {/* creating modal and it will show when we clicked on edit button  */}
            { getupdate ? <Modal setupdate={setupdate} get_data_to_be_edited={get_data_to_be_edited} setdata={setdata} geteditindex={geteditindex} data={data} />: <br/>}

            
        </div>
  )

}

export default ProductData
