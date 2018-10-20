import React from 'react';

class Results extends React.Component {
    render() {
        return (
            <section>
                {this.props.data.location && <p>location: {this.props.data.location}</p>}
                {this.props.data.temperature && <p>Temperature: {this.props.data.temperature}</p>}
                {this.props.data.conditions && <p>Conditions: {this.props.data.conditions}</p>}
                {this.props.data.pressure && <p>Pressure: {this.props.data.pressure}</p>}
                {this.props.data.humidity && <p>Humidity: {this.props.data.humidity}</p>}
                {this.props.data.temp_min && <p>Minimum Temperature: {this.props.data.temp_min}</p>}
                {this.props.data.temp_max && <p>Maximum Temperature: {this.props.data.temp_max}</p>}
                {this.props.data.error && <p>Error: {this.props.data.error}</p>}
            </section>
        )
    }
}

export default Results;