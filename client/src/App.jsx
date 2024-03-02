import './App.css'

function App() {
  
  return (
    <div>
      <header className='p-5 flex justify-between'>
        {/* logo */}
        <a href="" className='flex items-center gap-1.5 text-red-600' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className='font-bold text-xl'>TrekStay</span>
        </a>

        {/* search bar */}
        <div className='flex gap-2 border border-grey-300 rounded-full py-2 px-4 shadow-md shadow-gray-400'>
          <div>Anywhere</div>
          <div className='border border-gray-300'></div>
          <div>Any week</div>
          <div className='border border-gray-300'></div>
          <div>Add Guests</div>
          <button className='bg-primary text-white rounded-full p-1'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </header>
    </div>  
    
  )
}

export default App
