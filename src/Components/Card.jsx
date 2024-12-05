import React, { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id, isFavPage = false }) => {
  const { setFavs } = useContext(ContextGlobal);
  const [message, setMessage] = useState("");

  const addFav = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const favCard = { name, username, id };

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite = favorites.some((fav) => fav.id === favCard.id);

    if (!isFavorite) {
      const updatedFavorites = [...favorites, favCard];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavs(updatedFavorites);
      setMessage("¡Dentista agregado a favoritos!"); // Mensaje de éxito
    } else {
      alert("Este doctor ya está en tus favoritos.");
    }
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg relative">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-3 py-0.5">
          {username}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="/images/doctor.jpg"
          alt="Doctor"
        />
      </figure>
      <p className="flex flex-col justify-center items-center">
        <span className="text-sm font-light">{name}</span>
      </p>

      {!isFavPage && (
        <button
          onClick={addFav}
          className="absolute top-2 right-2 flex justify-center items-center w-7 h-7 rounded-full bg-white p-1"
        >
          <img
            src="/images/star.png"
            alt="Add to Favorites"
            className="hover:scale-125 hover:brightness-150 transition-transform rounded-full"
          />
        </button>
      )}

      {message && (
        <div className="absolute bottom-2 left-0 w-full text-center text-sm text-red-500">
          {message}
        </div>
      )}
    </div>
  );
};

export default Card;
