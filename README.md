## React Native Template using CoffeeScript

#### clone and change from https://github.com/diegodurli/ReactNativeCoffee

### step

    $ git clone https://github.com/pct/react-native-template
    $ cd react-native-template
    $ npm install
    $ npm install -g coffee-react-transform
    $ npm start
    $ gulp
    $ open ReactNativeCoffee.xcodeproj # and click build

### references 

https://github.com/diegodurli/ReactNativeCoffee

### React Native Tips
- Docs: [http://facebook.github.io/react-native/docs/getting-started.html](http://facebook.github.io/react-native/docs/getting-started.html)
- Reload: Command + R
- Live Reload: Control + Command + Z
- Running on Device:
  - modify iOS/AppDelegate.m, see OPTION 2
  - $ curl http://localhost:8081/index.ios.bundle -o main.jsbundle
  - add main.jsbundle to your Xcode Project
- Flexbox: [http://facebook.github.io/react-native/docs/flexbox.html#content](http://facebook.github.io/react-native/docs/flexbox.html#content)
- Timers: [http://facebook.github.io/react-native/docs/timers.html#content](http://facebook.github.io/react-native/docs/timers.html#content)
- Network: fetch, example:

        fetch('https://mywebsite.com/endpoint.php')
          .then((response) => response.text())
          .then((responseText) => {
            console.log(responseText);
          })
          .catch((error) => {
            console.warn(error);
          });

