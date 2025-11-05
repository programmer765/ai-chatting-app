import axios from 'axios';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const url = process.env.GEMINI_API_URL;
    const apiKey = process.env.GEMINI_API_KEY;
    if(url === undefined || apiKey === undefined) {
      return new Response('API configuration is missing', { status: 500 });
    }
    const response = await axios.post(url, 
      {
        "contents": [
          {
            "parts": [
              {
                "text": prompt
              }
            ]
          }
        ]
      }, 
      { 
        headers: 
        { 
          'x-goog-api-key': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        } 
      }
    );
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Error generating response', { status: 500 });
  }
}
