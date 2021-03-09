import { connect } from 'react-redux';
import { saveTheme } from '../actions/changeThemeAction';
import Footer from './../../layout/Footer';

const mapDispatchToProps = (dispatch) => {
    return {
        saveColorTheme: (color) => {
            dispatch(saveTheme(color))
        }
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     dispatch,
//     saveColorTheme: color => dispatch(saveTheme(color))
//   });

function mapStateToProps(state){
    return{
        themeColor: state.color
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps 
    
)(Footer);