const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
  const handleClick = (e) => {
    console.log(e);
    //Check if the element has either a element of cross or circle
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleCellChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      //if index equals the id that we are passing
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div
      className="square"
      id={id}
      onClick={!winningMessage ? handleClick : undefined}
    >
      <div className="cell"></div>
    </div>
  );
};

export default Cell;
