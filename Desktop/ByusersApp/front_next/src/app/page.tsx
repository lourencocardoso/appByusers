
import axios from "axios";
import { Card } from "./components/card";
import Header from "./components/header";
import { useCallback, useEffect, useState } from "react";

type ValueFilter = {
  id: number;
  name: string;
  descrisao: string;
   nivel: string;
}

const getAPI = async() => {
  const  response = await axios.get<ValueFilter[]>("http://localhost:3000/users")

  return response.data;
}
export default async function Home() {


  return (
    <>
      <Header />
      <div id="section" className="grid grid-rows-3 grid-flow-col gap-10 w-4/5 h-96">
        <div className="row-span-3 ... bg-orange-50 rounded-md shadow-2xl w-5/2 h-84 flex flex-col justify-center items-center">
          <img src="logo.svg" width={220} height={220} className="mt-5" />
          <h2 className="text-center mt-8 text-black-500 font-semibold">
            A ByUsers mostra-te tudo sobre grandes programadores
            <br />
            Veja mais sobre os usuarios.
          </h2>
          <button className="mt-5 px-8 pt-2.5 pb-2.5 mb-5 text-grey-500 border-solid border-2 border-orange-300 rounded-md  bg-orange-400 text-white
          border-none">
            Ver mais
          </button>
        </div>
        <div className="col-span-2 ... ">
         
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg  className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input id="busca" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border shadow-md border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-400 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" 
            />
        </div>
        <div className="row-span-2 col-span-2  h-96 flex flex-col justify-center items-center  -mt-10">
        <div className="bg-gradient-to-r from-violet-400 via-orange-400 to-pink-400 ...  rounded-full blur-2xl hidden"></div>
          <Card />
        </div>
      </div>
 
    </>
  )
}
