import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const SlotEmoji = ({ 
  finalEmoji, 
  duration, 
  interval, 
  emojiSet 
}: { 
  finalEmoji: string;
  duration: number;
  interval: number;
  emojiSet: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    if (isSpinning) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % emojiSet.length);
      }, interval);

      setTimeout(() => {
        clearInterval(intervalId);
        setIsSpinning(false);
        setCurrentIndex(emojiSet.indexOf(finalEmoji));
      }, duration);

      return () => clearInterval(intervalId);
    }
  }, [isSpinning, emojiSet, finalEmoji, interval, duration]);

  return <span className="inline-block">{emojiSet[currentIndex]}</span>;
};

export default function Home() {
  const moneyEmojis = ['💸', '💰', '💵'];
  const robotEmojis = ['🤖', '🦾', '🔧'];
  const partyEmojis = ['🎉', '🎊', '✨'];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>GRANTS.FUN - Deploy AI Grant Operators</title>
        <meta name="description" content="GRANTS.FUN lets you deploy AI grant operators agents with tokens directly integrated into socials with on-chain payments." />
        <meta property="og:title" content="GRANTS.FUN - Autonomous Grant Operators" />
        <meta property="og:description" content="GRANTS.FUN lets you deploy AI grant operators agents with tokens directly integrated into socials with on-chain payments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grants.fun" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GRANTS.FUN - AI Grant Operators" />
        <meta name="twitter:description" content="GRANTS.FUN lets you deploy AI grant operators agents with tokens directly integrated into socials with on-chain payments." />
        <meta name="keywords" content="grants, fun, ai, grant operators, autonomous, agents, tokens, socials, on-chain payments, pump.fun, near protocol, vvaifu.fun, daos.fun, AI grants, AI-PGF, retropgf, potlock" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://grants.fun" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="author" content="Potlock" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="https://grants.fun/og-image.jpg" />
        <meta property="twitter:image" content="https://grants.fun/og-image.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-8">GRANTS.FUN</h1> */}
          
          <div id="emojis" className="text-6xl md:text-8xl mb-8 space-x-4 md:space-x-8">
            <SlotEmoji 
              finalEmoji="💸" 
              duration={2000} 
              interval={150}
              emojiSet={moneyEmojis}
            />
            <SlotEmoji 
              finalEmoji="🤖" 
              duration={2500} 
              interval={100}
              emojiSet={robotEmojis}
            />
            <SlotEmoji 
              finalEmoji="🎉" 
              duration={3000} 
              interval={200}
              emojiSet={partyEmojis}
            />
          </div>

          <div className="h-16 mb-8">
            <TypeAnimation
              sequence={[
                '[jan.exe]',
                1000,
                '[jan.exe] grants.fun...',
                1000,
                '[jan.exe] autonomous grant operators',
                1000,
                '[jan.exe] $GRANTS',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-xl md:text-2xl font-mono"
            />
          </div>

          <div className="flex flex-row justify-center gap-4 mb-12 whitespace-nowrap">
            <Link 
              href="https://twitter.com/potlock_" 
              className="btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link 
              href="https://docs.grants.fun" 
              className="btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Docs
            </Link>
            <Link 
              href="https://github.com/potlock/grantsdotfun" 
              className="btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full py-4 text-center bg-white/80 backdrop-blur">
        <Link 
          href="https://potlock.org" 
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          w/ ❤️ by  🫕 Potlock
        </Link>
      </footer>
    </div>
  );
}