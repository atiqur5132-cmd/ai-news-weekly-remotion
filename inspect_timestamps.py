import json

with open(r"C:\Users\atiqu\.gemini\antigravity\scratch\ai-news-weekly\src\timestamps.json", "r", encoding="utf-8") as f:
    d = json.load(f)

print(f"Total Duration: {d['duration']}s, Total Frames: {d['totalFrames']}")
for s in d['segments']:
    start_f = int(round(s['start'] * 30))
    end_f = int(round(s['end'] * 30))
    print(f"{s['id']:02d}: [{s['start']:6.2f}s - {s['end']:6.2f}s | f:{start_f:5d} - {end_f:5d}] {s['text']}")
