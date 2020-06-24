import React, { useState } from 'react'

function Algorithm(props) {

    const [input, setInput] = useState([])
    const [array, setArray] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        let arr = input.split("")
        arr = arr.filter(item => item !== ",")
        setArray(arr)
    }

    return (
        <div className={props.className}>
            <h1 className="">{props.name}</h1>
            <div className="row mt-4">
                <div className="col-6 text-left">
                    <div className="row">
                        <div className="col">
                            <h4 className="">DESCRIPTION:</h4>
                            <small>{props.description}</small>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <h4>ARRAY:</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group col">
                                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="form-control" id="inputZip" />
                                    <label className="text-light">Ex. 1,5,3, or 153</label>
                                </div>
                            </form>
                            {/* <h5 className="mb-3">{given.toString()}</h5> */}
                        </div>
                        <div className="col">
                            <h4>SORTED:</h4>
                            <h5>{array.length > 0 ? props.function(array) : null}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h4>CODE:</h4>
                    <pre id={props.id} className="rounded">
                        {props.code}

                    </pre>
                </div>
            </div>
        </div>

    )
}

export default Algorithm