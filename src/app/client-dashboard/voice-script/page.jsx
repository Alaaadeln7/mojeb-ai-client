"use client";
import { useState } from "react";
import AddConversationScriptModal from "./AddConversationScriptModal";
import CallGreeting from "./CallGreeting";
import KeywordBaseReplies from "./KeywordBaseReplies";
import MainConversationScript from "./MainConversationScript";
import VoiceScriptHeader from "./VoiceScriptHeader";
import useAuth from "@/hooks/useAuth";
import useClient from "@/hooks/useClient";
import useChatbot from "@/hooks/useChatbot";

export default function VoiceScript() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { chatbot } = useChatbot();
  console.log(chatbot);
  return (
    <>
      <section className="p-5 sm:p-10 mb-20">
        <VoiceScriptHeader />
        <CallGreeting />
        <MainConversationScript setIsModalOpen={setIsModalOpen} />
        <KeywordBaseReplies />
      </section>
      {isModalOpen && (
        <AddConversationScriptModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
