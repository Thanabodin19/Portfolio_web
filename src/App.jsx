import './App.css'
import Left_Sec from './sections/Left'
import Right_Sec from './sections/Right'

function App() {

  return (
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <Left_Sec />
      <Right_Sec />
    </div>
  )
}

export default App
