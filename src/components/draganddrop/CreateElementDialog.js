import React, {useState, useEffect} from "react";
import {Col, DatePicker, Input, message, Modal, Row, Select} from "antd";
const rowStyle = {padding: '4px'};

export default function CreateElementDialog({visible, data, onOk, onCancel}) {
  let [params, setParams] = useState([]);
  let [id, setId] = useState(null);

  useEffect(() => {
    if(data) {
      // console.log({data});
      let id = Math.floor(Math.random() * 1000);
      let res = data.find((s) => Number(s.id) === id);
      let result = res !== undefined;
      if (result === true) {
        while (result === true) {
          id = Math.floor(Math.random() * 1000);
          res = data.find((s) => Number(s.id) === id);
          result = res !== undefined;
          if (result === false) break;
        }
      }
      setId(id);
      setParams({...params, ...{index: data.count}});
    } else {
      setParams(null);
    }
  }, [data]);

  return (
    <Modal
      destroyOnClose={true}
      // className="dialog-modal-style"
      style={{top: 10}}
      title={"Создать элемент списка"}
      open={visible}
      okText="Сохранить"
      cancelText="Отмена"
      onOk={() => {
        if(!params.name) {
          message.warn("Укажите название элемента!");
          return;
        }
        if(!params.value) {
          message.warn("Укажите баланс!");
          return;
        }
        if(!params.moneySpent) {
          message.warn("Укажите сумму потраченных средств!");
          return;
        }
        console.log({id});
        onOk(params, id);
        setParams(null);
      }}
      onCancel={() => {
        onCancel();
        setParams(null);
      }}
      >
      <Row gutter={[0, 16]} style={rowStyle}>
        <Col span={6}>Название элемента</Col>
        <Col md={18}>
          <Input
            allowClear={true}
            placeholder="Название элемента"
            onChange={(e) => { setParams({...params, ...{name: e.target.value}}) }}
          />
        </Col>
      </Row>
      <Row gutter={[0, 16]} style={rowStyle}>
        <Col span={6}>На счету</Col>
        <Col md={18}>
          <Input
            allowClear={true}
            placeholder="На счету"
            onChange={(e) => { setParams({...params, ...{value: e.target.value}}) }}
          />
        </Col>
      </Row>
      <Row gutter={[0, 16]} style={rowStyle}>
        <Col span={6}>Потрачено</Col>
        <Col md={18}>
          <Input
            allowClear={true}
            placeholder="Потрачено"
            onChange={(e) => { setParams({...params, ...{moneySpent: e.target.value}}) }}
          />
        </Col>
      </Row>
    </Modal>
  );}