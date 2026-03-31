"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";
import {motion} from "framer-motion";

const navItems = [
  {name: "HOME", href: "/"},
  {name: "HOBBY", href: "/hobby"},
  {name: "INTEREST", href: "/interest"},
  {name: "CAREER", href: "/career"},
  {name: "STRENGTH", href: "/strength"},
  {name: "WEAKNESS", href: "/weakness"},
]

export default function Home() {
  const pathname = usePathname();

  return (
      <div className="w-screen h-full p-5">
      <div className="w-full h-full bg-gray-400/50 rounded-4xl p-5 flex">
        {/*左のタブバー*/}
        <div className="h-full w-1/6 bg-gray-300/80 rounded-2xl">
        <div className="mt-5 ml-5 flex flex-col">
           {navItems.map((item) => {
        // 現在のパスとリンク先が一致するか判定
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-md transition  ${
              isActive 
                ? "bg-gray-100/80 text-gray-900 font-alfa-slab-one tracking-wider" // アクティブ時のスタイル
                : "text-gray-900 hover:bg-gray-200 font-patua-one tracking-wide"  // 通常時のスタイル
            }`}
          >
            {item.name}
          </Link>
        );
      })}
        </div>
        </div>

        {/*メインコンテンツ*/}
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
          <div className="w-full h-full p-5 overflow-auto">
          <div className="text-7xl tracking-wide font-alfa-slab-one mt-10">Who am I?</div>

          <div className="w-full h-20"></div>

          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What is this website for?</div>
              <div className="">
                <div className="font-patua-one m-5">
                  This website is created as part of Who am I task. This contains 5 sections.
                </div>

                <div className="m-5 ml-10">
                <Link href="/hobby" className="no-underline hover:text-blue-600 hover:underline transition">
                  <p className="font-patua-one">・Hobby</p>
                </Link>
                <Link href="/interest" className="no-underline hover:text-blue-600 hover:underline transition">
                  <p className="font-patua-one">・Interest</p>
                </Link>
                <Link href="/career" className="no-underline hover:text-blue-600 hover:underline transition">
                  <p className="font-patua-one">・Career</p>
                </Link>
                <Link href="/strength" className="no-underline hover:text-blue-600 hover:underline transition">
                  <p className="font-patua-one">・Strength</p>
                </Link>
                <Link href="/weakness" className="no-underline hover:text-blue-600 hover:underline transition">
                  <p className="font-patua-one">・Weakness</p>
                </Link>
                </div>
                
              </div>
          </div>
          </motion.div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
