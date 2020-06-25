import React from 'react';
import './App.css';
import Algorithm from './Algorithm'
import Footer from './Footer'

function App() {

  function BubbleSort(arr) {

    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > Number(arr[i + 1])) {
          let tmp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = tmp
          swapped = true;
        }
      }
    } while (swapped)
    return arr
  }

  function InsertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
      let key = Number(arr[i])
      let j = i - 1
      while (j >= 0 && Number(arr[j]) > key) {
        arr[j + 1] = Number(arr[j])
        j = j - 1
      }
      arr[j + 1] = key;
    }
    return arr
  }

  function QuickSort(arr) {

    if (arr.length <= 1) {
      return arr;
    }

    let pivot = Number(arr[0]);
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
      Number(arr[i]) < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    
    return QuickSort(left).concat(pivot, QuickSort(right))
  }


  return (
    <>
      <div className="bg-primary p-4 text-white ">
        <Algorithm
          function={BubbleSort}
          name={"Bubble Sort"}
          description={"The algorithm starts at the beginning of the data set. It compares the first two elements, and if the first is greater than the second, it swaps them. It continues doing this for each pair of adjacent elements to the end of the data set. It then starts again with the first two elements, repeating until no swaps have occurred on the last pass."}
          id={"bubble"}
          code={`
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
            contributer={"Hayden Nesbit"}
            link={"https://github.com/hayden-nesbit"}
        />
      </div>
      <div className="bg-success p-4 text-white ">
        <Algorithm
          function={InsertionSort}
          name={"Insertion Sort"}
          description={"It works by taking elements from the list one by one and inserting them in their correct position into a new sorted list similar to how we put money in our wallet."}
          id={"insertion"}
          code={`
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
          contributer={"Hayden Nesbit"}
          link={"https://github.com/hayden-nesbit"}
        />
      </div>
      <div className="bg-warning p-4 text-white ">
        <Algorithm
          function={QuickSort}
          name={"Quick Sort"}
          description={"Quicksort is a divide and conquer algorithm which relies on a partition operation: to partition an array, an element called a pivot is selected. All elements smaller than the pivot are moved before it and all greater elements are moved after it."}
          id={"quick"}
          code={`
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
          contributer={"Hayden Nesbit"}
          link={"https://github.com/hayden-nesbit"}
        />
      </div>
      <Footer />
</>
  );
}

export default App;
