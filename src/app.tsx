import './style.css'
import React from 'react'
import {scan, delay, filter} from 'rxjs/operators'
import {Observable, interval} from 'rxjs'
import {useObservable} from 'rxjs-hooks'


const obs$ = (): Observable<number> => interval(1000)

const accumulated$ = (): Observable<number[]> => obs$().pipe(
  scan((acc: number[], next: number): number[] => {
    return [...acc, next]
  }, []),
)

const delay$ = (): Observable<number[]> => obs$().pipe(
  scan((acc: number[], next: number): number[] => {
    return [...acc, next]
  }, []),
  delay(1500)
)

const filter$ = (): Observable<number[]> => obs$().pipe(
  filter((num: number) => (num % 2) === 0),
  scan((acc: number[], next: number): number[] => {
    return [...acc, next]
  }, [])
)

const App = () => {
  const accumelatedInterval = useObservable(accumulated$, [])
  const delayedIntervalInterval = useObservable(delay$, [])
  const filteredInterval = useObservable(filter$, [])

  return (
    <div className='tasks'>
      <div className='task1'>
        <div>Interval</div>
        <div>
          {accumelatedInterval.map((num) => (<span key={num} className='num'>{num}</span>))}
        </div>

        <div>Delayed</div>
        <div>
          {delayedIntervalInterval.map((num) => (<span key={num} className='num'>{num}</span>))}
        </div>

        <div>Filtered</div>
        <div>
          {filteredInterval.map((num) => (<span key={num} className='num'>{num}</span>))}
        </div>
      </div>
    </div>
  )
}

export default App
