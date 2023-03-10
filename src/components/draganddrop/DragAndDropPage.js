import React, {useState} from "react";
import { PageHeader } from '@ant-design/pro-layout';
import MenuButton from "../buttons/MenuButton";
import DragList from "./DragList";
import GrowingList from "./GrowingList";

export default function DragAndDropPage() {
  let [state, setState] = useState({activeTabKey: "1", update: 0});

  return (
    <>
      <PageHeader
        title="Списки"
      />
      <div style={{marginBottom: 16}}>
        <MenuButton value = "Перетаскиваие между списками" statusBtn={state.activeTabKey === "1"} onClick={() => {setState({...state, activeTabKey: "1", update: state.update + 1});}}/>
        <MenuButton value = "Пополняющийся список" statusBtn={state.activeTabKey === "2"} onClick={() => {setState({...state, activeTabKey: "2", update: state.update + 1});}}/>
        {/* <MenuButton value = "Расходы" statusBtn={state.activeTabKey === "3"} onClick={() => {setState({...state, activeTabKey: "3", update: state.update + 1}); onChange([]);}}/>
        <MenuButton value = "Бюджет" statusBtn={state.activeTabKey === "4"} onClick={() => {setState({...state, activeTabKey: "4", update: state.update + 1}); onChange([]);}}/> */}
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