import Image from "next/image";
import { ContainerGrid } from "@/components/container/container";
import CNH_Aberta from '@/assets/cnh.png'
import { Ondrop } from '@/helpers/ondrop.js'


export function CNH() {
  return (
    <section>
      <ContainerGrid>
        <div className="pb-5">
            <div className="pb-3.5">
                <h3 className="text-2xl text-type-blue font-bromny font-semibold pb-3.5 text-center">
                    CNH Aberta
                </h3>
                <Image src={CNH_Aberta} alt='Foto da CNH Aberta' className='w-64 flex m-auto'/>
            </div>
        </div>
        <Ondrop />
      </ContainerGrid>
    </section>
  );
}
