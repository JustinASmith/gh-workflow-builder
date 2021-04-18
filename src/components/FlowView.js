import React, { useState, useCallback } from "react";

import ReactFlow, {
  ReactFlowProvider,
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";

// import localforage from "localforage";
import initialElements from "../data/initial-elements";

let flowKey = "gh-workflow-builder";

const onDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const FlowView = () => {
  const [elements, setElements] = useState(initialElements);
  const [reactFlowInstance, setReactFlowInstance] = useState();

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDrop = (event) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const type = event.dataTransfer.getData("application/reactflow");
      const ghType = event.dataTransfer.getData("application/ghtype");
      const title = event.dataTransfer.getData("application/title");
      const subtitle = event.dataTransfer.getData("application/subtitle");
      const position = reactFlowInstance.project({
        x: event.clientX - 350,
        y: event.clientY - 25,
      });
      if (type === "input" && ghType === "event") {
        const newNode = {
          id: getId(),
          type,
          position,
          data: {
            label: (
              <>
                <div class="flex flex-row justify-start">
                  <span class="mr-2 mb-2">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                    >
                      <title>power</title>
                      <path
                        fill="yellow"
                        d="M12 0l-12 16h12l-8 16 28-20h-16l12-12z"
                      ></path>
                    </svg>
                  </span>
                  <strong>{title}</strong>
                </div>
                {subtitle}
              </>
            ),
          },
          style: {
            background: "#1F2937",
            color: "#eee",
            border: "1px solid #FFFF99 ",
            width: 180,
          },
        };
        setElements((es) => es.concat(newNode));
      } else {
        const newNode = {
          id: getId(),
          type,
          position,
          data: { label: `${type} node` },
        };

        setElements((es) => es.concat(newNode));
      }
    }
  };

  // TODO: Come back to saving
  // const onSave = useCallback(() => {
  //   if (reactFlowInstance) {
  //     const flow = reactFlowInstance.toObject();
  //     localforage.setItem(flowKey, flow);
  //   }
  // }, [reactFlowInstance]);

  return (
    <div class="flex-auto dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper">
          <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            className="bg-gray-900"
            defaultZoom={1.25}
            defaultPosition={[150, 75]}
          >
            <MiniMap
              nodeStrokeColor={(n) => {
                if (n.style?.background) return n.style.background;
                if (n.type === "input") return "#0041d0";
                if (n.type === "output") return "#ff0072";
                if (n.type === "default") return "#1a192b";

                return "#eee";
              }}
              nodeColor={(n) => {
                if (n.style?.background) return n.style.background;

                return "#fff";
              }}
              nodeBorderRadius={2}
            />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowView;
