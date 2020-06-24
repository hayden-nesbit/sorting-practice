import React from 'react'

function Bubble() {

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

    let given = [1, 5, 4, 2, 5, 6, 0, 9]

    return (
        <div className="row">
            <div className="col-md-6 offset-3">
                <h1 className=" mb-4">Bubble Sort</h1>
                <div className="row">
                    <div className="col-6 text-left">
                        <h4 className="">DESCRIPTION:</h4>
                        <small>The algorithm starts at the beginning of the data set. It compares the first two elements, and if the first is greater than the second, it swaps them. It continues doing this for each pair of adjacent elements to the end of the data set. It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.</small>
                    </div>
                    <div className="col-6 text-center">
                        <h4>ARRAY:</h4>
                        <h5 className="mb-5">{given.toString()}</h5>
                        <h4>SORTED:</h4>
                        <h5>{BubbleSort(given)}</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bubble