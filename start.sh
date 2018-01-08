docker stop $(docker ps -aq)
docker build . -t personal-site
docker run -p 3000:3000 -d personal-site