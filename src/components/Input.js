const Input = () => {

  const onClick = () => {
    console.log('click');
  }

  return (
    <div>
        <div className="input-container">
            <h4>Type Your Task</h4>

            <input type='text' placeholder='Task...' 
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: 'none'
              }}></input>

            <button onClick={onClick}
            style={{
              margin: '10px 10px 10px 0', 
              padding: '3px', 
              border: 'none',
              borderRadius: '3px',
              color: 'white',
              backgroundColor: 'purple',
              width: '2rem',
              cursor: 'pointer'
            }}>
            Add</button>

        </div>
    </div>
  )
}

export default Input
