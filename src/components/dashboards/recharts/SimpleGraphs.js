import React from "react";
import {Card} from "antd";
import { Area, AreaChart, Bar, CartesianGrid, Cell, ComposedChart, Label, Legend, Line, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import "../recharts/RechartsPage.css"

export default function SimpleGraphs() {

  const data = [
    { name: 'C1', value: 100, value2: 50 },
    { name: 'C2', value: 20, value2: 200 },
    { name: 'C3', value: 300, value2: 30 },
    { name: 'C4', value: 90, value2: 70 },
  ];

  const colors = ['#b300ad', '#d2ff57', '#e30088', '#1b3fc2'];

  return (
    <>
      <div class="flexbox-container">
        <div style={{width: '50%', float: 'left', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <AreaChart
              width={550}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 10,
                bottom: 20,
                left: 10
              }}
            >
              <defs>
                <linearGradient id="graph" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e30088" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#e30088" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient id="graph2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1b3fc2" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#1b3fc2" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name">
              </XAxis>
              <YAxis>
              </YAxis>
              <Tooltip />
                <>
                  {/* <Bar dataKey="value" name="Данные" barSize={20} fill="#D35858" /> */}
                </>
                <>
                  <Area type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" fillOpacity={1} fill="url(#graph2)"  />
                  <Area type="monotone" dataKey="value" name="Данные" stroke="#e30088" fillOpacity={1} fill="url(#graph)"  />
                </>
              
            </AreaChart>
          </Card>
        </div>
        <div style={{width: '50%', float: 'right', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <AreaChart
              width={550}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 10,
                bottom: 20,
                left: 10
              }}
            >
              <defs>
                <linearGradient id="graph" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e30088" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#e30088" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient id="graph2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1b3fc2" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#1b3fc2" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <Tooltip />
                <>
                  {/* <Bar dataKey="value" name="Данные" barSize={20} fill="#D35858" /> */}
                </>
                <>
                  <Area type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" fillOpacity={1} fill="url(#graph2)"  />
                  <Area type="monotone" dataKey="value" name="Данные" stroke="#e30088" fillOpacity={1} fill="url(#graph)"  />
                </>
              
            </AreaChart>
          </Card>
        </div>
      </div>
      <div class="flexbox-container">
        <div style={{width: '60%', float: 'left', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <AreaChart
              width={650}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 10,
                bottom: 20,
                left: 10
              }}
            >
              <defs>
                <linearGradient id="graph" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e30088" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#e30088" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient id="graph2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1b3fc2" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#1b3fc2" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name">
              </XAxis>
              <Tooltip />
                <>
                  {/* <Bar dataKey="value" name="Данные" barSize={20} fill="#D35858" /> */}
                </>
                <>
                  <Area type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" fillOpacity={1} fill="url(#graph2)"  />
                  <Area type="monotone" dataKey="value" name="Данные" stroke="#e30088" fillOpacity={1} fill="url(#graph)"  />
                </>
              
            </AreaChart>
          </Card>
        </div>
        <div style={{width: '40%', float: 'right', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <ComposedChart
              width={400}
              height={250}
              data={data}
              margin={{
                top: 20,
                right: 10,
                bottom: 20,
                left: 10
              }}
            >
              <XAxis dataKey="date">
              </XAxis>
              <YAxis>
              </YAxis>
              <Tooltip />
                <>
                  <Bar dataKey="value" name="Данные" barSize={20} fill="#d2ff57" />
                  <Bar dataKey="value2" name="Данные" barSize={20} fill="#e30088" />
                </>
                <>
                  {/* <Line type="monotone" dataKey="value" name="Данные" stroke="#FACC2B" /> */}
                </>
              
            </ComposedChart>
          </Card>
        </div>
      </div>
      <div class="flexbox-container">
        <div style={{width: '65%', float: 'left', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <ComposedChart
              width={650}
              height={250}
              data={data}
              margin={{
                top: 20,
                right: 10,
                bottom: 20,
                left: 10
              }}
            >
              <XAxis dataKey="name">
              </XAxis>
              <YAxis>
              </YAxis>
              <Tooltip />
                <>
                <Bar dataKey="value" name="Данные" barSize={20} fill="#d2ff57" />
                  <Bar dataKey="value2" name="Данные" barSize={20} fill="#e30088" />
                </>
                <>
                  {/* <Line type="monotone" dataKey="value" name="Данные" stroke="#FACC2B" /> */}
                </>
              
            </ComposedChart>
          </Card>
          <Card style={{borderRadius: 4, marginTop: 15}}>
            <ComposedChart
              width={650}
              height={250}
              data={data}
              margin={{
                top: 20,
                right: 10,
                bottom: 20,
                left: 10
              }}
            >
              <Tooltip />
                <>
                  <Bar dataKey="value" name="Данные" barSize={20} fill="#d2ff57" />
                  <Bar dataKey="value2" name="Данные" barSize={20} fill="#e30088" />
                </>
            </ComposedChart>
          </Card>
        </div>
        <div style={{width: '30%', float: 'right', margin: 15}}>
          <Card style={{borderRadius: 4, background: "#d2ff57"}}>
            <h2 style={{color: "white"}}>7</h2>
            <h3 style={{color: "white"}}>Просмотров за сегодня</h3>
          </Card>
          <Card style={{borderRadius: 4, background: "#1b3fc2", marginTop: 5}}>
            <h2 style={{color: "white"}}>15</h2>
            <h3 style={{color: "white"}}>Новых уведомлений</h3>
          </Card>
          <Card style={{borderRadius: 4, background: "#e30088", marginTop: 5}}>
            <h2 style={{color: "white"}}>15</h2>
            <h3 style={{color: "white"}}>Новых документов</h3>
          </Card>
        </div>
      </div>
      <div class="flexbox-container">
        <div style={{width: '50%', float: 'left', margin: 15}}>
        <Card style={{borderRadius: 4, backgroundColor: "#d2ff57"}}>
            <ComposedChart
              width={550}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name">
              </XAxis>
              <YAxis>
              </YAxis>
              <Tooltip />
              <>
                <Line type="monotone" dataKey="value" name="Данные" stroke="#1b3fc2" />
                <Line type="monotone" dataKey="value2" name="Данные" stroke="black" />
              </>
            </ComposedChart>
          </Card>
        </div>
        <div style={{width: '50%', float: 'right', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <ComposedChart
              width={550}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name">
              <Label
                value={"Данные"}
                position="bottom"
                style={{ textAnchor: "middle" }}
              />
              </XAxis>
              <YAxis>
              <Label
                value={"Данные"}
                position="left"
                angle={-90}
                style={{ textAnchor: "middle" }}
              />
              </YAxis>
              <Tooltip />
              <>
                <Line type="monotone" dataKey="value" name="Данные" stroke="#d2ff57" />
                <Line type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" />
              </>
            </ComposedChart>
          </Card>
        </div>
      </div>
      <div class="flexbox-container">
        <div style={{width: '50%', float: 'left', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <ComposedChart
              width={550}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <Tooltip />
              <>
                <Line type="monotone" dataKey="value" name="Данные" stroke="#d2ff57" />
                <Line type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" />
              </>
            </ComposedChart>
          </Card>
        </div>
        <div style={{width: '50%', float: 'right', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <ComposedChart
              width={550}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <XAxis dataKey="name">
              </XAxis>
              <Tooltip />
              <>
                <Line type="monotone" dataKey="value" name="Данные" stroke="#d2ff57" />
                <Line type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" />
              </>
            </ComposedChart>
          </Card>
        </div>
      </div>
      <div class="flexbox-container">
        <div style={{width: '50%', float: 'left', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <ComposedChart
              width={550}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <XAxis dataKey="name">
              </XAxis>
              <Tooltip />
              <>
                <Bar dataKey="value" name="Данные" barSize={20} fill="#d2ff57" />
                <Bar dataKey="value2" name="Данные" barSize={20} fill="#1b3fc2" />
              </>
              <>
                <Line type="monotone" dataKey="value" name="Данные" stroke="#d2ff57" />
                <Line type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" />
              </>
            </ComposedChart>
          </Card>
        </div>
        <div style={{width: '50%', float: 'right', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <ComposedChart
              width={550}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <XAxis dataKey="name">
              </XAxis>
              <YAxis>
              </YAxis>
              <Tooltip />
              <>
                <Line type="monotone" dataKey="value" name="Данные" stroke="#d2ff57" />
                <Line type="monotone" dataKey="value2" name="Данные" stroke="#1b3fc2" />
              </>
            </ComposedChart>
          </Card>
        </div>
      </div>
      <div class="flexbox-container">
        <div style={{width: '45%', float: 'left', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <PieChart width={500} height={300}>
              <Pie data={data} color="#000000" dataKey="value" nameKey="name">
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                  }
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Card>
        </div>
        <div style={{width: '45%', float: 'right', margin: 15}}>
          <Card style={{borderRadius: 4}}>
            <PieChart width={500} height={300}>
              <Pie data={data} color="#000000" dataKey="value2" nameKey="name">
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                  }
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Card>
        </div>
      </div>
    </>
  );
}