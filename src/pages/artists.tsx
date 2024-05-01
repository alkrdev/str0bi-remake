import Head from "next/head"
import Link from "next/link"

export default function artists() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🎤</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>🎤 Artists (Songs) I Love</strong></h1>
        <p className="subtext"><Link href="/">Back to hub</Link></p>

        <p className="text-2xl"><strong><br />Fred again..</strong></p>
        <p className="subtext">Favorite Songs: All of "Secret Life", Hannah (the sun)</p>

        <p className="text-2xl"><strong><br />Sigur Rós</strong></p>
        <p className="subtext">Favorite Songs: Skel, Glóð</p>

        <p className="text-2xl"><strong><br />Stumbleine</strong></p>
        <p className="subtext">Favorite Songs: Abacus, Will They</p>

        <p className="text-2xl"><strong><br />Burial</strong></p>
        <p className="subtext">Favorite Songs: Antidawn, Near Dark</p>

        <p className="text-2xl"><strong><br />Flume</strong></p>
        <p className="subtext">Favorite Songs: Sirens, Quits</p>

        <p className="text-2xl"><strong><br />acloudyskye</strong></p>
        <p className="subtext">Favorite Songs: Safety!, Thief!</p>

        <p className="text-2xl"><strong><br />QUIET BISON</strong></p>
        <p className="subtext">Favorite Songs: Crash, The Tower</p>

        <p className="text-2xl"><strong><br />Loathe</strong></p>
        <p className="subtext">{"Favorite Songs: Broken Vision Rhythm, Don't Get Hurt"}</p>

        <p className="text-2xl"><strong><br />Quadeca</strong></p>
        <p className="subtext">Favorite Songs: EASIER, house settling</p>

        <p className="text-2xl"><strong><br />Swarms</strong></p>
        <p className="subtext">Favorite Songs: The Grid, Self Aware</p>

        <p className="text-2xl"><strong><br />Ramzoid</strong></p>
        <p className="subtext">Favorite Songs: there is nothing left to lose, stress test</p>

        <p className="text-2xl"><strong><br />Emily Hopkins</strong></p>
        <p className="subtext">Favorite Songs: Landline, Willingly</p>

        <p className="text-2xl"><strong><br />Vacant</strong></p>
        <p className="subtext">Favorite Songs: Vesper, Estate Blues</p>

        <p className="text-2xl"><strong><br />Madeon</strong></p>
        <p className="subtext">Favorite Songs: Miracle, Hold Me Just Because</p>

        <p className="text-2xl"><strong><br />Swans</strong></p>
        <p className="subtext">Favorite Songs: Helpless Child, I Was a Prisoner in Your Skull</p>

        <p className="text-2xl"><strong><br />Skrillex</strong></p>
        <p className="subtext">Favorite Songs: Bad For Me, Tears</p>

        <p className="text-2xl"><strong><br />Porter Robinson</strong></p>
        <p className="subtext">Favorite Songs: Mirror, Blossom</p>

        <p className="text-2xl"><strong><br />Sam Gellaitry</strong></p>
        <p className="subtext">Favorite Songs: Viewfinder, Desert Mirage</p>

        <p className="text-2xl"><strong><br />Kazukii</strong></p>
        <p className="subtext">Favorite Songs: Back to Life, Afraid of the Dark</p>

        <p className="text-2xl"><strong><br />Jónsi</strong></p>
        <p className="subtext">Favorite Songs: Vikur, Eyja</p>
      </main>     
    </>
  )
}