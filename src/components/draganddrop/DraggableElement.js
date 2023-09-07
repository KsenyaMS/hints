import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: #F4F4F9`;

const DraggableElement = ({ elements, key, prefix }) => (
  <DroppableStyles>
    <ColumnHeader>{prefix === "inProgress" ? <FormattedMessage id="in_progress" /> : (prefix === "done" ? <FormattedMessage id="done" /> : (prefix === "todo" ? <FormattedMessage id="to_do" /> : ""))}</ColumnHeader>
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
);

export default DraggableElement;
