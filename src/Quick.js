import React, { useState } from 'react'

function Quick() {

    const [input, setInput] = useState([])
    const [array, setArray] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        let arr = input.split("")
        arr = arr.filter(item => item !== ",")
        setArray(arr)
    }

    function QuickSort(arr) {

        if (arr.length <= 1) {
            return arr;
        }

        let pivot = arr[0];
        let left = [];
        let right = [];

        for (let i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        return QuickSort(left).concat(pivot, QuickSort(right)).toString();
    };


    return (
        <>
            <h1 className="">Quick Sort</h1>
            <div className="row mt-4">
                <div className="col-6 text-left">
                    <div className="row">
                        <div className="col">
                            <h4 className="">DESCRIPTION:</h4>
                            <small>Quicksort is a divide and conquer algorithm which relies on a partition operation: to partition an array, an element called a pivot is selected. All elements smaller than the pivot are moved before it and all greater elements are moved after it.</small>
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
                            <h5>{array.length > 0 ? QuickSort(array) : null}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h4>CODE:</h4>
                    <pre id="quick-bg" className="rounded">
                        {`
                        function QuickSort(arr) {

                                if (arr.length <= 1) {
                                    return arr;
                                }

                                let pivot = arr[0];
                                let left = [];
                                let right = [];

                                for (let i = 1; i < arr.length; i++) {
                                    arr[i] < pivot ? 
                                    left.push(arr[i]) 
                                    : 
                                    right.push(arr[i]);
                                }
                                return QuickSort(left).concat(pivot, QuickSort(right))
                        }
                            `}

                    </pre>
                </div>
            </div>
        </>

    )

}

export default Quick