import React from "react";
import loading from "./loading.gif";
export default function NewsItems(props) {
  return (
    <>
      <div className="card my-5">
        <img src={props.img} className="card-img-top" alt={"https://ichef.bbci.co.uk/news/1024/branded_news/9521/production/_129977183_gettyimages-1258391759-594x594.jpg"}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <a href={props.url} target="_blank" className="btn btn-primary">
            read more
          </a>
        </div>
      </div>
    </>
  );
}
