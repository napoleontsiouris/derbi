
import React from "react";
import Link from "next/link";
import { fetchFromStrapi } from "./utils/api";
import Slider from "./components/Slider";
import ResonArea from "./components/ResonArea";
import LatestActivities from "./components/LatestActivities";
import PopularCauses from "./components/PopularCauses";
import CounterArea from "./components/CounterArea";
import News from "./components/News";
import Donation from "./components/Donation";

const posts = [
  { id: 1, title: "First Post", content: "This is the first blog post." },
  { id: 2, title: "Second Post", content: "This is the second blog post." },
  { id: 3, title: "Third Post", content: "This is the third blog post." },
];


export default async function Home() {
  const projects = await fetchFromStrapi("projects");
  if (!projects) {
    return <div>Error loading projects</div>;
  }

  return (
    <>
    <Slider />
    <ResonArea />
    <LatestActivities />
    {/* <PopularCauses /> */}
    <CounterArea />
    <News />
    
    <Donation />
    </>
  );
}