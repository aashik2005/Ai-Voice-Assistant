import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = "AIzaSyAp59vcGfVnKb7sQPm2EGX1Mq0w-a1YYgM";

const genAI = new GoogleGenerativeAI(apiKey);


const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",  
});

const generationConfig = {
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 50,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default run;
