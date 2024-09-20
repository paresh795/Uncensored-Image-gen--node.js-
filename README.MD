# Flux Realistic Image Generator [UNCENSORED]

This project is a web application that generates realistic images using the Flux AI model. It features a Next.js frontend with ShadCN UI components and a Node.js backend with Express.

## Features

- Generate realistic images based on text prompts
- Customize image generation parameters:
  - Aspect ratio
  - Number of outputs
  - Inference steps
  - Guidance
  - Seed
  - Output format and quality
- Option to disable safety checker for uncensored results
- Responsive design with a starry background

## Tech Stack

- Frontend:
  - Next.js 14
  - React 18
  - ShadCN UI components
  - Tailwind CSS
- Backend:
  - Node.js
  - Express
  - Replicate API for AI image generation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/flux-image-generator.git
   cd flux-image-generator
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the backend directory with your Replicate API token:
   ```
   REPLICATE_API_TOKEN=your_api_token_here
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node index.js
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Enter a text prompt describing the image you want to generate.
2. Adjust the generation parameters as desired.
3. Click the "Generate Image" button.
4. Wait for the image to be generated and displayed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Replicate](https://replicate.com/) for providing the Flux AI model
- [ShadCN UI](https://ui.shadcn.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) for the frontend framework
