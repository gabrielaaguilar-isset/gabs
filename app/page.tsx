'use client';
import Image from "next/image";
import "./i18n"; 
import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang:string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <div >
      <main>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <button onClick={() => changeLanguage("es")}>Español</button>
         <button onClick={() => changeLanguage("en")}>English</button>
      <h1>{t('Welcome to React')}</h1>
      </main>
    </div>
  );
}
