FROM treehouses/node-tags:amd64 as builder

# Bundle APP files
RUN npm run build

ARG BASE=
FROM ${BASE}

COPY --from=builder ./build /usr/share/nginx/html