import { Link } from "wouter";

const Registered = () => {
  return(
    <div>
      <h1 className="RegisteredTitle">Registo de usuario correcto!</h1>

      <Link href="/">
        <a className="Btn">Regresar al inicio</a>
      </Link>
    </div>
  );
}

export default Registered;