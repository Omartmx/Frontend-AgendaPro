function HorarioList() {

  const horarios = [
    { id: 1, especialista: "Dr. Juan Pérez", hora: "08:00 - 12:00" },
    { id: 2, especialista: "Dra. María López", hora: "10:00 - 14:00" },
    { id: 3, especialista: "Dr. Carlos Ruiz", hora: "14:00 - 18:00" }
  ];

  return (

    <ul className="list">

      {horarios.map((h) => (

        <li key={h.id} className="list-item">

          <strong>{h.especialista}</strong> — {h.hora}

        </li>

      ))}

    </ul>

  );
}

export default HorarioList;