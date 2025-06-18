<script setup lang="ts">
import SysOne from "~/assets/images/sys-one.jpg";

const demoDialogRef = ref();
function openDemoDialog() {
  console.log(demoDialogRef.value);
  demoDialogRef.value?.open();
}

const htmlContent = `
As quantum computing technology advances, the threat to current encryption methods is no longer theoretical—it's becoming a near-term reality.

Most of the encryption algorithms that protect our digital infrastructure, such as RSA and ECC, rely on the difficulty of solving certain mathematical problems, like <ULink :active='true'>prime factorization</ULink> and <ULink :active='true'>discrete logarithms</ULink>.

While these are practically impossible for classical computers to solve, quantum computers could break them in a matter of minutes.
`;

const harvestNowDecryptLater = {
  title: "Harvest Now, Decrypt Later Attacks",
  subtitle: "Quantum Threats to Today's Encryption",
  icon: "lucide:shield-alert",
  iconColor: "indigo",
  content: `
Encryption safeguards our digital lives, from online shopping to healthcare records. However, the advent of quantum computing poses a significant threat to traditional encryption methods.

"Harvest now, decrypt later" attacks, where data is stolen today to be decrypted by future quantum computers, present a pressing risk. Even Bitcoin is not immune.

As our digital landscape evolves, the implementation of quantum-resistant encryption is becoming critically important for both businesses and individuals. The urgency for post-quantum cryptography (PQC) is paramount and must be addressed immediately to ensure the ongoing security and privacy of our information.
  `,
  ctaLabel: "Protect Your Data",
  ctaText: "Learn how to defend against quantum threats today.",
};

const pqcChatgptMoment = {
  title: "The ChatGPT Moment of the PQC Industry",
  subtitle: "A Revolution in Cryptographic Usability",
  icon: "lucide:zap",
  iconColor: "yellow",
  content: `
We’re standing at the edge of a revolution in cryptography, much like how the transformer model reshaped AI.

Just as Google’s transformer laid the groundwork for applications like ChatGPT, Post-Quantum Cryptography is poised to redefine the security landscape.

But, as with AI, the breakthrough isn’t just in the algorithms—it’s in making them usable, scalable, and accessible for everyone.
  `,
  ctaLabel: "See the Future",
  ctaText: "Explore how PQC is reshaping security.",
};

const latticeEncryptionQuantumSafe = {
  title: "Why Lattice-Based Encryption is Quantum-Safe",
  subtitle: "The Math Behind Quantum Security",
  icon: "lucide:layers",
  iconColor: "blue",
  content: `
Lattice-based encryption is quantum-safe because it relies on the hardness of mathematical problems like the Shortest Vector Problem (SVP) and Closest Vector Problem (CVP).

These problems involve complex structures in high-dimensional spaces that are infeasible to break using known quantum algorithms.

NIST has endorsed lattice-based schemes like CRYSTALS-Kyber and CRYSTALS-Dilithium, highlighting their security and efficiency.
  `,
  ctaLabel: "Understand the Math",
  ctaText: "Dive into why lattice-based encryption matters.",
};

const agencyList = [
  {
    name: "U.S. Department of Defense",
    logo: "logos/dod.png",
    country: "United States",
  },
  { name: "NATO", logo: "logos/nato.png", country: "International" },
  {
    name: "Ministry of Defence",
    logo: "logos/mod_uk.png",
    country: "United Kingdom",
  },
  { name: "Bundeswehr", logo: "logos/bundeswehr.png", country: "Germany" },
  { name: "DGSE", logo: "logos/dgse.png", country: "France" },
  { name: "DND Canada", logo: "logos/dnd_canada.svg", country: "Canada" },
  { name: "Australian DoD", logo: "logos/dod_aus.png", country: "Australia" },
];
</script>

<template>
  <div>
    <LayoutDemo ref="demoDialogRef" />
    <LayoutHero>
      <P5Canvas class="w-full h-96">
        <div
          class="animate-fade-in absolute w-full h-96 flex flex-col items-center justify-center gap-4"
        >
          <div class="flex gap-2 items-center">
            <NuxtLink to="/">
              <NuxtImg class="size-16" src="sfnet.png" />
            </NuxtLink>
            <h1
              class="sm:text-6xl text-[2em] justify-center bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text font-extrabold text-transparent pb-2 my-2"
            >
              BayAreaSecure
            </h1>
          </div>
          <h2
            class="text-xl text-center font-extrabold inline-flex sm:flex-row flex-col sm:gap-2 m-4"
          >
            <span>Beyond Quantum:</span>
            <span>Secure Today, Safe Tomorrow</span>
          </h2>
          <UButton
            icon="i-lucide-rocket"
            type="button"
            color="neutral"
            variant="outline"
            :ui="{
              base: 'cursor-pointer fade-in-up',
              leadingIcon: 'text-primary cursor-hover',
            }"
            @click="openDemoDialog"
          >
            Join The Movement
          </UButton>
        </div>
      </P5Canvas>
      <USeparator />
      <LayoutSection class="flex sm:flex-row flex-col gap-4 p-2">
        <UCard
          class=" bg-slate-900 border border-slate-700 shadow-xl p-6 rounded-2xl animate-fade-in basis-1/2"
        >
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-white">
              🔐 How Long Would Your Messages Last Against a Quantum Attack?
            </h2>
            <p class="text-slate-300">
              Quantum computers aren't just a futuristic curiosity — they're an
              existential threat to modern encryption. Once they reach scale,
              algorithms like Shor’s could dismantle the cryptographic backbone
              of our most trusted messaging platforms in mere minutes. This
              infographic breaks down the TTC (Time to Crack) for popular
              services like WhatsApp, Signal, iMessage, and Telegram, assuming a
              quantum adversary with full capabilities. The numbers are
              chilling: encryption that currently protects billions of
              conversations could evaporate in the time it takes to make a cup
              of coffee. Welcome to the countdown.
            </p>
            <!-- <div class="flex justify-around">
              <ContentPaperLink
                link="https://cc.ee.ntu.edu.tw/~rbwu/rapid_content/course/QC/Shor1994.pdf"
                title="Shor's Algorithm"
              />
              <ContentPaperLink />
              <ContentPaperLink />
            </div> -->
          </div>
        </UCard>

        <UCard variant="subtle" class="animate-fade-in sm:w-1/2">
          <div class="flex flex-col gap-2 mb-2">
            <h1 class="text-xl font-extrabold">TTC (Time To Crack)</h1>
            <p class="text-md text-gray-300">
              Decryption time for popular messaging services in minutes:
            </p>
          </div>
          <GraphHorizontal
            :max="140"
            :data="[
              {
                label: 'WhatsApp (Curve25519)',
                value: 60,
                iconName: 'i-simple-icons:whatsapp',
              },
              {
                label: 'Signal (Curve25519)',
                value: 60,
                iconName: 'i-logos-signal',
              },
              {
                label: 'Slack (RSA/ECC)',
                value: 75,
                iconName: 'i-logos-slack-icon',
              },
              {
                label: 'iMessage (ECC/RSA)',
                value: 90,
                iconName: 'i-simple-icons:apple',
              },
              {
                label: 'Telegram (RSA-2048)',
                value: 120,
                iconName: 'i-logos-telegram',
              },
            ]"
          />
          <p class="text-sm text-neutral-400">(Using Shor's Algorithm)</p>
        </UCard>
      </LayoutSection>
    </LayoutHero>
    <USeparator />

    <div class="w-screen">
      <ContentCarousel :agencies="agencyList" />
    </div>
    <USeparator />

    <div class="w-full h-auto">
      <LayoutSection class="flex flex-col gap-8">
        <LayoutCard
          color="error"
          :title="'A Ticking Time Bomb'"
          :subtitle="'The End of Modern-Day Encryption'"
          icon="lucide:alarm-clock"
          :icon-color="'red'"
          :content="htmlContent"
          :cta-text="'The future is closer than you think. Are you ready for the quantum leap?'"
          cta-label="Learn More"
          :on-click="openDemoDialog"
        >
          <template #figure>
            <ContentFigure
              :src="SysOne"
              caption="IBM's System One Quantum Computer"
            />
          </template>
        </LayoutCard>
        <LayoutCard
          color="info"
          v-bind="latticeEncryptionQuantumSafe"
          :on-click="openDemoDialog"
        >
          <template #figure>
            <ContentFigure
              :src="SysOne"
              caption="IBM's System One Quantum Computer"
            />
          </template>
        </LayoutCard>
        <LayoutCard
          :on-click="openDemoDialog"
          color="warning"
          v-bind="pqcChatgptMoment"
        >
          <template #figure>
            <ContentFigure
              :src="SysOne"
              caption="IBM's System One Quantum Computer"
            />
          </template>
        </LayoutCard>
      </LayoutSection>
    </div>
  </div>
</template>
