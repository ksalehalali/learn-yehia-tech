"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { type } from 'os'
import Header from '@/comopnents/Header'
import Description from '@/comopnents/description'
import { useMemo, useRef, useState } from 'react'

const claculateIncome = ()=>{
  let number = 12;

  return number;
}

export default function Home() {
   const [counter, setcounter] = useState(0)
   const inputRef = useRef<HTMLInputElement>(null);

   const [shouldCalculate,setShouldCalculate] = useState(false);
   const income = useMemo(()=> claculateIncome(),[shouldCalculate]) 



   function handleClick(){
    setcounter(counter+1)
    if(counter ===5){
      setShouldCalculate(true);
      console.log("income is:",income);

    }

  if(inputRef.current){
    inputRef.current.focus();
  }
  console.log(inputRef.current?.value)
   }

   const handleChange =(e: { target: { value: any; }; })=>{
    console.log(e.target.value)
   }
  return (
    <main >
      <div>Counter: {counter}</div>
      <div>Income: {income}</div>

      <button onClick={handleClick}>click to increment</button>

      <input ref={inputRef} onChange={handleChange}/>
      {/* <Header text="Hello World 2" textSub='------------'/>

      <Description description='Desc Desc Desc......'/> */}
    </main>
  )
}








  