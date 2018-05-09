# Router
A simple solution to realize client-side routing with React.

This isn't a library (yet?) but just a small sample project to show, how you can easily have a router system for your React application.

Take a look at `./src/App.js` to find out how I made it.

See a live demo at: https://lgkonline.github.io/router

## Benefits of this in comparison to React Router
I used React Router before. This is the main reason why I switched:

React Router always unmounts a component when switching the route. But I wanted it to stay mounted so when the user goes back to the previous page, the component is still there and nothing has to reloaded again.

Btw: Because I don't need any "React-only" technologies for this you could easily use it with libraries like Angular or not using one at all (pure JavaScript FTW!).