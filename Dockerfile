FROM nginx:alpine

# Bundle APP files
COPY ./build /usr/share/nginx/html
