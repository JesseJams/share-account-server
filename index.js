const path = require("path")
const express = require("express");

const app = express();

app.get("/api/group-templates", (req, res) =>
  res.send({
    groups: [
      {
        id: 1,
        title: "Netflix",
        description: "Video streaming platform",
        categories: ["television", "movies"],
        count: 4,
        options: {
          geography: "same-country",
          network: "none",
          share_password: true,
          profiles: true
        },
      },
      {
        id: 2,
        title: "Spotify",
        description: "Music streaming platform",
        categories: ["music","podcast"],
        count: 6,
        options: {
          geography: "same-country",
          network: "none",
          share_password: false,
          profiles: true
        },
      },
      {
        id: 3,
        title: "HBO",
        description: "Television streaming platform",
        categories: ["television"],
        count: 3,
        options: {
          geography: "same-country",
          network: "none",
          share_password: true,
          profiles: false,
        },        
      },
      {
        id: 4,
        title: "Hulu (No ads)",
        description: "Television streaming platform",
        categories: ["television"],
        count: 2,
        options: {
          geography: "same-country",
          network: "none",
          share_password: true,
          profiles: true,
        },        
      },
      {
        id: 4,
        title: "Youtube TV",
        description: "Live television streaming platform and DVR",
        categories: ["television"],
        count: 3,
        options: {
          geography: "same-country",
          network: "same household",
          share_password: false,
          profiles: true,
        },        
      },
    ],
  })
);

app.post("/api/group-templates", (req, res) => 
  setTimeout(() => res.status(201).send(), 800)
);

app.post("/api/sign-in", (req, res) => res.status(200).send());

app.use("/api/images", express.static("images"));

app.listen(8090, () => console.log("Server listening on port 8090!"));

