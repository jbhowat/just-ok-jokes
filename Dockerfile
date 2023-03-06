# Frontend

# node image
FROM node:12.18.3-alpine3.9 as frontend

# create app directory
WORKDIR /app

# copy dependencies
COPY package*.json yarn.lock ./

# install dependencies
RUN npm install

# copy app
COPY . .

# build app
RUN npm run build

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]