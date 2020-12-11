const Image = ({ dataobj }) => {
  //some code here
  return (
    <div
      className="bg-white shadow-md m-4 rounded-lg"
      e={{
        width: 360 + "px",
        height: 440 + "px",
      }}
    >
      <div className="w-full" style={{ height: 300 }}>
        <img
          className="rounded-t-lg object-cover w-full h-full"
          src={dataobj.urls.regular}
          alt={dataobj.alt_description || ""}
        />
      </div>

      <div className="p-4">
        <h2 className="font-bold text-3xl">
          {dataobj.sponsorship && dataobj.sponsorship.tagline}
        </h2>
        <p>{dataobj.description || ""}</p>
        <p className="italic">Author: {dataobj.user.username}</p>
      </div>
    </div>
  );
};

export default Image;
