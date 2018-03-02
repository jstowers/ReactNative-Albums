# Spanish Vocabulary Builder
A React Native mobile app designed to improve your Spanish vocab.
---

Start date:  Wednesday, February 28, 2018

Video reference: Stephen Grider, The Complete React Native and Redux Course

## Build Commands

- Initialize a new React Native project called _albums_ (Sec. 2, Lec. 5)

    ```
        $ react-native init albums
    ```

- Build the project and launch iOS simulator (Sec. 2, Lec. 6)

    ```
        $ react-native run-ios
    ```

## Add ESLint With Sublime Text 3

1.  Install ESLint globally with NPM

    ```
        $ sudo npm install -g eslint
    ```

        I installed ver. 4.18.1

2.  Install Package Control for Sublime

    ```
        https://packagecontrol.io/installation#st3
    ```
    
3.  Install ESLint configuration

    ```
        $ npm install --save-dev eslint-config-rallycoding
    ```

4.  Create new configuration file in root directory of project

    ```
        .eslintrc
    ```

    ```
        {
            "extends": "rallycoding"
        }
    ```

5.  Use Package Control to install linter and 

    ```
        Cmd + Shift + P
    ```


## Styling with React Native
Sec. 6, Lecs. 24, 25

Most styling in React Native is done by hand.  Very few open-source styling libraries available.

1.  Inside a component, create a _styles_ object:

    ```javascript
        const styles = {
            viewStyle: {
                backgroundColor: '#F8F8F8',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                paddingTop: 15,
            }
            textStyle: {
                fontSize: 20,
                color: 'black',
            }
        };
    ```

2.  The _styles_ object has different properties like _viewStyle_ and _textStyle_.  Use these properties to style different primitive elements within a component:
    
    ```javascript
        const Header = (props) => {
            const { viewStyle, textStyle } = styles;

            return (
                <View style={viewStyle}>
                    <Text style={textStyle}>{ props.headerText }</Text>
                </View> 
            );
        };
    ```

3.  Use the `<View />` primitive element for positionining and styling of elements nested within, like the `<Text />` element above.  (Sec. 6, Lec. 26)
