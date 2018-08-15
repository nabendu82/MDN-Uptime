import React, { Component } from 'react';
import './TrafficContainer.css'

export default class TrafficContainer extends Component {
    constructor(props) {
        super(props);
    }

    static renderNetworkTrafficData(requests) {
        if (requests) {
            return Object.keys(requests).map((key) => {
                const {url, requestDuration, status} = requests[key];
                return (
                <li>
                    <span id="hostName">
                        {url}
                    </span> 
                        {` took `}
                    <span class="theCount">
                        {requestDuration}
                    </span>
                    {`ms with status `}
                    <span class="theStatus">
                        {status}
                    </span>
                </li>
                );
            });
        }
        return '';
    }

    render() {
        return (
            <ul>
           {TrafficContainer.renderNetworkTrafficData(this.props.traffic.requests)}
            </ul>
        );
    }
}