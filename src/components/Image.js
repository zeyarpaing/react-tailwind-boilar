import { Link } from "react-router-dom";

const Image = ({ dataobj }) => {
  //some code here
  return (
    <Link to={`/photo/${dataobj.id}`}>
    <div
      className="bg-white shadow-md m-4 rounded-lg cursor-pointer"
    >
      <div className="w-full" style={{ height: 300 }}>
        <img
          className="rounded-lg object-cover w-full h-full"
          src={dataobj.urls.regular}
          alt={dataobj.alt_description || ""}
        />
        <div className="p-4 rounded-b-lg relative bg-gradient-to-t from-gray-700 to-transparent" style={{top: '-55px'}}>
          <p className="italic text-white">Author: {dataobj.user.username}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Image;
