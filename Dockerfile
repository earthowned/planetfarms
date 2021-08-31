ARG BASE=
FROM treehouses/node-tags:amd64 as builder

COPY * .
RUN apk --update add --no-cache gcc make gcc g++ python3 && \
    cp .env.example .env && \
    npm install && \
    npm run build

#RUN apk --update add --no-cache git gcc make gcc g++ python3
#
#RUN git clone https://github.com/earthowned/planetfarms
#RUN cd planetfarms && \
#    echo ${GITHUB_REF##*/} && \
#    git checkout ${GITHUB_REF##*/} && \
#    cp .env.example .env && \
#    npm install && \
#    npm run build

FROM ${BASE}

COPY --from=builder ./planetfarms/build /usr/share/nginx/html
COPY --from=builder ./planetfarms/docker-entrypoint.sh .

CMD ./docker-entrypoint.sh
