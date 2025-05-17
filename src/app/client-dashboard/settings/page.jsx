import AccountSettings from "./AccountSettings";
import BusinessHours from "./BusinessHours";
import IntegrationSettings from "./IntegrationSettings";
import LanguageSettings from "./LanguageSettings";
import NotificationsPreference from "./NotificationsPreference";

export default function Settings() {
  return (
    <section className="p-5 sm:p-10">
      <AccountSettings />
      <LanguageSettings />
      <BusinessHours />
      <IntegrationSettings />
      <NotificationsPreference />
      <button className="btn btn-primary my-5">save changes</button>
    </section>
  );
}
