import { useState } from "react";
import TableList from "../../components/Table";
import type { ITableHeader } from "../../components/Table";
import type { MockUser } from "../../data/mockUsers";
import { MOCK_USERS } from "../../data/mockUsers";
import { PageTitle, TableSection } from "./style";

const USER_HEADERS: ITableHeader[] = [
  { key: "nome", value: "Nome", columnWidth: "20%" },
  { key: "email", value: "E-mail", columnWidth: "25%" },
  { key: "perfil", value: "Perfil", columnWidth: "15%" },
  { key: "status", value: "Status", columnWidth: "12%" },
  { key: "dataCadastro", value: "Data de cadastro", columnWidth: "18%" },
];

function User() {
  const [users] = useState(MOCK_USERS);
  const [isLoading] = useState(false);

  return (
    <>
      <PageTitle>Usuários</PageTitle>
      <TableSection>
        <TableList<MockUser>
          data={users}
          headers={USER_HEADERS}
          isLoading={isLoading}
          titleMessage="Nenhum usuário registrado"
          messageModule="Cadastre um usuário para visualizá-lo na lista."
        />
      </TableSection>
    </>
  );
}

export default User;
