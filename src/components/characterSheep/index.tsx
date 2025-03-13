import { useContext, useState } from "react";
import CharacterContainer from "../characterContainer";
import InformationSection from "../informationSection";
import "./style.css";
import { AutoFichaContext } from "../../context/generalContext";
import AtributesContainer, {
  StyledMod,
} from "../../styles/components/atributesContainer";
import { IAtributos } from "../../context/generalContext/interface";
import StyledHPComponent from "../../styles/components/hpComponent";
import StyledHealthBar from "../../styles/components/hpBar";
interface IArrayCharacter {
  key: string;
  value: React.ReactNode;
}

const CharacterSheep = () => {
  const { character } = useContext(AutoFichaContext);
  const characterInfo = character?.personagem;
  const [hp, setHp] = useState<number>();
  const arrayCharacter: IArrayCharacter[] = [
    { key: "Nome", value: characterInfo?.nome },
    { key: "Raça", value: characterInfo?.raca },
    { key: "Classe", value: characterInfo?.classe },
    { key: "Nível", value: characterInfo?.nivel },
    { key: "Tendência", value: characterInfo?.alinhamento },
    { key: "Divindade", value: characterInfo?.divindade },
    { key: "Idade", value: characterInfo?.idade },
    { key: "Gênero", value: characterInfo?.genero },
    { key: "Altura", value: characterInfo?.altura },
    { key: "Peso", value: characterInfo?.peso },
  ];
  const atributosArray: IAtributos[] = [
    { key: "Força", valor: character?.ficha.atributos.forca ?? 0 },
    { key: "Destreza", valor: character?.ficha.atributos.destreza ?? 0 },
    {
      key: "Constituição",
      valor: character?.ficha.atributos.constituicao ?? 0,
    },
    {
      key: "Inteligência",
      valor: character?.ficha.atributos.inteligencia ?? 0,
    },
    { key: "Sabedoria", valor: character?.ficha.atributos.sabedoria ?? 0 },
    { key: "Carisma", valor: character?.ficha.atributos.carisma ?? 0 },
  ];

  const handleChange = (e) => {
    setHp(e.target.value);
  };

  return (
    <CharacterContainer icone="person" texto="Ficha de Personagem">
      <div className="container-grid-3">
        <InformationSection>
          <h3>Informações Básicas</h3>
          <div className="space-y-2">
            {arrayCharacter.map((informacao, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-300">{informacao.key}:</span>
                <span className="text-indigo-200 font-medium">
                  {informacao.value}
                </span>
              </div>
            ))}
          </div>
        </InformationSection>

        <InformationSection>
          <h3>Atributos</h3>

          <AtributesContainer>
            {atributosArray.map((atributo, index) => (
              <div key={index} className="atribute">
                <span className="atribute-name">{atributo.key}</span>
                <div className="atribute-value-div">
                  <span className="atribute-value">{atributo.valor}</span>
                  <StyledMod
                    modValue={(atributo.valor - 10) / 2}
                    className="atributes-mod"
                  >
                    ({(atributo.valor - 10) / 2 > 0 ? "+" : " "}
                    {""}
                    {Math.floor((atributo.valor - 10) / 2)})
                  </StyledMod>
                </div>
              </div>
            ))}
          </AtributesContainer>
        </InformationSection>

        <InformationSection>
          <h3>Status</h3>
          <div>
            <StyledHPComponent>
              <div className="first-container">
                <span>Pontos de Vida</span>
                <span className="text-white">
                  <input
                    className="HP-input"
                    type="number"
                    onChange={handleChange}
                  />
                  /84
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <StyledHealthBar
                  lifePercentage={(hp / 84) * 100}
                ></StyledHealthBar>
              </div>
            </StyledHPComponent>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                <span className="text-xs text-gray-300">CA Total</span>
                <div className="text-2xl font-bold text-white">19</div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                <span className="text-xs text-gray-300">Iniciativa</span>
                <div className="text-2xl font-bold text-white">+2</div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                <span className="text-xs text-gray-300">Deslocamento</span>
                <div className="text-2xl font-bold text-white">9m</div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                <span className="text-xs text-gray-300">BBA</span>
                <div className="text-2xl font-bold text-white">+9</div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-amber-400 text-sm font-semibold mb-2">
                Testes de Resistência
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                  <span className="text-xs text-gray-300">Fortitude</span>
                  <div className="text-xl font-bold text-white">+9</div>
                </div>
                <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                  <span className="text-xs text-gray-300">Reflexos</span>
                  <div className="text-xl font-bold text-white">+5</div>
                </div>
                <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                  <span className="text-xs text-gray-300">Vontade</span>
                  <div className="text-xl font-bold text-white">+4</div>
                </div>
              </div>
            </div>
          </div>
        </InformationSection>
      </div>

      <div className="container-grid-3">
        {/* <InformationSection>
          <h3>Armadura</h3>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none p-2 rounded-md hover:bg-amber-50 transition-all">
              <span className="font-bold">Selecionar Armadura</span>
              <span className="transform group-open:rotate-180 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
              </span>
            </summary>
            <div className="mt-2 space-y-2 pl-4">
              {[
                "Nenhuma (CA +0)",
                "Armadura Acolchoada (CA +1)",
                "Couro (CA +2)",
                "Cota de Malha (CA +5)",
                "Meia-Armadura (CA +7)",
                "Armadura Completa (CA +8)",
              ].map((armor) => (
                <div
                  key={armor}
                  className="p-2 rounded-md hover:bg-amber-100 transition-all cursor-pointer"
                >
                  {armor}
                </div>
              ))}
            </div>
          </details>
          <div className="mt-4 p-3 border border-amber-200 rounded-md bg-amber-50">
            <p className="font-bold">Armadura Atual:</p>
            <p>Nenhuma (CA +0)</p>
            <p className="mt-2 text-sm">Penalidade: Nenhuma</p>
          </div>
        </InformationSection> */}

        {/* <InformationSection>
          <h3>Arma Principal</h3>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none p-2 rounded-md hover:bg-amber-50 transition-all">
              <span className="font-bold">Selecionar Arma</span>
              <span className="transform group-open:rotate-180 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
              </span>
            </summary>
            <div className="mt-2 space-y-2 pl-4">
              {[
                "Nenhuma",
                "Adaga (1d4)",
                "Espada Curta (1d6)",
                "Espada Longa (1d8)",
                "Arco Curto (1d6)",
                "Bordão (1d6)",
              ].map((weapon) => (
                <div
                  key={weapon}
                  className="p-2 rounded-md hover:bg-amber-100 transition-all cursor-pointer"
                >
                  {weapon}
                </div>
              ))}
            </div>
          </details>
          <div className="mt-4 p-3 border border-amber-200 rounded-md bg-amber-50">
            <p className="font-bold">Arma Atual:</p>
            <p>Espada Longa (1d8)</p>
            <p className="mt-2 text-sm">Alcance: 5 pés</p>
          </div>
        </InformationSection> */}

        {/* <InformationSection>
          <h3>Equipamento de Mão</h3>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none p-2 rounded-md hover:bg-amber-50 transition-all">
              <span className="font-bold">Selecionar Equipamento</span>
              <span className="transform group-open:rotate-180 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
              </span>
            </summary>
            <div className="mt-2 space-y-2 pl-4">
              {[
                "Nenhum",
                "Escudo Leve (+1 CA)",
                "Escudo Pesado (+2 CA)",
                "Lanterna",
                "Símbolo Sagrado",
                "Orbe Arcano",
              ].map((item) => (
                <div
                  key={item}
                  className="p-2 rounded-md hover:bg-amber-100 transition-all cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </details>
          <div className="mt-4 p-3 border border-amber-200 rounded-md bg-amber-50">
            <p className="font-bold">Equipamento Atual:</p>
            <p>Escudo Leve (+1 CA)</p>
            <p className="mt-2 text-sm">Bônus já aplicado à CA</p>
          </div>
        </InformationSection> */}
      </div>

      {/* <InformationSection>
        <h3 className="text-xl font-bold text-amber-400 mb-3 border-b border-indigo-700 pb-2 flex items-center">
          <span className="material-symbols-outlined mr-2">fitness_center</span>
          Perícias
        </h3>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
            <span className="text-white">Acrobacia</span>
            <div className="flex items-center">
              <span className="text-indigo-200">DES</span>
              <span className="text-white font-bold ml-2">+5</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
            <span className="text-white">Atletismo</span>
            <div className="flex items-center">
              <span className="text-indigo-200">FOR</span>
              <span className="text-white font-bold ml-2">+11</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
            <span className="text-white">Cavalgar</span>
            <div className="flex items-center">
              <span className="text-indigo-200">DES</span>
              <span className="text-white font-bold ml-2">+7</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
            <span className="text-white">Conhecimento (Nobreza)</span>
            <div className="flex items-center">
              <span className="text-indigo-200">INT</span>
              <span className="text-white font-bold ml-2">+5</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
            <span className="text-white">Intimidação</span>
            <div className="flex items-center">
              <span className="text-indigo-200">CAR</span>
              <span className="text-white font-bold ml-2">+6</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
            <span className="text-white">Percepção</span>
            <div className="flex items-center">
              <span className="text-indigo-200">SAB</span>
              <span className="text-white font-bold ml-2">+8</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
            <span className="text-white">Sobrevivência</span>
            <div className="flex items-center">
              <span className="text-indigo-200">SAB</span>
              <span className="text-white font-bold ml-2">+6</span>
            </div>
          </div>
        </div>
      </InformationSection> */}
    </CharacterContainer>
  );
};

export default CharacterSheep;
