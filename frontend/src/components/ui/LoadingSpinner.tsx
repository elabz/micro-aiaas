import { Loader2 } from "lucide-react"

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  )
}

export default LoadingSpinner
