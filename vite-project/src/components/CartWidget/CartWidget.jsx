import cart from '../../assets/cart.svg'

const CartWidget= () => {
    return(
        <div> 
            <img  className='imgcart' src={cart} alt="cart-wdiget"/>
            0
        </div>
    )
}

export default CartWidget;