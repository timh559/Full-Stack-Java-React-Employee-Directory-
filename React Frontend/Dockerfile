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

# Build the application
RUN npm run build

#### Stage 2: Serve the React application from Nginx 
FROM nginx:1.17.0-alpine

# Copy the react build from Stage 1
COPY --from=build /app/dist /var/www

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# expose port 80
EXPOSE 80
