import React, { useState } from 'react'

export default function Addcard() {
  const [credit,setCredit]=useState({
    fullName:"",
    cardNum:"", 
    cvv2:"",
    date:"",
    deposite:0
  })
  const handleChange=(e)=>{
setCredit({
  ...credit,
  [e.target.name]:e.target.value
})
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Payment GateWay Kavian</h2>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(credit);
      }} >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input onChange={handleChange}
            type="text"
            name="cardNum"
       
            placeholder="6037 ******** 6224"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name Card Holder</label>
          <input onChange={handleChange}
            type="text"
            name="fullName"
        
            placeholder="Aerin Kavian"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Expire Date</label>
          <input onChange={handleChange}
            type="text"
            name="date"
      
            placeholder="MM/YY"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">CVV2</label>
          <input onChange={handleChange}
            type="text"
            name="cvv2"
           
            placeholder="123"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input onChange={handleChange}
            type="number"
            name="deposite"
           
            placeholder="Amount"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
         Add Card
        </button>
      </form>
    </div>
  </div>
  )
}
