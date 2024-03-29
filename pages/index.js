import Head from "next/head";
import Link from "next/link";
import Social from "../components/Social";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matt Robitaille | Maine Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden">
        {/* Background */}
        <div className="relative w-full">
          {/* <div className="sun h-20 w-20 z-20 rounded-full absolute left-12 top-12 bg-orange-600 shadow-orange-700"></div> */}
          <div className="h-screen-1/2 bg-slate-100 relative z-10 text-center">
            <h1 className="site-name absolute text-center w-full top-full left-0 transform -translate-y-1/2 uppercase text-5xl font-black text-slate-600 hover:z-30 hover:text-slate-900 focus-visible:text-slate-900 transition-all">
              <Link href="/">
                <a>Matt Robitaille</a>
              </Link>
            </h1>
          </div>
          <div className="h-screen-1/2 relative bg-amber-500 z-0 pt-12 flex justify-center px-4">
            <Social />
          </div>
          <div className="h-[clamp(3rem,_2vw,_6rem)] absolute bg-gradient-to-b pointer-events-none from-amber-500 to-transparent opacity-50 top-1/2 inset-x-0 z-20"></div>
        </div>
      </main>
    </div>
  );
}
