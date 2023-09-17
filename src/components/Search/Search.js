import React, { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useGlobalContext } from "../Context/Context";
export const Search = () => {
  const { query, setQuery } = useGlobalContext();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=2023-09-17&sortBy=popularity&apiKey=56fd7df6537f4e59ad8d12a63bba9218`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data);

        setLoading(false);
      });
  }, [query]);
  console.log(news);
  if (loading)
    return (
      <Spinner className="flex items-center justify-center mx-auto h-screen" />
    );
  return (
    <div>
      <div className="flex items-center justify-center flex-wrap mx-auto">
        {/* {news?.map((item) => (
          <a href={item.url} target="_blank">
            <div className="flex items-start justify-between border px-2 py-2 w-[1000px] my-2 ">
              <div className="w-[300px]">
                <img src={item.urlToImage} className="w-72 h-60 " />
              </div>
              <div className="ml-2 w-[700px]">
                <h1 className=" font-bold text-2xl">{item.title}</h1>
                <h1 className="text-xs py-2">
                  <strong> short by</strong> {item.author} | {item.publishedAt}
                </h1>
                <p className="text-[16px] py-2">{item.description}</p>
              </div>
            </div>
          </a>
        ))} */}
      </div>
    </div>
  );
};
