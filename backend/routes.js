const express = require('express');
const router = express.Router();
const Replicate = require('replicate');

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Example route
router.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

// Add more routes here as needed
router.post('/generate', async (req, res) => {
  try {
    const { 
      prompt, 
      aspect_ratio, 
      num_outputs, 
      num_inference_steps, 
      guidance, 
      seed, 
      output_format, 
      output_quality, 
      disable_safety_checker 
    } = req.body;
    
    console.log("Received request:", req.body);

    const input = {
      prompt,
      aspect_ratio,
      num_outputs,
      num_inference_steps,
      guidance,
      seed,
      output_format,
      output_quality,
      disable_safety_checker,
    };

    console.log("Sending to Replicate:", input);

    const output = await replicate.run(
      "black-forest-labs/flux-dev",
      { input }
    );

    console.log("Received from Replicate:", output);

    res.json({ imageUrl: output[0] });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
});

console.log('API Token:', process.env.REPLICATE_API_TOKEN);

module.exports = router;
