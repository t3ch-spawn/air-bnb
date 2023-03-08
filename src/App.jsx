import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardData = data.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="card__container">{cardData}</div>
    </div>
  );
}

export default App;
