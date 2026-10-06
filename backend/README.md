# EchoNotes AI backend

The mobile app calls POST /transcribe for audio and POST /generate for study material.
Keep OPENAI_API_KEY only on the server. Never ship it in the Expo app.

Expected responses:
- /transcribe -> { "text": "..." }
- /generate -> { "notes": "...", "summary": "...", "exercises": [] }
