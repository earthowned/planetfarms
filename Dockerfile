FROM treehouses/node-tags:amd64 as builder

RUN apk --update add --no-cache git
# Bundle APP files
RUN git clone https://github.com/earthowned/planetfarms  
RUN cd planetfarms && \
	npm install && \
	npm run build

ARG BASE=
FROM ${BASE}

COPY --from=builder ./planetfarms/build /usr/share/nginx/html