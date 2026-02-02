import curr from "../hooks/useCurrency.jsx";


function InputBox({
    label,
    amount,
    setAmount,
    currency,
    setCurrency,
    data2,
    placeholder


    
}) {
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder={placeholder}
                    value={amount}
                    onChange={(e)=>setAmount(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none h-10"
                    value={currency}
                    onChange={(e)=>setCurrency(e.target.value)}
                    
                >
                    {
                       data2.map((e)=>{
                        
                        return (
                            <option key={e} value={e}>
                                {e}
                            </option>
                        )
                       })
                    }
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;