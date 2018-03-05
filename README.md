# Albums

## A React Native App to Organize and Display Your Music Albums

Start date:  *Wednesday, February 28, 2018*

Video reference =>  Grider, Stephen: _The Complete React Native and Redux Course_

---

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
Sec. 6, Lecs. 24-28

Most styling in React Native is done by hand.  Very few open-source styling libraries available.

1.  Inside a component, create a _styles_ object.  And within the _styles_ object, you can define different properties like _viewStyle_ and _textStyle_:

    ```javascript
        const styles = {
            viewStyle: {
                backgroundColor: '#F8F8F8',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                paddingTop: 15,
            },
            textStyle: {
                fontSize: 20,
                color: 'black',
            }
        };
    ```

2.  Use these properties to style different primitive elements within the component:
    
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

---

### Sunday, March 4, 2018

## Overview
Sec. 7 - 

In this section, you will create two components, AlbumList and AlbumDetail:

_AlbumList_: (1) fetches a list of albums from an API endpoint, and (2) renders several AlbumDetail components.

_AlbumDetail_: displays a card for an album.  Card details include the artist name, album name, and album cover.

## Functional vs Class Components
Sec. 7, Lec. 31

- Functional Component
    + In React, a functional component simply means that data goes in and some kind of JSX comes out
    + Typically used for presenting static data (ex. Header component)
    + Cannot handle fetching data
    + Easy to write

    ```javascript
        const Header = () => {
            return <Text>Hi there
        };
    ```

- Class Component
    + Used for dynamics sources of data
    + Handles any data that might change, fetching data, user events, etc.
    + Easier to write larger, more organized components
    + More complex, but more capability
--

Sunday, March 4, 2018


## Rendering Child Components
(Sec. 7, Lecs. 41-42)

- We can pass a child component up to its parent as a property called _props.children_.

- By its nested nature, a `<Text />` component is passed up to its parent `<Card />` component:

    ```javascript
        // AlbumDetail component
        return (
            <Card>  
                <Text>{ album.title }</Text>
            </Card>
        );
    ```

- To render the child `<AlbumDetail />` within the parent _Card_ component, you only need reference _props.children_:
    
    ```javascript
        // Card component
        const Card = (props) => {
            return (
                <View style={styles.cardStyle}>
                    { props.children }
                </View>
            );
        };
    ```

## Mastering Layout with Flexbox
Sec. 8, Lec. 43

- Build `<CardSection />` component for the artist info:

    ```javascript
        <CardSection>
            <Image />
            <Text />
            <Text />
        </CardSection>
    ```

- Flexbox used to layout multiple items in a container

- By default, React Native places all elements in the upper lefthand corner of a container.

- **justifyContent** moves elements within a container:
    + 'flex-end' => bottom left corner
    + 'center' => centers elements 
    + 'space-between' => maximizes and equalizes the space between items in a container
    + 'space-around' => equalizes space around elements

## Positioning Elements on Mobile
Sec. 8, Lec. 44

 - **flexDirection**
    The _justifyContent_ property can be applied in either rows or columns by setting the _flexDirection_ property.
    The default flexDirection is 'column'
    + 'row' => 'justifyContent'
    + 'column'

## Images with React Native
Sec. 9, Lec. 46

React Native provides an `<Image />` primitive


