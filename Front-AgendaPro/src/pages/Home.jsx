import Navbar from "../components/Navbar";
import Footer from "../components/Landing/Footer";

function Home() {
  return (
    <div className="home-container">

      <Navbar />

      <main>

        {/* HERO */}
        <section className="hero container grid-12">

          <div className="hero-text">
            <h1>
              Gestiona tus citas médicas de forma
              <span> rápida y sencilla</span>
            </h1>

            <p>
              AgendaPro permite a especialistas y pacientes
              organizar citas, horarios y recordatorios
              desde una plataforma moderna.
            </p>

            <div className="hero-buttons">
              <a href="/registrar" className="btn-primary">
                Comenzar ahora
              </a>

              <a href="#beneficios" className="btn-secondary">
                Ver beneficios
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img className="w-full h-full object-cover" data-alt="Professional doctor in a modern office consultation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt4AskV-0m2kjEXaurujlEEl5GppGjLSRjJBVPwYkt0jSrpM25vzVcFnHtWdUX4vMBw0sGk7Ysx-GTshBgx9A06qcweZ5b-MiKb2R7QtUa0cjtcs2ddM-gYtLhW1YQtrO3KbgdTKAqn_GCtl8OY_wYvWccxWrgk7vjPkM4UKe57vdHm5jJKueNNDrt4eZwtT_Gpjtj1c_H_EciGwlMBk_hUfyDnNsPXovEf8Wfwsq_b7lpiVVTrosFU98B5wHAe65PSuuzjMcAA2zi" />
          </div>

        </section>

        {/* COMO FUNCIONA */}
        <section id="como" className="section bg-light">

          <div className="container">

            <h2 className="section-title">
              Cómo funciona
            </h2>

            <div className="como-grid">

              {/* TEXTO */}
              <div className="como-text">

                <div className="feature-card">
                  <h3>Registro rápido</h3>
                  <p>
                    Crea tu cuenta como especialista o paciente
                    en menos de un minuto.
                  </p>
                </div>

                <div className="feature-card">
                  <h3>Agenda inteligente</h3>
                  <p>
                    Organiza tus horarios y disponibilidad
                    fácilmente.
                  </p>
                </div>

                <div className="feature-card">
                  <h3>Gestión de citas</h3>
                  <p>
                    Agenda, modifica o cancela citas
                    con total facilidad.
                  </p>
                </div>

              </div>


              {/* IMAGEN */}
              <div className="como-imagen">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3CDkGBFcfV1v6WXMHKVPrFvy3zpo5Emf1h2gqRaUeXNgtxwlkQGHNEvDGvFw1o4FHUqdBpjcsuc5zfTMHkmKZdogG9KW0gLyEtJwOvgV0BTy52uYipEB93GljsbghIiag7NuMd6sFcW7wpOE6L-lbfZYbOuXtN-gAe3DKmQk44J9EjtKnT3DxnuTwH59SxKI3JvmuidTOdg60tHVXcOfhAIq2n-TbD2Pm_DqV8nUrYNskdLJcgy_6xLUWyWKLRtHuxVp9hPiqytfA"
                  alt="Interfaz de agenda digital"
                />
              </div>

            </div>

          </div>

        </section>

        {/* ESPECIALISTAS DESTACADOS */}
        <section className="py-20 bg-slate-50" id="especialistas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Título y botón */}
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Especialistas destacados
                </h2>
                <p className="text-slate-600">
                  Conoce a los profesionales mejor valorados de nuestra red.
                </p>
              </div>
              <button className="hidden md:block text-blue-600 font-bold hover:underline">
                Ver todos los especialistas →
              </button>
            </div>

            {/* Grid de especialistas */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Card 1 */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-100 group hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTZvfD3jalyJFRVHDpRHVjySMXjOupY7awdSyHeZv5xYpHRLAY3Ny16C4sCdpoCf-Jyps1RpeyxcCI9hULaTW5ENKAIHWHMI-zV3X2g4Irrg8vcQRWNd7b9Rdqrb9Xhso6VwwHJsKC40DRrHpyxESvJgm6VTOiGgnrUfoVdAiDG1J8moiHsZyiwuSZgDrpTbo_54U4HGgaPGpEuZ7pTYd3pGTv1tzfBu8EnJeaalQ-DyeXtVOZz_qMXUIph0eKRYbjJ3KFF5L91FAG"
                    alt="Dra. Elena Ramos, Cardiología"
                  />
                </div>
                <div className="p-6">
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                    Cardiología
                  </p>
                  <h4 className="text-lg font-bold mb-1">Dra. Elena Ramos</h4>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="text-slate-500 text-xs ml-1">(128 reseñas)</span>
                  </div>
                  <button className="w-full py-2.5 rounded-lg border border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors">
                    Reservar Cita
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-100 group hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYr6vS2TQ80ifEz_mro-Ap-JNhW_GB1WD0o8qIqGJ_RXlOawDxnUx4D5sTWhpD7QCvboby4wuBEM7Y9YtBE9AZjn6wixmqg0Vs1GDDUpC5rvXE3JuN5OHmzKK0fHIuzLtVluGaCzY-M2blGCUPGB57omPYoO6U3A5rNnU7AdYA1dkQSLbIz99VSJikux5I4mw8IewrGbQklWXM8BVb5MC9NNhVTTpVzJWnQMhgCNLfIW74scl9jN5vo98fzxsrJuKmeVf0oMnLXzVM"
                    alt="Dr. Carlos Mendoza, Psicología"
                  />
                </div>
                <div className="p-6">
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                    Psicología
                  </p>
                  <h4 className="text-lg font-bold mb-1">Dr. Carlos Mendoza</h4>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="text-slate-500 text-xs ml-1">(94 reseñas)</span>
                  </div>
                  <button className="w-full py-2.5 rounded-lg border border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors">
                    Reservar Cita
                  </button>
                </div>
              </div>

              {/* Card 3 y 4 → se pueden copiar igual que arriba con sus imágenes y datos */}
            </div>
          </div>
        </section>


        {/* BENEFICIOS */}
        <section id="beneficios" className="section">

          <div className="container">

            <h2 className="section-title">
              Beneficios de AgendaPro
            </h2>

            <div className="features-grid">

              <div className="feature-card">
                <h3>Ahorra tiempo</h3>
                <p>
                  Automatiza la gestión de citas y evita
                  procesos manuales.
                </p>
              </div>

              <div className="feature-card">
                <h3>Mejor organización</h3>
                <p>
                  Mantén un control claro de tus
                  horarios y pacientes.
                </p>
              </div>

              <div className="feature-card">
                <h3>Acceso desde cualquier lugar</h3>
                <p>
                  Usa la plataforma desde tu
                  computadora o móvil.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ESTADISTICAS */}
        <section className="stats">

          <div className="stat">
            <h3>+500</h3>
            <p>Usuarios activos</p>
          </div>

          <div className="stat">
            <h3>+1200</h3>
            <p>Citas gestionadas</p>
          </div>

          <div className="stat">
            <h3>98%</h3>
            <p>Satisfacción de usuarios</p>
          </div>

        </section>


        {/* CTA FINAL */}
        <section className="cta">

          <h2>
            Empieza a organizar tus citas hoy mismo
          </h2>

          <a href="/registrar" className="btn-primary">
            Crear cuenta
          </a>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;