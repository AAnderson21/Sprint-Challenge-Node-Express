const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const actionRouter = require("./Routers/actionRouter.js");
const projectRouter = require("./Routers/projectRouter.js");

const server = express();

function logger(req, res, next) {
  console.log("body: ", req.body);
  next();
}

server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.json({ api: "Running..." });
});

const port = 3005;
server.listen(port, () => console.log("API is now running on localhost: 3005"));
