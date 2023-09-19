# create a dockerfile for the react frontend
# use the node image
FROM node:latest AS build

# set the working directory
WORKDIR /app

# copy the package.json file and package-lock.json file
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the rest of the files
COPY . ./

# Arguments
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# expose port 80
EXPOSE 80

# run the application
CMD [ "npm", "run", "dev" ]