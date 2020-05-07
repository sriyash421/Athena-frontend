import React, { Component } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import { Container } from 'react-bootstrap';

function redirect_fn(label){
    console.log(label,"label")
    window.location.href = "/course/"+label;
}
class Chart extends Component {
    render () {
    return (
    <Container>
        <div className="chart center">
            <BubbleChart
            graph= {{
            zoom: 0.75,
            offsetX: 0.0,
            offsetY: 0.0,
            }}
            width={1200}
            height={600}
            padding={0} // optional value, number that set the padding between bubbles
            showLegend={true} // optional value, pass false to disable the legend.
            legendPercentage={20} // number that represent the % of with that legend going to use.
            legendFont={{
                family: 'monospace',
                size: 20,
                color: "#000",
                weight: 'bold',
                // style: "background-color:white"
                }}
            valueFont={{
                family: 'monospace',
                size: 12,
                color: '#fff',
                weight: 'bold',
                }}
            labelFont={{
                family: 'monospace',
                size: 16,
                color: '#fff',
                weight: 'bold',
                }}
            bubbleClickFun={redirect_fn}
            legendClickFun={redirect_fn}
            data={this.props.data}
            /> 
        </div>
    </Container>
    )
    }
}

export default Chart;
