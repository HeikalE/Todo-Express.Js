import express from 'express';
import * as http from 'http';
import cors from 'cors';
import { SharedRoutesConfig } from './modules/shared-module/router-config/shared-routes.config';
import { ToDoRoutingConfiguration } from './modules/todo-module/todo-routing.configuration';

const port = 3000; 
const app: express.Application = express();
const server: http.Server = http.createServer(app);

// here we are adding middleware to parse all incoming requests as JSON 
app.use(express.json());
// here we are adding middleware to allow cross-origin requests
app.use(cors());

const routes: Array<SharedRoutesConfig> = [
    new ToDoRoutingConfiguration(app)
];

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

server.listen(port, () => {
    console.log(runningMessage);
});

