FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY . src/
RUN mv src/package.json src/pm2.json src/.sequelizerc src/.env .
#COPY package.json .
#COPY pm2.json .
#COPY .sequelizerc .
#COPY .env .


# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
# RUN npm install --production
RUN npm install

# Show current folder structure in logs
# RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]