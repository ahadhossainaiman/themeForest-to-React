// import "./styles.css";
import ReactStars from "react-rating-stars-component";
import styleCart from './productCart.module.css'

const firstExample = {
    size: 30,
    value: 2.5,
    edit: false
  };

const ProductCart = () => {
    return (
        <div className={styleCart.cart}>
          
           <img src="https://demo.smartaddons.com/templates/joomla3/sj-market/cache/resized/8fd09ae495ceac13521f2a3e4f502a1c.jpg" alt="" />
           <div className={styleCart.cart_section}>
            <h1>TAZEN poka chika</h1>
            <ReactStars {...firstExample} />
            <p style={{color:'#E74C3C'}}>$ 60.48</p>
            <button><img src="https://demo.smartaddons.com/templates/joomla3/sj-market/templates/sj_market/images/icon/btn-cart.png" alt="" />ADD TO CART</button>
           </div>
        </div>
    );
};

export default ProductCart;