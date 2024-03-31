/* eslint-disable jsx-a11y/img-redundant-alt */
const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img className="i3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png" alt="amazon-logo" />
              <img className="i2" src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img className="i1" src="https://www.asianfootwears.com/cdn/shop/products/file_f65b4952-70b5-4bae-ac10-ab184d3f733b_900x900.jpg?v=1695027713" alt="hero-image" />
        </div>
        <footer className="cont" >
            <p className="moved-element" >© Develop By - Divya Pratap Singh</p>
        </footer>
      </main>
    );
  };
  
  export default HeroSection;