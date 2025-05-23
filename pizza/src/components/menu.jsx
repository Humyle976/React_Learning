import pizzaData from "./data";
import Pizza from "./pizza.jsx";
function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisines. All from our stove oven, all orgranic, all
        delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((piz) => (
          <Pizza pizzaObj={piz} key={piz.name} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
