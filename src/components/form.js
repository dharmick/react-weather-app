import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getData}>
                <div>
                    <input type="text" name="city" placeholder="enter city (mumbai)"/>
                    <input type="text" name="country" placeholder="enter country (india)"/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form;