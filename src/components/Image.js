const Image = (props) => {
  //some code here
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1603329468797-17034759a9ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        alt="Tree"
      />
      <div>
        <h2>{props.title}</h2>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Image;
