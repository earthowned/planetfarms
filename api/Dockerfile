ARG BASE=
FROM ${BASE} as builder

# Bundle APP files
COPY src src
COPY package.json .

# Install app dependencies
RUN apk --update add --no-cache python3 make gcc g++ vips-dev

# RUN npm install --production
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install


FROM ${BASE}

# Bundle APP files
COPY src src
COPY package.json .
COPY pm2.json .
COPY .sequelizerc .
COPY .env.example .env
COPY --from=builder node_modules node_modules

CMD [ "pm2-runtime", "start", "pm2.json" ]