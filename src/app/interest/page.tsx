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


export default function InterestPage() {
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
          <div className="text-7xl tracking-wide font-alfa-slab-one mt-10">INTEREST</div>

          <div className="w-full h-20"></div>

          <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
          <div className="w-full h-auto bg-white rounded-2xl border-4 border-slate-800 mb-5">
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What are you interested in?</div>

              <div className="font-patua-one m-5">
                -I’m interested in…<br></br>
                ・English<br></br>
                ・Information Technology (IT)<br></br>
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
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Why are you interested in English?</div>

              <div className="font-patua-one m-5">
                The reason is benefits of skills of speaking English. English is spoken by over 1.5 billion people around the world, which means that English is a significant tool to communicate with other people. English is spoken widely, so it is worth learning English. Also, speaking English can broaden my career options. In Japan, speaking English is an important skill and is assessed highly. Every entrance exam has an English subject. Therefore, I’m interested in English and learning English.
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
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">How good is your English?</div>

              <div className="font-patua-one m-5">
                I’ve had some tests to measure English skill. The results are here. <br></br>
              </div>

              <div className="flex">
              <div className="font-patua-one m-auto">
                <div className = "m-auto w-60">
                  <img src="/EIKEN_Result.png" alt="EIKEN Result" className="object-contain"></img>
                </div>
    
                <div className="text-center m-auto w-100 mt-1">
                  <p>
                    Pre 2nd grade of the EIKEN Test in Practical English Proficiency, which is said able to grasp the outline of everyday topics and convey information and one's own thoughts using basic vocabulary.
                  </p>
                </div>
              </div>
              <div className="font-patua-one m-auto">
                <div className = "m-auto w-65">
                  <img src="/IELTS_Result.jpg" alt="IELTS Result" className="object-contain"></img>
                </div>

                <div className="text-center m-auto w-100 mt-1">
                  <p>
                    Overall 5.5 of IELTS, International English Language Testing System, which is said "Intermediate" level: able to understand and communicate in English in familiar everyday situations.<br></br>
                  </p>
                </div>
              </div>
              </div>
              <div className="font-patua-one m-5">
                <div className = "m-auto w-65">
                  <img src="/TOEFL_Result.jpg" alt="TOEFL Result" className="object-contain"></img>
                </div>

                <p className="text-center w-100 m-auto">
                  Score 840 of TOEFL Junior, which is said able to understand complex sentence structures and vocabulary.<br></br>
                </p>
              </div>
              <div className="font-patua-one m-5">
                <p>
                  In summary, I'm not completely unable to speak English, but I'm not fluent at all.
                </p>
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
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">How do you feel when you speak English?</div>

              <div className="font-patua-one m-5">
                I feel it difficult to speak in English. Especially, expressing my thought and conveying it is difficult for me. I usually cannot find out good expression in English. Also, my listening skill is not good, and often miss what other people say. Looking my results of English test, listening and speaking is my weakness. I feel lack of my English skill when I speak in English.
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
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">Why are you interested in IT?</div>

              <div className="font-patua-one m-5">
                The reason that I’m interested in IT is my curiosity. I want to understand mechanisms of something relates to IT, such as how a computer woks, how an electric car operates, and how an internet works. In modern times, there are many IT-related things around us that we use without understanding how they work. Such things are interesting for me.
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
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What technology are you interested in most?</div>

              <div className="flex" >
                <div className="font-patua-one m-5 mr-0">
                  I’m interested in Machine Learning, including Artificial Intelligence. This is because Machine Learning can solve and automate complex problems at a speed and scale that humans simply can't. I'm fascinated by how they make things possible that humans can't.
                </div>

                <div className="w-130 m-5 ml-0 mt-0">
                    <img src="/AI.jpg" alt="AI" className="object-contain"></img>
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
              <div className="text-4xl font-alfa-slab-one mt-3 ml-3">What have you done so far in the IT field?</div>

              <div className="font-patua-one m-5">
                I’ve learnt C++, a programming language by myself.  I usually play competitive programming, which is like a online game of programming. I participated in the preliminary round of the Japan Olympiad in Informatics, but was eliminated. I also have made something by programming.
              </div>
              
              <div className="flex">
                <div className="font-patua-one m-5 flex justify-center items-center mr-0">
                  <p>
                    For example, I made a Ray Tracing engine, which is a program that simulates the physical behavior of light to generate realistic images that are close to the real world. The image on the right shows the calculation results of a program I created.
                  </p>
                </div>
                
                <div className = "w-200 m-5">
                  <img src="/RayTracing.png" alt="Ray Tracing Engine" className="object-contain"></img>
                </div>
              </div>

              <div className="m-5 flex">
                <div className="font-patua-one mr-5 flex items-center justify-center">
                  <p>
                    I also created this website using programming! Actually, it was my first time creating a website, and I encountered many difficulties. Technically, I used Next.js and Tailwind CSS. The image on the right is a screenshot showing me developing this website.
                  </p>
                </div>

                <div className="w-250">
                  <img src="/Developping_ScreenShot.png" alt="Screen Shot of developping" className="object-contain"></img>
                </div>
              </div>
          </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}