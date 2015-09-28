#!/bin/bash -ex

lein uberjar

export NOW=$(date +%s)
export DOCKER_TAG=quay.io/venantius/${CIRCLE_PROJECT_REPONAME}:$NOW-${CIRCLE_SHA1:0:8}

sed "s#<QUAY_AUTH>#$QUAY_AUTH#" < .dockercfg.template > $HOME/.dockercfg
docker build -t ${DOCKER_TAG} .
docker tag -f ${DOCKER_TAG}
quay.io/venantius/${CIRCLE_PROJECT_REPONAME}:latest
docker push ${DOCKER_TAG}
docker push quay.io/venantius/${CIRCLE_PROJECT_REPONAME}:latest
