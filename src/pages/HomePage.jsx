import React from "react";
import Animation from ".././components/Animation";
import Statistic from ".././components/Statistic";
import Bottom from ".././components/Bottom";
import FreshNavbar from ".././components/Navbar";
import '.././assets/styles/HomePage.css';

function HomePage() {
  return (
    <>
        <FreshNavbar />
        <div className="banner">
          <div className="banner-title">
            Boost yourself to new heights.
          </div>
          <div className="banner-subtitle">
            Join other productivity maximizers already using Booster today.
          </div>
          <button>Get Started</button>
        </div>
        <div className="stats">
          <Statistic keyword="Simple, but Powerful." content="Booster is built to make you faster, without cluttering your space. Like an extension of your brain, but on the web." icon="bi-lightning-charge-fill"></Statistic>
          <Statistic keyword="Built for Collaboration." content="From the very beginning, Booster was designed to make your productivity live in the cloud." icon="bi-cloud-fill"></Statistic>
          <Statistic keyword="Free and Open Source." content="Booster was developed by students who wanted to solve a problem, not to make a profit." icon="bi-code-slash"></Statistic>
        </div>
        <Animation></Animation>
        <div className="shares-window">
          <div className="shares"></div>
          <div className="shares-text">
            <div className="shares-title">Instantly in Sync.</div>
            <div className="shares-subtitle">Booster lets you share tasks (or subtasks) with friends, and it automatically becomes collaborative, updating in real time on the cloud.</div>
          </div>
        </div>
        {/*
        <div className="stats" style={{flexDirection : "column"}}>
          <div className="centered-heading">
            Join the Booster Team
          </div>
          <div className="centered-subheading">
            <i>Become one of the talented developers working on making Booster even better. (Coming Soon)</i>
          </div>
        </div>*/}
        <Bottom />
    </>
  );
}

export default HomePage;