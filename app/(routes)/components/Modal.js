import{useState} from 'react'

const Modal = ( {title, openModal, setOpenModal, children}) => {
    
  return (
    <div  className={`${openModal ? 'block' : 'hidden'} 
                fixed flex items-center justify-center inset-0 bg-gray-900 bg-opacity-80 
                overflow-y-auto h-full w-full z-20`}>
                <div className="w-4/5 lg:w-2/3 bg-white h-5/6 shadow-lg p-3 overflow-scroll lg:overflow-hidden">
                    <div className='w-full flex justify-between border-b border-red-500 pb-3'>
                    <p className='font-bold text-red-500 flex items-center'>{title}</p>
                    <i
                        onClick={() => setOpenModal(prev => !prev)}
                        className='fa-solid fa-square-xmark text-red-500 text-4xl cursor-pointer shadow-sm'
                    >
                    </i>
                    </div>
                    {/* Modal Content */}
                    <div>
                        { children }
                    </div>
                </div>
            </div>
  )
}

export default Modal