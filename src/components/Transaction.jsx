import React from 'react'

export default function Transaction() {
  return (
    <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 rounded-lg shadow-lg bg-white">
    <h2 className="text-2xl font-bold mb-6 text-center">payment Banki kavian</h2>
    <form >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input 
          type="text"
        
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
          placeholder="6037 ******** 6224"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name Card Holder</label>
        <input 
          type="text"
        
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
          placeholder="Artin Kavian"
          required
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Expire Date</label>
          <input 
            type="text"

            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">CVV2</label>
          <input 
            type="text"
       
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="123"
            required
          />
        </div>
      </div>
      <button
        type="submit"
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      
      >
    Transfer
      </button>
    </form>
  
  </div>
  )
}
