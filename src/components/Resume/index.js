import React, { useState } from 'react'
import './styles.css'
import ResumepdfFile from '../../assets/Resume Shubham Jindal.pdf'
import { Viewer,Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

function ResumePage() {

    const pdfFile = {ResumepdfFile}
    const [viewPdf, setViewPdf] = useState(null)

    const fileType = ['application/pdf']


    // const handleChange = (e)=> {
    //     let selectedFile = e.target.files[0]
    //     if (selectedFile) {
    //         if (selectedFile && fileType.includes(selectedFile.type)) {
    //             let reader = new FileReader()
    //             reader.readAsDataURL(selectedFile)
    //             reader.onload = (e) => {
    //                 setPdfFile(e.target.result)
    //             }
    //         }
    //         else {
    //             setPdfFile(null)
    //         }
    //     }
    //     else {
    //         alert("Please Select Right File")
    //     }
    // }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(pdfFile!==null){
            setViewPdf(pdfFile)
            console.log('Done')
        }
        else{
            setViewPdf(null)
            console.log('Failed')
        }
    }
    const newplugin = defaultLayoutPlugin()
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <button type='submit'>View PDF</button>
                </form>
                <h2>View PDF</h2>
                <div className='pdf-container'>
                    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                        {viewPdf && <>
                            <Viewer  fileUrl={pdfFile} plugins={[newplugin]}/>
                        </>}
                        {!viewPdf&&<>No PDF</>}
                    </Worker>
                </div>
            </div>
        </>
    )
}

export default ResumePage
