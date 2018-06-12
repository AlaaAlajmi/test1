const Tester = require('./tester');
const path = require('path');
const nexpect = require('nexpect');

module.exports = class GoTester extends Tester {
  constructor() {
    super();
    let binPath = path.join(__dirname, '../../bin')
    this.language = 'go';
    this.runCommand = 'go run /go/src/github.com/kuzzleio/go-test/';
    this.lintCommand = `golint /go/src/github.com/kuzzleio/go-test/`;
    this.indentation = 'space'; //tab or space
  }

  runExpect(binFile, expected) {
    let fileName = binFile.split('/').pop();
    return new Promise((resolve, reject) => {
      nexpect.spawn(this.runCommand + fileName)
        .wait(expected)
        .run((err, outpout, exit) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
    })
  }
  
  lintExpect(binFile) {
    let fileName = binFile.split('/').pop();
    return new Promise((resolve, reject) => {
      nexpect.spawn(this.lintCommand + fileName, { stream: 'stderr' })
        .wait('')
        .run((err, outpout, exit) => {
          if (err) {
            resolve();
          } else {
            let err = {
              code: 'LINTER ERROR',
              actual: outpout.join()
            }
            reject(err);
          }
        })
    })
  }

};