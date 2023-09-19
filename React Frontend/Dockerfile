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

# build the app
RUN npm run build

# use nginx image
FROM nginx:1.17.1-alpine

# copy the build folder from react to the nginx html folder
COPY --from=build /app/dist var/www

# copy the nginx config file
COPY nginx.conf /etc/nginx/nginx.conf

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]