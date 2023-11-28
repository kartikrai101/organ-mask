import ReactDom from 'react-dom';

const DonorModal = ({data, setDonorActiveModal}) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#D9D9D980] z-1000" />
            <div className="min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl">
                <div className='flex justify-between w-full'>
                    <p className='text-[26px] font-medium'>Donor Details</p>
                    <img onClick = {() => setDonorActiveModal(false)} src="/assets/close.png" alt="close" className='hover:cursor-pointer w-[20px] h-[20px]' />
                </div>
                <hr className='w-full'/>

                <div className='flex flex-col w-full mt-[10px]'>
                    <p><span className='font-medium'>Name: </span>{data.fname} {data.lname}</p>
                    <p><span className='font-medium'>Contact: </span>{data.contact} </p>
                    <p><span className='font-medium'>Email: </span>{data.email} </p>
                    <p><span className='font-medium'>Date of Birth: </span>{data.dob} </p>
                    <p><span className='font-medium'>Blood Group: </span>{data.bloodType} </p>
                    <p><span className='font-medium'>Gender: </span>{data.gender} </p>
                    <p><span className='font-medium'>State: </span>{data.state} </p>
                    <p><span className='font-medium'>District: </span>{data.district} </p>
                    <p><span className='font-medium'>Address: </span>{data.address} </p>
                    <p><span className='font-medium'>Status: </span>{data.status} </p>
                    <p><span className='font-medium'>Medical History: </span> </p>
                    <p><span className='font-medium'>Document ID: </span></p>
                </div>

                {
                    data.status === "donated" ? null : (
                        data.status === "verified" ? (
                            <div className='mt-[10px] flex justify-between items-center space-x-5'>
                                <button className='bg-[#2b9348] text-white w-[150px] py-[10px] rounded-[5px]'>Mark Donated</button>
                                <button className='bg-[#0077b6] text-white w-[150px] py-[10px] rounded-[5px]'>Mark Unverified</button>
                            </div>
                            //
                            //d00000
                        ) : (
                            <div className='mt-[10px] flex justify-between items-center'>
                                <button className='bg-[#2b9348] text-white w-[150px] py-[10px] rounded-[5px]'>Mark as Verified</button>
                        </div>
                        )
                    )
                }
            </div>
        </>, document.getElementById("portal")
    );
}

export default DonorModal;