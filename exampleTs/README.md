## Error

#### Ios

Confict version xcode and phone:
Look at [this](https://stackoverflow.com/questions/50633023/device-support-files-for-ios-11-4-15f79)

#### Android

`react-native-i18n`

Add this line to ./android/build.grade
```
 classpath 'com.google.gms:google-services:3.1.2'
```

Like this
```
    dependencies {
        // classpath 'com.android.tools.build:gradle:2.3.3'
		classpath 'com.android.tools.build:gradle:3.1.0'
        classpath 'com.google.gms:google-services:3.1.2'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
```