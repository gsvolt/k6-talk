RECORD_ID=4

init:
	go get .

run:
	go run .

get:
	curl http://localhost:8080/albums \
		--request "GET" \
		--header "Content-Type: application/json" 

idget:
	curl http://localhost:8080/albums/2 \
		--request "GET" \
		--header "Content-Type: application/json" 
post:
	curl http://localhost:8080/albums \
		--include \
		--request "POST" \
		--header "Content-Type: application/json" \
		--data '{"id":"$(RECORD_ID)", "title":"Title$(RECORD_ID)", "artist": "Artist$(RECORD_ID)", "price": $(RECORD_ID)}'

