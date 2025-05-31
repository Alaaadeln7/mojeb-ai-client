import SettingsNavbar from "./SettingsNavbar";

export default function layout({ children }) {
  return (
    <div>
      <SettingsNavbar />
      <div>{children}</div>
    </div>
  );
}
