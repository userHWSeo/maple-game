import tenPerGloveDamage from "../../public/image/10PerGloveDamage.png";
import sixtyPerGloveDamage from "../../public/image/60PerGloveDamage.png";

function SpellBooks() {
  const spellBookList = [
    { name: "10% 장갑 공격력 주문서", imgSrc: tenPerGloveDamage },
    { name: "60% 장갑 공격력 주문서", imgSrc: sixtyPerGloveDamage },
  ];
  const drag = (
    e: React.DragEvent<HTMLImageElement>,
    spellBookName: string
  ) => {
    e.dataTransfer.setData("text/plain", spellBookName);
  };

  return (
    <div style={{ display: "flex" }}>
      {spellBookList.map((spellBook) => {
        return (
          <img
            style={{ width: "100px", border: "4px black solid" }}
            key={spellBook.name}
            src={spellBook.imgSrc}
            alt={spellBook.name}
            onDragStart={(e) => {
              drag(e, spellBook.name);
            }}
          />
        );
      })}
    </div>
  );
}

export default SpellBooks;
