import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full border-[2px] border-grey px-[30px] bg-white py-[15px] flex items-center justify-between">
            <Link to={'/'}><div className=" flex items-center space-x-3 hover:cursor-pointer">
                <img src="/assets/logo2.png" alt="logo" className="w-[45px] h-[45px]" />
                <p className="text-[32px] font-medium">Organ Mask</p>
            </div></Link>
            </div>

            {/* <div className="flex items-center justify-center px-[30px] py-[30px] mt-[150px]">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[42px] font-medium">Login</p>
                    <div className="space-y-10 mt-[20px]">
                        <div className="">
                            <input type="text" placeholder="Email" className="text-[18px] px-[5px] border-b-[1px] border-black min-w-[400px]" />
                        </div>
                        <div className="">
                            <input type="password" placeholder="Password" className="text-[18px] px-[5px] border-b-[1px] border-black min-w-[400px]" />
                        </div>
                    </div>
                    <button className="bg-[#004e98] rounded-[5px] text-white font-medium px-[15px] w-[100px] py-[5px] mt-[30px]">Login</button>
                    <p className="mt-[20px] text-[#023e8a] font-medium hover:font-bold hover:cursor-pointer">Forgot password?</p>
                    <p><span className="text-[#023e8a] font-medium hover:font-bold hover:cursor-pointer">Signup</span> if you have not registered before!</p>
                </div>
            </div> */}

            <div className="flex items-center w-[50%] justify-between mt-[150px] space-x-10">
                <Link to={'/patient/donor'}><div className="flex flex-col items-center justify-center hover:cursor-pointer bg-[#adb5bd] p-[40px] rounded-[10px] hover:shadow-xl">
                    <img src="/assets/donate.png" alt="donate" className="w-[200px] rounded-[10px]" />
                    <p className="mt-[10px] text-[30px] text-white font-bold">Donate an organ</p>
                </div></Link>
                <Link to={'/patient/recipient'}><div className="flex flex-col items-center justify-center hover:cursor-pointer bg-[#adb5bd] p-[40px] rounded-[10px] hover:shadow-xl">
                    <img src="/assets/receive.png" alt="receive" className="w-[200px] rounded-[10px]" />
                    <p className="mt-[10px] text-[30px] text-white font-bold">Request an organ</p>
                </div></Link>
            </div>
            {/* <div className="w-[50%] mt-[40px] flex items-center justify-center">
                <p className="text-[18px]"><Link to={'/patient/login'}><span className="mt-[20px] text-[#023e8a] font-medium hover:font-bold hover:cursor-pointer">Login</span></Link> as a registered patient?</p>
            </div> */}
        </div>
    );
}

export default Login;