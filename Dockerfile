FROM node:12-alpine
COPY index.js index.js
EXPOSE 3000
CMD ["node", "index.js"]
