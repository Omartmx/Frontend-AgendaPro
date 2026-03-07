function UsuarioTable() {

  const usuarios = [
    { id: 1, nombre: "Ana Torres", email: "ana@email.com", rol: "Paciente" },
    { id: 2, nombre: "Luis Gómez", email: "luis@email.com", rol: "Paciente" },
    { id: 3, nombre: "Carlos Ruiz", email: "carlos@email.com", rol: "Administrador" }
  ];

  return (
    <table className="table">

      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
      </thead>

      <tbody>

        {usuarios.map((u) => (

          <tr key={u.id}>

            <td>{u.nombre}</td>

            <td>{u.email}</td>

            <td>{u.rol}</td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default UsuarioTable;