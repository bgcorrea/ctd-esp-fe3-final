import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const clearAllFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dentistas Destacados</h1>

      {favorites.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg justify-items-center">
          {favorites.map((fav) => (
            <div key={fav.id} className="relative">
              <Card
                name={fav.name}
                username={fav.username}
                id={fav.id}
                isFavPage={true}
              />
              <button
                onClick={() => removeFavorite(fav.id)}
                className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full"
              >
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 w-full">
          <p className="text-gray-500 text-center text-lg">
            No tienes dentistas destacados todavía.
          </p>
        </div>
      )}

      {favorites.length > 0 && (
        <button
          onClick={clearAllFavorites}
          className="bg-red-500 text-white py-2 px-4 rounded mb-4 mt-4 block mx-auto"
        >
          Eliminar todos los favoritos
        </button>
      )}
    </Layout>
  );
};

export default Favs;
