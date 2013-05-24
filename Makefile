
all: 
	node_modules/.bin/browserify \
		lib/client/shoes.js test.js \
		-o bundle.js \
		--debug
