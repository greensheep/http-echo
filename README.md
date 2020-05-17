# HTTP Echo Server

Simple HTTP server that prints details of any request it receives.

```
docker run -P greensheep/http-echo
docker run -p 4000:3000 greensheep/http-echo
docker run -p 3000:4000 -e PORT=4000 greensheep/http-echo
```
