import {useState, useEffect, useRef} from 'react' 

export default function UseRefFunction(){

    const [inputValue, setInputValue] = useState("")
    const previousInputValue = useRef("")

    useEffect(
        () => {
            previousInputValue.current = inputValue;
        }, [inputValue]);

        return(
            <div>
                <h3>UseRef em componente de função</h3>
                <input type="text"
                value={inputValue}
                onChange={(
                    (event) => setInputValue(event.target.value)
                )}
                 />
                 <h4>
                     Valor anterior:{previousInputValue.current}
                 </h4>
            </div>
        )
    

}
