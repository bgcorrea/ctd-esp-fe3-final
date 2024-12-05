import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { ContextGlobal } from "../../Components/utils/global.context";

const Favs = () => {
  const { favs } = useContext(ContextGlobal);

  return (
    <Layout>
      <h1>Dentist Favs</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg justify-items-center">
        {favs.length > 0 ? (
          favs.map((fav) => (
            <div key={fav.id} className="bg-white w-56 h-60 rounded-lg">
              <p>{fav.name}</p>
              <p>{fav.username}</p>
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default Favs;
