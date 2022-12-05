import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faChartLine,
  faCoins,
  faDollar,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard😍</h1>
      <SummaryBoxList />
      {/* <SummaryBox /> */}
    </div>
  );
}
function SummaryBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
    },
  ];
  return (
    <div className="summary-box-list">
      {dataList.map((dt) => (
        <SummaryBox data={dt} />
      ))}
    </div>
  );
}
//object destructing
function SummaryBox({ data }) {
  /*  const data = {
    text: "Number of sales",
    number: 568,
    percent: 0.7,
    performance: "up",
    time: "Last Month",
    type: "number",
    icon: faChartLine,
    iconColor: "hsl(255deg 94% 68%)",
  }; */
  return (
    <div className="summary-box-container">
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        <FontAwesomeIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">
        {data.type == "money" ? "$" : null}
        {data.number}
      </h2>
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p>
          <FontAwesomeIcon
            style={{
              color: data.performance == "up" ? "hsl(164deg 97% 40%)" : "red",
            }}
            icon={data.performace == "up" ? faCaretUp : faCaretDown}
          />{" "}
          {data.percent}%
        </p>
      </div>
    </div>
  );
}
export default App;
