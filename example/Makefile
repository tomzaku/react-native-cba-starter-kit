TIFL_SITE:=https://demo.trackitforlife.com

build-ios:
	bin/x-change-ip && react-native run-ios

build-ios-tablet:
	bin/x-change-ip && react-native run-ios --simulator="iPad Air 2"

build-ios-both:
	bin/x-change-ip && react-native run-ios --simulator="iPad Air 2" & react-native run-ios

build-android:
	react-native run-android

android-release:
	react-native run-android --variant=release

ios-release:
	react-native run-ios --variant=release

update-schema:
	bin/x-update-schema $(TIFL_SITE)/obj/:gql -f ./src/mobile/config/relay/schema.graphql

relay-compile:
	./node_modules/relay-compiler/bin/relay-compiler --src ./src/mobile/module/ --schema ./src/mobile/config/relay/schema.graphql

relay-watch:
	./node_modules/relay-compiler/bin/relay-compiler --src ./src --schema ./src/mobile/config/relay/schema.graphql --watch

clear:
	watchman watch-del-all && yarn cache clean && yarn start -- --reset-cache

start:
	node node_modules/react-native/local-cli/cli.js start

test:
	jest

setup-evironment:
	yarn install