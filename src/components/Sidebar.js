import React from "react";
import SidebarItem from "../components/SidebarItem";
import {
  eventSvg,
  stepsSvg,
  buildSvg,
  deploySvg,
} from "../components/SvgAssets";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col max-h-screen bg-gray-800 shadow-lg custom-scrollbar">
        <div className="flex flex-col m-4 h-20 text-center h-auto">
          <h2 className="mb-4 text-left text-gray-200 font-sans text-xl font-bold tracking-wide">
            GitHub Workflow Builder
          </h2>
          <input
            type="search"
            name="q"
            className="pl-10 py-2 text-gray-700 focus:text-gray-900 text-sm bg-gray-300 focus:bg-white rounded-md focus:outline-none"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        <div className="flex-grow overflow-x-hidden overflow-y-auto">
          <ul className="flex flex-col py-6 space-y-1">
            <li className="px-4">
              <div className="flex flex-row items-center h-8">
                <div className="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                  <p>Events</p>
                  {eventSvg}
                </div>
              </div>
            </li>
            <SidebarItem
              title="Pull Request"
              type="input"
              ghType="event"
              subtitle="When a new pull request targets the main branch"
            />
            <SidebarItem
              title="Push"
              type="input"
              ghType="event"
              subtitle="When a new new commit is pushed"
            />
            <SidebarItem
              title="Release"
              type="input"
              ghType="event"
              subtitle="When a new release is published"
            />
            <SidebarItem
              title="Label"
              type="input"
              ghType="event"
              subtitle="When a new label is created"
            />
            <SidebarItem
              title="Schedule"
              type="input"
              ghType="event"
              subtitle="When a cron job is triggered"
            />
            <li className="px-4 pt-2">
              <div className="flex flex-row items-center h-8">
                <div className="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                  Steps
                  {stepsSvg}
                </div>
              </div>
            </li>
            <SidebarItem
              title="Checkout Repository"
              type="default"
              ghType="step"
              subtitle="Checkout the git repository"
            />
            <SidebarItem
              title="Install Dependencies"
              type="default"
              ghType="step"
              subtitle="Install project dependencies"
            />
            <SidebarItem
              title="Lint"
              type="default"
              ghType="step"
              subtitle="Perform static analysis on codebase"
            />
            <SidebarItem
              title="Test"
              type="default"
              ghType="step"
              subtitle="Run automated test suites"
            />
            <li className="px-4 pt-2">
              <div className="flex flex-row items-center h-8">
                <div className="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                  Build
                  {buildSvg}
                </div>
              </div>
            </li>
            <SidebarItem
              title="Make"
              type="default"
              ghType="build"
              subtitle="Build project using Make"
            />
            <SidebarItem
              title="Node"
              type="default"
              ghType="build"
              subtitle="Build project using Node"
            />
            <SidebarItem
              title="Jekyll"
              type="default"
              ghType="build"
              subtitle="Build project using Jekyll"
            />
            <li className="px-4 pt-2">
              <div className="flex flex-row items-center h-8">
                <div className="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                  <p>Deploy</p>
                  {deploySvg}
                </div>
              </div>
            </li>
            <SidebarItem
              title="GitHub Pages"
              type="output"
              ghType="deploy"
              subtitle="Deploy project to GitHub Pages"
            />
            <SidebarItem
              title="Firebase"
              type="output"
              ghType="deploy"
              subtitle="Deploy project to Firebase Hosting"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
