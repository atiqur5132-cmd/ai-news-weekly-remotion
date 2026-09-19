import json
import os
import wave
from faster_whisper import WhisperModel

audio_path = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\public\voiceover.wav"
output_json = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\src\timestamps.json"

# Get audio duration
w = wave.open(audio_path, "rb")
total_duration = w.getnframes() / float(w.getframerate())
w.close()

print(f"Loading faster-whisper model (base.en) for {total_duration:.2f}s audio...")
model = WhisperModel("base.en", device="cpu", compute_type="int8")

print(f"Transcribing {audio_path} with word-level timestamps...")
segments_gen, info = model.transcribe(audio_path, word_timestamps=True, language="en")

segments = []
for i, s in enumerate(segments_gen):
    words = []
    if s.words:
        for w in s.words:
            words.append({
                "word": w.word,
                "start": round(w.start, 2),
                "end": round(w.end, 2),
                "probability": round(w.probability, 2)
            })
    segments.append({
        "id": i,
        "start": round(s.start, 2),
        "end": round(s.end, 2),
        "text": s.text.strip(),
        "words": words
    })

data = {
    "duration": round(total_duration, 2),
    "fps": 30,
    "totalFrames": int(round(total_duration * 30)),
    "segments": segments
}

os.makedirs(os.path.dirname(output_json), exist_ok=True)
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print(f"Saved timestamps to {output_json}. Duration: {total_duration:.2f}s ({data['totalFrames']} frames @ 30 FPS)")
