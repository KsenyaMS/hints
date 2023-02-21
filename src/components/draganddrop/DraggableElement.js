import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: #F4F4F9`;

const DraggableElement = ({ elements, key, prefix }) => (
  <>
  {/* <Button onClick={() => {console.log({elements});}}>DDDD</Button> */}
  <DroppableStyles>
    <ColumnHeader>{prefix}</ColumnHeader>
    <Droppable key={prefix} droppableId={prefix}>
      {(provided) => (
        <div style = {{...provided.droppableProps}} ref={provided.innerRef}>
          {elements.map((item, idx) => (
            <ListItem key={item.id} index={idx} item={item} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
  </>
);

export default DraggableElement;
