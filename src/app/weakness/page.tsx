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

export default function WeaknessPage() {
  const pathname = usePathname();

  return (
    <div className="w-screen h-full p-5">
      <div className="w-full h-full bg-gray-400/50 rounded-4xl p-5 flex">
        {/*左のタブバー*/}
        <div className="h-full w-1/6 bg-gray-300/80 rounded-2xl">
        <div className="mt-5 flex flex-col ml-5">
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
          <div className="text-7xl tracking-wide font-alfa-slab-one mt-10">WEAKNESS</div>

          <div className="w-full h-20"></div>

          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What is your weakness?</div>

              <div className="flex">
              <div className="font-patua-one m-5">
                -My weaknesses are…<br></br>
                ・Disliking verbal communication<br></br>
                ・Being insensitive to others<br></br>
                ・Less Nature Smart<br></br>
                ・Less Music Smart<br></br>
                ・Less Body Smart<br></br>
              </div>

              <div className="w-50 m-5">
                <img src="/MultiIntelligenceQuizResult_2.png" alt="Multi Intelligence Quiz" className="object-contain"></img>
              </div>
                
              <div className="w-50 m-5">
                <img src="/CareerPersonalityQuizResult.png" alt="Career Personality Quiz" className="object-contain"></img>
              </div>
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">When do you feel your disliking verbal communication?</div>

              <div className="font-patua-one m-5">
                I feel that I'm not very good at verbal communication when speaking in front of others. Especially when I have to speak in front of a large group of people, I get nervous and sometimes can't put my thoughts into words properly. Even when I have something I want to say, I get flustered or stumble over my words and can't speak as I intended. I also sometimes find it difficult to express my emotions in words. In particular, when I'm angry or sad, I can't calmly explain my feelings and can't communicate them well to others. Therefore, I want to be able to calmly express my thoughts and feelings in words more effectively.
              </div>
          </div>

          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">When do you become insensitive to others?</div>

              <div className="font-patua-one m-5">
                I sometimes prioritize my feeling and convenience, when I become insensitive to others. Actually, as part of my social studies class, I was given an assignment to create a video introducing great figures in the economics field. However, I wasn't keen on it and didn't cooperate with the work at all. I actually regret my action now. It’s a clear example of my insensitivity to others. 
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Do you have interest for the nature?</div>

              <div className="font-patua-one m-5">
                I’m not completely uninterested in nature, but I wouldn’t say I’m very interested either. I actually took a personality test at school (Unfortunately, I don't have the results paper now), and the score for the environmental awareness item is 0, which means I have no awareness for the environment.  
              </div>
          </div>

          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Are you good at music?</div>

              <div className="font-patua-one m-5">
                No, I am bad at music. My music grade is always not good. At the song test of music class, the pitch was so off that the teacher had to smile wryly. Thus, I have no talent of music and often feel my less music smart.
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Do you exercise regularly?</div>

              <div className="font-patua-one m-5">
                No, I don’t exercise regularly. Actually, my P.E. grade is always bad as well as music. Especially, I’m not good at ball game. I actually lost all games in a table tennis lesson. Also, I lost most games in a basketball class too. However, I’m good at running, especially, endurance running. Overall, I’m not good at exercising and don’t think I have body smart.
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What weakness do you most want to overcome?</div>

              <div className="font-patua-one m-5">
                I am very keen to overcome my weakness in verbal communication. This is because I believe that communication skills are extremely important in the workplace. At school and in the workplace, there are many situations where you need to cooperate with many people to accomplish things and convey your own thoughts to others. In such situations, I think it is very important to be able to clearly explain your opinions and thoughts in words. Furthermore, communication skills are indispensable for building good relationships. Therefore, I would like to overcome my aversion to verbal communication by gradually increasing opportunities to talk with people and practicing expressing my thoughts in words.
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}