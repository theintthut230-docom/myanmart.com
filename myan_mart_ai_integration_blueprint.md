# Myan Mart – AI-Powered E-Commerce Platform Specification

This document provides a technical specification and architectural plan for upgrading the **Myan Mart** (`myanmart.com`) e-commerce platform with Artificial Intelligence (AI) and Large Language Model (LLM) capabilities to enhance search, customer service, and product recommendations.

---

## 1. Project Overview & Objectives

* **Platform Name:** Myan Mart
* **Domain:** `myanmart.com`
* **Target Categories:** Electronics, Fashion, Beauty & Personal Care, Home & Living, Groceries, Toys & Outdoor.
* **Core Value Proposition:** A modern e-commerce storefront combined with intelligent AI shopping assistants, visual search, personalized recommendations, and automated customer support.

---

## 2. Recommended Tech Stack Architecture

| Layer | Technology Choice | Function / Rationale |
| :--- | :--- | :--- |
| **Frontend** | Next.js 14+ / React 18+ | Server Components, SEO optimization, SSR for fast product listing load times |
| **Styling** | Tailwind CSS + Shadcn UI | Responsive layout for mobile and desktop shoppers |
| **State & Cache** | Zustand / TanStack Query | Client state management and cart caching |
| **Backend API** | Node.js (Next.js App Router) | Asynchronous API handling for streaming AI interactions |
| **Database** | PostgreSQL (Supabase / Neon) | Relational database for products, users, orders, and `pgvector` for semantic search |
| **Vector Search** | Pinecone / Supabase Vector | Storing product embeddings for AI semantic product search and image search |
| **AI Framework** | Vercel AI SDK / OpenAI API | Intelligent shopping agent, chat streaming, and prompt execution |
| **Auth & Payments** | Clerk / KBZPay / WavePay | Authentication and local/international payment integrations |

---

## 3. Directory Structure

```text
myan-mart-ai/
├── public/                  # Assets, brand logos, product placeholders
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/
│   │   │   ├── ai/          # AI endpoints (chat assistant, semantic search)
│   │   │   ├── cart/        # Shopping cart API
│   │   │   └── products/    # Product catalog endpoints
│   │   ├── (shop)/          # Main storefront routes (catalog, product detail)
│   │   ├── checkout/        # Order placement pages
│   │   └── page.tsx         # Storefront landing page
│   ├── components/          # Reusable UI & AI components
│   │   ├── ai/              # AI Shopping Assistant Chat, Visual Search component
│   │   ├── catalog/         # Product cards, category grids, filter panels
│   │   └── ui/              # Buttons, inputs, modals
│   ├── lib/                 # Core utilities & API clients
│   │   ├── ai-client.ts     # AI model configuration
│   │   ├── db.ts            # Database ORM client
│   │   └── embeddings.ts    # Utility for converting product metadata to vector embeddings
│   ├── hooks/               # Custom React hooks (useCart, useAiChat)
│   └── types/               # TypeScript interfaces
├── .env.example             # Environment variables
└── package.json
```

---

## 4. Key AI Capabilities & Implementations

### 4.1 AI Shopping Assistant API Route (`src/app/api/ai/chat/route.ts`)

```typescript
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

export const runtime = 'edge';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessage = {
    role: 'system',
    content: `You are the friendly AI Assistant for Myan Mart (myanmart.com). 
    Help users find electronics, fashion, beauty, home goods, and groceries. 
    Be polite, concise, and offer helpful product suggestions based on user queries.`,
  };

  const response = await openai.createChatCompletion({
    model: 'gpt-4o',
    stream: true,
    messages: [systemMessage, ...messages],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
```

### 4.2 AI Customer Assistant Widget (`src/components/ai/shopping-assistant.tsx`)

```tsx
'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export default function ShoppingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/ai/chat',
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 font-bold"
        >
          💬 Ask Myan Mart AI
        </button>
      ) : (
        <div className="w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col">
          <div className="p-3 bg-red-600 text-white rounded-t-lg flex justify-between items-center">
            <span className="font-semibold text-sm">Myan Mart Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-xs text-white">✕</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-2 rounded-md ${
                  m.role === 'user' ? 'bg-red-100 text-gray-900 text-right' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-2 border-t flex gap-1">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Looking for laptops, shoes...?"
              className="flex-1 border p-1 text-xs rounded"
            />
            <button type="submit" disabled={isLoading} className="bg-red-600 text-white px-2 text-xs rounded">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
```

---

## 5. Security & E-Commerce Best Practices

1. **Local Payment Gateway Security:** Ensure server-side validation for all local payment notifications (KBZPay, WavePay, credit cards).
2. **Vector-Based Semantic Search:** Use embedding models to allow users to search naturally (e.g., *"comfortable red running shoes for men"*) rather than relying only on exact keyword matching.
3. **Product Catalog Synchronization:** Automatically index newly added products into the Vector Database so the AI assistant always recommends in-stock items.
4. **Rate Limiting:** Implement API route rate-limiting to prevent automated scraping and abuse of the AI endpoints.