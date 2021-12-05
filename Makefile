
all: build serve

build:
	npm run-script build

serve:
	npm run-script serve

dev:
	rsync -zavp --delete --exclude "/wp-content" ./public/ technologie@domowa.pizza:web/dev_domowa_pizza/

prod:
	rsync -zavp --delete --exclude "/wp-content" ./public/ technologie@domowa.pizza:web/domowa_pizza/

.PHONY: static