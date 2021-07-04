
all: build server

build:
	npm run-script build

server:
	cd public && python3 -m http.server --bind \:\:

