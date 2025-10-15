"use client"

import { useState } from 'react'

export default function CalculateCard() {
  const [hazard, setHazard] = useState('')
  const [vulnerability, setVulnerability] = useState('')
  const [exposure, setExposure] = useState('')
  const [capacity, setCapacity] = useState('1')
  const [risk, setRisk] = useState<number | null>(null)
  const [calculating, setCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [riskLevel, setRiskLevel] = useState<string | null>(null)

  const accept15 = (prev: string, next: string) => {
    if (next === '') return ''
    if (/^[1-5]$/.test(next)) return next
    return prev
  }

  const onChange15 = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setter(prev => accept15(prev, e.target.value))

  const onPaste15 = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const text = e.clipboardData.getData('text')
      const m = text.match(/[1-5]/)
      setter(m ? m[0] : '')
    }

  const parse = (s: string) => {
    const n = parseInt(s, 10)
    return Number.isFinite(n) ? n : NaN
  }

  const calculateRisk = () => {
    setError(null)
    const h = parse(hazard)
    const v = parse(vulnerability)
    const e = parse(exposure)
    const c = parse(capacity)

    if (![h, v, e, c].every(Number.isFinite)) {
      setError("All fields must be numbers between 1 and 5.")
      return
    }
    if (h < 1 || v < 1 || e < 1 || c < 1) {
      setError("All values must be between 1 and 5. Capacity cannot be 0.")
      return
    }

    const formula = (h * v * e) / c

    setCalculating(true)
    setRisk(null)
    setTimeout(() => {
      setRisk(formula)
      setRiskLevel(getRiskLevel(formula))
      setCalculating(false)
    }, 500)
  }

  const getRiskLevel = (r: number) => {
    if (r < 1) return "Very Low Risk"
    if (r < 3) return "Low Risk"
    if (r < 10) return "Moderate Risk"
    if (r < 35) return "High Risk"
    return "Very High Risk"
  };

  return (
    <div className="bg-white bg-opacity-75 p-6 md:p-8 rounded-lg text-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Calculate Here</h2>
      <div className="flex flex-col items-center text-2xl">
        {/* Numerator: H x V x E */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span>H</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[1-5]"
              maxLength={1}
              value={hazard}
              onChange={onChange15(setHazard)}
              onPaste={onPaste15(setHazard)}
              placeholder="1-5"
              className="w-12 text-center bg-gray-200 rounded"
            />
          </div>
          <span>×</span>
          <div className="flex items-center gap-2">
            <span>V</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[1-5]"
              maxLength={1}
              value={vulnerability}
              onChange={onChange15(setVulnerability)}
              onPaste={onPaste15(setVulnerability)}
              placeholder="1-5"
              className="w-12 text-center bg-gray-200 rounded"
            />
          </div>
          <span>×</span>
          <div className="flex items-center gap-2">
            <span>E</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[1-5]"
              maxLength={1}
              value={exposure}
              onChange={onChange15(setExposure)}
              onPaste={onPaste15(setExposure)}
              placeholder="1-5"
              className="w-12 text-center bg-gray-200 rounded"
            />
          </div>
        </div>
        
        {/* Horizontal line */}
        <div className="w-full max-w-xs h-px bg-black mb-2"></div>
        
        {/* Denominator: C */}
        <div className="flex items-center gap-2">
          <span>C</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[1-5]"
            maxLength={1}
            value={capacity}
            onChange={onChange15(setCapacity)}
            onPaste={onPaste15(setCapacity)}
            placeholder="1-5"
            className="w-12 text-center bg-gray-200 rounded"
          />
        </div>
      </div>

      {error && <p className="mt-2 text-center text-red-700 text-sm">{error}</p>}

      {calculating ? (
        <div className="mt-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">CALCULATING...</p>
        </div>
      ) : (
        <button
          onClick={calculateRisk}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer duration-300 transition-all ease-in-out"
        >
          {risk === null ? 'Calculate' : 'Calculate Again'}
        </button>
      )}

      {risk !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg md:text-xl">Disaster Risk = <span className="font-bold">{risk.toFixed(2)}</span></p>
          <p className="text-lg md:text-xl">Risk Level = <span className="font-bold">{riskLevel}</span></p>
        </div>
      )}
    </div>
  )
}