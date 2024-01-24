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
import litepaper from "./Images/litepaper.JPG";


const links = [
  {
    name: "Website",
    url: "https://www.galacticats.xyz",
    image: website,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/GalacticatsNFT",
    image: twitter,
  },
  {
    name: "Discord",
    url: "https://discord.gg/5fx55KBA22",
    image: discord,
  },
  {
    name: "Blockjobs landing",
    url: "http://yarnsolutions.xyz/",
    image: landing,
  },
   {
    name: "Blockjobs twitter",
    url: "https://www.twitter.com/blockjobs_app",
    image: yarn,
  },
   {
    name: "Litepaper",
    url: "https://usdscratch-gitbook.gitbook.io/galacticats/",
    image: litepaper,
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
