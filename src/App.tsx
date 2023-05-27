import React from 'react'

const App = () => {
  return (
    <>
      <form>
        <div>
          <span>day</span>
          <input type="text" />
        </div>
        <div>
          <span>month</span>
          <input type="text" />
        </div>
        <div>
          <span>year</span>
          <input type="text" />
        </div>
      </form>

      <div>
        <hr />
        <button>Mi icono</button>
      </div>

      <div>
        <div>
          <p>
            <span>--</span> years
          </p>
        </div>
        <div>
          <p>
            <span>--</span> months
          </p>
        </div>
        <div>
          <p>
            <span>--</span> days
          </p>
        </div>
      </div>
    </>
  )
}

export default App
