import { RaceDetails } from "@/components/race-details/race-details";
import { RankingCard } from "@/components/ranking-card/ranking-card";
export default function Home() {
  return (
    <main>
      <p className="font-f-bold text-red text-4xl mt-16">Belgian Grand Prix 2024</p>
      <p className="font-f-bold text-blackSecondary text-xl">Circuit de Spa-Francorchamps</p>
      <p className="text-grey-8a text-sm">28 July 2024 3:30 PM UTC</p>
     <RaceDetails />
      <div className="grid grid-cols-3 gap-4 mt-8">
        <RankingCard />
        <RankingCard />
        <RankingCard />
      </div>
    </main>
  );
}
