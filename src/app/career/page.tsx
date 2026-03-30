"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";

const navItems = [
  {name: "HOME", href: "/"},
  {name: "HOBBY", href: "/hobby"},
  {name: "INTEREST", href: "/interest"},
  {name: "CAREER", href: "/career"},
  {name: "STRENGTH", href: "/strength"},
  {name: "WEAKNESS", href: "/weakness"},
]

export default function CareerPage() {
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
        <div className="w-full h-full p-5 bg-white rounded-2xl overflow-auto">
          <div className="text-7xl tracking-wide font-alfa-slab-one mt-10">CAREER</div>

          <div className="w-full h-20"></div>

          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What career do you want to do in the future?</div>
              <div className="flex">
                <div className="font-patua-one m-5">
                  -I want to do…<br></br>
                  ・Programmer<br></br>
                  ・Data Scientist<br></br>
                  ・Security System Technician<br></br>
                </div>

                
              </div>
          </div>

          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What does your personality quiz result say?</div>

              <div className="font-patua-one flex">
                <div className="w-200 m-5">
                My personality type is Craftsman, which is logical, adaptable, and independent. Its strengths include flexibility, strong observation skills, and the ability to stay calm under pressure. However, Craftsmen may struggle with long-term planning, dislike verbal communication, and sometimes appear insensitive to others.

Because they are practical and good at problem-solving, Craftsmen are suited to careers such as computer engineer, software developer, security system technician, police officer, criminologist, mechanic, entrepreneur, and medical imaging technologist.
                </div>
                <div className="w-50 m-5 ml-0">
                  <img src="/CareerPersonalityQuizResult.png" alt="Multi Intelligence Quiz Result" className="object-contain"></img>
                </div>
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Why do you want to become a programmer?</div>

              <div className="flex">
                <div className="font-patua-one m-5 mb-0 mr-0">
                  This is because I like programming and am good at programming. I usually spend my spare time on programming.
                </div>
                <Link href="/hobby#Why_do_you_like_programming?" className="mt-6 ml-1 font-patua-one no-underline hover:text-blue-600 hover:underline transition text-sm">
                  Click here to My Hobby
                </Link>
              </div>

              <div className="font-patua-one m-5 mt-0 mb-0">
                I usually spend my spare time on programming. 
              </div>

              <div className="">
                <div className="font-patua-one m-5 mt-0">
                  In addition, according to the result of Multi Intelligence Quiz, I have strong logic smart, which is required for programmer.
                </div>

                <div className="w-100 mb-5 flex m-auto">
                  <div className="m-5">
                    <img src="/MultiIntelligenceQUizResult_2.png" alt="Multi Intelligence Quiz Result" className="object-contain"></img>
                  </div>
                </div>
              </div>
              
          </div>

          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Why do you want to become a data scientist?</div>

              <div className="font-patua-one m-5">
                This is because I’m interested in this field, data science. Also, logical smart is required for this job, and it’s also the reason that I want to do this job. In addition, the average salary of data scientist is high, and it's also the reason I want to do data scientist.
              </div>
              <div className="w-200 m-auto">
                <img src="/DataScientist.png" alt="Multi Intelligence Quiz Result" className="object-contain"></img>
              </div>
          </div>

          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Why do you want to become a security system technician?</div>

              <div className="font-patua-one m-5">
                The reason that I want to become a security system technician is that I’m also interested in security. Moreover, the result of Career Personality Quiz says that this job is recommended for me.
              </div>

              <div className="flex items-center justify-center">
                  <img src="/CareerPersonalityQuizResult_ITjobs.png" alt="Career Personality Quiz Result IT jobs" className="object-contain"></img>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}