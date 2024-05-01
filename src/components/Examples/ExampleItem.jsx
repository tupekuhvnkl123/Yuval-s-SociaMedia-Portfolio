const ExampleItem = ({ title, video }) => {
  return (
    <div>
      <video src={video} />
      <p>{title}</p>
    </div>
  );
};

export default ExampleItem;
