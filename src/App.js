import logo from "./logo.svg";
import "./App.css";

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
      <SummaryBox />
      {/* <SummaryBox /> */}
    </div>
  );
}

function SummaryBox() {
  const data = {
    text: "Number of sales",
    number: 568,
    percent: 0.7,
    performance: "up",
    time: "Last Month",
    type: "number",
  };
  return (
    <div className="summary-box-container">
      <p className="summary-box-text">{data.text}</p>
      <h2 className="summary-box-number">
        {(data.type = "money" ? "$" : null)}
        {data.number}
      </h2>
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p>{data.percent}%</p>
      </div>
    </div>
  );
}
export default App;
