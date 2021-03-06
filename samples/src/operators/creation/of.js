const { of, Observable } = require("rxjs")

const obs = of(1, 2, 3, 4)

obs.subscribe(i => {
  console.log("<1>", i)
})

obs.subscribe(i => {
  console.log("<2>", i)
})

// is equivalent to:
function _of() {
  const args = arguments
  return new Observable(observable => {
    const len = args.length
    for (let i = 0; i < len; i++) {
      observable.next(args[i])
    }
    observable.complete()
  })
}

_of(1, 2, 3).subscribe({
  next(val) {
    console.log(val)
  },
  err() {},
  complete() {
    console.log("complete")
  }
})
