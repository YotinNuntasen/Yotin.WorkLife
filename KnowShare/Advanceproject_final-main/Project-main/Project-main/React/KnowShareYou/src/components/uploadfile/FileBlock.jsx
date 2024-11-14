import React, { useState } from 'react'
import './FileBlock.css'

function Fileblock(props) {
    const name = props.name;
    const fileType = props.fileType;
    const size = props.size;

    return (


        <div>
            {props.id === undefined ? null :

                <div className="show-icon d-flex justify-content-start align-items-center mt-3">
                    <img src={fileType} alt="" className=' img-fluid w-25'/>
                    <div className="text d-flex flex-column justify-content-between mx-1">
                        <div className='cancel_icon d-flex align-items-center justify-content-between' >
                            <p className='text_name'>{name}  </p>
                            <img src="../../../public/icon-cancel.svg" alt="" style={{width:30}} className=' img-fluid '/>
                        </div>
                        <p className='text_size'>{size}</p>
                    </div>

                </div>

            }

        </div>




    )
}

export default Fileblock
