"use client";
import { useState } from "react";
import { LouderNav } from "./LouderNav";
import { LouderHero } from "./LouderHero";
import { LouderTicker } from "./LouderTicker";
import { LouderManifesto } from "./LouderManifesto";
import { LouderExperience } from "./LouderExperience";
import { LouderStreet } from "./LouderStreet";
import { LouderGallery } from "./LouderGallery";
import { LouderCommunity } from "./LouderCommunity";
import { JoinCommunityDialog } from "@/dialogs/join-community-dialog";
import { LouderFooter } from "./LouderFooter";

export function Louder() {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07132F] text-white selection:bg-[#FFC72C] selection:text-[#07132F]">
      <LouderNav onJoin={() => setJoinOpen(true)} />
      <LouderHero onJoin={() => setJoinOpen(true)} />
      <LouderTicker />
      <LouderManifesto onJoin={() => setJoinOpen(true)} />
      <LouderExperience />
      <LouderStreet />
      <LouderGallery />
      <LouderCommunity onJoin={() => setJoinOpen(true)} />
      <JoinCommunityDialog open={joinOpen} onOpenChange={setJoinOpen} />
      <LouderFooter />
    </main>
  );
}

export default Louder;
