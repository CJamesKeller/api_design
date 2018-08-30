# RESTful Plan:
- GET `/products/{id}` returns JSON
    - Calls GET `/{id}` to obtain JSON payload
    - Reads data from NoSQL DB and decorates response
- PUT `/products/{id}` updates DB decorating-data
