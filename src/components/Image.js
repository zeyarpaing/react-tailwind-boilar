const Image = ({ dataobj }) => {
  //some code here
  return (
    <div className="bg-white shadow-xl m-8 border border-gray-300 rounded-lg">
      <div>
        <img
          className="rounded-t-lg"
          style={{ maxHeight: 250 }}
          src={dataobj.imgUrl}
          alt="Tree"
        />
      </div>

      <div className="p-4">
        <h2 className="font-bold text-3xl">{dataobj.title}</h2>
        <p>{dataobj.description}</p>
        <p className="italic">Author: {dataobj.author}</p>
      </div>
    </div>
  );
};

export default Image;
