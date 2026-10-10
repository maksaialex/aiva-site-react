import type { CSSProperties } from 'react'

const FLARES = [
  { x: 87.76, y: 10.83 },
  { x: 85.16, y: 21.04 },
  { x: 78.65, y: 31.77 },
  { x: 56.09, y: 43.13 },
  { x: 16.56, y: 49.22 },
  { x: 82.81, y: 82.81 },
  { x: 76.82, y: 86.2 },
  { x: 51.2, y: 90.63 },
]

export function Background() {
  return (
    <div className="bg-stage" aria-hidden="true">
      <div className="bg-square">
        {FLARES.map((flare, i) => (
          <span
            key={i}
            className="flare"
            style={{ left: `${flare.x}%`, top: `${flare.y}%`, '--delay': `${i * -0.7}s` } as CSSProperties}
          >
            <span className="flare__halo" />
            <span className="flare__rays" />
            <span className="flare__core" />
          </span>
        ))}
      </div>
    </div>
  )
}
