import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {

    const {img, name, price, ratings } = bottle
    return (
        <div className="bottle">
           
            <img src={bottle.img} alt="" />
             <h3>{bottle.name}</h3>
             <p>Price : {bottle.price} $</p>
             <p>Ratings : {bottle.ratings} </p>
            <button onClick={() => handleAddToCart(bottle)}>Buy</button>
        </div>
    );
};

export default Bottle;