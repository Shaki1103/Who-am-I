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

export default function StrengthPage() {
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
          <div className="text-7xl tracking-wide font-alfa-slab-one mt-10">STRENGTH</div>

          <div className="w-full h-20"></div>

          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What is your strength?</div>
              <div className="flex">
                <div className="font-patua-one m-5">
                  -My strengths are…<br></br>
                  ・Flexible<br></br>
                  ・Adaptable<br></br>
                  ・Realistic Attitude<br></br>
                  ・Logic Smart<br></br>
                  ・Self Smart<br></br>
                </div>

                <div className="w-50 m-5">
                  <img src="/MultiIntelligenceQuizResult_2.png" alt="Multi Intelligence Quiz" className="object-contain"></img>
                </div>
                
                <div className="w-50 m-5">
                  <img src="/CareerPersonalityQuizResult.png" alt="Career Personality Quiz" className="object-contain"></img>
                </div>
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">When do you feel your flexible/adaptable?</div>

              <div className="font-patua-one m-5">
                I feel my flexible and adaptable when I face serious change. When serious changes happen to me, I usually try to accept it by changing my perspective for it. I faced so many changes in Australia, for example, I wash my clothes once a week, and taking shower over 5 minutes is now allowed in my homestay. Speaking honestly, it’s unbelievable for me, but now I’m used to such a change. I think it shows my flexible and adaptable.
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">When do you feel your realistic attitude?</div>

              <div className="font-patua-one m-5">
                I feel my realistic attitude when I face problems. I usually try to solve problems from a realistic aspect. I usually think about things based on numbers and data. ***EXAMPLE***
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Do you like something logical?</div>

              <div className="font-patua-one m-5">
                Yes, I do like logical things such as mathematics and programming and I think I’m good at logical things. 
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Do you think that you have self smart?</div>

              <div className="font-patua-one m-5">
                To be honest, I don’t feel that I have good self smart so was surprised at this result. I sometimes try to think about myself when I made a mistake or get emotional. The more I try to think, the less I understand myself. 
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What strength do you most want to develop?</div>

              <div className="font-patua-one m-5">
                The strength that I most want to develop is self smart. This is because understanding myself and dealing with myself well are important for living happily.
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}