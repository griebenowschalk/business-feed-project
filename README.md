# Schalk Griebenow - Wyzetalk Project

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

---

To run test cases:

```
npm run test
```

---

Docker command-line instructions:

Build image

```
docker build -t wyzetalk-project .
```

Run image

```
docker run -it -p 4000:3000 wyzetalk-project
```

---

Docker hub deployment instructions:

Login

```
docker login
```

Build image with hub username

```
docker build -t <docker-hub-username>/wyzetalk-project .
docker push <docker-hub-username>/wyzetalk-project:latest
```

To serve application using Kubernetes:

Start Minikube

```
minikube start
```

Deploy docker image

```
kubectl apply -f deployment.yaml
```

Assign Kubernetes cluster a static URL to access deployed application

```
minikube service wyzetalk-project
```
