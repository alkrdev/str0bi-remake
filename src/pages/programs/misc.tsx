import Head from "next/head"
import Link from "next/link"

export default function misc() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🌎</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>🌎 Miscellaneous</strong></h1>
        <p className="subtext"><Link href="/programs">Back</Link></p>~

        <p className="text-2xl"><strong><br /><Link href="https://www.equaldex.com/">Equaldex</Link></strong></p>
        <p className="subtext">{"Stay informed on queer rights issues around the world and check what's happening in certain countries."}</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.phonesized.com/">Phonesized</Link></strong></p>
        <p className="subtext">Compare phone sizes to make a more informed purchase decision.</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.carsized.com/">Carsized</Link></strong></p>
        <p className="subtext">Compare car sizes to make a more informed purchase decision.</p>
      </main>
    </>
  )
}