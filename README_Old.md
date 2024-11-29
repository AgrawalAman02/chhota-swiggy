# React

- This repo consist of my whole journey of learning of react

## Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm - to keep an eye on all files - build in cpp
- Caching = Faster Build
- Image Optimisation
- Minification
- Bundling
- Compress
- Code splitting 
- differential bundling - support older browser
- Tree Shaking - remove unused code

## Redux

- Install @reduxjs/toolkit and react-redux
- Build our store 
- Connect our store to our app 
- Slice (cart)
- Dispatch (Action)
- Selector

## Testing

- Unit Testing
- Integration Testing
- End to End Testing (e2e) 

### Setting the Testing in our app

- Install the React Testing Library
- Install the jest 
- Install the babel dependencies 
- created the babel.config.js
- Configure the parcel config file to disable the default babel transpilation
- Jest configuration  i.e. `npx jest --init`
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react in my babel config
- Include testing-library/jest-dom';
