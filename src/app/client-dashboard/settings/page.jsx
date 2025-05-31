import AccountSettings from "./AccountSettings";
import IntegrationSettings from "./IntegrationSettings";
import LanguageSettings from "./LanguageSettings";
import NotificationsPreference from "./NotificationsPreference";

export default function Settings() {
  return (
    <section className="p-5 sm:p-10">
      <AccountSettings />
      <LanguageSettings />
      <IntegrationSettings />
      <NotificationsPreference />
      <button className="btn btn-primary my-5">save changes</button>
    </section>
  );
}
