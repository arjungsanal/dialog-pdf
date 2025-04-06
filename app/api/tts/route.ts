import { NextResponse } from 'next/server';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = '21m00Tcm4TlvDq8ikWAM'; // Get this from ElevenLabs dashboard

export async function POST(req: Request) {
    try {
        const { text } = await req.json();

        const response = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'xi-api-key': ELEVENLABS_API_KEY!,
                },
                body: JSON.stringify({
                    text,
                    model_id: 'eleven_monolingual_v1',
                    voice_settings: {
                        stability: 0.5,
                        similarity_boost: 0.5,
                    },
                }),
            }
        );

        if (!response.ok) throw new Error('ElevenLabs API request failed');

        const audioBuffer = await response.arrayBuffer();
        return new NextResponse(audioBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
            },
        });
    } catch (error) {
        console.error('TTS error:', error);
        return NextResponse.json({ error: 'TTS failed' }, { status: 500 });
    }
}