import styleFooter from './Footer.module.css'

const Footer = () => {
    return (
        <footer style={{background:'#DDDDDD'}}>
           <div className={styleFooter.footer_section}>
            <div>
            <h3>About Market</h3>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
            </div>
            <div>
            <h3>About Market</h3>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
            </div>
            <div>
            <h3>About Market</h3>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
            </div>
            <div>
            <h3>About Market</h3>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
                <p>{`>>`} Market Reviews</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;