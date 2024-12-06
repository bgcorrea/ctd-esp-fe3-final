import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import Form from "../../Components/Form";
import { ContextGlobal } from "../../Components/utils/global.context";

//Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Contact = () => {
  const { theme } = useContext(ContextGlobal); // Accede al tema actual desde el Context

  return (
    <Layout>
      <div
        className={`min-h-screen ${theme === "light" ? "bg-light" : "bg-dark"}`}
      >
        <h1 className="text-2xl font-bold mb-4">Contacto</h1>
        <Form />
      </div>
    </Layout>
  );
};

export default Contact;
