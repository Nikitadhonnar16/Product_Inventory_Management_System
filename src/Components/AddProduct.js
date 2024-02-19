import React from 'react'
import { useRef } from 'react';
const AddProduct = ({setdata}) => {


  const productname=useRef("")
  const manufacturerref=useRef("");
  const priceref=useRef("")
  const quantityref=useRef("")

  AddProductData=(e)=>
  {
     e.preventDefault();

    //  fetching added new data values 
 const newData={
        "name":  e.target.elements.ProductName.value,
        "manufacturer": e.target.elements.manufacturer.value,
        "price": e.target.elements.Price.value,
        "quantity": e.target.elements.Quantity.value
    }
    
    // to add new data in our existing data table
    setdata(currentData => currentData.concat(newData));

    //clearing input data values in input box after adding data 
    productname.current.value="";
    manufacturerref.current.value=""; 
    priceref.current.value="";
    quantityref.current.value="";
  }

  return (
    <div className='add-product'>
      <form action="" onSubmit={AddProductData} >
          <b>Add New Product: </b>
          <input className='col-sm-2 m-1' type="text" ref={productname} name='ProductName' size={15} required placeholder=' Enter Product Name'/>
          <input className='col-sm-2 m-1' type="text" ref={manufacturerref} size={15} required name='manufacturer' placeholder='Enter Product Manufacturer'/>
          <input className='col-sm-2 m-1' type="text" ref={priceref} size={15} required name='Price' placeholder='Enter Product Price'/>
          <input className='col-sm-2 m-1' type="text" ref={quantityref} size={15} required name='Quantity' placeholder='Enter Product Quantity'/>
          <button className='col-sm-2 m-1'  size={15}>Add</button>
      </form>
    </div>
  )
}


export default AddProduct
