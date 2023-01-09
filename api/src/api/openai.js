const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY
});

const openai = new OpenAIApi(configuration)
const createPrompt = async(req, res) => {
    const prompt = req.params.prompt
    const completion = openai.createCompletion({
      model:'text-davinci-003',
      prompt: prompt,
      max_tokens: 1000
    })
    try {
        const data = await completion
        const resp = await data.data
        // const resp = await data.data.choices[0].text
        res.status(200).json(resp)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
    
   
    
}

module.exports = { createPrompt }



