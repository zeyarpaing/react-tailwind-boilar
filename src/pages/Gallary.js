import Image from "../components/Image";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { API } from "../components/api-instance";

const Gallary = () => {
  const [getImageData, setImageData] = useState([]);
  const [getLoading, setLoading] = useState(false);

  function fetchImage() {
    API.get(`/photos?page=2&per_page=30`)
      .then(function (res) {
        setLoading(false);
        setImageData(res.data);
      })
      .catch((err) => console.error(err));
    setLoading(true);
  }

  useEffect(fetchImage, []);
  return (
    <>
      <div className="grid place-items-center">
        {getLoading ? <Loading /> : ""}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 place-items-center">
        {getImageData.map((obj) => (
          <Image dataobj={obj} key={obj.id} />
        ))}
      </div>
    </>
  );
};
export default Gallary;
