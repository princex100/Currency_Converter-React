import { useDebugValue, useEffect, useState ,useRef} from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrency";
function App() {


    let [currency,setCurrency]=useState("usd");
    let [currency2,setCurrency2]=useState("inr");

    let [amount,setAmount]=useState("");
    let [amount2,setAmount2]=useState("");


    let data2=useCurrency(currency);


     let d=Object.keys(data2);
   

    let currencyconverter=()=>{
         let a=Number(amount);
         
        let ans=a*(data2[currency2]);
        ans=String(ans);
        
        setAmount2(ans);
        

    }

 

    
  useEffect(()=>{
     currencyconverter();

  },[currency2,data2]);


     let swaprefer=useRef(null);

     function swapbox(){
        let a=currency2;
        setCurrency2(currency);

        setCurrency(a);
        
       
     }
     

    return (
        <>
         <div
            className="w-full h-screen flex  flex-wrap justify-around items-center bg-cover bg-no-repeat"
           
        >
            <div className="w-full text-black">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                setAmount={setAmount}
                                currency={currency}
                                setCurrency={setCurrency}
                                data2={d}
                                placeholder={"Amount"}
                                
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                               onClick={()=>{swapbox()}}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={amount2}
                                setAmount={setAmount2}
                                currency={currency2}
                                setCurrency={setCurrency2}
                                data2={d}
                                placeholder={""}

                                
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={()=>{currencyconverter()}}>
                            Convert {currency} to {currency2}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
       
    )};

    export default App;

