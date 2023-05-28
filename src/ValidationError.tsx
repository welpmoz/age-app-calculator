import React from 'react'
import { FieldError } from 'react-hook-form'

type Props = {
  fieldError: FieldError | undefined
}

const ValidationError = ({fieldError}: Props) => {

  return (
    <div role='alert' className={`alert ${!fieldError ? 'hidden' : 'visible'}`}>
      {fieldError?.message}
    </div>
  )
}

export default ValidationError
