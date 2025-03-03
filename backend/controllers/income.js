const IncomeSchema = require("../models/incomeModel.js")

exports.addIncome = async(req,res)=>{
   const {title,amount,category,description,date} = req.body;

   console.log('Request Body:', req.body); // Log the entire request body


   const income = IncomeSchema({
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
          
            await income.save()
            res.status(200).json({message:"Income added"});
            
    
   } catch (error) {
      console.log(error);
      res.status(500).json({message:"Server error!"});
   }
   console.log(income);
}

exports.getIncome = async(req,res)=>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt:-1});
        res.status(200).json({incomes});
    } catch (error) {
        res.status(500).json({message:"Server error!"});
   
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id} = req.params;
    console.log(req.params)
    IncomeSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:"income deleted"})
    })
    .catch((error)=>{
        res.status(500).json({message:"Server Error"})
    })

}