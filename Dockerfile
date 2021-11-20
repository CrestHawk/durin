FROM node:latest

COPY ./durin-server /app/

EXPOSE 3000:3000

CMD ["node", "./app/dist/app.js"]