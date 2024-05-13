export function CardYoutubeMusic() {
  return (
    <div className="w-[240px]">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/RTqIWNo1nn69jxxZjrZgS3DTJ1SZzcVeuLgWtIkzG1XmeRSeGtmJcp60THK9RQlAp-RysgR-wBUU-2H4=w226-h226-l90-rj"
          alt=""
          className="h-full w-full object-cover"  
        />

        <div className="absolute inset-0 flex justify-center items-center bg-transparent transition-colors hover:bg-black/55 hover:cursor-pointer">
          <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28"/>
          </svg>
        </div>
      </div>
      <h6 className="mt-4 text-lg font-semibold">ดวงตะวัน ( The Sun ) (Live Session)</h6>
      <p className="text-base">Song • Safeplanet</p>
    </div>
  ); 
}
