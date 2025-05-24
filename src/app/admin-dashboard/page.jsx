import { overviewData } from "@/data/adminData";
import OverviewAdmin from "./OverviewAdmin";
import CallsOverview from "./CallsOverview.jsx";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import Notifications from "./Notifications";
import SystemAnnouncements from "./SystemAnnoumcements";
export default function AdminDashboard({ isOpen, setIsOpen }) {
  return (
    <section className="mb-30 sm:mx-10 mx-2">
      <OverviewAdmin cards={overviewData} />
      <CallsOverview />
      <QuickActions />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <RecentActivity />
        <Notifications />
        <SystemAnnouncements />
      </div>
    </section>
  );
}
