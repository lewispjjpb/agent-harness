
### This is a project for me to learn agent harnesses.  Key points include:
- Connecting to models
- Creating an inference engine
- Learning the chat → model → tool calls cycle
- Setting up various example sync and async tool calls
- Basic model comparison for tasks

### Because this is a dev project, to run it you must have node already installed on your local machine.  To run:
1. Download and install at least one model of your choice; I used Ollama because it's a good starting point.
   - https://ollama.com/download/mac (or desired OS).
2. Clone this repository.
3. From your terminal, type `npm i` from the project root directory to install dependencies.
4. Create an `.env` file in your project root directory.  Fill it in with the values provided<br> in `env.example`  The url and endpoints should work for default installs, though you will<br> need to make sure your model name matches with what you downloaded from Ollama.
5. From your terminal, type `npm run dev`.

If Ollama is listening on your machine, you should be able to chat away!

## This is an ongoing project, check back for updates!
