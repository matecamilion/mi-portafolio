import Image from "next/image"
export default function ProyectosPage() {    

    return (
        <section id="proyectos">
             <div className=""> 
                <h1 className=" flex justify-center text-3xl font-mono text-violet-800">PROYECTOS</h1> 
                <hr  className="bg-violet-800 h-0.5  mx-10"/>
            </div>
            <div className="text-black text-center grid grid-cols-1 grid-rows-3 ">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>


        </section>
        
    )
    
    }