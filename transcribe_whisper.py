import json
import os
import wave
import sys
import static_ffmpeg
static_ffmpeg.add_paths()

import whisper

audio_path = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\public\voiceover.wav"
output_json = r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\src\timestamps.json"

w = wave.open(audio_path, "rb")
total_duration = w.getnframes() / float(w.getframerate())
w.close()

print(f"Total audio duration: {total_duration:.2f}s ({int(round(total_duration * 30))} frames @ 30fps)")
print("Loading Whisper 'base' model...")
model = whisper.load_model("base")

print("Transcribing with word-level timestamps...")
result = model.transcribe(audio_path, word_timestamps=True, language="en")

segments = []
for i, s in enumerate(result['segments']):
    words = []
    if 'words' in s and s['words']:
        for w_item in s['words']:
            words.append({
                "word": w_item['word'],
                "start": round(w_item['start'], 2),
                "end": round(w_item['end'], 2),
                "probability": round(w_item.get('probability', 1.0), 2)
            })
    segments.append({
        "id": i,
        "start": round(s['start'], 2),
        "end": round(s['end'], 2),
        "text": s['text'].strip(),
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

print(f"Successfully saved {len(segments)} segments to {output_json}!")
