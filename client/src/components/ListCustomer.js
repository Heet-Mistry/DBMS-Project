import React,{Fragment,useEffect,useState} from 'react'

const ListCustomer = () => {

    const [customers,setCustomers]=useState([])


    // Delete Fucntion 
    const deleteCustomer = async (id)=>{
        try{
            const deleteCustomer = await fetch(`http://localhost:5000/customer/${id}`,{
                method:"DELETE"
            });
            setCustomers(customers.filter(customer=>(customer.customer_id!==id)))
        }catch(err){
            console.error(err.message)
        }
    }

    // Get Customer Fucntion
    const getCustomers = async ()=>{
        try{
            const response = await fetch("http://localhost:5000/customer");
            const jsonData = await response.json();
            setCustomers(jsonData);
        }catch(err){
            console.error(err.message)
        }
    }

    useEffect(()=>{
        getCustomers();
    },[]);

    console.log(customers);
    return (
        <Fragment>
         <h2 className="text-center mt-5">List of Customers</h2>
            <table className="table table-striped table-bordered mt-5">
            <thead>
            <tr>
                <th>Customer ID</th>
                <th>Name </th>
                <th>Date of Birth </th>
                <th>Address</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>

            {customers.map(customer => (
                <tr key={customer.customer_id}>
                <td>{customer.customer_id}</td>
                <td>{customer.first_name + " " + customer.last_name}</td>
                <td>{customer.date_of_birth.slice(0, 10)}</td>
                <td>{customer.street_number + " " + customer.city + " " + customer.state}</td>
                
                <td><button className="btn btn-danger" onClick={()=>deleteCustomer(customer.customer_id)}>Delete</button></td>
                </tr>
            ))}
            
            </tbody>
        </table>
        </Fragment>
    )
}

export default ListCustomer
