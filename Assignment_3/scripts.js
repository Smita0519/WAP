const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operator = document.getElementById('symbol')

const add = document.getElementById('btn_add')
const sub = document.getElementById('btn_sub')
const mul = document.getElementById('btn_mul')
const div = document.getElementById('btn_div')


const display_res = document.getElementById('result')
const result = document.getElementById('btn_res')

import {add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv} from './calculator.js'

add.addEventListener('click', function(){
    operator.value = '+'
})

sub.addEventListener('click',function(){
    operator.value = '-'
})

mul.addEventListener('click',function(){
    operator.value = '*'
})

div.addEventListener('click',function(){
    operator.value = '/'
})

result.addEventListener('click',function(){
    let x = parseInt(num1.value)
    let y = parseInt(num2.value)

    if(!x && x!==0)
    {
        alert("Please enter first number")
        return
    }
    if(!y && y!==0)
    {
        alert("Please enter second number")
        return
    }
    if(!operator.value)
    {
        alert("Please select operation")
        return
    }
    
    switch(operator.value)
    {
        case '+':display_res.value = funcAdd(x,y)
            break;

        case '-':display_res.value = funcSub(x,y)
            break;

        case '*':display_res.value = funcMul(x,y)
            break;

        case '/':display_res.value = funcDiv(x,y)
            break;
    }
})

