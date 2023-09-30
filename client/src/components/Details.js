import React, { useState } from 'react'
import baseUrl from '../constant/url.js'
import axios from 'axios'

const Details = () => {
    const [url, setUrl] = useState('')
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)
    const [history, setHistory] = useState({})

    const handleHistory = async () =>{
        try { 
           
            const {data} = await axios.get(`${baseUrl}/url/analytics/${url}`)
            setHistory(data.analytics)
            console.log(data)
            setShow(true)
        } catch (error) {
            console.error(error)
        }
        
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        const parts = value.split('/');
        setUrl(parts[parts.length - 1])

    }
  return (
    <div className=' bg-white text-black p-7 z-50 rounded-[10px] grid gap-4 min-w-[22vw]'>
      <p className='text-center text-[22px]'>History of Short URL</p>
      <div className='flex flex-col gap-2'>
        <label>Enter Short Url</label>
        <input type='text' placeholder='Enter URL' className='p-2 border-[1px] border-[#166534] outline-none rounded-[5px]' required onChange={e=> handleChange(e)}/>
      </div>

      <button type='submit' className='bg-green-800 text-white w-full rounded-[5px] p-2 h-[45px] hover:opacity-90' onClick={handleHistory}>Show History</button>

      {
        show && <div className='flex flex-col gap-3'>
            <div>
            <p>Main Url</p>
            <a href={history?.redirectURL} target="_blank" className='text-blue-700 underline cursor-pointer'>{history?.redirectURL}</a>
</div>

<div>
            <p>Visited</p>
            <p>{history?.visitHistory.length} times</p>
</div>

<div>
            <p>Created Time</p>
            <p>{history?.createdAt}</p>
</div>
<div>
            <p>Visited History</p>
            <div>
                {

                
            history?.visitHistory?.map((item, id) => {
                return (
                <p key={id}> {item.timestamp} </p>
                )
})
}

            </div>
</div>


        </div>
      }
      
    </div>
  )
}

export default Details
