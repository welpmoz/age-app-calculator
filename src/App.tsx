import React from 'react'
import icon from "./assets/images/icon-arrow.svg";

const App = () => {
  return (
    <div className='app'>
      <form>
        <div className='form'>
          <div>
            <p className='form-label'>day</p>
            <input type="text" className='form-control' maxLength={2} />
          </div>
          <div>
            <p className='form-label'>month</p>
            <input type="text" className='form-control' maxLength={2} />
          </div>
          <div>
            <p className='form-label'>year</p>
            <input type="text" className='form-control' maxLength={4} />
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

      <h1>Ultimo agregado para webear</h1>
    </div>
  )
}

export default App
