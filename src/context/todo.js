import exp from "constants";
import { useContext,createContext } from "react";

// we will add the properties of todo in todocontext
const todocontext=createContext({
    todos:[{
        id:"1",
        todo:"ms"    ,
        completed:false
    }],
    addtodo:(todo)=>{},
    deletetodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    togglecomplete:(id)=>{}
    // we don't need to specify what functions and objects are creating context we can keep this section blank
});

export const TodoProvider=todocontext.Provider;

export default function useTodo(){
    return useContext(todocontext);
}