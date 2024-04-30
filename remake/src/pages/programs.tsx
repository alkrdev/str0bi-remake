import Head from "next/head"
import Link from "next/link"

export default function programs() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>💻</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>💻 Neat Programs I Use</strong></h1>
        <p className="subtext"><Link href="/">Back to hub</Link></p>
        <p className="text-2xl"><strong><br />🎛️ <Link href="/programs/music">Music & Sound Design</Link></strong></p>
        <p className="text-2xl"><strong><br />🎨 <Link href="/programs/design">Art & Graphic Design</Link></strong></p>
        <p className="text-2xl"><strong><br />🛜 <Link href="/programs/systools">Network, Privacy & Security, System Tools, Essential Software</Link></strong></p>
        <p className="text-2xl"><strong><br />🎲 <Link href="/programs/gamedesign">Game Design & Modding</Link></strong></p>
        <p className="text-2xl"><strong><br />🌎 <Link href="/programs/misc">Miscellaneous</Link></strong></p>  
      </main>
    </>
  )
}