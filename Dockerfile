FROM node:12
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5642
CMD ["node", "index.js"]
