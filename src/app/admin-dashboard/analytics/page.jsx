import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsOverview from "./AnalyticsOverview";
import CallsOverTime from "./CallsOverTime";
import TicketVolume from "./TicketVolume";
import Top5ActivesClients from "./Top5ActivesClients";

export default function Analytics() {
  return (
    <section className="sm:mx-10 mx-2 my-5 mb-20">
      <AnalyticsHeader />
      <AnalyticsOverview />
      <div className="bg-base-100 p-5 rounded-lg shadow-sm mt-5 space-y-2 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <CallsOverTime />
        <TicketVolume />
      </div>
      <Top5ActivesClients />
    </section>
  );
}
