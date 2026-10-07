# EchoNotes

EchoNotes is a React Native + Expo study assistant that turns lecture audio into organized study material.

## What it does
- Record a lecture or import audio
- Transcribe audio through a secure backend
- Generate notes, summaries, exercises and flashcards
- Save study materials locally in SQLite
- Search the personal library
- Share saved study material as text
- Choose System, Light or Dark appearance

## Architecture
The mobile app never contains the OpenAI API key. It sends audio/transcript requests to the backend configured through `EXPO_PUBLIC_API_URL`.

The backend uses the OpenAI API for transcription and study-material generation.

## Setup
1. Install Node.js.
2. Run `npm install`.
3. Configure the backend environment variables in `backend/.env`.
4. Start the backend with `npm start` from the `backend` directory.
5. Set `EXPO_PUBLIC_API_URL` in the mobile app environment.
6. Run `npx expo start`.

Never put `OPENAI_API_KEY` in the mobile app.

