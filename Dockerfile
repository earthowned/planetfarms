ARG BASE=
FROM treehouses/node-tags:amd64 as builder

RUN apk --update add --no-cache git gcc make gcc g++ python3
RUN git clone https://github.com/earthowned/planetfarms
RUN cd planetfarms && \
    npm install && \
    npm run build

FROM ${BASE}

COPY --from=builder ./planetfarms/build /usr/share/nginx/html
