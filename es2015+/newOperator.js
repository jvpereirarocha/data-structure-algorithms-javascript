'use strict';

const pi = 3.14;
const r = 5.2;

const area = pi * r * r; // Old method to calcule exponencial operators

const areaUsingPow = pi * Math.pow(r, 2);


// Method to calcule using ES2015+ feature

const newArea = pi * (r ** 2);
