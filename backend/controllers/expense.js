const ExpenseSchema = require("../models/expenseModel.js")

exports.addExpense = async(req,res)=>{
   const {title,amount,category,description,date} = req.body;

   console.log('Request Body:', req.body); // Log the entire request body


   const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date
   })
   try {
    //validations
    if(!title || !amount || !description || !date)
        {
                
            return res.status(400).json({message:'All fields are required!'});
        }
        if(amount<=0 || !amount==='number')
            {
              
                res.status(400).json({message:"Amount must be positive"});
            }
          
            await expense.save()
            res.status(200).json({message:"expense added"});
            
    
   } catch (error) {
     console.log("Error: ",error);
      res.status(500).json({message:"Server error!"});
   }
   console.log(expense);
}

exports.getExpense = async(req,res)=>{
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt:-1});
        res.status(200).json({expenses});
    } catch (error) {
        res.status(500).json({message:"Server error!"});
   
    }
}

exports.deleteExpense = async(req,res)=>{
    const {id} = req.params;
    console.log(req.params)
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense)=>{
        res.status(200).json({message:"expense deleted"})
    })
    .catch((error)=>{
        res.status(500).json({message:"Server Error"})
    })

}