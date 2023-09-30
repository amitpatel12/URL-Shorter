import axios from 'axios';
import React, { useState } from 'react'
import QRCode from "react-qr-code";
import baseUrl from '../constant/url.js'
import { Link } from 'react-router-dom';

const Main = () => {
    const [textToCopy, setTextToCopy] = useState('hello bro');
    const [show, setShow] = useState(false)
    const [url, setUrl] = useState('')
    const [shortId, setShortId] = useState('')
    const [qr, setQr] = useState(false)
    const handleCopyClick = () => {
        // Create a new textarea element and set its value to the text you want to copy.
        const textArea = document.createElement('textarea');
        textArea.value = `${baseUrl}/${shortId}`;
    
        // Append the textarea element to the document.
        document.body.appendChild(textArea);
    
        // Select the text within the textarea.
        textArea.select();
    
        // Execute the copy command.
        const copySuccessful = document.execCommand('copy');
    
        // Remove the textarea element from the document.
        document.body.removeChild(textArea);
    }

    const handleGenerate = async () => {
        try {
            const {data} = await axios.post(`${baseUrl}/url`, {url})
            setShortId(data.id)
            setShow(true)
        } catch (error) {
            console.error(error)
        }
       
    }
    
  return (
    <div className=' bg-white text-black p-8 z-50 rounded-[10px] grid gap-4 min-w-[22vw]'>
      <div className='flex flex-col gap-2'>
        <label>Enter Long Url</label>
        <input type='text' placeholder='Enter URL' className='p-2 border-[1px] border-[#166534] outline-none rounded-[5px]' required onChange={e=> setUrl(e.target.value)}/>
      </div>

      <button type='submit' className='bg-green-800 text-white w-full rounded-[5px] p-2 h-[45px] hover:opacity-90' onClick={handleGenerate}>Get Short Url</button>

{
    show && <div className='flex flex-col gap-3'>
    <p>Short URL</p>
    <a href={`${baseUrl}/${shortId}`} target="_blank" className='text-blue-700 underline cursor-pointer'>{baseUrl}/{shortId}</a>
    <div className='flex gap-4'>
    <button className='bg-green-800 text-white w-full rounded-[5px] p-2 h-[45px] hover:opacity-90' onClick={handleCopyClick}>Copy</button>
    <button className='bg-green-800 text-white w-full rounded-[5px] p-2 h-[45px] hover:opacity-90' onClick={()=> setQr(true)}>QR</button>

    </div>
    {
        qr &&  <div className='p-10'>
        <QRCode value={`${baseUrl}/${shortId}`} />
        </div>
    }
   
  </div>
}
<Link to ='/getinfo' className="underline hover:text-blue-800">Get More Details about Short URL</Link>
    </div>
  )
}

export default Main
