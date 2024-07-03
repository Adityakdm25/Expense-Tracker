import React, { useState,useContext } from "react"
import axios from 'axios'
const BASE_URL = "http://localhost:5000/api/v1/"
const GlobalContext = React.createContext();


export const GlobalProvider = ({children})=>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null) 


    const addIncome = async(income) =>{
        const response  = await axios.post(`${BASE_URL}add-income`,income)
        .catch((error) => {
            setError(err.response.data.message)
        })
        getIncome();
    }
    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data.incomes); 
        console.log(response.data.incomes); 
    }
   
   
    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpenses(Array.isArray(response.data.expenses) ? response.data.expenses : []);
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }
   
    
    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((expense) =>{
            totalIncome = totalIncome + expense.amount
        })

        return totalIncome;
    }
    
   



    return (
       
        <GlobalContext.Provider value ={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses

        }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}