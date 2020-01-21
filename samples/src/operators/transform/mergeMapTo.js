const { interval } = require("rxjs")
const { mergeMapTo, take, map } = require("rxjs/operators")

const source = interval(100).pipe(take(5))

const mix = source.pipe(
  mergeMapTo(
    interval(80).pipe(
      take(4),
      map(i => ["a", "b", "c"][i % 3])
    )
  )
)
mix.subscribe(x => console.log(x))
