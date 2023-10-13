"use client"

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


type TodosProps = {
  id: number;
  name: string;
  nivel: string;
  foto: string;
  descrisao: string;
}

const getPost = async () => {
    const response = await axios.get<TodosProps[]>('http://localhost:3000/users')  
    return  response.data;
}

export const Card =  () => {
  const [data, setData] = useState<TodosProps[] |  null>(null);
  const [isLoanding, setIsloanding] = useState(false);
  const router = useRouter();
  
  const handleTodos = useCallback(async () => {

     setIsloanding(true);
     const response = await getPost();


     setIsloanding(false)
     setData(response)
  }, [])

  useEffect(()=>{
      handleTodos();
     
  }, [handleTodos])

  const henderDetails = (todo: TodosProps) => {
     router.push(`/users/${todo.id}`);
     sessionStorage.setItem("nome", todo.name);
     sessionStorage.setItem("foto", todo.foto);
     sessionStorage.setItem("descrisao", todo.descrisao);
     sessionStorage.setItem("nivel", todo.nivel);
  }

    return(
      <>
         <ul className="flex flex-col  w-full h-[400vh] scrollbar-thin scrollbar-thumb-orange-400  overflow-auto grid grid-cols-1 gap-3" >
        
      {isLoanding ? (
        <p>Loading...</p>
       ) : (
        <>
       {
          data?.map((todo) => (
            <li onClick={() => henderDetails(todo)} key={todo.id} className="w-80/5 h-24 bg-white rounded-lg  flex overflow-hidden relative shadow-md group/item hover:bg-orange-100">
            <figure className="w-32 h-32 rounded-full bg-red-400 -ml-7 -mt-3 overflow-hidden ">
              <img  src={todo.foto} alt="" />
            </figure> 
            <div id="detalhes" className="ml-10 mt-6">
              <h2 className="font-md font-semibold mb-1">{todo.name}</h2>
              <p>Nivel:  <span  className="font-semibold text-orange-400">{todo.nivel}</span></p>
            </div>
            <div id="bolas" className="absolute left-96  top-5">
              <div className="w-3 h-3 rounded-full bg-orange-400 mb-2 "></div>
              <div  className="w-3 h-3 rounded-full bg-orange-400 mb-2 "></div>
              <div  className="w-3 h-3 rounded-full bg-orange-400 mb-2 "></div>
            </div>
            <a className="group/edit invisible hover:bg-red-400 group-hover/item:visible ..." >
            </a>
          
        </li>    
          ))}
        </>
       )}
    </ul>
      </>
    )
}