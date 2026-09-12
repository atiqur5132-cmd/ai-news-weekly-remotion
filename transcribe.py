import json
import os
import static_ffmpeg
static_ffmpeg.add_paths()

import whisper

audio_path = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\public\voiceover.wav"
output_json = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\src\timestamps.json"

print("Loading Whisper model (base.en)...")
model = whisper.load_model("base.en")

print(f"Transcribing {audio_path}...")
result = model.transcribe(audio_path, word_timestamps=True, verbose=False)

segments = []
for s in result.get("segments", []):
    words = []
    for w in s.get("words", []):
        words.append({
            "word": w.get("word", ""),
            "start": round(w.get("start", 0), 2),
            "end": round(w.get("end", 0), 2),
            "probability": round(w.get("probability", 1.0), 2)
        })
    segments.append({
        "id": s.get("id"),
        "start": round(s.get("start", 0), 2),
        "end": round(s.get("end", 0), 2),
        "text": s.get("text", "").strip(),
        "words": words
    })

total_duration = segments[-1]["end"] if segments else 0
data = {
    "duration": round(total_duration, 2),
    "fps": 30,
    "totalFrames": int(round(total_duration * 30)),
    "segments": segments
}

os.makedirs(os.path.dirname(output_json), exist_ok=True)
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print(f"Saved timestamps to {output_json}. Duration: {total_duration}s ({data['totalFrames']} frames @ 30 FPS)")
