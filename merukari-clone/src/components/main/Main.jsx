import Banner from "../../assets/banner.jpg";
import { fetchMockData, fetchMockRecomended } from "../../mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import RecomendedItem from "../RecomendedItem";
function Main() {
  const [items, setItems] = useState([{}]);
  const [recomended, setRecomended] = useState([{}]);
  useEffect(() => {
    fetchMockData().then((data) => setItems(data));
    fetchMockRecomended().then((data) => setRecomended(data));
  }, []);
  return (
    <main className="min-h-[calc(100vh-150px)] mt-40 p-4 w-auto h-max-content">
      <div className="m-auto lg:w-[1028px] w-auto h-auto">
        <img
          src={Banner}
          className="w-full h-36 md:h-64 object-cover rounded-xl"
        />
        <ItemList
          title="人気のブランド"
          viewAllText="すべてを見る"
          items={items}
        />
        <ItemList
          title="人気のカテゴリー"
          viewAllText="すべてを見る"
          items={items}
        />
        <div className="w-full p-3 mt-3 ">
          <h3 className="text-gray-500 font-bold text-lg mb-3">
            おすすめの商品
          </h3>
          <section className="pt-[20px] w-full h-auto">
            <ul className=" relative w-screen lg:w-full lg:gap-5 left-1/2 transform -translate-x-1/2 lg:grid-cols-5  h-auto grid grid-cols-3 gap-[0.1em] bg-[#2d2d2d]">
              {recomended.map((recomend) => (
                <RecomendedItem
                  key={recomend.id}
                  url={recomend.url}
                  price={recomend.price}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Main;
