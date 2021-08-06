import axios from 'axios';
import react, { Component } from 'react';
import './Scss/ShowData.scss'
class ShowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInfo: {},
            textToDisplay : ''

        }
    }
    componentDidMount() {
        axios.get('https://avnair.cok.cockpit2.eqs/cgi-bin/fncls.ssp?fn=react_api_poc')
        .then((response)=>{
            this.setState({textInfo : response.data})
            Object.values(response.data).map((type) => {
                this.setState({textToDisplay : type})
            });
        });
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <h1>Sample Content from Server</h1>
                    <p>{this.state.textToDisplay}</p>
                </div>
            </div>
        )
    }
}
export default ShowData;