var User_input = document.getElementById("User_input")
var income = document.getElementById("income")
var expense = document.getElementById("expense")
var balance = document.getElementById("balance")
var saving = document.getElementById("saving")



function incomeBtn() {
    userInput = User_input.value
   
    income.innerText = parseInt(userInput) + parseInt(income.innerText) 
    balance.innerText = income.innerText - expense.innerText 
    
    if (balance.innerText < 0) {
        saving.innerText = " You are in loss"
        balance.style.color = "red"
        saving.style.color= "red"
    }else{
        saving.innerText = "your are in profit"
        saving.style.color= "green"
        balance.style.color= "black"
        
    }
    User_input.value =  ""
}

function expenseBtn() {
    userInput = User_input.value
    
    expense.innerText  = parseInt(userInput)  + parseInt(expense.innerText)
    balance.innerText = income.innerText - expense.innerText 
    
    if (balance.innerText < 0) {
        saving.innerText = " You are in loss"
        saving.style.color= "red"
        balance.style.color = "red"
    }else{
        saving.innerText = "your are in profit"
        saving.style.color= "green"
        balance.style.color= "black"
    }
    
}
