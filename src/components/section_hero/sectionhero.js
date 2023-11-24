import { ContainerGrid } from "../container/container";
import { CNH } from "./CNH/cnh";

export function SectionHero() {
  return (
    <section className="pt-10">
      <ContainerGrid className="flex flex-col">
        <h2 className="text-center text-2xl text-type-blue font-bromny font-semibold pb-3.5 @tablet:pb-0 @desktop:text-3xl">
          EVIDÊNCIA DO SINISTRO
        </h2>
        <p className="text-center font-bromny text-type-blue pb-3.5 @laptop:pb-5">
          Faça o upload das fotos do veiculo.
        </p>
      </ContainerGrid>
      <CNH/>
    </section>
  );
}
