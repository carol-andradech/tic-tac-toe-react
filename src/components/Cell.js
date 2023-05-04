const Cell = ({ id, cell, setCells, go, setGo }) => {
  const handleClick = (e) => {
    //Check if the element has either a element of cross or circle
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        setGo("circle");
      }
    }
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className="cell"></div>
    </div>
  );
};

export default Cell;
