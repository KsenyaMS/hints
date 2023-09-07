import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { Typography } from "antd";
import { FormattedMessage } from "react-intl";

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px`;

const getItems = (count, prefix) =>
  Array.from({ length: count }, (v, k) => k).map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${randomId}`,
      prefix: prefix,
      content: prefix === "inProgress" ? <FormattedMessage id="in_progress" /> : (prefix === "done" ? <FormattedMessage id="done" /> : (prefix === "todo" ? <FormattedMessage id="to_do" /> : ""))
    };
  });

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = ["todo", "inProgress", "done"];

const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
    {}
  );

function DragList() {
  const [elements, setElements] = useState(generateLists());

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    let [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    removedElement.content = result.destination.droppableId === "todo" ? <FormattedMessage id="to_do" />
    : result.destination.droppableId === "inProgress" ? <FormattedMessage id="in_progress" />
    : result.destination.droppableId === "done" ? <FormattedMessage id="done" /> : "";
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <>
      <Typography.Title level={5} style={{ margin: 10, marginBottom: 20 }}>
        {<FormattedMessage id="dragging_between_lists" />}
      </Typography.Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </>
  );
}

export default DragList;
