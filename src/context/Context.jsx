import { createContext, useState } from "react";
import run from "../config/rominai";

export const Context = createContext();

 const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPromt, setRecentPrompt] = useState("");
    const [prevPromt, setPrevPrompt] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev=>prev+nextWord)
        },75*index)
    }

    const onSent = async () => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompt(prev=>[...prev,input])
        const response = await run(input)
        let responseArray = response.split("**");
        let newResponse="";
        for(let i=0 ; i < responseArray.length; i++){
            if(i===0 || i%2 !== 1){
                newResponse += responseArray[i];

            }else{
                newResponse += '<b>'+responseArray[i]+'</b>'
            }
        }
        let newResponse2 = newResponse.split("*").join("</b>")
        let newResponeArray = newResponse2.split(" ");
        for(let i=0 ; i < newResponeArray.length; i++){
            const nextWord = newResponeArray[i];
            delayPara(i, nextWord+" ")
        }
        setLoading(false)
        setInput("")
    }

    

    const contextValue = {
        prevPromt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPromt,
        resultData,
        setResultData,
        showResult,
        setShowResult,
        setLoading,
        loading,
        input,
        setInput
        
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
