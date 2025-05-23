import Order from "./order";

function Footer() {
  const openHours = 7;
  const closeHours = 22;

  const time = new Date().getHours();
  console.log(time);
  return (
    <div>
      {time >= openHours && time < closeHours ? (
        <div>
          <h2 className="footer">
            We are open until {closeHours}:00. Come visit us or order online.
          </h2>
          <Order />
        </div>
      ) : (
        <h2 className="footer">
          We are closed right now, Sorry!{" "}
          <p>
            Opening Hours: 0{openHours}:00 - {closeHours}:00
          </p>
        </h2>
      )}
    </div>
  );
}

export default Footer;
