FROM mhart/alpine-node:11
WORKDIR /app
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
RUN yarn install --pure-lockfile --ignore-engines && yarn cache clean
RUN yarn run build
CMD yarn run start