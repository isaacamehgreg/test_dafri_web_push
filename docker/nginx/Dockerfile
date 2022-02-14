FROM node:15.14.0-alpine AS base
WORKDIR /app

FROM base AS dependencies  
COPY package*.json ./
COPY yarn.lock ./
COPY .eslintrc ./
COPY .prettierrc ./ 
COPY .lintstagedrc ./
COPY docker/nginx/nginx.conf ./nginx.conf

RUN npm i -g npm && yarn install


FROM dependencies AS build  
WORKDIR /app

ARG APP_NAME
ENV PROJECT_NAME=$APP_NAME

ARG REACT_APP_VERSION
ENV REACT_APP_VERSION=$REACT_APP_VERSION

COPY src /app/src 
COPY public /app/public
RUN yarn build

FROM nginx:alpine AS release

ENV PORT 80
EXPOSE 80
  
WORKDIR /app
COPY --from=dependencies /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build ./build

CMD ["nginx", "-g", "daemon off;"]
