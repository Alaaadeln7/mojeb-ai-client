import AnalystCard from "./AnalystCard";
import ConversionsRate from "./ConversionsRate";
import DailyAiCalls from "./DailyAiCalls";
import IntentDetection from "./IntentDetection";
import KeywordInsights from "./KeywordInsights";
import PreviousDays from "./PreviousDays";
import ScenarioPerformance from "./ScenarioPerformance";

export default function PerformanceAnalyst() {
  return (
    <div className="grid grid-cols-12 gap-4 p-5 mx-auto max-w-screen-2xl">
      <main className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-5">
        <AnalystCard title={"Total Calls"} number={1250} />
        <AnalystCard title={"Answered Calls"} number={92} />
        <AnalystCard title={"Tickets Created"} number={123} />
        <AnalystCard title={"Average Call Duration"} number={23} unit="min" />
        <AnalystCard title={"Customer Satisfaction"} number={34} unit="%" />
        <div className="sm:col-span-4 md:col-span-3 lg:col-span-3">
          <DailyAiCalls />
        </div>
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
          <IntentDetection />
        </div>
        <div className="sm:col-span-4 md:col-span-3 lg:col-span-3">
          <ScenarioPerformance />
        </div>
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
          <KeywordInsights />
        </div>
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
          <KeywordInsights />
        </div>
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
          <ConversionsRate />
        </div>
        <div className="sm:col-span-3 md:col-span-3 lg:col-span-3">
          <PreviousDays />
        </div>
      </main>
    </div>
  );
}
