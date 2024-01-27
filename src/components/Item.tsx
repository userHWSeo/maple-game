import glove from "../../public/image/glove.png";

function Item() {
  // 드래그중인 대상이 위로 포개졌을 때
  const dragEnter = () => {
    console.log("enter");
  };

  const dragDrop = (e: React.DragEvent<HTMLImageElement>) => {
    console.log("drop");
    const imgName = e.dataTransfer.getData("text/plain");
    console.log(imgName);
  };
  const dragOver = (e: React.DragEvent<HTMLImageElement>) => {
    console.log("over");
    e.preventDefault();
  };
  const dragLeave = () => {
    console.log("leave");
  };
  return (
    <img
      style={{ width: "100px" }}
      src={glove}
      alt="glove"
      onDrop={dragDrop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragOver={dragOver}
    />
  );
}

export default Item;
