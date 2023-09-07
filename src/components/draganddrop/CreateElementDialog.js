import React, {useState, useEffect} from "react";
import {Col, Input, message, Modal, Row, Space} from "antd";
import CancelButtonAntd from "../buttons/CancelButtonAntd";
import ConfirmationButtonAntd from "../buttons/ConfirmationButtonAntd";
import { FormattedMessage } from "react-intl";
const rowStyle = {padding: '4px'};

export default function CreateElementDialog({visible, data, onOk, onCancel}) {
  let [params, setParams] = useState([]);
  let [id, setId] = useState(null);

  useEffect(() => {
    if(data) {
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
      setParams({...params, ...{index: data.length}});
    } else {
      setParams(null);
    }
  }, [data]);

  return (
    <Modal
      destroyOnClose={true}
      footer={null}
      style={{top: 10}}
      title={<FormattedMessage id="create_a_list_item" />}
      open={visible}
      >
      <Row gutter={[0, 16]} style={rowStyle}>
        <Col span={6}><FormattedMessage id="element_name" /></Col>
        <Col md={18}>
          <Input
            allowClear={true}
            onChange={(e) => { setParams({...params, ...{name: e.target.value}}) }}
          />
        </Col>
      </Row>
      <Row gutter={[0, 16]} style={rowStyle}>
        <Col span={6}><FormattedMessage id="on_the_account" /></Col>
        <Col md={18}>
          <Input
            allowClear={true}
            onChange={(e) => { setParams({...params, ...{value: e.target.value}}) }}
          />
        </Col>
      </Row>
      <Row gutter={[0, 16]} style={rowStyle}>
        <Col span={6}><FormattedMessage id="spent" /></Col>
        <Col md={18}>
          <Input
            allowClear={true}
            onChange={(e) => { setParams({...params, ...{moneySpent: e.target.value}}) }}
          />
        </Col>
      </Row>
      <Space style={{marginLeft: "55%", marginTop: 20}} wrap direction="horizontal">
        <CancelButtonAntd value={<FormattedMessage id="return_text" />} onClick={() => {
          onCancel();
          setParams(null);
        }}/>
        <ConfirmationButtonAntd value={<FormattedMessage id="create" />} onClick={() => {
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
        }}/>
      </Space>
    </Modal>
  );}