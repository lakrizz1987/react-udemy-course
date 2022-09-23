import "./Chart.css";
import ChartBar from "./ChartBar";


const Chart = (props) => {
    let dataPointsValues = props.dataPoints.map(x => x.value);
    const maxValue = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={maxValue}
                label={dataPoint.label}
            />)}
        </div>
    )
};

export default Chart