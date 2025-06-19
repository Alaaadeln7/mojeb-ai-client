"use client";
import { useState } from "react";
import AccountSettings from "./AccountSettings";
import IntegrationSettings from "./IntegrationSettings";
import LanguageSettings from "./LanguageSettings";
import NotificationsPreference from "./NotificationsPreference";
import ThemeSettings from "./ThemeSettings";
import ProfileModal from "./ProfileModal";

export default function Settings() {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  return (
    <>
      <section className="p-5 sm:p-10">
        <AccountSettings setOpenEditProfile={setOpenEditProfile} />
        <ThemeSettings />
        <LanguageSettings />
        <IntegrationSettings />
        <NotificationsPreference />
        <button className="btn btn-primary my-5">save changes</button>
      </section>
      {openEditProfile && (
        <ProfileModal setOpenEditProfile={setOpenEditProfile} />
      )}
    </>
  );
}
