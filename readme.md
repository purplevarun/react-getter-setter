# react-getter-setter ⚒️

> A React Library to set, get, and delete global varibles

[![version](https://img.shields.io/npm/v/react-getter-setter.svg)](https://www.npmjs.com/package/react-getter-setter)
[![downloads](https://img.shields.io/npm/dt/react-getter-setter.svg)](https://www.npmjs.com/package/react-getter-setter)

## Demo

<img src="https://github.com/purplevarun/react-getter-setter/blob/main/assets/demo.gif?raw=true" alt="DEMO GIF (visit gh page if not rendered)"/>

<a href="https://github.com/purplevarun/react-getter-setter/blob/main/assets/App.jsx">Code Used for Demo</a>

## Installation

    npm install react-getter-setter

## Setup

You need to wrap your entire react app inside the GetterSetterWrapper.
The simplest way to do this is in index.js.

    // index.js example

    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import { GetterSetterWrapper } from "react-getter-setter";

    ReactDOM.createRoot(document.getElementById("root")).render(
        <GetterSetterWrapper>
            <App />
        </GetterSetterWrapper>
    );

\* \* Remember that you cannot use getters and setters in the component in which you are using GetterSetterWrapper <br/> \* \* getters and setters can only be used in child classes, which is why index.js is the best place to do so.

## Usage

Use getValue and setValue to define global variables that will be saved in your storage.

    import { useValue } from "react-getter-setter";

    const App = () => {

        const { getValue, setValue } = useValue();

        return (

            <h1>Name = { getValue("name") }</h1>

            <button onClick={ () => setValue("name", "Alex") }>
                Change Name
            </button>

        )

    }

Use removeValue and removeAllValues to delete values

    const { getValue, setValue, removeValue, removeAllValues } = useValue();

    removeValue("name") // deletes only name

    removeAllValues() // deletes all variables

## Documentation

react-getter-setter provides you with 2 components :

1. GetterSetterWrapper : Used to Wrap your React App in order to use getters and setters

2. useValue : A Hook that returns upto 4 functions

    - getValue(key) : to retreive a stored variable

    - setValue(key, value) : to store a variable

    - removeValue(key) : to delete a particular variable

    - removeAllValues() : to delete all variables
