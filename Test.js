import React from "react";
import {connect} from "react-redux";


class Test extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table border={1}>
                    <thead>
                      <tr>
                      <th>ID</th>
                      <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(
                        (item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        data:state.data
    }
}



export default connect(mapStateToProps,null)(Test);