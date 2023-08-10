import React from "react";
import Scratchlabs from "../src/Images/scratchlabs.JPG";
import twitter from "./Images/twitter.JPG";
import website from "./Images/website.JPG";
import discord from "./Images/discord.JPG";
import Meme from "./Images/meme.JPG";
import token from "./Images/scratch.JPG";
import yarn from "./Images/me.JPG";
import landing from "./Images/yarnimg.JPG";
import mint from "./Images/jacob.JPG";

const links = [
  {
    name: "Website",
    url: "https://www.galacticats.xyz",
    image: website,
  },
  {
    name: "Mint",
    url: "https://mint.galacticats.xyz",
    image: mint,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/GalacticatsNFT",
    image: twitter,
  },
  {
    name: "Discord",
    url: "https://discord.gg/HhKQWPQTpm",
    image: discord,
  },
  {
    name: "Yarn Landing page",
    url: "https://app-yarn-solutions.onrender.com",
    image: landing,
  },
   {
    name: "Yarn twitter",
    url: "https://www.twitter.com/yarnsolutions",
    image: yarn,
  },
];

function Links() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Galactic Links</h1>
      </div>
      <div className="links-container">
        {links.map((link) => (
          <div
            key={link.url}
            className="link-container"
            style={{
              margin: "15px",
            }}
          >
            <img
              src={link.image}
              alt={`${link.name} logo`}
              className="link-image"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "25px",
              }}
            />
            <a href={link.url} className="link">
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
