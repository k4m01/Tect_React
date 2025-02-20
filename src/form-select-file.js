import React from "react";

export default function FormSelectFile(){
    const inputFile = React.useRef()
    const selectMaxNumFile = React.useRef()
    const selectMaxSize = React.useRef()

    let maxNumFile = [1,2,3,4,5]
    let maxSizes = [50,100,200,500,1000]

    const onClickButton = () => {
        let maxNumFiles = selectMaxNumFile.current.value
        let maxSize = selectMaxSize.current.value

        if(inputFile.current.files.length > maxNumFiles){
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`)
            return
        }

        for (let f of inputFile.current.files) {
            if (f.size > maxSize * 1000){
                alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`)
            }
        }

        alert('Files OK')
    }

    return(
        <div className="mt-4 mx-auto p-3 rounded" style = {{ width: "400px", background: "#cee"}}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="maxNumFile" className="form-label">จำนวนไฟลสูงสุด</label>
                    <select id ="maxNumFile" className="form-select form-select-sm" ref={selectMaxNumFile}>
                        {
                            maxNumFile.map(i => {
                                return <option value={i}>{i}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="maxFileSize" className="form-label">จำนวนไฟลสูงสุด</label>
                    <select id ="maxNumFile" className="form-select form-select-sm" ref={selectMaxSize}>
                        {
                            maxSizes.map(i => {
                                return <option value={i}>{i}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="file" className="form-label">จำนวนไฟลสูงสุด</label>
                    <input type="file" id="file" accept="image/*"
                        className="form-control form-control-sm" ref={inputFile}multiple>                        
                    </input>
                </div>

                <div className="text-center mt-4">
                    <button type="button" className="btn btn-sm btn-primary px-4"
                        onClick = {onClickButton}>OK
                    </button>
                </div>
                
            </form>

        </div>
    )
}