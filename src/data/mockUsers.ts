export interface MockUser {
  id: string;
  nome: string;
  email: string;
  perfil: string;
  status: string;
  dataCadastro: string;
}

export const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    perfil: "Administrador",
    status: "Ativo",
    dataCadastro: "15/01/2025",
  },
  {
    id: "2",
    nome: "João Santos",
    email: "joao.santos@email.com",
    perfil: "Usuário",
    status: "Ativo",
    dataCadastro: "18/01/2025",
  },
  {
    id: "3",
    nome: "Ana Oliveira",
    email: "ana.oliveira@email.com",
    perfil: "Gestor",
    status: "Ativo",
    dataCadastro: "22/01/2025",
  },
  {
    id: "4",
    nome: "Pedro Costa",
    email: "pedro.costa@email.com",
    perfil: "Usuário",
    status: "Inativo",
    dataCadastro: "25/01/2025",
  },
  {
    id: "5",
    nome: "Carla Mendes",
    email: "carla.mendes@email.com",
    perfil: "Administrador",
    status: "Ativo",
    dataCadastro: "02/02/2025",
  },
];
