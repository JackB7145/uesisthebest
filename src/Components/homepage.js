import Navbar from "./navbar";
import person from "../Assets/people.jpg";
import eng from '../Assets/eng.jpg';
import { FaDiscord, FaInstagram, FaFacebookF } from "react-icons/fa";

const homepage =() =>{
    return(
    <div className="h-screen w-[100%]">
      <Navbar/>
      <br />
      <div className="bg-[url('./Assets/bgPhoto.jpg')] bg-cover w-[100%] h-1/2">
        <div className="z-100 animate-[flyFromTop_1.5s] h-[100%] w-[100%] bg-[grey] bg-opacity-[40%] flex z-10">
          <div className="z-1 justify-left w-[35%] bg-white h-[80%] ml-[10%] rounded-xl my-auto opacity-[60%] flex-col">
              <h1 className="text-[40px] text-center justify-center mt-[15%]">UES Store</h1>
              <p className="pt-1 px-[10%] text-[23px] my-[15%]">Curated gifts tailored for engineers: from novelty gadgets to practical tools and inspiring mementos.</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[50%] bg-white flex opacity-1 animate-[fadeIn_2s] mx-auto">
        <div className="w-[60%] flex animate-[flyFromBottom_1s]">
            <img className="rounded-xl h-[80%] my-auto mx-auto" src={person}></img>
        </div>
        <div className="flex w-[40%] rounded-xl h-[70%] my-auto animate-[flyFromBottom_1s]">
            <p className="mx-auto text-[20px] my-auto">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor</p>
        </div>
      </div>

      <div className="w-[90%] h-[50%] bg-white flex opacity-1 animate-[fadeIn_2s] mx-auto">
        <div className="w-[60%] flex animate-[flyFromBottom_1s]">
            <img className="w-[70%] my-auto mx-auto" src={eng}></img>
        </div>
        <div className="flex-col w-[40%] rounded-xl h-[40%] my-auto mx-auto animate-[flyFromBottom_1s]">
            <p className="text-[20px]">General Inquiries</p>
            <p className="text-[20px] my-[20px]">Email: <span className="text-[grey]">westernues.president@gmail.com</span></p>
            <p className="text-[20px]"><u>Promotion/Social Media Inquiries:</u> </p>
            <p className="text-[20px] my-[20px]">Email: <span className="text-[grey]">westernues.comms@gmail.com</span></p>
        </div>
      </div>
      
      <div className="w-[90%] h-[50%] bg-white opacity-1 animate-[fadeIn_2s] mx-auto">
        <div className="rounded-xl bg-[#82529d] w-[70%] h-[80%] my-auto mx-auto">
            <h1 className="px-auto pt-[5%] text-white text-[30px] text-center">What should we add?</h1>

            <input id="input1" className="flex rounded-sm ml-[5%] my-[20px]" placeholder=" Email"></input>

            <div className="flex">
                    <input id="input2" className="flex rounded-sm ml-[5%] pr-[20%] pb-40" placeholder=" Suggestions"></input>
                    <div className="w-50 mx-auto my-auto">
                        <button className=" rounded-lg mx-auto text-white p-[5px]" onClick={(event) => { document.getElementById("input1").value = ""; document.getElementById("input2").value = ""}}>Submit</button>
                    </div>
            </div>
        </div>
      </div>

      <div className="w-[90%] h-[30%] bg-[#282829] flex-col opacity-1 animate-[fadeIn_2s] mx-auto">
        <div className="flex-col w-[100%] h-[80%] pt-20">
            <div className="w-[100%] h-[30%] flex">
                <h1 className="text-white mx-auto text-[40px] my-auto">Western UES</h1>
            </div>
            <div className="flex text-white justify-center h-[100%]] pt-10">
                <FaDiscord className="size-[40px] mx-7"/>
                <FaInstagram className="size-[40px] mx-7"/>
                <FaFacebookF className="size-[40px] mx-7"/>
            </div>
        </div>
      </div>
    </div>
  );
}
export default homepage;