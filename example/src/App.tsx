import React from 'react'

import {InputComponent} from 'react-library-components'
import 'react-library-components/dist/index.css'

const App = () => {
  return (
    <InputComponent 
      classes="border  h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      placeholder="react input placeholder"
    />
  )
}

export default App
