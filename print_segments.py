import json

with open('src/timestamps.json', encoding='utf-8') as f:
    d = json.load(f)

print(f"Total Duration: {d['duration']}s | Total Frames: {d['totalFrames']}")
for s in d['segments']:
    sf = int(round(s['start'] * 30))
    ef = int(round(s['end'] * 30))
    print(f"[{s['id']:2d}] {sf:4d} -> {ef:4d} ({s['start']:5.1f}s - {s['end']:5.1f}s): {s['text']}")
