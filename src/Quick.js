import React from 'react'

function Quick() {

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
        return QuickSort(left).concat(pivot, QuickSort(right));
    };

    let given = [11, 1, 3, 2, 8, 4]

    return (
        <div className="row">
            <div className="col-md-6 offset-3">
                <h1 className="mt-5 mb-4">Quick Sort</h1>
                <div className="row">
                    <div className="col-6 text-left">
                        <h4 className="">DESCRIPTION:</h4>
                        <small>Quicksort is a divide and conquer algorithm which relies on a partition operation: to partition an array, an element called a pivot is selected. All elements smaller than the pivot are moved before it and all greater elements are moved after it.</small>
                    </div>
                    <div className="col-6 text-center">
                        <h4>ARRAY:</h4>
                        <h5 className="mb-5">{given.toString()}</h5>
                        <h4>SORTED:</h4>
                        <h5>{QuickSort(given).toString()}</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Quick