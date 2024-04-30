import Head from "next/head"
import Link from "next/link"

export default function systools() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🛜</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>🛜 Network, Privacy & Security, System Tools, Essential Software</strong></h1>
        <p className="subtext"><Link href="/programs">Back</Link></p>

        <p className="text-2xl"><strong><br /><Link href="https://librewolf.net/">LibreWolf</Link></strong></p>
        <p className="subtext">A fork of Firefox with a bunch of privacy enhancements and much prettier without losing features from the foxy.</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.notion.so/">Notion</Link></strong></p>
        <p className="subtext">All-In-One note taking and sharing app. Easiest way to share text files. Like google docs but way better and cleaner.</p>

        <p className="text-2xl"><strong><br /><Link href="https://learn.microsoft.com/en-us/sysinternals/downloads/tcpview">TCPView</Link></strong></p>
        <p className="subtext">Check what any process is doing with your internet connection on your Windows PC.</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.wireshark.org/">Wireshark</Link></strong></p>
        <p className="subtext">Check network traffic more meticulously, this one also for MacOS.</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.diskanalyzer.com/">WizTree</Link></strong></p>
        <p className="subtext">{"46x faster than WinDirStat, it's next-gen stuff and works wonders to free up storage."}</p>

        <p className="text-2xl"><strong><br /><Link href="https://motrix.app/">Motrix</Link></strong></p>
        <p className="subtext">All in one torrent/web downloader. Looks cute and bypasses speed limits.</p>

        <p className="text-2xl"><strong><br /><Link href="https://parsec.app/">Parsec</Link></strong></p>
        <p className="subtext">Control your PC or laptop from another computer, no matter where you are.</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.malwarebytes.com/">Malwarebytes</Link></strong></p>
        <p className="subtext">The only {"good</a> antivirus left and it's free for manual scan."}</p>

        <p className="text-2xl"><strong><br /><Link href="https://www.libreoffice.org/download/download-libreoffice/">LibreOffice</Link></strong></p>
        <p className="subtext">All-In-One Suite for all the Microsoft stuff like Word and Excel and all that, but free and fast.</p>

        <p className="text-2xl"><strong><br /><Link href="https://obsproject.com/">Open Broadcaster Software (OBS)</Link></strong></p>
        <p className="subtext">Every streamer uses OBS for a reason. Livestream, and record anything, now with virtual camera.</p>
      </main>
    </>
  )
}



