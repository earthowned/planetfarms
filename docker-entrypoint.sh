#!/usr/bin/env sh

API_BASE_URL=${REACT_APP_API_BASE_URL:-http://localhost:5000}
CDN_BASE_URL=${REACT_APP_CDN_BASE_URL:-http://localhost:8080}
AUTH_METHOD=${REACT_APP_AUTH_METHOD:-local}
COGNITO_REGION=$REACT_APP_COGNITO_REGION
COGNITO_POOL_ID=$REACT_APP_COGNITO_POOL_ID
COGNITO_CLIENT_ID=$REACT_APP_COGNITO_CLIENT_ID
COGNITO_DOMAIN_NAME=$REACT_APP_COGNITO_DOMAIN_NAME

sed -i -e "s#planetfarm-api-host#$API_BASE_URL#g" /usr/share/nginx/html/static/js/main*
sed -i -e "s#planetfarm-cdn-host#$CDN_BASE_URL#g" /usr/share/nginx/html/static/js/main*
sed -i -e "s#REACT_APP_AUTH_METHOD:\"cognito\"#REACT_APP_AUTH_METHOD:\"$AUTH_METHOD\"#g" /usr/share/nginx/html/static/js/main*
sed -i -e "s#planetfarm-cognito-region#$COGNITO_REGION#g" /usr/share/nginx/html/static/js/main*
sed -i -e "s#planetfarm-cognito-pool#$COGNITO_POOL_ID#g" /usr/share/nginx/html/static/js/main*
sed -i -e "s#planetfarm-cognito-client#$COGNITO_CLIENT_ID#g" /usr/share/nginx/html/static/js/main*
sed -i -e "s#planetfarm-cognito-domain#$COGNITO_DOMAIN_NAME#g" /usr/share/nginx/html/static/js/main*

#spawn-fcgi -s /run/fcgi.sock -U nginx -G nginx /usr/bin/fcgiwrap
nginx -g "daemon off;"
