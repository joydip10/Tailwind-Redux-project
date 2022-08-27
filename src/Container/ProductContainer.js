import Product from '../Components/Products/Product';
import {connect} from 'react-redux';
import { addToCart } from '../Service/Actions/actions';

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=(dispatch)=>({
    //eslint-disable-next-line
    addToCartHandler: data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Product);
//export default connect(mapStateToProps,mapDispatchToProps)(Product);