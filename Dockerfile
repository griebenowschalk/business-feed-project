# Set the base image to build from 
FROM node:alpine

# set the working directory
WORKDIR /app

# copy package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./

# install dependencies
RUN npm install

# create production build
RUN npm run build

# copy everything to /app directory
COPY ./ ./ 

# run the app
CMD ["npm", "start"]

#run Docker app with Nginx
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html