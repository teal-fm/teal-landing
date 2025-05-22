import {
  AudioLines,
  BarChart3,
  ChevronDown,
  Music2,
  Radio,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CrossFade } from "react-crossfade-simple";
import { FeatureCard } from "./components/FeatureCard";
import { ThemeToggle } from "./components/ThemeToggle";

import { SiBluesky, SiDiscord, SiGithub } from "react-icons/si";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  const icons = [
    <Music2 className="w-full h-full" key="music" />,
    <Radio className="w-full h-full" key="radio" />,
    <AudioLines className="w-full h-full" key="lines" />,
  ];

  const features = [
    {
      title: "Own your data",
      description:
        "Built on ATProto, you can take control of your sound, connect with your audience, and share your tastes with the world.",
      icon: BarChart3,
      gradient: "bg-gradient-to-r from-teal-400/30 to-emerald-500/30",
    },
    {
      title: "Social Discovery",
      description:
        "Connect with music lovers who share your taste and discover new tracks through community recommendations.",
      icon: Users,
      gradient: "bg-gradient-to-r from-blue-400/30 to-teal-500/30",
    },
    {
      title: "Universal Tracking",
      description:
        "Seamlessly sync your listening history across Spotify, Apple Music, YouTube Music, and more platforms.",
      icon: Sparkles,
      gradient: "bg-gradient-to-r from-purple-400/30 to-pink-500/30",
    },
    {
      title: "Share Your Taste",
      description:
        "Create beautiful cards of your top tracks and artists to share your music taste with the world.",
      icon: Share2,
      gradient: "bg-gradient-to-r from-orange-400/30 to-pink-500/30",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-teal-950
        from-slate-200 via-purple-200/70 to-teal-200
     dark:text-white text-neutral-800`}
    >
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

      {/* Hero Section */}
      <div
        className="h-[90vh] flex flex-col items-center justify-between"
        id="hero"
      >
        <div />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-1">
              <CrossFade contentKey={String(currentIcon)} timeout={200}>
                <div className="bg-teal-500 rounded-full p-3 h-16 w-16">
                  {icons[currentIcon]}
                </div>
              </CrossFade>
              <h1 className="text-7xl sm:text-8xl font-semibold tracking-tight transition-scale">
                teal<span className="text-teal-500 font-serif italic">.fm</span>
              </h1>
            </div>

            <p className="font-sans text-2xl sm:text-3xl text-teal-700 dark:text-teal-100 max-w-2xl mx-auto font-light transition-all">
              Your music,{" "}
              <span className="font-modern-serif font-medium text-teal-500">
                beautifully
              </span>{" "}
              tracked.
              <br /> All{" "}
              <span className="text-teal-500 font-modern-serif font-medium text-teal-500">
                yours
              </span>{" "}
              <span className="">(soon)</span>.
            </p>
          </div>
        </div>
        <a href="#features">
          <ChevronDown />
        </a>
      </div>

      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        id="features"
      >
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-teal-500/20">
            <h2 className="text-xl font-semibold mb-4 text-black/50 dark:text-white/50">
              Stay updated (soon)
            </h2>
            <p className="dark:text-teal-100 text-gray-700">
              Join our{" "}
              <a href="https://discord.gg/DMSZ3xFUpk" className="underline">
                Discord Server
              </a>{" "}
              and follow our{" "}
              <a
                href="https://bsky.app/profile/did:plc:iwhuynr6mm6xxuh25o4do2tx"
                className="underline"
              >
                Bluesky account
              </a>{" "}
              to stay up to date with the latest news and updates.
            </p>
            {/* email waitlist */}
            {/* <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 disabled:dark:bg-teal-50/5 disabled:bg-teal-950/20 disabled:border-teal-300/10 bg-white/10 border border-teal-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-teal-200/50"
                  required
                  disabled
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-400 disabled:bg-teal-400/30 text-teal-900 font-semibold py-2 px-4 rounded-lg transition duration-200"
                disabled
              >
                {isSubmitted ? 'Thanks for joining!' : 'Join the waitlist'}
              </button>
            </form> */}
          </div>
        </div>

        <div className="mt-20 flex justify-center align-center gap-4">
          <a href="https://bsky.app/profile/did:plc:iwhuynr6mm6xxuh25o4do2tx">
            <SiBluesky className="w-6 h-6" />
          </a>
          <a href="https://discord.gg/DMSZ3xFUpk">
            <SiDiscord className="w-6 h-6" />
          </a>
          <a href="https://github.com/teal-fm">
            <SiGithub className="w-6 h-6" />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-10 pb-8 text-center text-teal-600 dark:text-teal-400/60">
          <p>© { currentYear } teal computing, LLC - coming soon</p>
          <p>
            <span className="italic font-modern-serif">forever</span> open
            source
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
