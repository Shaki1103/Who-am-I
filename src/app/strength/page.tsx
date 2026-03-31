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
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
          <div className="w-full h-full p-5 overflow-auto">
          <div className="text-7xl tracking-wide font-alfa-slab-one mt-10">STRENGTH</div>

          <div className="w-full h-20"></div>

          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800 mb-5">
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800 mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">When do you feel your flexible/adaptable?</div>

              <div className="font-patua-one m-5">
                I feel my flexible and adaptable when I face serious change. When serious changes happen to me, I usually try to accept it by changing my perspective for it. I faced so many changes in Australia, for example, I wash my clothes once a week, and taking shower over 5 minutes is now allowed in my homestay. Speaking honestly, it’s unbelievable for me, but now I’m used to such a change. I think it shows my flexible and adaptable.
              </div>
          </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800 mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">When do you feel your realistic attitude?</div>

              <div className="font-patua-one m-5">
                When I face a problem, I strongly feel the importance of being realistic. I always try to think about solutions from a realistic perspective rather than judging things solely on emotion. For example, when planning my test preparation, I consider how much time I should spend on each subject based on the remaining study time and past score data. I plan to allocate more time to subjects I struggle with or where my scores are stagnating, and study my strong subjects efficiently with the minimum amount of time.
              </div>
          </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800 mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Do you like something logical?</div>

              <div className="font-patua-one m-5">
                Yes, I really like logical thinking. I'm especially interested in things that require systematic thinking, like mathematics and programming. I feel good at organizing things in a sequential manner and considering cause and effect, and I get a great sense of accomplishment when I find a solution. I also believe that logical thinking is useful in studying and in daily life, and I feel that logical thinking is essential for solving problems efficiently.
              </div>
          </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800 mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Do you think that you have self smart?</div>

              <div className="font-patua-one m-5">
                To be honest, I was a little surprised by the results because I didn't think I was very good at self-understanding. Sometimes, when I make a mistake or get emotional, I try to think about myself. However, the more I think about it, the more I can't organize my feelings and thoughts properly, and sometimes I end up not understanding myself at all. Even when I try to understand the reasons behind my actions and emotions, I often don't get the answers I want, and sometimes I get a little confused. Nevertheless, I believe it's important to try to understand myself, so I'm trying to get to know myself little by little.
              </div>
          </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800 mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What strength do you most want to develop?</div>

              <div className="font-patua-one m-5">
                The strength I most want to develop is self smart. This refers to the ability to understand oneself well and to effectively deal with one's own emotions and thoughts. When you understand yourself, it becomes easier to control your emotions and to respond calmly to stress and difficult situations. Also, by understanding your strengths and weaknesses, you can set goals and approach things in a way that suits you. I believe that understanding and being able to manage myself well is very important for living a happier and more fulfilling life. Therefore, I want to develop this ability little by little.
              </div>
          </div>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}