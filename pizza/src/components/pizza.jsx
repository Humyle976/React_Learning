function Pizza({ pizzaObj }) {
  const avail = pizzaObj.soldOut;
  return (
    <li className={`pizza ${!avail ? "" : "sold-out"}`}>
      <img src={pizzaObj.photoName} alt="Pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {!avail ? <span>{pizzaObj.price}</span> : <span>SOLD OUT</span>}
      </div>
    </li>
  );
}

export default Pizza;
