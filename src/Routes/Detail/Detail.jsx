import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setItem(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!item) return <p>Loading...</p>;

  console.log("Item en Detail:", item);

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center border rounded-full mt-20">
      <h1>Detalle del Dentista</h1>
      <p>
        <strong>Nombre:</strong> {item.name}
      </p>
      <p>
        <strong>Nombre de usuario:</strong> {item.username}
      </p>
      <p>
        <strong>Email:</strong> {item.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {item.phone}
      </p>
      <p>
        <strong>Sitio web:</strong> {item.website}
      </p>
      <p>
        <strong>Dirección:</strong> {item.address.street}, {item.address.city},{" "}
        {item.address.zipcode}
      </p>
      <p>
        <strong>Compañía:</strong> {item.company.name}
      </p>
      <div className="cursor-pointer text-xl mt-4" onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Detail;
