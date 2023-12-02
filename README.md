# Getukan

~~~bash
    Simple hybrid mobile app for find nearby getuk shop in our location, implement with firebase
    make this app more powerfull, also powered by expo dev and expo go version 47
~~~

## Setup Application

~~~bash
    Before you can develop this project you must setup this project first,
    Just follow the step it's very simple step
~~~

Init Env

~~~bash
    npm run env:init
~~~

add firebase config and eas project id into data.native.js
then push config to app.json with

~~~bash
    npm run env:push
~~~

after finish 2 steps above, you can go to build application step

## Build Application

~~~bash
    first, download eas cli version into your machine
~~~

~~~bash
    After installation process, run `eas login` command in your terminal
~~~

~~~bash
    Then follow step bellow for the next step
~~~

### Android

~~~bash
    run command `npm run build`, then select android platform
~~~

~~~bash
    Then press `Y` for generate keystore credential
~~~

### IOS

~~~bash
    run command `npm run build`, then select ios platform
~~~

~~~bash
    Then input your ios dev account credetials
~~~

### Web

~~~bash
    This project doesn't support web platform, if you want it
    setup metro configuration for web platform
~~~

### Final

~~~bash
    Done, your project stored in expo.dev website
    example: https://expo.dev/accounts/.../projects/.../...
~~~

After finish it, make sure you clear up config file with:

~~~bash
    npm run env:pop
~~~
