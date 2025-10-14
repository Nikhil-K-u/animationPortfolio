import portfolioData from "../data/portfolioData.json";

export default function HeroSection() {
  const hero = portfolioData.hero;

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-purple-700 text-white">
      <h1 className="text-5xl font-bold mb-2">{hero.name}</h1>
      <p className="text-lg">{hero.email} | {hero.phone}</p>

      <div className="flex gap-4 mt-4">
        <a href={hero.portfolio} target="_blank" className="underline">Portfolio</a>
        <a href={hero.linkedin} target="_blank" className="underline">LinkedIn</a>
        <a href={hero.github} target="_blank" className="underline">GitHub</a>
      </div>
    </section>
  );
}
