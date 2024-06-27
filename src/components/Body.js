import{image} from 'next/image';
export const Body = () => {
    return (
      <div className="w-screen   mx-auto flex justify-between  left-0 text-white">
        <div className="w-1/2  p-4 my-[96px] mx-[80px]">
          <h1 className='text-4xl text-black'>Hi, I’m Tom 👋</h1>
          <h2 className="mt-4 text-black">
            I specialize in full stack development, particularly with React.js and Node.js. My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.
          </h2>
          <div className='flex gap-5 pt-14'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h2>Ulaanbaatar, Mongolia</h2>
</div>
        
        <div className='flex gap-5'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="8" width="8" height="8" rx="4" fill="#10B981"/>
</svg>
<h2>Available for new projects</h2>
        </div>
        <div>
        <img src="/links.png" alt="Profile Picture" className=" w h-auto" />
        </div>
        </div>
        <div className="flex justify-center w-1/2  m-auto mt-8">
          <img src="/Pic.png" alt="Profile Picture" className=" w h-auto" />
        </div>
      </div>
    );
  }