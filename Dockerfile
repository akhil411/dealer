FROM node:12

RUN mkdir /siteroot

WORKDIR /siteroot

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
