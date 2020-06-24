import React, { useState } from 'react'
import './insertion.css'

function Insertion() {

    const [input, setInput] = useState([])
    const [array, setArray] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        let arr = input.split("")
        arr = arr.filter(item => item !== ",")
        setArray(arr)
    }

    function InsertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i]
            let j = i - 1
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]
                j = j - 1
            }
            arr[j + 1] = key;
        }
        return arr.toString()
    }

    return (
        <>
            <h1 className="">Insertion Sort</h1>
            <div className="row mt-4">
                <div className="col-6 text-left">
                    <div className="row">
                        <div className="col">
                            <h4 className="">DESCRIPTION:</h4>
                            <small>It works by taking elements from the list one by one and inserting them in their correct position into a new sorted list similar to how we put money in our wallet.</small>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <h4>ARRAY:</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group col">
                                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="form-control" id="inputZip" />
                                    <label className="text-light">Ex. 1, 2, 5, 3</label>
                                </div>
                            </form>
                            {/* <h5 className="mb-3">{given.toString()}</h5> */}
                        </div>
                        <div className="col">
                            <h4>SORTED:</h4>
                            <h5>{array.length > 0 ? InsertionSort(array) : null}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h4>CODE:</h4>
                    <pre id="insertion-bg" className="rounded">
                        {`
                        function InsertionSort(arr) {
                                for (let i = 1; i < arr.length; i++) {     
                                    let key = arr[i]
                                    let j = i - 1
                                    while (j >= 0 && arr[j] > key) {
                                        arr[j + 1] = arr[j]
                                        j = j - 1
                                    }
                                    arr[j + 1] = key;
                                }
                                    return arr.toString() 
                            }
                            `}

                    </pre>
                </div>
            </div>
        </>

    )
}

export default Insertion