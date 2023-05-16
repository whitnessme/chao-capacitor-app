import NavBar from "@/components/NavBar";
import ThemeForm from "@/components/ThemeForm";
import { themeSelector } from "@/store/state";
import Link from "next/link";
import { useState } from "react";
import { useRecoilValue } from "recoil";


export default function Index() {
  const theme = useRecoilValue(themeSelector);
  const [showThemeForm, setShowThemeForm] = useState(false);

  return (
    <div className="w-full flex-1">
      <h1>Chao App</h1>
      <p>{theme}</p>
    </div>
  )
}
