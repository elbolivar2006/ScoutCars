
import { useState } from "react";

function Micuenta() {
  const [correoLogin, setCorreoLogin] = useState("");
  const [contrasenaLogin, setContrasenaLogin] = useState("");

  const [nombre, setNombre] = useState("");
  const [correoRegistro, setCorreoRegistro] = useState("");
  const [contrasenaRegistro, setContrasenaRegistro] = useState("");

  const [erroresLogin, setErroresLogin] = useState({});
  const [erroresRegistro, setErroresRegistro] = useState({});

  const [telefono, setTelefono] = useState("");

  function validarLogin(e) {
    e.preventDefault();

    const nuevosErrores = {};

    if (!correoLogin.trim()) {
      nuevosErrores.correo = "El correo es obligatorio";
    }

    if (!contrasenaLogin.trim()) {
      nuevosErrores.contrasena = "La contraseña es obligatoria";
    }

    setErroresLogin(nuevosErrores);
  }

  function validarRegistro(e) {
    e.preventDefault();

    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!correoRegistro.trim()) {
      nuevosErrores.correo = "El correo es obligatorio";
    }

    if (!contrasenaRegistro.trim()) {
      nuevosErrores.contrasena = "La contraseña es obligatoria";
    }
    if (!telefono.trim()) {
        nuevosErrores.telefono = "El teléfono es obligatorio";
}

    setErroresRegistro(nuevosErrores);
  }

  return (
    <main className="container my-5">
      <div className="row justify-content-center g-4">

        {/* Iniciar sesión */}
        <div className="col-12 col-md-6">
          <div className="card h-100 shadow p-4">
            <h2 className="text-center mb-4">
              Iniciar sesión
            </h2>

            <form onSubmit={validarLogin} noValidate>
              <div className="mb-3">
                <label className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  value={correoLogin}
                  onChange={(e) => setCorreoLogin(e.target.value)}
                />
                {erroresLogin.correo && (
                  <p className="text-danger">
                    {erroresLogin.correo}
                  </p>
                )}
              </div>


              <div className="mb-3">
                <label className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  value={contrasenaLogin}
                  onChange={(e) => setContrasenaLogin(e.target.value)}
                />
                {erroresLogin.contrasena && (
                  <p className="text-danger">
                    {erroresLogin.contrasena}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>

        {/* Registrarse */}
        <div className="col-12 col-md-6">
          <div className="card h-100 shadow p-4">
            <h2 className="text-center mb-4">
              Registrarse
            </h2>

            <form onSubmit={validarRegistro} noValidate>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                {erroresRegistro.nombre && (
                  <p className="text-danger">
                    {erroresRegistro.nombre}
                  </p>
                )}
              </div>

               <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                    type="tel"
                    className="form-control"
                    placeholder="Ingresa tu teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                {erroresRegistro.telefono && (
                    <p className="text-danger">
                        {erroresRegistro.telefono}
                    </p>
                )}
                </div>

              <div className="mb-3">
                <label className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  value={correoRegistro}
                  onChange={(e) => setCorreoRegistro(e.target.value)}
                />
                {erroresRegistro.correo && (
                  <p className="text-danger">
                    {erroresRegistro.correo}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Crea una contraseña"
                  value={contrasenaRegistro}
                  onChange={(e) => setContrasenaRegistro(e.target.value)}
                />
                {erroresRegistro.contrasena && (
                  <p className="text-danger">
                    {erroresRegistro.contrasena}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Registrarse
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Micuenta;
