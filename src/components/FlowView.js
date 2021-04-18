import React, { useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";
import { Easing, Tween, autoPlay } from "es6-tween";

// import localforage from "localforage";
import initialElements from "../data/initial-elements";
import {
  eventSvg,
  stepsSvg,
  buildSvg,
  deploySvg,
  enlargeSvg,
} from "../components/SvgAssets";

autoPlay(true);
const TRANSITION_TIME = 300;
const EASING = Easing.Quadratic.Out;
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

  const handleTransform = useCallback(
    (transform) => () => {
      const {
        position: [x, y],
        zoom,
      } = reactFlowInstance.toObject();

      new Tween({ x: x, y: y, zoom })
        .to(transform, TRANSITION_TIME)
        .easing(EASING)
        .on("update", ({ x, y, zoom }) =>
          reactFlowInstance.setTransform({ x, y, zoom })
        )
        .start();
    },
    [reactFlowInstance]
  );

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
                  <span class="mr-2 mb-2">{eventSvg}</span>
                  <strong>{title}</strong>
                </div>
                {subtitle}
              </>
            ),
          },
          style: {
            background: "#1F2937",
            color: "#eee",
            border: "1px solid #F59E0B ",
            width: 175,
          },
        };
        setElements((es) => es.concat(newNode));
      } else if (type === "default" && ghType === "step") {
        const newNode = {
          id: getId(),
          type,
          position,
          data: {
            label: (
              <>
                <div class="flex flex-col justify-start">
                  {/* <span class="mr-2 mb-2">{stepsSvg}</span> */}
                  <span>Step:</span>
                  <strong>{title}</strong>
                  {subtitle}
                </div>
              </>
            ),
          },
          style: {
            background: "#1F2937",
            color: "#eee",
            border: "1px solid #818CF8 ",
            width: 175,
          },
        };
        setElements((es) => es.concat(newNode));
      } else if (type === "default" && ghType === "build") {
        const newNode = {
          id: getId(),
          type,
          position,
          data: {
            label: (
              <>
                <div class="flex flex-row justify-start">
                  <span class="mr-2 mb-2">{buildSvg}</span>
                  <strong>{title}</strong>
                </div>
                {subtitle}
              </>
            ),
          },
          style: {
            background: "#1F2937",
            color: "#eee",
            border: "1px solid #9CA3AF ",
            width: 175,
          },
        };
        setElements((es) => es.concat(newNode));
      } else if (type === "output" && ghType === "deploy") {
        const newNode = {
          id: getId(),
          type,
          position,
          data: {
            label: (
              <>
                <div class="flex flex-row justify-start">
                  <span class="mr-2 mb-2">{deploySvg}</span>
                  <strong>{title}</strong>
                </div>
                {subtitle}
              </>
            ),
          },
          style: {
            background: "#1F2937",
            color: "#eee",
            border: "1px solid #10B981 ",
            width: 175,
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
            defaultPosition={[250, 175]}
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
            <Controls>
              <div
                className="react-flow__controls-button"
                onClick={handleTransform({ x: 0, y: 0, zoom: 1 })}
              >
                {enlargeSvg}
              </div>
            </Controls>
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowView;
