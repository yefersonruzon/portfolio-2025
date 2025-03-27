export default function Search() {
  return (
    <main className='w-full flex flex-col items-center justify-center h-full'>
        <div className="border border-details flex rounded-md w-lg">
                <svg className={`w-[1.2rem] fill-[#9099AC] -mr-5 px-0.5 translate-x-2 `} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8333 4.375C8.16192 4.375 4.375 8.16192 4.375 12.8333C4.375 17.5047 8.16192 21.2917 12.8333 21.2917C17.5047 21.2917 21.2917 17.5047 21.2917 12.8333C21.2917 8.16192 17.5047 4.375 12.8333 4.375ZM2.625 12.8333C2.625 7.19543 7.19543 2.625 12.8333 2.625C18.4712 2.625 23.0417 7.19543 23.0417 12.8333C23.0417 15.3373 22.1402 17.6306 20.644 19.4066L25.1187 23.8813C25.4604 24.223 25.4604 24.777 25.1187 25.1187C24.777 25.4604 24.223 25.4604 23.8813 25.1187L19.4066 20.644C17.6306 22.1402 15.3373 23.0417 12.8333 23.0417C7.19543 23.0417 2.625 18.4712 2.625 12.8333Z"/>
                </svg>
            <input type="text" placeholder="Search" className="w-full py-2 pl-9 focus:outline-0" />
        </div>
        
    </main>
  )
}
