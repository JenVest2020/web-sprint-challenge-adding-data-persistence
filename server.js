const express = require('express');

const server = express();
const projectsRouter = require('./routers/projectsRouter.js');
const resourcesRouter = require('./routers/resourcesRouter.js');
const taskRouter = require('./routers/tasksRouter.js');

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;