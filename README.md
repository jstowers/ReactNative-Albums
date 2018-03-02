# Spanish Vocabulary Builder
A React Native mobile app designed to improve your Spanish vocab.
---

Start date:  Wednesday, February 28, 2018
Video reference: Stephen Grider, React Native

## Build Commands

-- Build the initial project called `albums` (Sec. 2, Lec. 5)

    ```
        $ react-native init albums
    ```

-- Build project and launch iOS simulator (Sec. 2, Lec. 6)

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

Most of styling in React Native is done by hand.  Very few open-source styling libraries available.

1.  Inside a component, create a styles object:

    ```
        const styles = {
            textStyle: {
                fontSize: 20,
                color: 'red',
            }
        };
    ```

2.  Reference the different styles properties

3.  Use the `<View />` primitive element for positionining and styling of different aspects of a component.  (Sec. 6, Lec. 26)
