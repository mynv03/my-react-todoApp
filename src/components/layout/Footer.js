import React, {Component} from "react";

const RED = "#ff0000";
const BLUE = "#0000ff";
const GRAY = "#678c89";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.submitThemeColor = this.submitThemeColor.bind(this);
    }

    submitThemeColor(color){
        if(color){
            console.log('handleChangeTheme');
            this.props.saveColorTheme(color);
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('UNSAFE_componentWillReceiveProps: ' +JSON.stringify(nextProps));
        document
            .documentElement
            .style
            .setProperty("--main-color", nextProps.themeColor.color);
    }

    render() { 
        return ( 
            <div className="footer">
                <div className="vertical-center">
                    <span>Choose Theme </span>
                    <button className="dot red" onClick={() => this.submitThemeColor(RED)}></button>
                    <button className="dot blue" onClick={() => this.submitThemeColor(BLUE)}></button>
                    <button className="dot gray" onClick={() => this.submitThemeColor(GRAY)}></button>
                </div>
            </div>
         );
    }
}
 
export default Footer;