import { Component } from "react";
import "./Avatar.css";

export default class Avatar extends Component {
    //ERROR  Line 5:5:  Useless constructor  no-useless-constructor - it's only necessary to pass props into the constructor if you intend on using this.props inside the constructor
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="Avatar">
                <img src={this.props.url} width={this.props.width} className={this.props.shape} alt="Cat" />
            </div>
        );
    }
}