/**
 * @fileoverview
 * Sets up tape-nock for use in testing requests
 * Largely taken from the tape-nock documentation
 */

const tape = require('tape');
const tapeNock = require('tape-nock');
const nock = tapeNock.nock;

const localhost = '127.0.0.1';

const opts = {
  after: () => { },
  afterRecord: () => { }
};

const test = tapeNock(tape, {
  defaultTestOptions: opts
});

const wrappedTest = (name, opts, func) => {
  if (!func) func = opts;
  opts = null;

  test(name, (t) => {
    if (nock.back.currentMode === 'record' || nock.back.currentMode === 'lockdown') {
      nock.enableNetConnect(localhost);
    }
    func(t);
  });
};

Object.keys(test).forEach(key => {
  if (typeof test[key] !== 'function') return;
  wrappedTest[key] = (name, opts, func) => {
    if (!func) func = opts;
    opts = null;

    test(name, (t) => {
      if (nock.back.currentMode === 'record' || nock.back.currentMode === 'lockdown') {
        nock.enableNetConnect(localhost);
      }
      func(t);
    });
  };
});

module.exports = wrappedTest;
