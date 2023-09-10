import React, {useState} from "react";
import {Button, Card, Col, Form, Input, Row, Space} from "antd";
import { Area, AreaChart, Bar, ComposedChart, Line, Tooltip, XAxis, YAxis } from "recharts";
import "../recharts/RechartsPage.css"
import ConfirmationButtonAntd from "../../buttons/ConfirmationButtonAntd";
import CancelButtonAntd from "../../buttons/CancelButtonAntd";
import { FormattedMessage } from "react-intl";

const rowStyle = {padding: '4px'};

export default function DinamicGraphs() {
  let [state, setState] = useState(true);
  let [names, setNames] = useState([]);
  let [data, setData] = useState([]);
  let [value, setValue] = useState([]);

  const onFinish = (values) => {
    console.log(<FormattedMessage id="warning_number_of_points" />);
    let count = values.count;
    let items = [];
    for (let i = 0; i < count; i++) {
      let res = {
        nameX: `X${i+1}`,
      }
      items = [...items, res];
    }
    console.log({items});
    setState(false);
    setNames(items);
  };

  const handleInputs = () => {
    let items = [];
    for (let i = 0; i < names.length; i++) {
      let params = {
        name: Number(names[i].nameX),
        value: Number(data[names[i].nameX])
      }
      items = [...items, params];
    }
    setValue(items);
  };


  return (
    <>
      {state && (
        <div style={{width: '40vw', margin: "auto"}}>
          <Card style={{borderRadius: 4}}>
            <Form onFinish={onFinish}>
              <Form.Item
                label={<FormattedMessage id="number_of_points" />}
                name="count"
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="warning_number_of_points" />,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button style={{backgroundColor: "#435ebf", color: "white", borderRadius: 15}} htmlType="submit">
                  {<FormattedMessage id="ok_text" />}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      )}
      {state === false && (
        <div style={{width: '30%', margin: "auto"}}>
          <Card style={{borderRadius: 4}}>
            {names.length > 0 && names.map((s) => {
              return (
                <>
                  <Row gutter={[0, 16]} style={rowStyle}>
                    <Col md={3}>{s.nameX}</Col>
                    <Col md={12}>
                      <Input
                        allowClear={true}
                        placeholder={s.nameX}
                        onChange={(e) => {setData({...data, ...{[`${s.nameX}`]: e.target.value}});}}
                      />
                    </Col>
                  </Row>
                </>
              );
            })}
            <Space style={{marginLeft: "20%", marginTop: 20}} wrap direction="horizontal">
              <ConfirmationButtonAntd value={<FormattedMessage id="ok_text" />} onClick={handleInputs}/>
              <CancelButtonAntd value={<FormattedMessage id="return_text" />} onClick={() => {setState(true)}}/>
            </Space>
          </Card>
        </div>
      )}
      {value.length > 0 && (
        <>
          <div class="flexbox-container">
            <div style={{width: '50%', float: 'left', margin: 15}}>
              <Card style={{borderRadius: 4}}>
                <AreaChart
                  width={550}
                  height={300}
                  data={value}
                  margin={{
                    top: 50,
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
                  </defs>
                  <XAxis dataKey="name">
                  </XAxis>
                  <Tooltip />
                  <>
                    <Area type="monotone" dataKey="value" name="Данные" stroke="#e30088" fillOpacity={1} fill="url(#graph)"  />
                  </>
                </AreaChart>
              </Card>
            </div>
            <div style={{width: '50%', float: 'right', margin: 15}}>
              <Card style={{borderRadius: 4}}>
                <AreaChart
                  width={550}
                  height={300}
                  data={value}
                  margin={{
                    top: 50,
                    right: 10,
                    bottom: 20,
                    left: 10
                  }}
                >
                  <defs>
                    <linearGradient id="graph2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1b3fc2" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#1b3fc2" stopOpacity={0.8} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name">
                  </XAxis>
                  <Tooltip />
                  <>
                    <Area type="monotone" dataKey="value" name="Данные" stroke="#1b3fc2" fillOpacity={1} fill="url(#graph2)"  />
                  </>
                </AreaChart>
              </Card>
            </div>
          </div>
          <div class="flexbox-container">
            <div style={{width: '50%', float: 'left', margin: 15}}>
            <Card style={{borderRadius: 4}}>
              <ComposedChart
                width={550}
                height={250}
                data={value}
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
                    <Bar dataKey="value" name="Данные" barSize={20} fill="#1b3fc2" />
                  </>
                </ComposedChart>
              </Card>
            </div>
            <div style={{width: '50%', float: 'right', margin: 15}}>
              <Card style={{borderRadius: 4}}>
                <ComposedChart
                  width={550}
                  height={250}
                  data={value}
                  margin={{
                    top: 50,
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
                  </>
                  <>
                    <Line type="monotone" dataKey="value" name="Данные" stroke="#1b3fc2" />
                  </>
                </ComposedChart>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
}