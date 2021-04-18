import React from 'react';
import {
  eventSvg,
  stepsSvg,
  buildSvg,
  deploySvg,
} from "../components/SvgAssets";

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          <div class="flex flex-row justify-start">
            <span class="mr-2 mb-2">
              {eventSvg}
            </span>
            <strong>Pull Request</strong>
          </div>
          When a new pull request targets the main branch
        </>
      ),
    },
    position: { x: 0, y: -50 },
    style: {
      background: "#1F2937",
      color: "#eee",
      border: "1px solid #F59E0B ",
      width: 175,
    },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          <div class="flex flex-col justify-start">
            {/* <span class="mr-2 mb-2">{stepsSvg}</span> */}
            <span>Step:</span>
            <strong>Automated Tests</strong>
            Runs automated test suite
          </div>
        </>
      ),
    },
    position: { x: 50, y: 100 },
    style: {
      background: "#1F2937",
      color: "#eee",
      border: "1px solid #818CF8 ",
      width: 175,
    },
  },
  {
    id: '3',
    position: { x: 75, y: 250 },
    data: {
      label: (
        <>
          <div class="flex flex-row justify-start">
            <span class="mr-2 mb-2">{buildSvg}</span>
            <strong>Node.js</strong>
          </div>
          Build Node.js project using Webpack or Rollup
        </>
      ),
    },
    style: {
      background: "#1F2937",
      color: "#eee",
      border: "1px solid #9CA3AF ",
      width: 175,
    },
  },
  {
    id: '4',
    type: 'output',
    data: {
      label: (
        <>
          <div class="flex flex-row justify-start">
            <span class="mr-2 mb-2">{deploySvg}</span>
            <strong>GitHub Pages</strong>
          </div>
          Deploy project to GitHub Pages
        </>
      ),
    },
    style: {
      background: "#1F2937",
      color: "#eee",
      border: "1px solid #10B981 ",
      width: 175,
    },
    position: { x: 50, y: 375 },
  },
  { id: 'e1-2', source: '1', target: '2'},
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    style: { stroke: '#818CF8' },
    animated: true,
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    style: { stroke: '#9CA3AF' },
    animated: true,
  },
];

export default initialElements;