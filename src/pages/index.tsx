import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>strobi</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>🍓 strobi</strong></h1>
        <p className="subtext">Current Favorite Song: <Link href="https://open.spotify.com/playlist/5AHdgtb9mzsKdIr9vE0j3G?si=814cc2120f6e4946">Fred again.., Brian Eno - Secret</Link></p>

        <h2 className="text-3xl"><strong><br />✨ Latest LLP Releases</strong></h2>
        <p className="text-2xl"><strong><Link href="https://open.spotify.com/album/6and6SQJTiZdiQlxMAi0Ro?si=Z1FabwUpS-WDJASn9M7p0Q">dotLua - Doors (Single)</Link></strong></p>
        <p className="text-2xl"><strong><Link href="https://open.spotify.com/album/4j8VyN6EN8Rgo7UL2233HJ?si=P7cltpeKQq6Xove8hm1R4Q">Lily Valor - rearview (Album)</Link></strong></p>
        
        <h2 className="text-3xl"><strong><br />👋 First off, Hi!</strong></h2>
        <ul className="list-none p-0 m-0">
          <li>{"Most people call me Sofie, and I just begun trying out the name Max aswell."}</li>
          <li>{"I use"} <strong>They/Them</strong> {"or"} <strong>She/Her</strong> {"pronouns!"}</li>
          <li className="flex gap-1">{"I am asexual (sex-positive), and poly."} <img className="align-middle h-4" src="https://cdn.discordapp.com/emojis/1175641289874755645.webp?size=96&quality=lossless"></img> <img className="align-middle h-4" src="https://cdn.discordapp.com/emojis/757670578185568347.webp?size=128&quality=lossless"></img></li>
          <li>{"I'm autistic and am dissociated 24/7. This means I don't feel emotions, only my body does."}</li>
          <li>{"I also have alexithymia, visual snow and aphantasia. I don't have any trauma however, so it's okay to ask about any of these!"}</li>
          <li>{"I like playing games, making music and learning languages. I'm also in uni for graphic design."}</li>
          <li>{"I'm a native English and Portuguese speaker, and I'm learning a ton of languages as a hobby, mostly Icelandic, Norwegian, Dutch and Finnish, as well as just dabbling on toki pona, Japanese, Mandarin, Polish and Macedonian for fun."}</li>
        </ul>
        <h2 className="text-3xl"><strong><br />🌐 <Link href="/links">Social Media and Other Links</Link></strong></h2>
        <h2 className="text-3xl"><strong><br />🎸 <Link href="/music">My Music</Link></strong></h2>
        <h2 className="text-3xl"><strong><br />🎤 <Link href="/artists">Artists (Songs) I love</Link></strong></h2>
        <h2 className="text-3xl"><strong><br />💻 <Link href="/programs">Neat Programs I Use</Link></strong></h2>

      </main>
    </>
  );
}
