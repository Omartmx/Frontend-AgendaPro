import EspecialistaCard from "../components/Especialista/EspecialistaCard";

export default function Especialistas() {

  const especialistas = [
    {id:1,nombre:"Dr. Juan Pérez",especialidad:"Cardiología"},
    {id:2,nombre:"Dra. María López",especialidad:"Dermatología"},
    {id:3,nombre:"Dr. Carlos Ruiz",especialidad:"Neurología"},
  ];

  return (
    <div className="page">

      <h1>Especialistas</h1>

      <div className="grid-cards">

        {especialistas.map(e=>(
          <EspecialistaCard key={e.id} especialista={e}/>
        ))}

      </div>

    </div>
  );
}