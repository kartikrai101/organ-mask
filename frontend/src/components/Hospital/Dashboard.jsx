import {Donors, Recipients} from '../../utils/DummyData';
import {useState, useEffect, useRef} from 'react';
import DonorCard from '../../utils/DonorCard';
import RecipientCard from '../../utils/RecipientCard';
import DonorModal from '../../utils/DonorModal';
import RecipientModal from '../../utils/RecipientModal';

const NonActiveClass = 'flex items-center bg-[#F8F8F8] text-[#4B465C] rounded-[5px] px-[10px] py-[4px] cursor-pointer';
const ActiveClass = "flex items-center bg-[#3C3836] text-white rounded-[5px] px-[10px] py-[4px] cursor-pointer";

const Dashboard = (props) => {
    const [selected, setSelected] = useState("donor");

    const [donorDropdown, setDonorDropdown] = useState(false);
    const [recipientDropdown, setRecipientDropdown] = useState(false);

    const [selectedPage, setSelectedPage] = useState(1);

    const [donorActiveModal, setDonorActiveModal] = useState(false);
    const [recipientActiveModal, setRecipientActiveModal] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <div className="h-[100vh]">
            <div className="w-full border-[2px] border-grey px-[30px] bg-white py-[15px] flex items-center justify-between">
                <div className=" flex items-center space-x-3 ">
                    <img src="/assets/logo2.png" alt="logo" className="w-[45px] h-[45px]" />
                    <p className="text-[32px] font-medium">Organ Mask</p>
                </div>
            </div>
            <div className="p-[20px] w-full h-[90%] flex justify-between space-x-5">
                <div className="h-full bg-white shadow-xl w-[20%] rounded-[20px] px-[20px] py-[30px]">
                    <div>
                        <p className="font-normal text-[#6c757d] mb-[10px]">Donors</p>

                        <div className='space-y-2'>
                            <div onClick = {() => setSelectedPage(1)} className={NonActiveClass}>
                                <img src="/assets/registeredIcon.png" alt="verification" className="w-[25px]" />
                                <p className='ml-[10px]'>Registered</p>
                            </div>
                            <div onClick = {() => setSelectedPage(2)} className={NonActiveClass}>
                                <img src="/assets/verifiedIcon.png" alt="verification" className="w-[25px]" />
                                <p className='ml-[10px]'>Verified</p>
                            </div>
                            <div onClick = {() => setSelectedPage(3)} className={NonActiveClass}>
                                <img src="/assets/donatedIcon.png" alt="verification" className="w-[25px]" />
                                <p className='ml-[10px]'>Donated</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[20px]'>
                        <p className="font-normal mb-[10px] text-[#6c757d]">Recipients</p>

                        <div className='space-y-2'>
                            <div onClick = {() => setSelectedPage(4)} className={NonActiveClass}>
                                <img src="/assets/registeredIcon.png" alt="verification" className="w-[25px]" />
                                <p className='ml-[10px]'>Registered</p>
                            </div>
                            <div onClick = {() => setSelectedPage(5)} className={NonActiveClass}>
                                <img src="/assets/verifiedIcon.png" alt="verification" className="w-[25px]" />
                                <p className='ml-[10px]'>Verified</p>
                            </div>
                            <div onClick = {() => setSelectedPage(6)} className={NonActiveClass}>
                                <img src="/assets/donatedIcon.png" alt="verification" className="w-[25px]" />
                                <p className='ml-[10px]'>Recieved</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="h-full bg-white w-[100%] rounded-[20px] px-[20px]  overflow-y-scroll">
                    {
                        selectedPage === 1  ? (
                            Donors.map((donor, key) => {
                                if(donor.status === "registered")
                                return <DonorCard data = {donor} page={selectedPage} setActiveModal={setDonorActiveModal} setModalData={setModalData} />
                            })
                        ) : null
                    }
                    {
                        selectedPage === 2  ? (
                            Donors.map((donor, key) => {
                                if(donor.status === "verified")
                                return <DonorCard data = {donor} page={selectedPage} setActiveModal={setDonorActiveModal} setModalData={setModalData} />
                            })
                        ) : null
                    }
                    {
                        selectedPage === 3  ? (
                            Donors.map((donor, key) => {
                                if(donor.status === "donated")
                                return <DonorCard data = {donor} page={selectedPage} setActiveModal={setDonorActiveModal} setModalData={setModalData} />
                            })
                        ) : null
                    }
                    {
                        selectedPage === 4 ? (
                            Recipients.map((recipient, key) => {
                                if(recipient.status === "registered")
                                return <RecipientCard data = {recipient} page={selectedPage} setActiveModal={setRecipientActiveModal} setModalData={setModalData} />
                            })
                        ) : null
                    }
                    {
                        selectedPage === 5  ? (
                            Recipients.map((recipient, key) => {
                                if(recipient.status === "verified")
                                return <RecipientCard data = {recipient} page={selectedPage} setActiveModal={setRecipientActiveModal} setModalData={setModalData} />
                            })
                        ) : null
                    }
                    {
                        selectedPage === 6  ? (
                            Recipients.map((recipient, key) => {
                                if(recipient.status === "recieved")
                                return <RecipientCard data = {recipient} page={selectedPage} setActiveModal={setRecipientActiveModal} setModalData={setModalData} />
                            })
                        ) : null
                    }
                </div>
            </div>
            {
                donorActiveModal ? (
                    <DonorModal data = {modalData} setDonorActiveModal = {setDonorActiveModal} />
                ) : null
            }
            {
                recipientActiveModal ? (
                    <RecipientModal data = {modalData} setRecipientActiveModal = {setRecipientActiveModal} />
                ) : null
            }
        </div>
    );
}

export default Dashboard;