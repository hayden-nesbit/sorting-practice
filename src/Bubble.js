import React, { useState } from 'react'

function Bubble() {

    const [input, setInput] = useState([])
    const [array, setArray] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        let arr = input.split("")
        arr = arr.filter(item => item !== ",")
        setArray(arr)
    }

    function BubbleSort(arr) {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let tmp = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = tmp
                    swapped = true;
                }
            }
        } while (swapped)
        return arr.toString()
    }

    return (
        <>
            <h1 className="">Bubble Sort</h1>
            <div className="row mt-4">
                <div className="col-6 text-left">
                    <div className="row">
                        <div className="col">
                            <h4 className="">DESCRIPTION:</h4>
                            <small>The algorithm starts at the beginning of the data set. It compares the first two elements, and if the first is greater than the second, it swaps them. It continues doing this for each pair of adjacent elements to the end of the data set. It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.</small>
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
                            <h5>{array.length > 0 ? BubbleSort(array) : null}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h4>CODE:</h4>
                    <pre id="bubble-bg" className="rounded">
                        {`
                        function BubbleSort(arr) {
                            let swapped;
                            do {
                                swapped = false;
                                for (let i = 0; i < arr.length; i++) {    
                                    if (arr[i] > arr[i + 1]) {
                                        let tmp = arr[i]
                                        arr[i] = arr[i + 1]
                                        arr[i + 1] = tmp
                                        swapped = true;
                                    }
                                }
                            } while (swapped)
                            return arr.toString()
                        }
                            `}

                    </pre>
                </div>
            </div>
        </>

    )
}

export default Bubble