# Task Manager API

A minimal RESTful API for managing tasks. The project demonstrates a simple Express.js application with in-memory storage.

## Features

- Add, list, update, and delete tasks
- RESTful JSON API
- Health check endpoint
- No external database required

## Quickstart

1. Clone the repository:
    ```sh
    git clone https://github.com/yourorg/task-manager-api.git
    cd task-manager-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node app.js
    ```

4. API runs on port 3000 by default.

## Endpoints

| Method | Endpoint        | Description               |
|--------|----------------|---------------------------|
| GET    | /api/tasks     | List all tasks            |
| POST   | /api/tasks     | Add a new task            |
| PATCH  | /api/tasks/:id | Update task status        |
| DELETE | /api/tasks/:id | Remove a task             |
| GET    | /health        | Health check endpoint     |

## Example Request

```sh
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"title":"Write documentation"}'
```

## License

MIT License
