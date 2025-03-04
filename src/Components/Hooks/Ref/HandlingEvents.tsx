const HandlingEvents = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", e.currentTarget);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", e.currentTarget);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default HandlingEvents;
