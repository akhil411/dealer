set -e

docker-compose exec -w /siteroot backend npm install
docker-compose exec -w /siteroot/client frontend npm install
