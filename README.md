# Node.js Demo App

A small Express application created for Elevate Lab Task 1. It serves a greeting at the root URL and includes a Dockerfile and a GitHub Actions workflow for CI/CD.

## Features

- Express server listening on port `3000`
- `GET /` returns: `Hello from Elevate Lab Task 1! My CI/CD pipeline works!`
- Docker image support
- GitHub Actions workflow that runs tests and builds and pushes a Docker image when code is pushed to `main`

## Requirements

- Node.js 18 or later
- npm
- Docker (optional, for containerized use)

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser, or request it with:

   ```bash
   curl http://localhost:3000
   ```

Run the test script with:

```bash
npm test
```

## Run with Docker

Build the image from the repository root:

```bash
docker build -t nodejs-demo-app .
```

Start a container and map port `3000`:

```bash
docker run --rm -p 3000:3000 nodejs-demo-app
```

Then visit [http://localhost:3000](http://localhost:3000).

## GitHub Actions CI/CD

The workflow in `.github/workflows/main.yml` runs on pushes to the `main` branch. It checks out the repository, sets up Node.js 18, installs dependencies, runs `npm test`, and builds and pushes the Docker image tagged `latest`.

To enable the Docker Hub steps, configure these repository secrets in GitHub:

- `DOCKER_USERNAME` — your Docker Hub username
- `DOCKER_PASSWORD` — a Docker Hub access token or password

