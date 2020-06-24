import React from 'react'

function Insertion() {

    function InsertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i]
            let j = i-1
            while(j >= 0 && arr[j] > key) {
                arr[j+1] = arr[j]
                j = j-1
            }
            arr[j+1] = key;
        } 
        return arr.toString()
    }

    let given = [9, 2, 3, 1, 5, 7, 2]

    return (
        <div className="row">
            <div className="col-md-6 offset-3">
                <h1 className="mt-5 mb-4">Insertion Sort</h1>
                <div className="row">
                    <div className="col-6 text-left">
                        <h4 className="">DESCRIPTION:</h4>
                        <small>It works by taking elements from the list one by one and inserting them in their correct position into a new sorted list similar to how we put money in our wallet.</small>
                    </div>
                    <div className="col-6 text-center">
                        <h4>ARRAY:</h4>
                        <h5 className="mb-5">{given.toString()}</h5>
                        <h4>SORTED:</h4>
                        <h5>{InsertionSort(given)}</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Insertion