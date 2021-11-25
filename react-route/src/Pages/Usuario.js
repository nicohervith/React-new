import { useParams } from "react-router";

const Usuario = () => {
  let {username}= useParams();
  return (
    <div>
      <h2> Perfil del usuario </h2>
      <p> Nombre del usuario <b>{username}</b></p>
    </div>
  );
};

export default Usuario;
