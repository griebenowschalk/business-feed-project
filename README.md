# Business Feed Project

A modern React-based business feed application that displays a social media-like feed with business, social, and HR-related posts. The application features a responsive design, and material UI components.

## Live Demo

The application is deployed and available at: [https://business-feed.netlify.app/](https://business-feed.netlify.app/)

## Getting Started

Before running any other commands, ensure that all dependencies have been installed:

```
npm install
```

Then build the project:

```
npm run build
```

To serve application locally:

```
npm run dev
```

Which should host the application [here](http://localhost:5173/).

## Testing

To run test cases:

```
npm run test
```

## Docker Deployment

### Local Docker

Build image:

```
docker build -t business-feed-project .
```

Run image:

```
docker run -it -p 4000:3000 business-feed-project
```

### Docker Hub Deployment

Login:

```
docker login
```

Build and push image:

```
docker build -t <docker-hub-username>/business-feed-project .
docker push <docker-hub-username>/business-feed-project:latest
```

## Kubernetes Deployment

Start Minikube:

```
minikube start
```

Deploy docker image:

```
kubectl apply -f deployment.yaml
```

Assign Kubernetes cluster a static URL to access deployed application:

```
minikube service business-feed-project
```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/container` - Page-level components
- `/src/redux` - State management
- `/src/theme` - Material UI theme configuration
- `/src/scss` - Global styles and variables
- `/src/helpers` - Utility functions
- `/src/localisation` - String constants
- `/src/types` - TypeScript type definitions
