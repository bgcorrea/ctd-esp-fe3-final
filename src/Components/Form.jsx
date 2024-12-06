import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (formData.name.length < 5) {
      setError("Por favor verifique su información nuevamente");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Por favor verifique su información nuevamente");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado", formData);
      setSuccess(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 max-w-md mx-auto space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white border-gray-400 dark:bg-white dark:border-gray-600 dark:text-black dark:focus:ring-indigo-700"
          placeholder="Escribe tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white border-gray-400 dark:bg-white dark:border-gray-600 dark:text-black dark:focus:ring-indigo-700"
          placeholder="Escribe tu email"
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      {success && (
        <div className="text-green-500 text-sm">
          Gracias {formData.name}, te contactaremos cuando antes vía mail.
        </div>
      )}

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
