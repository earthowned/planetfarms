FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY . api/
RUN cd api

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
# RUN npm install --production
RUN npm install

# Show current folder structure in logs
# RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]