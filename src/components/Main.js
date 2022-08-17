import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

function Main() {
  const data = [
    { name: "Male", numbers: 768 },
    { name: "Female", numbers: 256 },
  ];

  const data1 = [
    { name: "Full Time", numbers: 205 },
    { name: "Part Time", numbers: 317 },
    { name: "Daily Wage", numbers: 502 },
  ];

  return (
    <div className="container-fluid">
      <div className="row ">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-warning  sidebar collapse"
        >
          <div className="sidebar-sticky pt-3 ">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mt-5">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 ">
          <div className="m-3 bg-secondary  px-5">
            <h3 className="pt-5">Key Performance Indicators</h3>
            <div className="row mt-5">
              <div className="col-3">
                <h5>GENDER</h5>
              </div>
              <div className="col-5 ">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="numbers"
                    isAnimationActive={true}
                    data={data}
                    cx={200}
                    cy={100}
                    outerRadius={100}
                    fill="yellow"
                    nameKey="name"
                    stroke="black"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
              <div className="col-4 ">
                <h5>TOTAL USERS = 1024</h5>
                <h5>MALE = 768</h5>
                <h5>FEMALE = 256</h5>
              </div>
            </div>

            <hr />
            <hr />
            <div className="row mt-5  ">
              <div className="col-3">
                <h5>EMPLOYMENT TYPE</h5>
              </div>
              <div className="col-5">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="numbers"
                    isAnimationActive={true}
                    data={data1}
                    cx={200}
                    cy={200}
                    outerRadius={100}
                    fill="yellow"
                    nameKey="name"
                    stroke="black"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
              <div className="col-4">
                <h5>TOTAL USERS = 1024</h5>
                <h5>FULL TIME = 205</h5>
                <h5>PART TIME = 317</h5>
                <h5>DAILY WAGE = 502 </h5>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;
