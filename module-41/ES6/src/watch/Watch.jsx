

const Watch = ({watch}) => {

    const {brand, price, model} = watch;
    return (
        <div>
            <h3>Brand Name: {brand}</h3>
            <span>Model : {model} </span><br />
            <span>Price: {price}tk</span>
        </div>
    );
};

export default Watch;