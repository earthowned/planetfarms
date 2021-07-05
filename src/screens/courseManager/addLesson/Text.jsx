const Text = ({ heading, desc }) => {
  return (
    <>
      {heading || desc ? (
        <div className='text'>
          <h1>{heading}</h1>
          <p>{desc}</p>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Text
