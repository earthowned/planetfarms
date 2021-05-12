#!/bin/bash

# Echos out sha function from saved .txt file
get_manifest_sha() {
  local repo=$1
  local arch=$2
  docker pull -q $1 &>/dev/null
  docker manifest inspect $1 > "$2".txt
  sha=""
  i=0
  while [ "$sha" == "" ] && read -r line; do
    architecture=$(jq .manifests[$i].platform.architecture "$2".txt |sed -e 's/^"//' -e 's/"$//')
    if [ "$architecture" = "$2" ];then
      sha=$(jq .manifests[$i].digest "$2".txt  |sed -e 's/^"//' -e 's/"$//')
      echo ${sha}
    fi
    i=$i+1
  done < "$2".txt
}

build_image(){
  local repo=$1  # this is the base repo, for example treehouses/alpine
  local arch=$2  #arm arm64 amd64
  local tag_repo=$3  # this is the tag repo, for example treehouses/node
  if [ $# -le 1 ]; then
    echo "missing parameters."
    exit 1
  fi
  sha=$(get_manifest_sha $@)
  echo $sha
  base_image="$repo@$sha"
  echo $base_image
  if [ -n "$sha" ]; then
    tag=$tag_repo-tags:$arch
    sed "s|{{base_image}}|$base_image|g" Dockerfile.template > Dockerfile.$arch
    docker build -t $tag -f Dockerfile .
  fi
}

deploy_image(){
  local repo=$1
  local arch=$2  #arm arm64 amd64
  tag_arch=$repo-tags:$arch
  tag_time=$(date +%Y%m%d%H%M)
  tag_arch_time=$repo-tags:$arch-$tag_time
  echo $tag_arch_time
  docker tag $tag_arch $tag_arch_time
  docker push $tag_arch_time
  docker tag $tag_arch_time $tag_arch
  docker push $tag_arch
}
