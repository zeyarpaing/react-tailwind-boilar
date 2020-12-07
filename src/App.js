import "./styles/mystyle.css";
import "./App.css";
import "./styles/main.css";
import Image from "./components/Image";
import Form from "./components/Form";
const imageData = [
  {
    title: "Bird",
    description: "Blah Blah blah blah",
    author: "Unsplash",
    imgUrl:
      "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg",
  },
  {
    title: "Bee",
    description: "Blah Blah blah blah",
    author: "Pixabay",
    imgUrl:
      "https://cdn.pixabay.com/photo/2012/02/28/10/23/bee-18192_960_720.jpg",
  },
  {
    title: "Ocean",
    description: "Blah Blah blah blah",
    author: "Pinterest",
    imgUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_960_720.jpg",
  },
  {
    title: "Ocean",
    description: "Blah Blah blah blah",
    author: "Pinterest",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  },
];
const cameraDataBrand = ["Sony", "Nikon", "blah", "secondBlah"];
function App() {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-col-1 place-items-center">
        {imageData.map((obj, idx) => (
          <Image dataobj={obj} key={idx} />
        ))}
      </div>
      <Form camera={cameraDataBrand} />
    </>
  );
}

export default App;
