"use client";
import Header from "@/app/components/header";
interface ParamsValue {
  params: {
    id: string;
  }
}

export default function userDetails({ params }: ParamsValue) {
  type ValueProps = {
    id: number;
    name: string;
    nivel: string;
    foto: string;
    descrisao: string;
  }
    var dataValueSession = JSON.parse(sessionStorage.getItem("key") || "[]");
   
   return(
    <>
     <Header />

         <div className="w-96 h-[450px] bg-slate-500 absolute shadow-2xl top-[230px] left-[550px] rounded-t-lg rounded-b-lg" >
      <header className="w-auto h-[120px] flex justify-start items-center">
        <figure className="w-[95px] h-[95px]  rounded-full border-solid border-4 border-orange-400 ml-5  overflow-hidden">
        <img className="inline-block w-[95px] h-[95px]  " src={`${sessionStorage.getItem("foto")}`} alt=""/>
        </figure>
        <div className="ml-7">
          <h2 className="font-semibold">{sessionStorage.getItem("nome")}</h2>
          <p>{sessionStorage.getItem("nivel")}</p>
        </div>
      </header>
      <section className="w-full h-[350px]">
       <h3 className="text-lg font-semibold text-orange-400 ml-5 mt-5 mb-5" >Descrição</h3>
       <p className="w-[320px] ml-5">
         {sessionStorage.getItem("descrisao")}
       </p>
     
      </section>
     </div>
     <div className="absolute top-[230px] left-[950px]">
        <div className="w-[18px] h-[18px] bg-orange-400 mb-3 rounded-full"></div>
        <div className="w-[18px] h-[18px] bg-orange-400 mb-3 rounded-full"></div>
        <div className="w-[18px] h-[18px] bg-orange-400 rounded-full"></div>
       </div>

  </>
   )
}