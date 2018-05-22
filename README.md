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