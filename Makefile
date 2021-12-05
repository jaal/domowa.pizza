
all: build serve

build:
	npm run-script build

serve:
	npm run-script serve

dev:
	rsync -zav --delete ./public/* technologie@domowa.pizza:web/dev_domowa_pizza/

prod:
	rsync -zav --delete ./public/* technologie@domowa.pizza:web/domowa_pizza/public/

static:
	rsync -zav --delete ./static/* technologie@domowa.pizza:web/dev_domowa_pizza/

.PHONY: static