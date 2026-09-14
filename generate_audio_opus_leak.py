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

script_text = """Every major AI CEO in Silicon Valley is publicly begging governments to slow down the frontier race. But behind closed doors? They are accelerating faster than they have in human history.

Over the last forty-eight hours, Dario Amodei, Sam Altman, and Elon Musk formed what looks like an unprecedented truce. They claim recursive self-improvement is spiraling out of control. That we need mandatory pauses. Independent oversight. A global breather.

It sounds noble. Until you look at what leaked into the developer pipelines literally hours later. 

Anthropic is internally running tests on Claude Opus 5.2. OpenAI is quietly handing out access to GPT-6 Sol. And open-source labs are preparing something that makes all of these safety agreements completely irrelevant.

Let's begin with Dario's essay. It is titled 'We Must Pace the Frontier'—and make no mistake, the technical concerns he brings up are chilling. 

He explicitly revealed that since this past summer, AI models have started writing the code for their own successors. Anthropic's internal agents aren't just assisting engineers anymore—they are architecting the next model architectures. This is called recursive self-improvement, and Dario warns that if we do not pace this capabilities curve, alignment will fundamentally fail.

He proposed a three-part plan: independent evaluators, competitor peer review, and a structured deceleration across all frontier labs. Sam Altman immediately chimed in, saying OpenAI agrees and will do the same. Elon Musk seconded it, calling for immediate oversight.

It looks like harmony. But developers who track the model APIs noticed something peculiar. 

At the exact same moment this essay hit the press, Anthropic's production branches leaked direct references to 'Claude Opus 5.2'. 

Not Sonnet. Opus. 

The heavyweight frontier beast that hasn't seen an update in months. Insiders are already reporting that Opus 5.2 isn't an incremental patch. It is built specifically around autonomous feedback loops—capable of running multi-hour terminal workflows without human intervention. 

So why preach caution in public while testing the most capable coding model on earth in private? Because Anthropic knows what OpenAI is about to drop.

Meet GPT-6 Sol. 

While the public is still wrestling with o1 and GPT-5 reasoning tiers, early testers are showing off what OpenAI's Sol engine can accomplish in zero-shot execution. 

Look at this demo from researcher Lyra. This is a fully functional, interactive 3D Star Wars Death Star simulator. Cockpit controls, orbital physics, deck exploration, custom WebGL shaders—generated in a single prompt, zero-shot, in under nine minutes.

Seventy-two thousand tokens of unbroken logic. 

We are not talking about writing a Python snake game or an HTML calculator anymore. This is autonomous software synthesis, where the AI acts like a senior graphics engineer, calculates shader mathematics, structures the state tree, and self-corrects runtime rendering bugs on the fly.

And Sol is only one piece of the puzzle. OpenAI's leaked roadmap reveals an entire cluster: GPT-6 Luna for low-latency edge devices, GPT-6 Sol for heavy engineering, and GPT-6 Astra—their candidate for multi-agent autonomous enterprise execution. 

Sam Altman can nod along with safety letters all he wants, but OpenAI cannot afford to yield the software engineering crown to Anthropic.

And that brings us to the elephant in the room that Silicon Valley refuses to talk about. 

Even if Anthropic and OpenAI signed a legally binding pact tomorrow to freeze all frontier models... it wouldn't matter. Because open weights have completely destroyed their moat.

Right now, developers are running DeepSeek V4.1 Flash at a fraction of a cent per prompt—delivering code quality that rivals proprietary models costing one hundred times more. 

Look at this benchmark test across model routers. In one-shot interactive generation, DeepSeek's cheap tier matched or beat closed models costing twenty times its API price. 

And the rumors around DeepSeek Code 2.0 are terrifying closed labs: a three-trillion parameter mixture-of-experts architecture, a native one-million token context window, and baked-in computer use. 

Built on open weights. Downloadable. Uncensorable. And completely outside Western regulatory reach.

If closed American labs pause for even six months, open weights will swallow the entire developer ecosystem whole.

That is precisely why Donald Trump and federal defense officials immediately shot down the idea of an AI slowdown this week. 

In their words: pausing American AI frontier development while rival nations ship open-weight models at lightspeed isn't safety—it's geopolitical suicide.

So what is the real takeaway here? 

Ignore what these CEOs say in press releases. Watch what they commit to GitHub. Watch what gets pushed to model routers. 

The race to recursive self-improvement isn't slowing down. It just moved underground. The gap between developers who use these autonomous coding agents and those who don't is about to become an uncrossable canyon. 

The frontier is moving—and nobody is hitting the brakes."""

async def generate():
    print("Generating voiceover using en-US-BrianMultilingualNeural...")
    communicate = edge_tts.Communicate(
        text=script_text,
        voice="en-US-BrianMultilingualNeural",
        rate="+0%",
        pitch="+0Hz"
    )
    await communicate.save(raw_mp3)
    print("Raw MP3 generated successfully!")

    print("Mastering audio via FFmpeg (loudnorm=I=-16:TP=-1.5:LRA=11)...")
    cmd = [
        ffmpeg_exe,
        "-y",
        "-i", raw_mp3,
        "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
        "-ar", "24000",
        "-ac", "1",
        mastered_wav
    ]
    subprocess.run(cmd, check=True)
    print(f"Mastered WAV created at: {mastered_wav}")

if __name__ == "__main__":
    asyncio.run(generate())
