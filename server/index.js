const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { json } = require("express");

// middle ware
app.use(cors());
app.use(express.json());

//Routes//

// Create a todo//

app.post("/customer", async(req,res) =>{
    try{
        const {customer_id,first_name,last_name,date_of_birth,street_number,state,city} = req.body;
        const newCustomer = await pool.query("INSERT INTO customer (customer_id,first_name,last_name,date_of_birth,street_number,state,city) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",[customer_id,first_name,last_name,date_of_birth,street_number,state,city]);
        res.json(newCustomer.rows[0]);
    }catch(err){
        console.error(err.message);
    }  
});

// Get all todos //
app.get("/customer",async(req,res)=>{
    try{
        const allCustomers=await pool.query("SELECT * FROM customer");
        res.json(allCustomers.rows);

    }catch(err){
        console.error(err.message);
    }
})

// Get a todo //
app.get("/customer/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const customer = await pool.query("SELECT * FROM customer WHERE customer_id=$1 ",[id])
        res.json(customer.rows[0]);
    }catch(err){
        console.error(err.message);    
    }
})


// Update a todo //

app.put("/customer/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const {customer_id,first_name} = req.body;
        const updateCustomer = await pool.query("UPDATE customer SET first_name=$1 WHERE customer_id=$2",[first_name,id])
        res.json("First Name was Updated")

    }catch(err){
        console.error(err.message)
    }
})

// Delete a todo //
app.delete("/customer/:id",async(req,res)=>{
    try{
      const {id} = req.params;
      const deleteCustomer = await pool.query("DELETE FROM customer WHERE customer_id=$1",[id]);

      res.json("Deleted the customer")

    }catch(err){
      console.error(err.message)
    }
})


app.listen(5000,()=>{
    console.log("server has started at 5000 Finally");
})