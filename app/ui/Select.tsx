"use client"

import { useRouter } from 'next/navigation'

const redirection = (key: accessType): string => ({
  obligatoire: "/obligatoire",
  conseillée: "/conseillee",
  reset: "/",
}[key])

export function Select ({accessTypes}: {accessTypes: string[]}) {
  const { push } = useRouter()

  const handleClick = (e: any) => {
    push(redirection(e.target.value) ?? "/")
  }

  return (
    <select name="pets" id="pet-select" className="mb-8">
      <option value="">--Please choose an option--</option>
      {
        accessTypes?.map((accessType: string) => <option key={accessType} value={accessType} onClick={handleClick}>{accessType}</option>)
      }
    </select>
  )
}