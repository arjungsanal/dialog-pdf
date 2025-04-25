# Dialog PDF - Chat with Your PDFs

An AI-powered application that allows users to have interactive conversations with their PDF documents using GPT-4 and vector embeddings.

## Overview

Dialog PDF transforms the way you interact with PDF documents by leveraging advanced AI technology. Upload any PDF and start a natural conversation about its contents. The application processes your document, creates semantic embeddings, and uses GPT-4 to generate accurate, context-aware responses to your questions.

## Features

- 📄 PDF document processing and chunking
- 💾 Vector storage using Pinecone
- 🤖 AI-powered conversations using OpenAI GPT-4
- 🔐 Secure authentication with Clerk
- 📦 Document storage using Firebase
- ⚡ Built with Next.js and TypeScript
- 🔍 Semantic search capabilities
- 📱 Responsive design
- 🔄 Real-time chat updates
- 💨 Fast and efficient document processing

## How It Works

1. **Document Upload**: Users upload their PDF documents through a secure interface
2. **Processing**: The system chunks the document into meaningful segments
3. **Embedding Generation**: Creates vector embeddings using OpenAI's embedding model
4. **Storage**: Stores embeddings in Pinecone for efficient retrieval
5. **Chat Interface**: Users can ask questions about their documents
6. **AI Response**: GPT-4 generates responses based on relevant document context

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Clerk](https://clerk.com/) - Authentication
- [Firebase](https://firebase.google.com/) - Document storage
- [Pinecone](https://www.pinecone.io/) - Vector database
- [LangChain](https://js.langchain.com/) - LLM framework
- [OpenAI](https://openai.com/) - AI model provider

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account
- Pinecone account
- OpenAI API key
- Clerk account

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
PINECONE_API_KEY=
OPENAI_API_KEY=
FIREBASE_API_KEY=
FIREBASE_ADMIN_KEY=
FIREBASE_STORAGE_BUCKET=
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/dialog-pdf.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
dialog-pdf/
├── app/                # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions and configurations
├── actions/           # Server actions
├── public/            # Static files
└── types/             # TypeScript type definitions
```

## API Integration

The application integrates with several APIs:
- OpenAI API for embeddings and chat completion
- Pinecone API for vector storage
- Firebase for document storage
- Clerk for authentication

## Performance Considerations

- Efficient document chunking for optimal processing
- Vector similarity search for quick context retrieval
- Streaming responses for better user experience
- Caching mechanisms for frequently accessed data

## Security Features

- Secure authentication with Clerk
- Protected API routes
- Encrypted data storage
- Secure file handling

## Deployment

The application is live at [Dialog PDF](https://dialog-pdf.vercel.app/)

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
