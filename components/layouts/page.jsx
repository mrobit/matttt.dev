import Head from "next/head";

export default function Page({ children }) {
  return (
    <div>
      <Head>
        <title>Matt Robitaille | Maine Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen p-8 overflow-hidden">
        <div className="absolute inset-0 top-0 z-50 w-full h-4 border-b shadow border-amber-700 bg-gradient-to-r from-slate-900 to-slate-200">
          <div className="absolute inset-y-0 left-0 w-full h-full opacity-75 bg-amber-600 "></div>
          <div className="absolute inset-y-0 right-0 w-2/3 h-full opacity-75 bg-amber-500 "></div>
          <div className="absolute inset-y-0 right-0 w-1/3 h-full opacity-75 bg-amber-400"></div>
        </div>

        {/* Background */}
        {children}
      </main>
    </div>
  );
}