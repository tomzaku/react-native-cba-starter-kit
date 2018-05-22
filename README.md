# Zkrn CLI
Inspired by [Ignite CLI](https://github.com/infinitered/ignite)
```
________   __   ___   _______   _____  ___
("      "\ |/"| /  ") /"      \ (\"   \|"  \
 \___/   :)(: |/   / |:        ||.\\   \    |   React Native
   /  ___/ |    __/  |_____/   )|: \.   \\  |   Starter Kit
  //  \__  (// _  \   //      / |.  \    \. |
 (:   / "\ |: | \  \ |:  __   \ |    \    \ |   Author: Zaku
  \_______)(__|  \__)|__|  \___) \___|\____\)


  Usage: zkrn [command] <method/ appName ...>

  Options:

    -V, --version                 output the version number
    -h, --help                    output usage information

  Commands:

    init [appName]                init the react-native application
    remove [appName]              Remove the application
    module <method> [moduleName]  You can create module folder. Try this: 'zkrn module --help'
    route <method> [routeName]    You can modify the route of App. Try this: 'zkrn route --help'
    help [cmd]                    display help for [cmd]
```
#### Why I have to create this
  My app based on CBA([Component-Based Architecture](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238)). Therefor, The module(For ex: 'src/mobile/app/todo') contains both redux and view. That way make you easy to reusage in another appliaction and help you to save your time.

``` 
.src/mobile/app/todo
├── index.js
├── logic.redux
│   ├── action.js
│   ├── actionType.js
│   ├── index.js
│   ├── info.js
│   ├── reducer.js
│   ├── reselect.js
│   └── type.js
└── screen
    ├── TodoScreen.js
    ├── component
    │   ├── DoingTab.js
    │   ├── DoneTab.js
    │   ├── TodoBase.js
    │   ├── TodoTab.js
    │   ├── helper.js
    │   └── style
    │       ├── TodoBaseStyle.1.js
    │       ├── TodoBaseStyle.js
    │       └── TodoTabStyle.js
    └── index.js

4 directories, 18 files
```
## Requirement

+ `react-native`
+ `yarn`

## Installation

``` bash
npm install -g zkrn
```

## Usage

``` bash
 zkrn --help
```
## Directory
###### App
```
./src
├── 3rdparty <Your lib >
├── assets <Images/ Animation >
└── mobile <Main Source code >
```
```
./src/mobile
├── app <Modules contain>
├── conf <Configuragtion: navigation/ redux/ language/ theme>
├── i18n <Multi Language>
├── router <App's Router>
├── theme <App's Theme>
├── tpl <Template(View)>
├── type
└── util <Helper>
```
##### Module
```
./src/mobile/app
├── action.js <Registering action>
├── app <Module>
├── authentication <Module>
├── index.js <Registering screen/redux>
├── menu <Module>
├── reselect.js <Registering reslect>
└── todo <Module>
```

About Specific module
```
./src/mobile/app/todo
├── index.js
├── logic.redux <Redux: action/ saga/ reducer/ reselect/ action>
│   ├── action.js
│   ├── actionType.js
│   ├── index.js
│   ├── info.js
│   ├── reducer.js
│   ├── reselect.js
│   └── type.js
└── screen <Screen View>
    ├── TodoScreen.js <Screen>
    ├── component <Components is used for screen>
    └── index.js <Registering screen router>
```
##### Theme
```
./src/mobile/theme
├── dark <Dark theme>
│   ├── applicationStyle.js
│   ├── color.js
│   └── index.js
├── default <Default theme>
│   ├── animation.js <Register lotte>
│   ├── applicationStyle.js <Style for component: button/ card/ container...>
│   ├── color.js <Color>
│   ├── font.js <Font>
│   ├── image.js <Register image>
│   ├── index.js
│   ├── metric.js <Metric: size, height, width, borderRadius>
│   └── unit.js
├── getTheme.js
├── index.js <Registering theme: dark, default>
└── package.json
```

##### Config
```
./src/mobile/conf
├── debugConfig.js <Config when debug (warning error)>
├── helper
│   └── module.js
├── i18n.js <Register language>
├── index.js
├── navigation
│   ├── Segment.js <Segment on top but perform issue>
│   ├── SegmentNavigation.js <Segment Navigation on top but perform issue>
│   ├── index.js <Register navigation>
│   ├── routes.js <Register screen>
│   ├── stackBuilder.js <Stack Builder>
│   └── tabBuilder.js <Tab Builder>
├── package.json
└── redux
    ├── ImmutablePersistenceTransform.js 
    ├── ReduxPersist.js <Storage data in Local>
    ├── index.js 
    ├── reducer.js <Register reducer> 
    └── saga.js <Register saga>
```

##### Template (Component)
This place includes all layout for application. For ex: Button/ Text/ Avatar/...
```
./src/mobile/tpl <Will include images latter>
├── AppAlphabet.js <Alphabet Row UI component>
├── AppAvatar.js <Round Avatar UI component>
├── AppAvatarPicker.js
.
.
.
├── base <Using for extends>
│   ├── HighPureComponent.js
│   ├── TwoColumnTablet.js
│   ├── index.js
│   └── style
├── component 
│   ├── ElementAlphabet.js
│   ├── TabBar.js
│   └── style
├── index.js
├── navigation <For navigation>
│   ├── TwoColumn.js
│   └── style
├── style
│   ├── AppAlphabetStyle.js
│   ├── AppAvatarPickerStyle.js
│   .
│   .
│   .
└── tcomb <Using for [tcomb-form-native](https://github.com/gcanti/tcomb-form-native)>
    ├── ItemCustomization.js
    ├── ListCustomization.js
    ├── TextboxCustomization.js
    ├── index.js
    └── styles.js
```
## Todo

- [ ] Add Theme CLI
- [ ] Add Template (30%)
- [x] Add Language
- [x] Add router CLI
- [x] Add Saga
- [ ] Update template

## Help

Please help me to make this project awesome.

Be free to make issue.