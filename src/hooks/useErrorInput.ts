import { useState, ChangeEvent } from 'react'

interface UseInputProps {
  value: string
  error: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  validate: (message: string) => boolean
  setError: (message: string) => void
}

export const useErrorInput = (initialValue: string): UseInputProps => {
  const [value, setValue] = useState<string>(initialValue)
  const [error, setError] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setError('')
  }

  const validate = (message: string) => {
    if (!value) {
      setError(message)
      return false
    }
    return true
  }

  return {
    value,
    error,
    onChange,
    validate,
    setError,
  }
}
