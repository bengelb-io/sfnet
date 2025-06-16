export default (): {
    sections: { title: string; content: string; src: string }[];
} => {
    return {
        sections: [
            {
                "title": "Quantum-Resistant Encryption",
                "content":
                    "As quantum computing technology advances, the threat to current encryption methods is no longer theoretical—it's becoming a near-term reality. Most of the encryption algorithms that protect our digital infrastructure, such as RSA and ECC, rely on the difficulty of solving certain mathematical problems, like prime factorization and discrete logarithms. While these are practically impossible for classical computers to solve, quantum computers could break them in a matter of minutes using algorithms like Shor’s algorithm.",
                "src":
                    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
            },
            {
                "title": "The ChatGPT Moment of the PQC Industry",
                "content":
                    "We’re standing at the edge of a revolution in cryptography, much like how the transformer model reshaped AI. Just as Google’s transformer laid the groundwork for applications like ChatGPT, Post-Quantum Cryptography is poised to redefine the security landscape. But, as with AI, the breakthrough isn’t just in the algorithms—it’s in making them usable, scalable, and accessible for everyone.",

                "src":
                    "https://images.unsplash.com/photo-1517703306318-268e1d328aa9?auto=format&fit=crop&w=1200&q=80&h=1600",
            },
            {
                "title": "Harvest Now, Decrypt Later Attacks",
                "content":
                    "Encryption safeguards our digital lives, from online shopping to healthcare records. However, the advent of quantum computing poses a significant threat to traditional encryption methods. 'Harvest now, decrypt later' attacks, where data is stolen today to be decrypted by future quantum computers, present a pressing risk. Even Bitcoin is not immune. As our digital landscape evolves, the implementation of quantum-resistant encryption is becoming critically important for both businesses and individuals. The urgency for post-quantum cryptography (PQC) is paramount and must be addressed immediately to ensure the ongoing security and privacy of our information.",

                "src":
                    "https://images.unsplash.com/photo-1463717738788-85fcacb6ac3d?auto=format&fit=crop&w=1200&q=80",
            },
            {
                "title": "Legislation Requirements",
                "content":
                    "Federal agencies are mandated to adopt quantum-resistant cryptographic methods by 2035. To maintain eligibility for federal contracts and avoid public non-compliance notifications, businesses and government contractors must transition to post-quantum cryptography (PQC). Ultimately, all organizations and society at large will need to adopt PQC to ensure data security in a quantum computing era.",
                "src":
                    "https://images.unsplash.com/photo-1648135589617-c3640a80ab4e?auto=format&fit=crop&w=1200&q=80",
            },
            {
                "title": "Why Lattice-Based Encryption is Quantum-Safe",
                "content":
                    "Lattice-based encryption is quantum-safe because it relies on the hardness of mathematical problems like the Shortest Vector Problem (SVP) and Closest Vector Problem (CVP). These problems involve complex structures in high-dimensional spaces that are infeasible to break using known quantum algorithms. NIST has endorsed lattice-based schemes like CRYSTALS-Kyber and CRYSTALS-Dilithium, highlighting their security and efficiency.",
                "src":
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
            },
        ],
    };
};
