<h2 align="center">
  React Native CBA Starter Kit
</h2>
<h5 align="center">
Base on Component-Based Architecture
</h5>
<p align="center">
<img src="https://github.com/tomzaku/react-native-cba-starter-kit/blob/ts/logo.png?raw=true">
</p>

# Zkrn CLI
Inspired by [Ignite CLI](https://github.com/infinitered/ignite)
```
________   __   ___   _______   _____  ___
("      "\ |/"| /  ") /"      \ (\"   \|"  \
 \___/   :)(: |/   / |:        ||.\\   \    |   React Native
   /  ___/ |    __/  |_____/   )|: \.   \\  |   Starter Kit
  //  \__  (// _  \   //      / |.  \    \. |
 (:   / "\ |: | \  \ |:  __   \ |    \    \ |   Author: Zaku
  \_______)(__|  \__)|__|  \___) \___|\____\)   Vers: 1.0.24


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
#### Feature

  + Set default route easily: `react route [routeName]`
  + Support multi language & build automatically
  + Support theme inspired by Material
  + Init application just single line `react init [appName]`
  + Typescript supported
  + Redux supported
  + Dark & Light Theme Mode
  + Tablet & Phone supported

#### Why I have to create this
  My app based on CBA([Component-Based Architecture](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238)). Therefor, The module(For ex: 'src/mobile/app/todo') contains both redux and view. That way make you easy to reuse in another appliaction and help you to save your time.

``` 
.
├── com
├── conf
│   ├── redux.ts
│   └── route.tsx
├── index.tsx
├── redux
│   ├── action.tsx
│   ├── actionType.tsx
│   ├── index.tsx
│   ├── reducer.tsx
│   └── selector.tsx
└── screen
    ├── detail
    │   └── index.tsx
    └── main
        └── index.tsx

6 directories, 10 files
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

**1. Create app**

``` bash
zkrn init <appName>
```
Example: `zkrn init myApp`

**appName** could be snake case/ pascal case/ camelCase.
Don't try to using space (Ex: App Name)

**2. Create module**

``` bash
zkrn module create <moduleName>
```
Example: `zkrn module create todo`
Create a new module will include (saga, reselect, reducer, action, screen, styles) and auto register reducer/ saga/ action/ reselect/ screen.

**3. Remove module**

``` bash
zkrn module remove <moduleName>
```
Example: `zkrn module remove todo`
Remove a module will include (saga, reselect, reducer, action, screen, styles) and auto unregister reducer/ saga/ action/ reselect/ screen.

**4. Set router app**

``` bash
zkrn route set <routeName>
```
Example: `zkrn route set todo`
For who wanna test this screen first. It's will show this screen at begin.

**5. Make router at default**

``` bash
zkrn route default
```
Make router at default (This maybe personal.)

## Help

Please help me to make this project awesome.

Be free to make issue.