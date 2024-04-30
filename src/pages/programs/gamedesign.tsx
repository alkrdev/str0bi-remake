import Head from "next/head"
import Link from "next/link"

export default function gamedesigns() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🎲</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="pl-8 pt-8">
        <h1 className="text-5xl"><strong>🎲 Game Design & Modding</strong></h1>
        <p className="subtext"><Link href="/programs">Back</Link></p>

        <p className="text-2xl"><strong><br /><Link href="https://modrinth.com/app">Modrinth</Link></strong></p>
        <p className="subtext">{"Incredible Minecraft launcher. Amazing instance system, ability to download mods, modpacks, shaders, textures, all in the launcher itself, it's a keeper."}</p>
        
        <p className="text-2xl"><strong><br /><Link href="https://openmw.org/">OpenMW</Link></strong></p>
        <p className="subtext">Open source extension for Morrowind that expands and improves the game in a ton of ways.</p>

        <p className="text-2xl"><strong><br /><Link href="https://godotengine.org/">Godot</Link></strong></p>
        <p className="subtext">Next-gen game engine! Cruelty Squad was made with it. :3</p>

        <p className="text-2xl"><strong><br /><Link href="https://wickedengine.net/">Wicked Engine</Link></strong></p>
        <p className="subtext">{"Also check this engine out, it's definitely something. Not hard to use and looks really nice."}</p>
      </main>
    </>
  )
}