import ora from "ora";
import { youSay, botSay } from "./say";
import { askConsoleBot } from "./prompt";
import Gemini from "./gemini";

const getHistory = (userParts: string, modelParts: string, history:any) => {
    const data = 
  [
    {
      role: "user",
      parts: "Hello, I have 2 dogs in my house.",
    },
    {
      role: "model",
      parts: "Great to meet you. What would you like to know?",
    },
  ];
};

const run = async (message: string) => {
  youSay(message);
  const spinner = ora("Réponse de Console Bot...").start();
  const messageGemini = await Gemini(message);
  spinner.stop();
  botSay(messageGemini);
};

const main = async () => {
  const getHistory = [];
  while (true) {
    const message = await askConsoleBot("Votre message");
    if (message === "exit") {
      break;
    }
    await run(message);
  }
  console.log("Fin du programme");
};

main();
