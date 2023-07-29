import React from "react";
import NewsItems from "./NewsItems";
import { useState, useEffect } from "react";
import Load from "./Load";
import InfiniteScroll from "react-infinite-scroll-component";
export default function NewsMain(props) {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [size, setsize] = useState(9);
  const [results, setresults] = useState(0);
  const getNews = async () => {
    document.title=`NewsViLLa - ${props.cat} `
    props.prg(10);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=e3dda6ab29a042ee95456893cdeb839a&pageSize=${size}&page=${page}`
    );
    props.prg(30);
    const data = await response.json();
    props.prg(60);
    setLoading(false);
    setresults(data.totalResults);
    setData(data.articles);
    props.prg(100);
  };
  const capitalize = (s)=>{
    return s[0].toUpperCase() + s.slice(1);
  };
  const fetchMoreData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat}&apiKey=e3dda6ab29a042ee95456893cdeb839a&pageSize=${size}&page=${
        page + 1
      }`
      );
      const data = await response.json();
      setData(Data.concat(data.articles));
      setpage(page + 1);
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
    <h2 className="heading text-primary text-center " style={{marginTop: "80px"}}>{capitalize(props.cat)} Top-Headlines</h2>
    {Loading && <Load/>}
    <InfiniteScroll
      dataLength={Data.length}
      next={fetchMoreData}
      hasMore={Data.length !== results}
      loader={<Load />}
    >
      <div className="container my-3">
        <div className="row">
          {Data.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title?element.title:"Unknown"}
                  desc={element.description?element.description:"Unknown"}
                  img={element.urlToImage?element.urlToImage:"Unknown"}
                  url={element.url?element.url:"Unknown"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
    </>
  );
}
