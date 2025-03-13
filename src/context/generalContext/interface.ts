export interface IPersonagem {
  id: number;
  personagem: {
    nome: string;
    raca: string;
    classe: string;
    nivel: number;
    idade: number;
    genero: string;
    alinhamento: string;
    divindade: string;
    hp: number;
    experiencia: string;
    historia: string;
    altura: string;
    peso: string;
    personalidade: string;
    caracteristicas: string[];
  };
  biografia: {
    origem: string;
  };
  ficha: {
    pontosDeVida: number;
    pontosDeMana: number;
    atributos: {
      forca: number;
      destreza: number;
      constituicao: number;
      inteligencia: number;
      sabedoria: number;
      carisma: number;
    };
    defesa: number;
    iniciativa: number;
  };
  mochila: {
    capacidadeMaxima: number;
    itens: {
      Armadura: ItemArmadura[];
      Arma: ItemArma[];
      EquipamentosDeMao: ItemEquipamentoDeMao[];
      Consumivel: ItemConsumivel[];
      Materiais: ItemMaterial[];
    };
  };
  feiticos: Feitico[];
  habilidades: Habilidade[];
}
export interface IAtributos {
  key: string;
  valor: number;
}
export interface ItemArmadura {
  id: number;
  nome: string;
  quantidade: number;
  descricao: string;
  modificadorCA: number;
  resistencia: Resistencia;
}

export interface ItemArma {
  id: number;
  nome: string;
  quantidade: number;
  descricao: string;
  dano: Dano;
  bonus: Atributos;
  efeitoEspecial?: Dano;
}

export interface ItemEquipamentoDeMao {
  id: number;
  nome: string;
  quantidade: number;
  descricao: string;
  modificadorCA?: number;
  resistencia?: Resistencia;
  efeitos?: string[];
}

export interface ItemConsumivel {
  id: number;
  nome: string;
  quantidade: number;
  descricao: string;
}

export interface ItemMaterial {
  id: number;
  nome: string;
  quantidade: number;
  descricao: string;
}

export interface Resistencia {
  fogo?: number;
  frio?: number;
  eletricidade?: number;
  veneno?: number;
  fisico?: number;
  magico?: number;
}

export interface Dano {
  dadoQuantidade: number;
  tipoDado: number;
  bonus: number;
}

export interface Atributos {
  forca: number;
  destreza: number;
  constituicao: number;
  inteligencia: number;
  sabedoria: number;
  carisma: number;
}

export interface Feitico {
  id: number;
  nome: string;
  nivel: number;
  custoDeMana: number;
  descricao: string;
  dano?: Dano;
}

export interface Habilidade {
  id: number;
  nome: string;
  descricao: string;
}
