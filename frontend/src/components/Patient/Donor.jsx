import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../utils/Header';
import { DistrictList, StateList} from '../../utils/AddressData';


const Donor = (props) => {

    const [state, setState] = useState(-1);
    const [district, setDistrict] = useState(-1)

    const [districtList, setDistrictList] = useState(["--Select a state first--"]);

    const stateRef = useRef();
    const districtRef = useRef();

    const showDistrictsHandler = () => {
        const selectedState = stateRef.current.value;
        if(selectedState !== -1){
            setState(selectedState);
            setDistrictList(DistrictList[selectedState]);
        }else{
            setState(-1);
            setDistrictList(["--Select a state first--"])
        }   
    }

    return (
        <div className="">
            <div className="w-full border-[2px] border-grey px-[30px] bg-white py-[15px] flex items-center justify-between">
            <Link to={'/'}><div className=" flex items-center space-x-3 hover:cursor-pointer">
                <img src="/assets/logo2.png" alt="logo" className="w-[45px] h-[45px]" />
                <p className="text-[32px] font-medium">Organ Mask</p>
            </div></Link>
            </div>
            <div className='mt-[20px] flex flex-col items-center'>
                <p className="text-[42px] font-medium">Donor Registration</p>
                <div className='w-[50%] mt-[30px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col items-start'>
                            <label className=''>First Name</label>
                            <input type="text" placeholder="First name" className="mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]" />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className=''>Last Name</label>
                            <input type="text" placeholder="Last name" className="mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[20px]'>
                        <div className='flex flex-col items-start'>
                            <label className=''>Email</label>
                            <input type="email" placeholder="Email" className="mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]" />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className=''>Contact</label>
                            <input type="text" placeholder="Contact" className="mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]" />
                        </div>
                    </div>                    
                    <div className='flex justify-between items-center mt-[20px]'>
                        <div className='flex flex-col items-start'>
                            <label className=''>Date of Birth</label>
                            <input type="date" placeholder="DOB" className="mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]" />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className=''>Gender</label>
                            <select className='mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]'>
                                <option className=''>--choose your gender--</option>
                                <option className=''>Male</option>
                                <option className=''>Female</option>
                                <option className=''>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[20px]'>
                        <div className='flex flex-col items-start'>
                            <label className=''>Blood type</label>
                            <select className='mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]'>
                                <option className=''>--choose your blood type--</option>
                                <option className=''>AB+</option>
                                <option className=''>AB-</option>
                                <option className=''>A+</option>
                                <option className=''>A-</option>
                                <option className=''>B+</option>
                                <option className=''>B-</option>
                                <option className=''>O+</option>
                                <option className=''>O-</option>
                                <option className=''>Don't know</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className=''>State</label>
                            <select ref={stateRef} className='mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]'>
                                {/* <option value={-1} className=''>--choose your state--</option> */}
                                {
                                    StateList.map((state, index) => {
                                        return <option value={index+1}>{state}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    
                    <div className='flex justify-between items-center mt-[20px]'>
                        <div className='flex flex-col items-start'>
                            <label className=''>District</label>
                            <select ref={districtRef} onClick = {() => showDistrictsHandler()} className='mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] w-[350px]'>
                                {
                                    districtList.map((state, index) => {
                                        return <option>{state}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className=''>Address</label>
                            <input type="text" placeholder="Enter your complete address" className="mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]" />
                        </div>
                    </div>

                    <div className='flex justify-between items-center mt-[20px]'>
                        <div className='flex flex-col items-start'>
                            <label className=''>Medical History</label>
                            <input type="file" placeholder='browse' className='mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] w-[350px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className=''>Organ Donated</label>
                            <select className='mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] min-w-[350px]'>
                                <option className=''>--choose the organ for donation--</option>
                                <option className=''>Liver</option>
                                <option className=''>Kidney</option>
                                <option className=''>Heart</option>
                                <option className=''>Pancreas</option>
                                <option className=''>Lung</option>
                                <option className=''>Bone</option>
                                <option className=''>Heart valve</option>
                                <option className=''>Cornea</option>
                                <option className=''>Small Intestine</option>
                                <option className=''>Bone marrow</option>
                                <option className=''>Eye</option>
                                <option className=''>Uterus</option>
                            </select>
                        </div>
                        {/* <div className='flex flex-col items-start'>
                            <label className=''>ID Proof</label>
                            <input type="file" placeholder='browse' className='mt-[5px] text-[18px] px-[10px] border-[1px] rounded-[5px] border-grey py-[5px] w-[350px]' />
                        </div> */}
                    </div>
                </div>
                <button className='mt-[30px] bg-[#004e98] text-white px-[15px] py-[5px] rounded-[5px] text-center w-[200px] text-[18px] font-medium hover:shadow-xl'>Register</button>
            </div>
        </div>
    );
}

export default Donor;