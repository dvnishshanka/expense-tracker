import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartbar-wrapper">
      <div className="chartbar-inner">
        <div className="chartbar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chartbar-month">{props.month}</div>
    </div>
  );
};

export default ChartBar;
