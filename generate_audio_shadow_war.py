import asyncio
import os
import subprocess
import edge_tts
import static_ffmpeg

ffmpeg_exe, _ = static_ffmpeg.run.get_or_fetch_platform_executables_else_raise()

output_dir = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\public"
os.makedirs(output_dir, exist_ok=True)

raw_mp3 = os.path.join(output_dir, "raw_voiceover.mp3")
mastered_wav = os.path.join(output_dir, "voiceover.wav")

script_blocks = [
    # Act 1: Cold Open Hook (The Autonomous Game Engine Duel)
    "Something broke in frontier AI this week, and nobody is talking about chatbots anymore.",
    "While tech leaders went on stage pleading with governments to slow down development, their engineering teams were doing the exact opposite.",
    "Behind closed doors, Anthropic and OpenAI just escalated from writing text to generating entire interactive reality engines.",
    "In the last forty-eight hours, two unreleased checkpoints leaked into the wild.",
    "On one side, Anthropic's stealth model just generated a fully playable three-dimensional action game with real-time particle effects from a single prompt.",
    "On the other side, OpenAI's Astra produced fluid water physics that run natively in your browser.",
    "This isn't software development as we know it.",
    "This is the first wave of autonomous digital synthesis, and it is happening right under our noses.",

    # Act 2: Anthropic's Stealth Offensive (Fable 5.2 & 1-Hour Brawl Stars Build)
    "The first tremor hit late last night when developers noticed unusual routing behavior inside Claude.",
    "Selected accounts attempting to run heavy coding tasks weren't hitting standard models.",
    "They were being stealth-routed to an internal checkpoint labeled Fable 5.2.",
    "A developer named Jazii decided to give it what should have been an impossible task: reconstruct a playable multiplayer brawler from scratch using pure code.",
    "Sixty minutes later, Claude returned a complete, working artifact called Sundown Showdown.",
    "We aren't looking at simple canvas shapes here.",
    "It wrote four distinct character classes, complete with range mechanics, bullet scatter, health pools, and custom time-of-day dynamic lighting.",
    "The entire engine runs in Three.js without an external game engine.",
    "If an unannounced model can assemble game physics and UI architecture in an hour, what happens to traditional game studios when this goes public?",

    # Act 3: The 4D Chess Move (Opus 5.2 Beats Astra & 26% RSI Shockwave)
    "But Fable was only half the story.",
    "Hours later, reports surfaced that Anthropic had secretly deployed Opus 5.2, and the benchmark anomalies were staggering.",
    "Multiple developers testing complex spatial logic reported that Opus 5.2 was actually beating both Fable and OpenAI's Astra in deep structural reasoning.",
    "As developer Vidhi pointed out, this is a four-dimensional chess move.",
    "Anthropic isn't just tuning models for consumer benchmarks.",
    "They confirmed that Claude models now autonomously execute twenty-six percent of Anthropic's own internal research and development.",
    "That means we have crossed the threshold into recursive self-improvement.",
    "The models are literally building the tools that will train their successors.",

    # Act 4: OpenAI's Reality Engine (WaveRunner Water Physics & Steam Rebuild)
    "OpenAI, however, isn't backing down.",
    "While Anthropic focused on procedural game logic, OpenAI directed GPT-6 Astra toward pure physical simulation.",
    "Take a look at this demonstration from developer Tak.",
    "When prompted to generate a realistic WaveRunner jet ski game, Astra didn't just throw together a placeholder.",
    "It synthesized realistic fluid wake, boundary collision, camera tilt, and interactive throttle controls directly inside the browser.",
    "And that was just the beginning.",
    "Over on Steam, developer noclipepe fed Astra a single gameplay video of a commercial fishing game.",
    "Without touching the source code, Astra reverse-engineered the cast, line tension, fish fight algorithms, and reel physics, recreating the entire core loop in one continuous execution.",
    "Astra isn't just reading documents. It is learning the physical laws of interactive software.",

    # Act 5: The "GPT-6 Sol" Leak & The Overnight Swarm
    "But there is a massive catch with Astra: running these hundred-minute high-reasoning tasks costs real money, often eight to thirty dollars per generation.",
    "Which brings us to the biggest OpenAI leak of the week: GPT-6 Sol.",
    "Multiple independent observers spotted traces of Sol appearing in OpenAI's API routing layer.",
    "Leaked data reveals an April thirtieth knowledge cutoff, heavy reinforcement learning optimization, and inference speeds nearly four times faster than Astra at a fraction of the cost.",
    "During a recent talk, Sam Altman gave a glimpse of where this is heading, admitting that every single night, he runs a few thousand autonomous agents powered by these frontier models while he sleeps.",
    "We are shifting from individual human coders to autonomous nightly swarms that build entire product suites before breakfast.",

    # Act 6: Autonomous Voice Agents & Micro-Token Economics (Jev & DeepSeek-Harness)
    "At the same time, the economics of agentic automation are collapsing in the best way possible.",
    "Developer Moritz Kremb showcased Jev, a voice-controlled browser agent that executes web actions in under three hundred milliseconds.",
    "You speak a command, the transcript streams, and Jev calculates action probabilities and clicks the target element for just point-zero-zero-zero-two dollars per decision.",
    "It is so responsive it executes before you even finish your sentence.",
    "Pair that with DeepSeek's open-source release of DeepSeek-Harness, which provides a modular plugin-first architecture for local coding agents, and the proprietary two-hundred-dollar-a-month subscription monopoly is suddenly in grave danger.",
    "Independent developers are proving you don't need a corporate API key to deploy high-tier agency.",

    # Act 7: Google's Shadow Strike [The Grand Finale] (Gemini 4 Pro Arena Leak)
    "And that brings us to Google.",
    "Just when the internet thought the race was strictly between OpenAI and Anthropic, Google launched an unexpected shadow strike.",
    "Over on LMSYS, testers began encountering a mystery model operating under internal antigravity tags.",
    "The leaked specifications are staggering: a two-million token context window, a jaw-dropping two-hundred-and-fifty-six-thousand token output ceiling, and pricing set at just eleven dollars per million output tokens.",
    "Look at what developers are coaxing out of this checkpoint.",
    "Priyesh prompted it for a classic Shelby GT500, and it generated the entire vehicle using pure SVG vector paths—no embedded images, no canvas tricks.",
    "Another developer extracted a fully interactive PlayStation Five controller with an exploded CAD view, X-ray PCB inspection, and live clickable button logic.",
    "While skeptics like The Bugged Dev argue that earlier benchmarks might still suffer under complex mechanical simulations, there is no denying that Google has solved its historical design taste issues and is preparing a monster for late 2026.",

    # Act 8: The Developer Verdict & Outro
    "We have entered an era where raw text generation is table stakes.",
    "If your workflow involves game engines, spatial logic, or self-improving agents, Anthropic's 5.2 series is setting the pace.",
    "If you need complex physical simulation, computer vision, and autonomous swarms, OpenAI's Astra and upcoming Sol remain the titans.",
    "And if massive context and pristine vector generation are what you seek, Google's Gemini 4 is about to rewrite the pricing structure.",
    "The models are no longer waiting for our prompts—they are building the future in parallel.",
    "Make sure to subscribe to stay ahead of the curve, and drop a comment below: which of these models would you trust to build your next project?"
]

full_text = "\n\n".join(script_blocks)

async def generate():
    voice = "en-US-BrianMultilingualNeural"
    print(f"Synthesizing voiceover with {voice}...")
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
    
    print(f"Broadcast mastered voiceover successfully saved to: {mastered_wav}")

if __name__ == "__main__":
    asyncio.run(generate())
