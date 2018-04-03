var Rx = require('rxjs')

// Observable 和 Subject 的區別

const observable = Rx.Observable.from([1, 2, 3]);
// observable.subscribe(i => console.log('observable 1', i))
// observable.subscribe(i => console.log('observable 2', i))

const subject = new Rx.Subject();
subject.subscribe(i => console.log('subject 1', i))
subject.subscribe(i => console.log('subject 2', i))
observable.subscribe(subject)

subject.next('string')