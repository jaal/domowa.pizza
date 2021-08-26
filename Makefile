
all: build serve

build:
	npm run-script build

serve:
	npm run-script serve

deploy:
	rsync -zav --delete ./public/* technologie@domowa.pizza:web/dev_domowa_pizza/
