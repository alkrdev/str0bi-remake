import { type AppType } from "next/app";
import Link from "next/link";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <div>
        <p className="subtext pl-8 mb-8">
          <br /> 
          <br /> 
          <br />  
          Color palette from <Link className="subtext" href="https://github.com/catppuccin/catppuccin">Catppuccin</Link> (Macchiato).<br />
          2024 Max Jónsbur. <Link className="subtext" href="https://github.com/vqia/vqia.github.io">Source Code</Link>
        </p>
      </div>
    </>
  );
};

export default MyApp;
