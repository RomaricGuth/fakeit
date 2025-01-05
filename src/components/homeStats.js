import AnimatedCircularProgressBar from "./ui/animated-circular-progress-bar"

export default function HomeStats() {
  const [values, setValues] = useState({
    dailyVisitors: 180,
    conversionRate: 20
  })
  
  return (
    <div className="flex items-center gap-image">
      <AnimatedCircularProgressBar value={180} max={1000} gaugePrimaryColor={'orange'} number={180} description="daily visitors" />
      <AnimatedCircularProgressBar value={20} max={35} gaugePrimaryColor={'green'} number="20%" description="conversion rate" />
    </div>
  )
}