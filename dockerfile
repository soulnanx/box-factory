 FROM node:latest  
   
 RUN mkdir -p /usr/src/app  
 RUN yarn global add nodemon  
   
 WORKDIR /usr/src/app  
 COPY app/package.json /usr/src/app/package.json  
 RUN yarn install -g  
   
 EXPOSE 3333  
 EXPOSE 5858  
   
 CMD ["yarn", "dev"]  