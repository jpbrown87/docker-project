
# What image do you want to start building on?
FROM node:13.12.0-alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# What source code do you what to copy, and where to put it?
COPY package.json ./
COPY package-lock.json ./
COPY . /src

# Does your app have any dependencies that should be installed?
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# What port will the container talk to the outside world with once created?
EXPOSE 3000

# How do you start your app?
CMD ["npm", "start"]