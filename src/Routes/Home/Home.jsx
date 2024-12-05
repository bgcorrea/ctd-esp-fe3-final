import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout.jsx";
import Card from "../../Components/Card";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg justify-items-center">
        {items ? (
          items.map((item) => (
            <Link key={item.id} to={`/detail/${item.id}`}>
              <Card name={item.name} username={item.username} id={item.id} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default Home;
