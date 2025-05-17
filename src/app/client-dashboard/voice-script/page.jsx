import CallGreeting from "./CallGreeting";
import KeywordBaseReplies from "./KeywordBaseReplies";
import MainConversationScript from "./MainConversationScript";
import VoiceScriptHeader from "./VoiceScriptHeader";

export default function VoiceScript() {
  return (
    <section className="p-5 sm:p-10">
      <VoiceScriptHeader />
      <CallGreeting />
      <MainConversationScript />
      <KeywordBaseReplies />
    </section>
  );
}
