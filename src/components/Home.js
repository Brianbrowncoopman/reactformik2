import { Link } from "wouter";

const Home = () => {
  return (
    <div>
      <div className="title-p">
        <h1 className="HomeTitle">BIENVENIDO</h1>
        <p>¿ Crea tu usuario ?</p> 
      </div>
      
      <br />
      <Link href="/form">
        <a className="Btn">Crea tu usuario</a>
      </Link>
    </div>
  );
};

export default Home;
