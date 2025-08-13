# The Next.js 15 Streaming Handbook — SSR, React Suspense, and Loading Skeleton

### By Nguyen Bao Huy

Next.js is one of the most powerful and intelligent web frameworks available today. However, many developers struggle to fully utilize its advanced features due to their complexity. This handbook dives deep into one such advanced feature: **Streaming**. Rooted in React.js, when paired with Next.js, streaming can significantly enhance the user experience (UX) of any web application.

By the end of this guide, you’ll understand what streaming is, how it works, and how to implement it to create blazing-fast, smooth user experiences. Let’s dive in!

---

## What We’ll Cover

- **Prerequisites**
- **What is Streaming?**
- **Why Streaming Matters**
- **How Streaming Works in Next.js 15**
- **Project Setup — Demo SSR Page**
  - Home Page
  - Streaming Demo Page
  - ToolsCards Component
  - Simulate Fake Delay With getTools() Function
  - Installing Shadcn Card Component
  - IconCard Component
  - IconComponent
  - LikeButton Client Component
- **Discovering SSR Issues – UX and False Interaction**
  - Breaking Down SSR Issues
- **How Streaming Can Solve The Problem**
- **Two Types of Streaming in Next.js**
- **Next.js Automatic Streaming – loading.js**
  - Create the loading.js File
  - Structure the Loading Skeleton Component
  - CardSkeleton Component
  - Render the Cards
  - How Automatic Streaming was Applied
  - Issues with Next.js Automatic Streaming
- **Manual Streaming with Custom Suspense Boundary**
  - Remove Promise.all()
  - How to Implement Suspense for Concurrent Data Fetching
- **Summary of Steps to Implement Manual Streaming**
- **Final Demo**
- **Forcing Dynamic Rendering for Effective Streaming**
- **Summary**

---

## Prerequisites

To follow this guide, you should have:

- Basic understanding of React.js (components, hooks like `useState`, and props).
- Familiarity with Next.js concepts (routing, app directory, server/client components).
- Knowledge of Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js.
- Experience with asynchronous JavaScript (Promises, async/await).
- Basic understanding of React Suspense for asynchronous rendering.
- A working development environment with Node.js and npm/yarn installed.
- Optional: Familiarity with UI libraries like shadcn/ui.

---

## What is Streaming?

Streaming allows a web page to load incrementally, sending blocks of HTML to the browser as they become ready, rather than waiting for the entire page to render. The page shell loads almost instantly, with content like images, text, and widgets streaming in piece by piece. This creates a snappier, more responsive user experience.

From the user’s perspective, streaming eliminates long blank pauses, showing a skeleton or header immediately, followed by the rest of the UI as it’s ready.

---

## Why Streaming Matters

Streaming offers several benefits:

- **Perceived Speed**: Initial chunks render quickly, giving users something to see right away.
- **Progressive Hydration**: React hydrates interactive chunks as they arrive, reducing idle time.
- **Better UX**: Users can interact with parts of the page while others load.
- **Elegant Fallbacks**: Lightweight placeholders (loading skeletons) display while data is pending, seamlessly swapping in real content.

By breaking HTML into a stream, you optimize network and rendering performance, leveraging React 18’s server-side streaming APIs.

---

## How Streaming Works in Next.js 15

Next.js 15 builds on React 18’s streaming capabilities, enabling minimal setup for powerful results. Here’s how it works:

1. **Server Components & Suspense**: Next.js renders Server Components on the server, pausing at Suspense boundaries to flush HTML to the browser incrementally.
2. **Automatic vs Manual Streaming**:
   - **Automatic**: Use a `loading.js` file to render a skeleton UI while the page loads.
   - **Manual**: Wrap specific UI parts in `<Suspense>` for granular control.
3. **Chunked HTML over HTTP**: Next.js streams HTML chunks via Node’s HTTP response streaming, with the browser parsing and React hydrating incrementally.
4. **Seamless Hydration**: React hydrates chunks as they arrive, avoiding blocking waterfalls.

This guide will demonstrate both automatic and manual streaming, addressing SSR pitfalls like false interactions and poor UX.

---

## Project Setup — Demo SSR Page

Let’s create a simple Next.js project to demonstrate streaming.

Run the following commands:

```bash
npx create-next-app@latest nextjs-streaming-demo
cd nextjs-streaming-demo
npm run dev
```

### Home Page

Update `app/page.js` with the following code:

<xaiArtifact artifact_id="9ca260de-81c1-4b13-85df-1791e93f1d71" artifact_version_id="3161effb-224b-4b95-a127-88d235addef3" title="page.js" contentType="text/javascript">
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
return (

<div className="w-full min-h-screen flex justify-center items-center flex-col gap-24">
<div>
<h1 className="text-3xl lg:text-5xl font-bold text-center">
Next.js Streaming
</h1>
</div>
<Link href="/streaming-demo" prefetch={false}>
<Button size="lg" className="cursor-pointer">
Streaming Demo
</Button>
</Link>
</div>
);
}
