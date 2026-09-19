import asyncio
import os
import subprocess
import edge_tts
import imageio_ffmpeg
import wave

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()

output_dir = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\public"
os.makedirs(output_dir, exist_ok=True)

raw_mp3 = os.path.join(output_dir, "raw_voiceover.mp3")
mastered_wav = os.path.join(output_dir, "voiceover.wav")

script_blocks = [
    # Act 1: Cold Open Hook & The Open-Source Reversal
    "Silicon Valley spent over one hundred billion dollars attempting to build an unassailable moat around proprietary intelligence.",
    "In the last forty-eight hours, two Chinese frontier releases just rendered that entire moat mathematically obsolete.",
    "On Vercel's global AI Gateway, open-weight models suddenly captured seventy-eight point four percent of total token volume.",
    "Moonshot AI and DeepSeek surged past established titans, with developer spend overtaking OpenAI in real-time telemetry.",
    "Behind this historic power shift are two architectures that rewrote the laws of compute: Alibaba's Qwen 3.8 family, and Moonshot AI's monolithic Kimi K3.",
    "What we are witnessing is not a temporary anomaly—it is a full-scale relocation of the technological center of gravity.",

    # Act 2: Alibaba's 2.4-Trillion Titan — Qwen 3.8 & The 27B Local Coup
    "The offensive began when Alibaba Cloud quietly dropped Qwen 3.8-Max, a staggering two point four trillion parameter mixture-of-experts model.",
    "Routing across ninety-five billion active parameters per token, it posted an extraordinary ninety-two point six on GPQA Diamond, matching closed frontier flagships like Claude Fable and GPT-5.6 Sol.",
    "The architecture leverages advanced Grouped Query Attention and extended Rotary Position Embeddings, natively handling long-horizon reasoning across massive token spans.",
    "But Alibaba's real masterstroke was open-sourcing the twenty-seven billion dense checkpoint under a permissive Apache 2.0 license.",
    "Within forty-eight hours, PrismML unveiled Ternary Bonsai 2, compressing Qwen 3.8-27B by nine times while preserving ninety-eight point two percent of its benchmark intelligence.",
    "By applying fine-grained ternary quantization grids, memory bandwidth demands were slashed by nearly eighty percent.",
    "Suddenly, a model outperforming GPT-5.6 Luna High and Opus 4.6 can run entirely on an eight-gigabyte consumer GPU costing under five hundred dollars.",

    # Act 3: Moonshot AI & Kimi K3 — The 2.8-Trillion Parameter Monster
    "While Alibaba conquered local hardware, Moonshot AI went after the absolute ceiling of frontier scale.",
    "Founded by thirty-four-year-old researcher Yang Zhilin, the team previously stunned the research community by training Kimi K2 for just four point six million dollars.",
    "Their new flagship, Kimi K3, pushes scale to a breathtaking two point eight trillion parameters, routing across eight hundred ninety-six sparse experts.",
    "The secret behind K3 is Moonshot's proprietary Kimi Delta Attention and Attention Residuals.",
    "Standard transformer attention scales quadratically with context length, leading to catastrophic memory spikes when parsing large documents.",
    "Kimi Delta Attention replaces standard attention matrices with linear state tracking, reducing memory consumption while maintaining high retrieval fidelity.",
    "Paired with their Long-to-Short reinforcement learning framework, K3 delivers a native one-million-token context window with always-on reasoning without needing expensive Monte Carlo tree search.",

    # MID-ROLL RETENTION CTA: The Channel Subscriber Reality
    "Looking at our real-time studio analytics, ninety-eight point seven percent of you watching these deep dives haven't subscribed yet.",
    "Only one percent of viewers have joined the channel, even though we break down every zero-day model leak and verified hardware benchmark weeks before mainstream media catches on.",
    "If you want to stay ahead of the curve and support rigorous, independent AI engineering analysis, hit that subscribe button right now.",
    "It takes just one second, and it ensures you never miss a critical architecture breakdown.",

    # Act 4: The Benchmark Forensics — Code Arena & Real Renders
    "On the independent Arena leaderboards, Kimi K3 secured the coveted number one rank on the Frontend Code Arena, earning an Elo rating of sixteen seventy-nine.",
    "In real-world developer stress tests, K3 autonomously reconstructed its own launch video inside a single raw JavaScript file without external dependencies or tool calls.",
    "Over on the spatial reasoning benchmarks, independent testers evaluated K3 against Google's upcoming Gemini 3.8 Flash.",
    "Prompted to build complex three-dimensional voxel architecture like the historic Nan Lian Garden, K3 rendered dense spatial geometry and ray-traced lighting that rivaled dedicated rendering engines.",
    "Meanwhile, engineers connected Qwen 3.8-27B to Cerebras wafer-scale processors running at two thousand tokens per second.",
    "By turning pure inference into a dynamic operating system, they mounted an offline browser directly into a just-in-time desktop, hallucinating the entire internet with zero wifi and zero web scraping.",

    # Act 5: The Infrastructure Earthquake — AWS Bedrock & The Apple Deal
    "This technological momentum is now forcing Western hyperscalers to completely restructure their enterprise offerings.",
    "Just hours ago, Amazon officially deployed Kimi K3 directly into AWS Bedrock, making it the first open-source model of this generation available to enterprise cloud customers.",
    "For Amazon, onboarding K3 was an urgent necessity to prevent massive enterprise developer flight to specialized open-weight hosting platforms.",
    "Simultaneously, Alibaba stock surged after reports confirmed that Qwen 3.8 Omni Flash has been selected to power Apple Intelligence features across mainland China.",
    "Under stringent regulatory requirements, Apple required a sovereign on-device and cloud partner capable of sub-one-hundred-millisecond streaming voice and vision processing.",
    "From the cloud infrastructure of Amazon to the pockets of hundreds of millions of iPhone users, Chinese open architecture has arrived at planetary scale.",

    # Act 6: The West vs East Reckoning & What Lies Ahead
    "And the acceleration is showing zero signs of slowing down. Moonshot AI has already begun teasing Kimi K3.1 through cryptographic mathematical puzzles circulating on social media.",
    "The era of closed American labs holding an unbreachable technological monopoly is definitively over.",
    "Western frontier labs are discovering that compute alone cannot protect a closed API when global open-source developers can download two-point-eight trillion parameters, quantize them to consumer silicon, and deploy them at zero marginal cost.",
    "The future of artificial intelligence does not belong to walled gardens—it belongs to whoever ships the most compute to the commons.",
    "Drop a comment below with which model you are running in your stack, and make sure that bell notification is turned on for our upcoming Kimi K3.1 hands-on review."
]

full_text = "\n\n".join(script_blocks)

async def generate():
    voice = "en-US-BrianMultilingualNeural"
    print(f"Synthesizing voiceover with {voice} ({len(script_blocks)} blocks, {len(full_text.split())} words)...")
    communicate = edge_tts.Communicate(full_text, voice=voice, rate="+0%", pitch="+0Hz")
    await communicate.save(raw_mp3)
    print("Raw voiceover generated successfully!")

    print("Mastering via FFmpeg broadcast loudnorm standard...")
    cmd = [
        ffmpeg_exe,
        "-y",
        "-i", raw_mp3,
        "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
        "-ar", "24000",
        "-ac", "1",
        mastered_wav
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("FFmpeg error:", res.stderr)
        raise RuntimeError("FFmpeg audio mastering failed")
    
    # Verify duration
    w = wave.open(mastered_wav, "rb")
    dur = w.getnframes() / float(w.getframerate())
    w.close()
    print(f"Broadcast mastered voiceover successfully saved to: {mastered_wav}")
    print(f"Duration: {dur:.2f}s ({dur/60:.2f} mins), Total frames @ 30fps: {int(dur*30)}")

if __name__ == "__main__":
    asyncio.run(generate())
