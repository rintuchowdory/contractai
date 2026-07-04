export async function requestGroqCompletion({
  messages,
  model = 'llama-3.1-8b-instant',
  temperature = 0.2,
  max_tokens = 700,
}) {
  const response = await fetch('/api/groq', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      model,
      temperature,
      max_tokens,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || 'Groq request failed.');
  }

  return data;
}
