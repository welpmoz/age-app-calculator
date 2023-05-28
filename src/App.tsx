import React from 'react'
import icon from "./assets/images/icon-arrow.svg"
import { useForm } from 'react-hook-form'
import ValidationError from './ValidationError'

// object form
type BirthDate = {
  day: number
  month: number
  year: number
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<BirthDate>({
    mode: "all",
    reValidateMode: "onSubmit"
  })

  function onSubmit(date: BirthDate) {
    console.log('Details', date)
  }
  
  return (
    <div className='app'>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form'>
          <div>
            <p className='form-label'>day</p>
            <input
              type="text"
              id='day'
              className='form-control'
              placeholder='dd'
              maxLength={2}
              {
                ...register('day', {
                  required: 'This field is required',
                  valueAsNumber: true
                })
              }
            />
            <ValidationError fieldError={errors.day} />
          </div>
          <div>
            <p className='form-label'>month</p>
            <input
              type="text"
              className='form-control'
              placeholder='mm'
              id='month'
              maxLength={2}
              {
                ...register('month', {
                  required: 'This field is required',
                })
              }
            />
            <ValidationError fieldError={errors.month} />
          </div>
          <div>
            <p className='form-label'>year</p>
            <input
              type="text"
              className='form-control'
              maxLength={4}
              placeholder='yyyy'
              id='year'
              {
                ...register('year', {
                  required: 'This field is required'
                })
              }
            />
            <ValidationError fieldError={errors.year} />
          </div>
        </div>

        <div className='rule-button'>
          <hr className='rule' />
          <button className='icon' type='submit'>
            <img src={icon} alt="down arrow - submit" className='my-image'/>
          </button>
        </div>
      </form>

      <div>
        <div>
          <p className='font-result'>
            <span className='purple-color'>--</span> years
          </p>
        </div>
        <div>
          <p className='font-result'>
            <span className='purple-color'>--</span> months
          </p>
        </div>
        <div>
          <p className='font-result'>
            <span className='purple-color'>--</span> days
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
