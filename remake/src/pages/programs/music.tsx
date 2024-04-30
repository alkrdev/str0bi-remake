import Head from "next/head"
import Link from "next/link"

export default function music() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🎛️</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>🎛️ Music & Sound Design</strong></h1>
        <p className="subtext"><Link href="/programs">Back</Link></p>

        <p className="text-2xl"><strong><br /><Link href="https://www.bitwig.com/">Bitwig Studio</Link></strong></p>
        <p className="subtext">Better and more affortable DAW. Replaces Ableton easily, made by former Ableton employees and private.</p>

        <p className="text-2xl"><strong><br /><Link href="https://tytel.org/helm/">Helm</Link></strong></p>
        <p className="subtext">Free and powerful Serum alternative. My main synth plugin for designing sounds.</p>

        <p className="text-2xl"><strong><br /><Link href="https://vital.audio/">Vital</Link></strong></p>
        <p className="subtext">{"Vital has a larger community than Helm and has tons of presets in Splice, but it's not totally free."}</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.mp3tag.de/en/">Mp3tag</Link></strong></p>
        <p className="subtext">{"Change songs' titles, albums, artists, covers, etc. for better organization of your offline catalog."}</p>

        <p className="text-2xl"><strong><br /><Link href="https://radio.garden/">Radio Garden</Link></strong></p>
        <p className="subtext">A world map with a ton of radio stations to listen to, an amazing resource for language learning aswell as a unique way to find new music from around the world.</p>

        <p className="text-2xl"><strong><br /><Link href="https://play.google.com/store/apps/details?id=com.kyant.vanilla">Vanilla</Link></strong></p>
        <p className="subtext">Came across this <Link href="../meow.html">music</Link> player app when looking for a way to play MIDI, it is ADORABLE but still in beta.</p>

        <p className="text-2xl"><strong><br /><Link href="https://bendodson.com/projects/itunes-artwork-finder/">BenDodson iTunes Artwork Finder</Link></strong></p>
        <p className="subtext">{"The best way to get your grubby hands on albums', tv shows', etc. cover art."}</p>

      </main>
    </>
  )
}






  
