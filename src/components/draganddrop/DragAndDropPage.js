import React, {useState} from "react";
import { PageHeader } from '@ant-design/pro-layout';
import MenuButton from "../buttons/MenuButton";
import DragList from "./DragList";
import GrowingList from "./GrowingList";
import { FormattedMessage } from "react-intl";

export default function DragAndDropPage() {
  let [state, setState] = useState({activeTabKey: "1", update: 0});

  return (
    <>
      <PageHeader
        title={<FormattedMessage id="list_text" />}
      />
      <div style={{marginBottom: 16}}>
        <MenuButton value={<FormattedMessage id="dragging_between_lists" />} statusBtn={state.activeTabKey === "1"} onClick={() => {setState({...state, activeTabKey: "1", update: state.update + 1});}}/>
        <MenuButton value={<FormattedMessage id="growing_list" />} statusBtn={state.activeTabKey === "2"} onClick={() => {setState({...state, activeTabKey: "2", update: state.update + 1});}}/>
      </div>
      {state.activeTabKey === "1" && (
        <DragList/>
      )}
      {state.activeTabKey === "2" && (
        <GrowingList/>
      )}    
    </>
  );
}