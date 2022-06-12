import React, { useEffect, useState } from "react";
export default function Home() {
  const API_URL = "http://api.tvmaze.com/search/shows?q=girls";
  const [item, setItem] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const postData = await res.json();
      setItem(postData);
      console.log(postData);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setResult(result);
    if (result !== null) {
      const newImage = item.filter((getData) => {
        return getData.show.name.toLowerCase().includes(result.toLowerCase());
      });
      setItem(newImage);
      console.log(newImage);
    } else {
      setItem(item);
    }
  };
  const SearchImg = ({ x, valueSrch }) => {
    const getImageWithValue = (event) => {
      valueSrch(event.target.value);
    };

    return (
      <div className="container">
        <div className="w-screen h-[400px] z-10 bg-white border border-black border-opacity-10 ">
          <div className="px-2 flex justify-between items-start ">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Campflix</h1>

            <div className="flex justify-end mr-3">
              <div className="mb-3 xl:w-96 mr-3">
                <input
                  onChange={getImageWithValue}
                  value={x}
                  type="search"
                  class="
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleSearch"
                  placeholder="Search..."
                />
              </div>

              <button
                className="h-[2.5rem] btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
            hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 
            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-end"
                type="button"
                id="button-addon2"
              >
                Achmad Zaky
              </button>
            </div>
          </div>
          <div className="container">
            <div className="row-auto">
              <div className="col-span-12 flex justify-start my-3 px-3">
                <img
                  src={item[0]?.show.image?.medium}
                  alt=""
                  className="img-thumbnail rounded-lg shadow-lg bg-white max-w-sm "
                />
                <div className="card-body px-3">
                  <h5 className="card-title text-3xl">
                    Name : {item[0]?.show?.name}
                  </h5>
                  <h1 className="card-title text-xl">
                    Sinopsis :{" "}
                    {item[0]?.show?.summary
                      .split("<p>")
                      .pop()
                      .split("</p>")
                      .join(" ")}
                  </h1>
                  <h5 className="card-title text-3xl">
                    URL : {item[0]?.show?.url}
                  </h5>
                  <h5 className="card-title text-3xl">
                    Genre : {item[0]?.show?.genres.join(" ,")}
                  </h5>
                  <h5 className="card-title text-3xl">
                    Days : {item[0]?.show?.schedule?.days.join(" ,")}
                  </h5>
                  <h5 className="text-3xl">
                    Time : {item[0]?.show?.schedule?.time}
                  </h5>
                  <a href={item[0]?.show?.officialSite}>
                    <button
                      type="button"
                      className="h-[2.5rem] btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
            hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 
            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-end"
                    >
                      Get Movie
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SearchImg term={result} valueSrch={handleChange} />

      <div className="container my-5 bg-blend-lighten ">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="grid grid-rows-1 grid-flow-col gap-4 w-screen overflow-scroll overflow-y-hidden">
            {item.map((value) => {
              return (
                <>
                  <div className="w-max">
                    <img
                      className="img-thumbnail"
                      key={value}
                      src={value.show?.image?.medium}
                      alt="..."
                    />
                    <text>{value.show?.name}</text>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
