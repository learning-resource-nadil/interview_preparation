import { useEffect } from "react"

function StudyUseEffect  (){
    useEffect(()=>{},[]) // use fetc data onec
    // useEffect(()=>{},[dependency]) // it will change changes state
    useEffect(()=>{
        return(()=>{}) // used for data clean up method
    },[])
    return(
        <div></div>
    )
}