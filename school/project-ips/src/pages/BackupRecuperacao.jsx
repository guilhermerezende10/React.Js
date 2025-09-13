import Title from "../ui/Title";
import Text from "../ui/Text"

function BackupRecuperacao() {
  return (
    <>
      <Title>Backup e Recuperação</Title>
      <Text>
        Essa política assegura a continuidade dos negócios em caso de falhas
        técnicas, desastres naturais ou ataques (ex.: ransomware). Sem ela, uma
        empresa pode perder dados críticos, causando danos financeiros e
        reputacionais irreversíveis. Ela está ligada ao princípio da
        disponibilidade da informação e deve prever não apenas cópias de
        segurança, mas também testes de restauração e planos de recuperação.
        Exemplos: Backup diário automático dos servidores e bancos de dados.
        Testes regulares de recuperação para garantir a integridade dos
        arquivos. Armazenamento externo ou em nuvem em datacenters
        geograficamente distintos. Plano de recuperação de desastres (DRP) com
        RTO e RPO definidos. Backups criptografados para proteção contra roubo
        de mídia.
      </Text>
    </>
  );
}

export default BackupRecuperacao;
