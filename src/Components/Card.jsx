import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {
  const { favs, setFavs } = useContext(ContextGlobal);

  const addFav = (e) => {
    e.stopPropagation();

    const favCard = { name, username, id };

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite = favorites.some((fav) => fav.id === id);

    if (!isFavorite) {
      favorites.push(favCard);
      localStorage.setItem("favorites", JSON.stringify(favorites));

      setFavs([...favs, favCard]);
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
          alt="odonto"
        />
      </figure>
      <p className="flex flex-col justify-center items-center">
        <span className="flex flex-col justify-center items-center text-sm font-light">
          {name}
        </span>
      </p>

      <button
        onClick={addFav}
        className="absolute top-2 right-2 flex justify-center items-center w-7 h-7 rounded-full bg-white p-1"
      >
        <img
          src="/images/star.png"
          alt="Star"
          className="hover:scale-125 hover:brightness-150 transition-transform rounded-full"
        />
      </button>
    </div>
  );
};

export default Card;
