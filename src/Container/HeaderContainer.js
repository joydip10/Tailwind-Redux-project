import {connect} from 'react-redux';
import { addToCart } from '../Service/Actions/actions';
import Header from './../Components/Header/Header';

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=(dispatch)=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
//export default connect(mapStateToProps,mapDispatchToProps)(Product);