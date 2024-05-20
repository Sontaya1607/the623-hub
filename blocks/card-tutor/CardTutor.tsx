import React from 'react';

export function CardTutor() {
  return (
    <div className="p-3 rounded-2xl bg-stone-100 flex justify-between items-center">
      <div className='flex items-center gap-4'>
        <div className='h-12 w-12 bg-stone-300 rounded-xl flex justify-center items-center'>
          <svg className='h-9 w-9 text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M6 30h20v-5a7.008 7.008 0 0 0-7-7h-6a7.008 7.008 0 0 0-7 7zM9 9a7 7 0 1 0 7-7a7 7 0 0 0-7 7"/></svg>
        </div>

        <div>
          <h6 className='font-semibold text-stone-700'>Kenny Foster</h6>
          <p className='text-xs text-stone-500'>@fosterlive</p>
        </div>
      </div>
      
      <div>
        <button className='bg-white p-[5px] rounded-full shadow-md text-stone-500'>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/></svg>
        </button>
      </div>
    </div>
  );
}
