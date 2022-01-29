import "./App.css";
import Reviews from "./components/Reviews";
const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </div>
    </>
  );
};

export default App;
