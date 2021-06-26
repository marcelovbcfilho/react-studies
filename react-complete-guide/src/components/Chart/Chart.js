import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const maxValue = Math.max(...props.points.map(p => p.value));

    return (
        <div className="chart">
            {props.points.map(p => <ChartBar key={p.label} value={p.value} maxValue={maxValue} label={p.label}/>)}
        </div>
    );
}

export default Chart;