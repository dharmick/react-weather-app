import React, { Component } from 'react';
import Titles from './components/text'
import Form from './components/form'
import Results from './components/results'
import './App.css';

class App extends Component {
    state = {
        temperature: undefined,
        location: undefined,
        conditions: undefined,
        pressure: undefined,
        humidity: undefined,
        temp_min: undefined,
        temp_max: undefined,
        error: undefined
    };
    getData = async (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        const api_call = await fetch(`
                http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
                &APPID=9d9e46237abee756e6ca2e1650d76208&units=metric
                `);
        const data = await api_call.json();
        // console.log(data);
        if(!(data.cod==='404')){
            this.setState({
                location: data.name,
                temperature: data.main.temp,
                conditions: data.weather[0].description,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                error: undefined
            });
        }
        else {
            this.setState({
                location: undefined,
                temperature: undefined,
                conditions: undefined,
                pressure: undefined,
                humidity: undefined,
                temp_min: undefined,
                temp_max: undefined,
                error: data.message
            });
        }
    };

      render() {
        return (
            <section className='container'>
                <div className="row">
                    <div className="col-xs-6">
                        <Titles className="titles"/>
                    </div>
                    <div className="col-xs-6 data">
                        <Form getData={this.getData}/>
                        <Results className="results" data={this.state}/>
                    </div>
                </div>
            </section>
        );
      }
}

export default App;
