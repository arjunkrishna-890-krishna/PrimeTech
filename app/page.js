import Navbar from "./widgets/header";
import HomeBanner from "./widgets/homebanner";
import HomeServices from "./widgets/homeservices";
import HomeContact from "./widgets/homecontact";
import React, { Suspense } from 'react';

// Dynamically import the HomeAbout component
const HomeAbout = React.lazy(() => import("./widgets/homeabout"));

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <HomeAbout />
        <HomeServices/>
        <HomeContact/>
      {/* </Suspense> */}
    </>
  );
}
