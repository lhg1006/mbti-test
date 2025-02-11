export default function ProgressBar({ progress = 10 }: { progress: number }) {
  return (
    <div 
      role="progressbar" 
      aria-valuemin={0} 
      aria-valuemax={100} 
      className="relative h-4 w-full overflow-hidden rounded-full bg-violet-100 mb-6 border border-purple-200"
    >
      <div 
        className="h-full w-full flex-1 transition-all duration-500 ease-in-out"
        style={{
          transform: `translateX(-${100 - progress}%)`,
          background: 'linear-gradient(90deg, #8B5CF6 0%, #A78BFA 100%)'
        }}
      />
    </div>
  )
} 