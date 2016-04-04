import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { jsdom } from 'jsdom';

global.chai = chai;
global.expect = expect;
global.sinon = sinon;

chai.use(sinonChai);

// setup the simplest document possible
const doc = jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
const win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

global.window.localStorage = {getItem:() => {return '{}';}, setItem:() => {return '{}';}, removeItem() {}};

// take all properties of the window object and also attach it to the
// mocha global object
// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
(function (window) {
  for (const key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;

    global[key] = window[key];
  }
})(win);

//Ignore scss modules for testing
//For webpack
function noCompile(module, filename){ return module._compile('', filename) };
require.extensions['.scss'] = noCompile;
require.extensions['.sass'] = noCompile;
require.extensions['.less'] = noCompile;
require.extensions['.css'] = noCompile;
