const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Podemos ayudarte</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
        Si tienes un familiar y tienes dudas, déjanos tus datos para poder asistirte.
        </p>
        <form action="#" className="space-y-8">


        <div>
            <label htmlFor="subject" className="form__label">
            Nombre y apellidos
            </label>
            <input
              type="text"
              id="subject"
              placeholder="ej: Juan Perez"
              className="form__input mt-1"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="form__label">
              Tu correo electronico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ej: example@gmail.com"
              className="form__input mt-1"
            />
          </div>

          <div>
            <label htmlFor="phone" className="form__label">
              Tu numero de telefono
            </label>
            <input
              type="text"
              id="subject"
              placeholder="ej: +51 999 999 999"
              className="form__input mt-1"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Razon
            </label>
            <textarea
              rows={6}
              type="text"
              id="message"
              placeholder="Permítenos saber en qué te podemos ayudar."
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
