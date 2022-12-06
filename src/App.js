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
import { hslToRgb, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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
      <MonthlyProfits />
      {/* <SummaryBox /> */}
    </div>
  );
}
const CustomLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
  height: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "hsl(221deg 36% 91%)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: lineColor,
  },
}));
function SummaryBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "var(--purple)",
      performance: "up",
      type: "count",
      linePercent: 60,
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "var(--orange)",
      performance: "down",
      type: "money",
      linePercent: 75,
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "var(--green)",
      performance: "down",
      type: "money",
      linePercent: 80,
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "var(--blue)",
      performance: "up",
      type: "money",
      linePercent: 10,
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
      <CustomLinearProgress
        lineColor={data.iconColor}
        variant="determinate"
        value={data.linePercent}
      />
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p>
          <FontAwesomeIcon
            style={{
              color:
                data.performance == "up"
                  ? "hsl(164deg 97% 40%)"
                  : "hsl(3deg 99% 62%)",
            }}
            icon={data.performace == "up" ? faCaretUp : faCaretDown}
          />{" "}
          {data.percent}%
        </p>
      </div>
    </div>
  );
}
function PercentProgress({ data }) {
  /*   const data = {
    time: "This Month",
    percent: 75,
    lineColor: "yellow",
  }; */
  return (
    <div>
      <div className="profit-box-time-container">
        <p>{data.time}</p>
        <p>{data.percent}</p>
      </div>
      <CustomLinearProgress
        lineColor={data.lineColor}
        variant="determinate"
        value={data.percent}
      />
    </div>
  );
}
function PercentProgressList(props) {
  return (
    <div className="percent-box-container">
      {props.profits.map((dt) => (
        <PercentProgress data={dt} />
      ))}
    </div>
  );
}

function MonthlyProfits() {
  const profits = [
    {
      time: "This Month",
      percent: 75,
      lineColor: "var(--purple)",
    },
    {
      time: "Last Month",
      percent: 50,
      lineColor: "var(--green)",
    },
  ];
  return (
    <div className="profit-box-container">
      <h3 className="profit-box-heading">Monthly Profits</h3>
      <p className="profit-box-sub-text">expectr sint opcaaas nlksz nsdklcxn</p>
      <h2 className="profit-box-number">$22,534</h2>
      <div className="percent-box-container">
        <PercentProgressList profits={profits} />
      </div>
    </div>
  );
}
export default App;
