let prevNumber = ``
let calculationOperator = ``
let currentNumber = `0`

const inputNumber = (number) => {
    if (currentNumber === `0`) {
        currentNumber = number
    } else {
        currentNumber += number 
    }
}

//------------Kalkulator Screen & Update----------------------//
const calculatorScreen = document.querySelector (`.calculator-screen`)
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//------------Number Events------------------//
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//-----------Operators Event---------------//
const operators = document.querySelectorAll(".operator")
operators.forEach((operators) => {
    operators.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ``) {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = `0`
}

//-------------Calculation----------------//
const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ``
    switch (calculationOperator) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*" :
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/" :
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ``
}

const clearAll = () => {
    prevNumber = ``
    calculationOperator = ``
    currentNumber = `0`
}

//--------------AC Button-----------------//
const clearBtn = document.querySelector(`.all-clear`)
clearBtn.addEventListener(`click`, () => {
    clearAll()
    updateScreen(currentNumber)
})

//-------------Decimal--------------------//
inputDecimal = (dot) => {
    if(currentNumber.includes(`.`)){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector(`.decimal`)

decimal.addEventListener(`click`, (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//-------------Precentage--------------//
inputPrecentage = (precentage) => {
    if(currentNumber.includes(`%`)) {
        return
    }
    currentNumber = currentNumber / 100
}

const precentage = document.querySelector('.precentage')
precentage.addEventListener('click', (event) => {
    inputPrecentage(event.target.value)
    updateScreen(currentNumber)
})
