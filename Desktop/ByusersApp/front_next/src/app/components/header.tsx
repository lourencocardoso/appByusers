import Image from 'next/image'

export default function Header() {
   return(
    <>
    <header className='flex justify-around items-center w-full h-35 shadow-md bg-white'>
      <h1 className='text-orange-400 text-2xl font-bold'>.ByUsers</h1>
    <Image 
      id='img'
      src="logo.svg"
      alt="Landscape picture"
      width={90}
      height={90}
      className='absolute'
    />
    <div className="flex items-center space-x-2 text-base">
  </div>
  <div className='mt-5'>
  <div className="mt-3 flex -space-x-2 overflow-hidden ">
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="lore.jpg" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  </div>
  <div className="mt-3 text-sm font-medium">
    <a href="#" className="text-orange-500">+ 198 users</a>
  </div>
  </div>
    </header>
    </>
   )
}