import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const DropBar = () => {
  return (
    <>  
    <section>
            
            <div>
            <i className='fas fa-bars' />
            </div>

            <div>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" style={{padding : '0'}}>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>


    </section>
    </>
  )
}

export default DropBar