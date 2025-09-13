import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";
import ShowMore from "../ui/ShowMore";

function Home() {
  return (
    <div>
      <Title>O que é?</Title>
      <Text>
        <ShowMore maxLength={200}>
          As políticas de segurança da informação (PSI) são um conjunto de
          diretrizes formais definidas por uma organização para proteger seus
          ativos de informação contra ameaças internas e externas. Elas não são
          apenas normas técnicas, mas também instrumentos de governança
          corporativa, alinhados com os objetivos estratégicos e legais da
          instituição. Em resumo, uma política de segurança: Define quem pode
          fazer o quê dentro da organização; Estabelece procedimentos claros
          para lidar com riscos; Promove conscientização e disciplina no uso da
          tecnologia; Dá suporte ao cumprimento de leis e regulamentações (LGPD,
          ISO 27001, PCI-DSS, HIPAA, etc.); Cria uma cultura de segurança que
          envolve pessoas, processos e tecnologia.
        </ShowMore>
      </Text>
      <Img path="https://www.actwork.com.br/wp-content/uploads/shutterstock_738059353.jpg" />
    </div>
  );
}

export default Home;
