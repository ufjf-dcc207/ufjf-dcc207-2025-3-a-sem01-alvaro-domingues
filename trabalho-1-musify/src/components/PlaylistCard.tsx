
interface PlaylistProps {
  playlist: {
    nome: string;
    capaUrl: string;
    descricao: string;
    // Se precisar de outras propriedades (como id, quantidadeMusicas), adicione aqui
  };
}
const PlaylistCard: React.FC<PlaylistProps> = ({ playlist }) => { 
  return (
    <div className="playlist-card">
      {/* O TypeScript agora sabe que 'playlist' tem 'capaUrl', 'nome' e 'descricao' */}
      <img src={playlist.capaUrl} alt={`Capa da playlist ${playlist.nome}`} className="playlist-cover" />
      <h3 className="playlist-title">{playlist.nome}</h3>
      <p className="playlist-description">{playlist.descricao}</p>
    </div>
  );
};

export default PlaylistCard;