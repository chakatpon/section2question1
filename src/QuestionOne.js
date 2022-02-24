import React, { Component, useState } from 'react';
import './style.css'

const QuestionOne = (props) => {
    const [inputA, setInputA] = useState('');
    const [isFibo, setIsFibo] = useState('');
    const [isPrimeNo, setIsPrimeNo] = useState('');

    function handleChange(event) {
        let inputValue = event.target.value
        console.log('inputValue : ', inputValue)
        setInputA(inputValue)
        setIsFibo(isFibonacci(inputValue))
        setIsPrimeNo(isPrime(inputValue))
        console.log("isFibo ",isFibo);
        console.log("isPrimeNo ", isPrimeNo)
    }

    function  isPrime(num) {
        for (let i = 2; i * i <= num; i++)
            if (num % i === 0)
              return false; 
        return num > 1;
    }

    // A utility function that returns true if x is perfect square
    function isPerfectSquare(x)
    {
        let s = parseInt(Math.sqrt(x));
        return (s * s == x);
    }
    
    // Returns true if n is a Fibonacci Number, else false
    function isFibonacci(n)
    {
    
        // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
        // is a perfect square
        return isPerfectSquare(5 * n * n + 4) ||
               isPerfectSquare(5 * n * n - 4);
    }

    return<div className="container">
            <div className="item flex1">
            <input type="text" value={inputA} onChange={(e) => handleChange(e)} />

            </div>
            <div className="item flex2">{isFibo ? "true":"false"}</div>
            <div className="item flex3">{isPrimeNo ? "true":"false"}</div>
        </div>
    
}

export default QuestionOne;
