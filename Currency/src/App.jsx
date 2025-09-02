import { useState } from 'react'
import InputBox from './Components/input';
import useCurr from './hooks/curr'
import './index.css'

  

function App() {
const [amount,setAmount]=useState(0);
const [from,setFrom]=useState("usd");
const [to,setTo]=useState("npr");
const [convertedAmount,setConvertedAmount]=useState(0);
const currencyInfo=useCurr(from);//using useCurr custom hook to get the data from the api
const options = Object.keys(currencyInfo || {});//getting the keys of the conversion_rates object from the api data
const swap=()=>{
  
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
}//Just basic swap function to swap the from and to currency
const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])};//function to convert the amount from one currency to another using the conversion rate from the api data
    
const imageUrl = "/cur.jpg"; 

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();//prevents the default behaviour of the form to reload the page on submit
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(amount)=>setAmount(amount)}
                                selectedCurrency={from}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onAmountChange={(amount)=>setTo(amount)}
                                selectedCurrency={to}
                               onCurrencyChange={(currency)=>setTo(currency)}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}  
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default App;
