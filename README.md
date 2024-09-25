```
npm install
npm start
```
___
docker 
```
docker build -t coderunner-api .
docker run -e PORT=4000 -e HOST=0.0.0.0 -p 4000:4000 coderunner-api

```
