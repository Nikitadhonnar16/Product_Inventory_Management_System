import React, { useState } from 'react'

const Modal = ({setupdate,get_data_to_be_edited,setdata,geteditindex, data}) => {
 
    const [getdefaultvalue, setdefaultvalue]=useState(get_data_to_be_edited.name)
    const [getmanufacturervalue,setmanufacturervalue]=useState(get_data_to_be_edited.manufacturer)
    const [getpricevalue, setgetpricevalue]=useState(get_data_to_be_edited.price)
    const [getquantityvalue, setquantityvalue]=useState(get_data_to_be_edited.quantity)
    

    console.log(getdefaultvalue);
    const hideModal=()=>
    {
        setupdate(false)
    }

    function edited_to_be_Name(e)
    {
        const name= e.target.value;
        setdefaultvalue(name);
        
    }

    function edited_to_be_manufacturer(e)
    {
        const manufacturer= e.target.value;
        setmanufacturervalue(manufacturer)
    }
    function edited_to_be_price(e)
    {
        const price= e.target.value;
        setgetpricevalue(price)
    }
    function edited_to_be_quantity(e)
    {
        const quantity= e.target.value;
        setquantityvalue(quantity);
    }

    const updateproductdata=(e)=>
    {
            e.preventDefault();

            //getting edited values from edit form
            const newData={
                "name":  e.target.elements.ProductName.value,
                "manufacturer": e.target.elements.manufacturer.value,
                "price": e.target.elements.Price.value,
                "quantity": e.target.elements.Quantity.value
            }

            //edit data on that perticular row 
            i = parseInt(geteditindex)
            data[i] = newData

            //render edited data on UI
            setdata(data);

            //to close the Modal
            setupdate(false)

    }

    function closeModal()
    {
        setupdate(false)
    }

  return (
    <div>
    <div className='modal-wrapper ' onClick={closeModal} > 
    </div>
            <div className="modal-container">
            <h2 className='tabletitle'>Update Current Data</h2>

                <form action="" onSubmit={updateproductdata}>
                    <table className='modal-table border-black center'>
                        
                        <tr>
                            <td><b>Product Name:</b></td>
                            <td><input className='m-4' type="text" onChange={edited_to_be_Name} name='ProductName' value={getdefaultvalue}  size={15}  placeholder=' Enter Product Name'/></td>
                        </tr>
                        <tr>
                            <td><b>Manufacturer:</b></td>
                            <td><input className='m-4' type="text" onChange={edited_to_be_manufacturer} size={15} name='manufacturer' value={getmanufacturervalue} placeholder='Enter product Manufacturer'/></td>
                        </tr>
                        <tr>
                            <td><b>Price:</b></td>
                            <td><input className='m-4' type="text" onChange={edited_to_be_price} size={15} name='Price' value={getpricevalue} placeholder='Enter product Price'/></td>
                        </tr>
                        <tr>
                            <td><b>Quantity:</b></td>
                            <td><input className='m-4' type="text" onChange={edited_to_be_quantity} size={15} name='Quantity'value={getquantityvalue} placeholder='Enter product Quantity'/></td>
                        </tr>
                        <tr className=''>
                            <td><button className='mx-4 p-2 updatebtn '>Update</button></td>
                            {/* <td><button type="button" className="btn btn-info">Update</button></td> */}
                            <td><button  className='mx-5 p-2 updatebtn' onClick={closeModal}>Close</button></td>
                        </tr>
                    </table>
                    
                </form>
            </div>
       
      
    </div>
  )
}

export default Modal
