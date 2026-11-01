import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {Message} from 'ollama';
import {createConversationMessages, determineTaskType} from './utils/message-utils';
import {GENERAL_ASSISTANT_PROMPT} from './utils/app-constants';
import {runAgent} from './agent';


async function chat(userInput: string, messages: Message[]): Promise<void> {
  messages.push({
    role: 'user',
    content: userInput,
  });
  try {
    const response = await runAgent(messages, determineTaskType(userInput));
    console.log(`\nAssistant: ${response}\n********END OF LINE, NERD********\n`);
    return;
  } catch (error) {
    console.error(`Agent run failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
  console.log('\nAssistant: Sorry, I couldn\'t answer that.');
}


async function main(): Promise<void> {
  const rl = readline.createInterface({input, output});

  console.log('Local AI chat. Type "exit" to quit.\n');
  const messages: Message[] = createConversationMessages(GENERAL_ASSISTANT_PROMPT)

  try {
    while (true) {
      const question = await rl.question('You: ');

      if (question.trim().toLowerCase() === 'exit') break;
      if (!question.trim()) continue;

      try {
        await chat(question, messages);
      } catch (error) {
        console.error('Request failed:', error);
      }
    }
  } catch (error) {
    console.error('Unknown Error:', error);
  } finally {
    rl.close();
  }
}

main().catch(console.error);
