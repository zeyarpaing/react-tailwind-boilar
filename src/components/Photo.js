import React, { useState, useEffect } from "react";
import { API} from "./api-instance";
import Loading from "./Loading";

const Photo = ({match}) => {
  const [getImageData, setImageData] = useState(null);
  const [getLoading, setLoading] = useState(false);
  const id = match.params.pid;

  function fetchImage() {
    console.log("Fetching image");
    API.get(`/photos/${id}`)
      .then(function (res) {
        setLoading(false);
        console.log('imageData', res.data)
        setImageData(res.data);
      })
      .catch((err) => console.error(err));
    setLoading(true);
  }

  useEffect( fetchImage, [] )
  console.log('match', match)
  return (
    <>
      <div className="grid place-items-center">
        {getLoading ? <Loading /> : ""}
      </div>
      { getImageData ? (
        <div className=" w-full">
          <img style={{width: '50%', display: 'block', margin: 'auto'}} src={getImageData.urls.regular} />
          <div className="px-56 py-12">
          <div className="m-4">Likes: {getImageData.likes}</div>
            <div className="m-4">Views: {getImageData.views}</div>
          <div className="m-4">
            Author
            <div>Name: {getImageData.user.name}</div>
            <div>Bio: {getImageData.user.bio}</div>
          </div></div>
        </div>) : ''}
    </>
    )
}

export  default Photo;