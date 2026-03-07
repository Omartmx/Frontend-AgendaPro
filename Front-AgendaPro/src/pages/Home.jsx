import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>

      <Navbar />

      <section className="hero">

        <h1>Gestiona tus citas fácilmente</h1>

        <p>
          AgendaPro te permite administrar citas,
          especialistas y clientes en un solo lugar.
        </p>

      </section>

    </div>
  );
}

export default Home;