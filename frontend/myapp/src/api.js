export async function getQuestions() {
  const response = await fetch('http://localhost:3001/api/questions');
  if (!response.ok) throw new Error('Failed to load questions');
  return await response.json();
}
