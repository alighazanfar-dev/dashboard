"use client";

import Image from "next/image";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { useState } from "react";
import TabContent from "./components/TabContent";
import {
  educationOptions,
  factsOptions,
  funOptions,
  investmentOptions,
  newOptions,
  sportOptions,
} from "./utlis/options";

export default function Home() {
  const tab = [
    {
      id: 1,
      title: "Fun",
      options: funOptions,
      content: (
        <div className="mt-5">
          <h3 className="font-medium text-[20px] pb-4">
            Which type of “Fun” content do you want to create?
          </h3>
        </div>
      ),
    },
    {
      id: 2,
      title: "Education",
      options: educationOptions,
      content: (
        <div className="mt-5">
          <h3 className="font-medium text-[20px] pb-4">
            Which type of “Education” content do you want to create?
          </h3>
        </div>
      ),
    },
    {
      id: 3,
      title: "Sports",
      options: sportOptions,
      content: (
        <div className="mt-5">
          <h3 className="font-medium text-[20px] pb-4">
            Which type of “Sports” content do you want to create?
          </h3>
        </div>
      ),
    },
    {
      id: 4,
      title: "News",
      options: newOptions,
      content: (
        <div className="mt-5">
          <h3 className="font-medium text-[20px] pb-4">
            Which type of “News” content do you want to create?
          </h3>
        </div>
      ),
    },
    {
      id: 5,
      title: "Investment",
      options: investmentOptions,
      content: (
        <div className="mt-5">
          <h3 className="font-medium text-[20px] pb-4" >
            Which type of “Investment” content do you want to create?
          </h3>
        </div>
      ),
    },
    {
      id: 6,
      title: "Facts",
      options: factsOptions,
      content: (
        <div className="mt-5">
          <h3 className="font-medium text-[20px] pb-4">
            Which type of “Facts” content do you want to create?
          </h3>
        </div>
      ),
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tab[0]);

  const handleChangeTab = (tabs) => {
    console.log("tabs are: ", tabs);
    setSelectedTab(tabs);
  };

  return (
    <>
      <section className="pb-8 border-b border-b-slate-500 max-w-full">
        <div className="md:flex md:justify-between">
          <div className="md:w-2/3 md:mr-4">
            <h2 className="font-medium text-[24px]">Content type</h2>
            <p className="text-md text-[16px]">
              Choose a content type that best fits your needs.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-8  max-w-full">
        <div className="md:flex md:justify-between mt-5">
          <div className="md:w-2/3 md:mr-4">
            <h2 className="font-medium text-[20px] pb-4">
              What type of content are you creating?
            </h2>

            <div className="flex flex-wrap gap-4 md:flex-nowrap mt-4 pb-4">
              {tab.map((tabss) => (
                <div
                  key={tabss.id}
                  className={`px-4 py-2 cursor-pointer rounded-full gap-3 ${
                    selectedTab.id === tabss.id
                      ? "bg-[blue]"
                      : "border border-gray-420"
                  }`}
                  onClick={() => handleChangeTab(tabss)}
                >
                  {tabss.title}
                </div>
              ))}
            </div>
            {selectedTab.content}
            <TabContent
              title={selectedTab.title}
              options={selectedTab.options}
            />
          </div>
        </div>
      </section>
    </>
  );
}
