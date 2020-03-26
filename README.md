# Data Table Challenge - Sumit

This challenge is create a component that displays analytics data in a pivot table using [react-pivot](https://github.com/davidguttman/react-pivot). This is what a basic, unstyled version looks like:

![data table](http://i.imgur.com/Lg3eqfW.png)

### Setup & Running

*  run ```npm i``` in order to install required packages.

* run `npm run dev` in to run the app in development mode.

## Rules:

* Create a component `report.jsx` that exports a component.

* This component will display the data from `data.json` using `react-pivot` similar to the above image, and it should _at minimum_:

  * Group by "date" and "host" (dimensions).

  * Show counts of "impressions", "loads", and "displays".

  * Show "load rate" (loads / impressions) and "display rate" (displays / loads)

* You may modify `style.css` as you see fit (use the `defaultStyles: false` of `react-pivot` to disable default styling).

* Do not modify `index.js`.

* Follow these [coding style guidelines](https://gist.github.com/davidguttman/9fbdd0e9ee1fb3b33f5cf693195f2edb#code-style).

* Do not add any other npm modules (unless it is a small helper module).
