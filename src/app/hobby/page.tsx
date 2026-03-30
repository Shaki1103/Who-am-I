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

export default function HobbyPage() {
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
          <div className="text-7xl tracking-wide font-alfa-slab-one mt-10">HOBBY</div>

          <div className="w-full h-20"></div>

          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What is your hobby?</div>

              <div className="font-patua-one m-5">
                -My hobbies are…<br></br>
                ・Programming<br></br>
                ・Stationary<br></br>
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5" id="Why_do_you_like_programming?">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Why do you like programming?</div>

              <div className="font-patua-one m-5">
                The reason that I like programming is that it is useful. Computers can do things that humans cannot do. For example, human cannot calculate pi to 100 million digits, but a computer can do in 100 seconds. Programming makes so many things possible. This is the biggest advantage of programming, and what I’m attracted in.
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What did inspire you to start programming, and when?</div>

              <div className = "flex">
                <div className="font-patua-one m-5 flex items-center justify-center h-50">
                  <p>I start learning programming about 6 years ago. I watched a tutorial video of programming on YouTube and have been interested in it. In the video, a man shows a basic grammar of Python, a simple programming language. This video made me known of programming.
                  </p>
                </div>

                <div className = "m-5">
                  <iframe width="448" height="252" src="https://www.youtube.com/embed/Y3WEQDSaQ_E?si=558GncencJByTNld" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">How does programming impact you now?</div>
              

              <div className="flex">
                <div className="font-patua-one m-5 flex items-center justify-center h-50">
                  <p>
                    Programming become a daily habit now. I usually watch information about programming and technologies. I also play competitive programming for about 1 hour everyday. Every weekend, I participate contests of competitive programming. Actually, I'm in the top 5% of players. Through learning it, I’ve developed my mathematical intelligence and ability of logical thinking. Thus, programming improve my such abilities, and now I’m keen on programming.
                  </p>
                </div>
                <div className="w-500 m-5">
                  <img src="/AtCoder_Acount.png" alt="Competitive Programming" className="object-contain"></img>
                </div>

              </div>
              
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Why do you like stationary?</div>

              <div className="font-patua-one m-5">
                This is because stationary is one of the most familiar tools for students, and it has charm. Even though digitalization is processed, students come into contact with paper and write with stationery on a daily basis. Stationary is still familiar and close tool for students. Some stationary have useful function and cool design.
              </div>

              <div className="">

                <div className="w-100 m-5 mx-auto">
                  <img src="/Romeo_No3.png" alt="Romeo No.3" className="object-contain"></img>
                </div>
                <div className="font-patua-one m-5 text-center">
                  <p className="w-160 mx-auto">
                   This ballpoint pen is one of my favorite stationary.
                  Each pen has a unique marbled pattern, and its carefully calculated weight balance ensures a smooth writing experience.
                  </p>
                </div>
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What did inspire you to collect stationary, and when?</div>

              <div className="flex">
            
                <div className="font-patua-one m-5 flex items-center justify-center h-50">
                  <p>
                   About 3 years ago, my friend became absorbed in stationary, and influenced by him, I also became absorbed in stationary. The trigger he and I became interested in stationary is a YouTube channel that introduces stationary, “Seaser Stationary”. It is a channel that introduce stationary. This channel is famous among teenagers in Japan.
                  </p>
                </div>

                <div className="w-500 m-5">
                  <Link href="https://www.youtube.com/channel/UCquKQ87U-_9WNFwjJfCJzgA" className="no-underline hover:text-blue-600 hover:underline transition">
                    <p className="text-center font-patua-one">LINK TO THE CHANNEL</p>
                  </Link>
                  <img src="/SeaserStationary_Channel.png" alt="SeaserStationary" className="object-contain"></img>
                </div>
              </div>
          </div>
          
          <div className="w-full h-auto bg-white rounded-2xl border mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">How does stationary impact you now?</div>

              <div className="font-patua-one m-5">
                Stationery has had a significant impact on my current study habits and way of thinking. Choosing easy-to-use pens and notebooks has increased my motivation to study and allowed me to concentrate better on my learning. I also feel that by improving my note-taking and organization methods, I have developed the ability to summarize information clearly. Furthermore, the process of choosing stationery has fostered the habit of considering tools that suit me. In this way, stationery is not merely a tool, but an important element that shapes my learning style and way of thinking.
              </div>
          </div>


          
        </div>
      </div>
    </div>
  )
}