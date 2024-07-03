const express = require("express");

const {addIncome,getIncome,deleteIncome} = require("../controllers/income.js")
const {addExpense,getExpense,deleteExpense} =require("../controllers/expense.js")
const router = express.Router();

router.post('/add-income',addIncome)
      .get('/get-income',getIncome)
      .delete('/delete-income/:id',deleteIncome)
      .post('/add-expense',addExpense)
      .get('/get-expense',getExpense)
      .delete('/delete-expense/:id',deleteExpense)
       

//testing
// router.get('/',(req,res)=>{
//     console.log("request sent");
// })
module.exports  = router;