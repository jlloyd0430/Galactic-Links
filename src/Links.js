import React from "react";
import Scratchlabs from "../src/Images/scratchlabs.JPG";
import twitter from "./Images/twitter.JPG";
import website from "./Images/website.JPG";
import discord from "./Images/discord.JPG";

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
    url: "https://discord.com/invite/gxERuKmCDA",
    image: discord,
  },
  {
    name: "Meme Machine",
    url: "https://meme-maker-rzg7.onrender.com/",
    image: Scratchlabs,
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
