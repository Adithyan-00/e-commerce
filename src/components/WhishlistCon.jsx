

import { useReducer , createContext , useContext, Children} from "react";

 const WhishList = createContext()

function WhishReducer(state , action){
    switch(action.type){
        case "ADD_WHISH":
            return [...state,action.payload];
        case "REMOVE_WISH":
            return state.filter((item)=> item.id !== action.payload)
        default:
         return state
    }
}

export const Whishlist = 
({children}) =>{
    const [Whishlist , dispatch] = useReducer(WhishReducer , []);

    return(
        <WhishList.Provider value={{Whishlist , dispatch}}>
            {children}
        </WhishList.Provider>
    )
}
export const  UseWish =()=>{
    return useContext(WhishList)
}