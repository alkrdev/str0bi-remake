import Head from "next/head"
import Link from "next/link"

export default function music() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🎸</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>🎸 My Music</strong></h1>
        <p className="subtext"><Link href="/">Back to hub</Link></p>
      
        <p className="text-2xl"><strong><br />🥁 <Link href="https://dotlua.bandcamp.com/">Bandcamp</Link></strong></p>

        <p className="text-2xl"><strong><br />☁️ <Link href="https://soundcloud.com/dot_lua">SoundCloud</Link></strong></p>

        <p className="text-2xl"><strong><br />📡 <Link href="https://tidal.com/browse/artist/36667895">Tidal</Link></strong></p>

        <p className="text-2xl"><strong><br />📶 <Link href="https://open.spotify.com/artist/32vWQqlvkGf2pGepUQwCJb?si=a97fc4c41f934e2f">Spotify</Link></strong></p>

        <p className="text-2xl"><strong><br />🍎 <Link href="https://music.apple.com/us/artist/dotlua/1721319453">Apple Music</Link></strong></p>

        <p className="text-2xl"><strong><br />▶️ <Link href="https://music.youtube.com/channel/UC7Y6SQLSYmCSMvFH8bbiKyw">Youtube Music</Link></strong></p>

        
      </main>
    </>
  )
}





 
