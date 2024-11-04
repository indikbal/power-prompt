'use client';
import { useState } from 'react';
import styles from "./styles/page.module.css";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { BsPlusSquareDotted } from "react-icons/bs";
import { MdChat } from "react-icons/md";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import AIChatInterface from './component/AIChatInterface';
import PromptModal from './component/PromptModal';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');

  const handleGeneratePowerPrompt = () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt first');
      return;
    }
    setError('');
    setIsModalOpen(true);
  };

  const handleGenerateEnhancedPrompt = () => {
    setIsModalOpen(false);
    setShowChat(true);
  };

  const handleEditPrompt = (existingPrompt: string) => {
    setPrompt(existingPrompt);  // Set the existing prompt
    setShowChat(false);         // Hide the chat
    setIsModalOpen(true);       // Show the modal
  };

  return (
    <>      

      <aside className="fixed top-0 left-0 w-[60px] h-full bg-black">
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center pt-5 pb-5 justify-between h-full items-center" >
            <ul className="flex flex-col gap-5">
              <li className="mb-10 opacity-30">
                <BsLayoutTextWindowReverse className="text-white text-2xl" />
              </li>
              <li>
                <BsPlusSquareDotted className="text-white text-2xl" />
              </li>
              <li>
                <MdChat className="text-white text-2xl" />
              </li>
            </ul>
            <div className="flex flex-col">
           <ul>
           <li>
                <Link href="/login">
                  <AccountCircleOutlinedIcon className="text-white text-2xl" />
                </Link>
              </li>
           </ul>
            </div>
          </div>
        </div>
      </aside>
      <div className="w-[calc(100%-60px)] h-full ml-[60px] bg-slate-900">
        <div className="flex flex-col">
          <div className="flex flex-row">
          <div
              className={`${styles.nkBanner} ${styles.nkBannerLanding} overflow-hidden w-full`}
            >
              <div className={`${styles.nkMask} ${styles.shape}`}></div>
              <div className={`${styles.nkMask} ${styles.blur}`}></div>
              <div className="h-[calc(100vh-0px)] flex flex-col justify-center ">
                <div className="container mx-auto">
                  <div className="flex flex-wrap justify-center mb-10">
                    <div className="lg:w-10/12">
                      <div className="pb-5 lg:pb-7 text-center">
                        <div className="mb-10">
                          <h4 className="text-4xl font-normal mb-3 text-white">
                            We Make your prompt more powerful
                          </h4>
                          <p className="text-white opacity-50">
                            We make your prompt more powerful by adding more context to it.
                          </p>
                        </div>
                        {!showChat && ( 
                       <div className="flex flex-row justify-center">
                        <input 
                          type="text" 
                          value={prompt}
                          onChange={(e) => {
                            setPrompt(e.target.value);
                            setError('');
                          }}
                          placeholder="Type here your prompt.." 
                          className={`w-6/12 py-3 px-4 rounded-full border ${
                            error ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:border-emerald-500`}
                        />
                        <button 
                           onClick={handleGeneratePowerPrompt}
                          className="bg-black text-white px-4 py-3 rounded-full ml-3 text-sm py-2 px-7 text-emerald-500 font-semibold hover:shadow-lg hover:shadow-emerald-500 hover:transition-all duration-300 flex flex-row gap-2 items-center"
                        >
                          <BsStars className="text-xl" />
                          Generate Power Prompt
                        </button>
                       </div>
                        )}
                        {showChat && <AIChatInterface onClose={() => setShowChat(false)} initialPrompt={prompt} 
                         onEditPrompt={handleEditPrompt} /> }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      <PromptModal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         onGenerate={handleGenerateEnhancedPrompt}
         initialPrompt={prompt}
      />
      </div>

      
    </>
  );
}
