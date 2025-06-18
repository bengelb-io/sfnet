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
      <GraphHorizontal
        :max="100"
        :data="[
          {
            value: 10,
          },
          {
            value: 20,
          },
          {
            value: 30,
          },
          {
            value: 75,
          },
        ]"
      />
    </LayoutHero>
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
