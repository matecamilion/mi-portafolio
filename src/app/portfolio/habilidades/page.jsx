import { habilidades } from "../../../../habilidades"
import Image from "next/image"

export default function HabilidadesPage() {

    return (
        <section id="habilidades" className="bg-white text-black">
            <div className=""> 
                <h1 className=" flex justify-center text-3xl font-mono text-violet-800">HABILIDADES</h1> 
                <hr  className="bg-violet-800 h-0.5  mx-10"/>
            </div>
           
           <br />
            <div className="grid sm:grid-cols-2 grid-rows-3 grid-cols-1 gap-5 m-5 ">
                {
                    habilidades.map(({ title, description, image1, image2 }, i) => (
                        <div key={i} className=" hover:shadow-2xl  rounded-tl-3xl border-double border-violet-800  border-x-4  border-y-4  p-5  ">
                            <h1 className="font-bold text-violet-800 flex justify-center">{title}</h1>
                            <br />
                            <p className="font-normal text-center">{description}</p>
                            <br />
                            <div className="flex justify-center space-x-5">
                                <Image className="rounded-full" src={image1} width={35} height={35}/>
                                <Image className="rounded-full" src={image2} width={35} height={35}/>
                            </div>
                        </div>
                    ))
                }

            </div>


        </section>
    )
}