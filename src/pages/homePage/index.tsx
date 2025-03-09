import "./style.css";
import HomeHeader from "../../components/homeComponents/homeHeader";
import HomeFooter from "../../components/homeComponents/homeFooter";
import StyledHomePage from "../../styles/components/homePage";
import HomeMain from "../../components/homeComponents/homeMain";

const HomePage = () =>
  // { children }: { children: ReactNode }

  {
    const personagem = {
      nome: "Thorne da Lâmina Flamejante",
      raca: "Humano",
      classe: "Guerreiro",
      nivel: 9,
      idade: 32,
      alinhamento: "Neutro Bom",
      divindade: "Tyr, Deus da Justiça",
      hp: "84/84",
      experiencia: "659/1000",
      historia: `Nascido nas terras fronteiriças de Avendor, Thorne cresceu como filho de um ferreiro respeitado. Desde jovem, demonstrou extraordinária força e habilidade com armas, chamando a atenção da guilda local de guerreiros. Aos 16 anos, sua vila foi atacada por uma horda de orcs, deixando-o órfão. Jurou vingar sua família e proteger os inocentes, ingressando na Ordem da Lâmina Flamejante, um grupo de elite de guerreiros dedicados a combater as forças das trevas. Durante anos, Thorne viajou pelo reino, construindo sua reputação como um implacável caçador de monstros e defensor dos fracos. Sua espada, Cinzabrasa, foi forjada nas chamas mágicas do Monte Drakon, e dizem que sua lâmina é capaz de cortar através de qualquer armadura.`,
      personalidade: `Thorne é conhecido por sua lealdade inabalável e senso de justiça. Embora sério na maioria das vezes, possui um senso de humor seco que emerge entre amigos próximos. Sua determinação ferrenha o torna um aliado valioso e um inimigo temível.`,
      caracteristicas: ["Corajoso", "Honrado", "Leal", "Determinado"],
      // conquistas: [
      //   {
      //     tipo: "military_tech",
      //     descricao:
      //       "Matador de Dragões\nDerrotou o temível dragão vermelho Pyrothor nas Montanhas Flamejantes.",
      //   },
      //   {
      //     tipo: "verified",
      //     descricao:
      //       "Campeão de Avendor\nVencedor do grande torneio do reino, ganhando reconhecimento real.",
      //   },
      //   {
      //     tipo: "swords",
      //     descricao:
      //       "Libertador de Eastwatch\nLiderou a resistência que libertou a cidade de Eastwatch dos invasores do norte.",
      //   },
      // ],
    };
    return (
      <StyledHomePage id="webcrumbs">
        <HomeHeader></HomeHeader>

        <HomeMain personagem={personagem}></HomeMain>

        <HomeFooter></HomeFooter>
      </StyledHomePage>
    );
  };

export default HomePage;
