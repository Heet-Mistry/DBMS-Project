import React,{Fragment,useState} from 'react'

const InputCustomer = () => {

    const [customer_id,setCustomerID] = useState("")
    const [first_name,setFirstName] = useState("");
    const [last_name,setLastName] = useState("");
    const [date_of_birth,setDOB]=useState("");
    const [street_number,setSN] = useState("");
    const [state,setState] = useState("");
    const [city,setCity ]= useState("");

    const onSubmitForm = async e =>{
        e.preventDefault();

        try{
            const body = {customer_id,first_name,last_name,date_of_birth,street_number,state,city};
            const response = await fetch("http://localhost:5000/customer",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            alert("New customer Added")
            console.log(response);
            window.location = "/";
        }catch(err){
            console.error(err.message);
            alert("Error")
        }
    }
 
    return (
           <Fragment>
              <h1 className="text-center mt-5">DBMS Project</h1>
              <h2 className="text-center mt-5">Add Customer</h2>
              <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                    <input type="text" placeholder="customer ID" className="form-control" value={customer_id} onChange={(e)=>setCustomerID(e.target.value)}/> 
                    <input type="text" placeholder="First Name" className="form-control" value={first_name} onChange={(e)=>setFirstName(e.target.value)}/> 
                    <input type="text" placeholder="Last Name" className="form-control" value={last_name} onChange={(e)=>setLastName(e.target.value)}/>
                    <input type="text" placeholder="DOB" className="form-control" value={date_of_birth} onChange={(e)=>setDOB(e.target.value)}/> 
                    <input type="text" placeholder="Street" className="form-control" value={street_number} onChange={(e)=>setSN(e.target.value)}/> 
                    <input type="text" placeholder="State" className="form-control" value={state} onChange={(e)=>setState(e.target.value)}/> 
                    <input type="text" placeholder="City" className="form-control" value={city} onChange={(e)=>setCity(e.target.value)}/>  
                    <button type='submit' className="btn btn-success">Add</button>
              </form>
           </Fragment> 
    )
}

export default InputCustomer

