FROM node:18

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install
ENV PORT=3000

COPY [".", "/usr/src/"]

EXPOSE 3000
