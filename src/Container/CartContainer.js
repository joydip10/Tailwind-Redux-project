import {connect} from 'react-redux';
import { removeFromCart } from '../Service/Actions/actions';
import Cart from './../Components/Cart/Cart';
import { resetCart } from './../Service/Actions/actions';

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=(dispatch)=>({
    //eslint-disable-next-line
    removeFromCartHandler: data=>dispatch(removeFromCart(data)),
    resetCart:()=>dispatch(resetCart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);