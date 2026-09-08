import "./App.css";

function App() {
return (
<>
 <nav> 
  <h2>Website</h2>
    <div className="menu">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
    </div>
  </nav>

  <section className="hero" id="home">
    <div>
      <h1>Welcome to My Website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <a href="#" className="btn">
        Get Started
      </a>
    </div>
  </section>

  <section className="services" id="services">
    <h2>visit places</h2>

    <div className="cards">

      <div className="card1">
        <h3>Web Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="card2">
        <h3>Development</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="card3">
        <h3>Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

    </div>
  </section>

  <section className="about" id="about">
    <h2>About Us</h2>

    <p>
      This is a demo website created using only React and CSS.
    
    </p>
  </section>

</>


);
}

export default App;
