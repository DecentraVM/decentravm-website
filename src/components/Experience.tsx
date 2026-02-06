"use client";

import { useState, useEffect } from "react";

const tabs = [
  {
    id: "sandboxes",
    icon: "\u2699",
    label: "Sandboxes",
    file: "sandbox.js",
    desc: "Give your agent secure, fully working environment with literally 3 lines of code",
    code: `// Install the SDK: npm install @dvmcodes/sandbox-sdk

import { SandboxSDK } from '@dvmcodes/sandbox-sdk';

// Initialize the client with your API key
const client = new SandboxSDK({
  apiKey: "your-api-key"
});

// Create a new sandbox environment
const sandbox = await client.sandboxes.create({
  image: 'python:3.11',
  resources: { cpus: 2, memory: '1GB' } // 2 CPUs, 1GB RAM
});

// Execute a command inside the sandbox
const result = await sandbox.execute(sandbox.id, {
  command: 'python --version'
});

// Output the result
console.log(result.stdout); // Should display: Python 3.11`,
  },
  {
    id: "volumes",
    icon: "\u2702",
    label: "Volumes",
    file: "volumes.js",
    desc: "Attach persistent storage on the fly to your sandbox",
    code: `import { SandboxSDK } from '@dvmcodes/sandbox-sdk';

// Initialize the Sandbox client with your API key
const client = new SandboxSDK({
  apiKey: "your-api-key"
});

// Create a persistent volume
const volume = await client.volumes.create({
  name: 'my-data',
  size: '10GB'
});

// Launch a sandbox and attach the volume
const sandbox = await client.sandboxes.create({
  image: 'python:3.11',
  volumes: [{ id: volume.id, mountPath: '/data' }]
});

console.log('Volume successfully mounted at /data');`,
  },
  {
    id: "snapshots",
    icon: "\u2630",
    label: "Snapshots",
    file: "snapshots.js",
    desc: "Agent acting weird? Restore your sandbox to any point in time without data loss",
    code: `import { SandboxSDK } from '@dvmcodes/sandbox-sdk';

// Initialize the Sandbox client with your API key
const client = new SandboxSDK({
  apiKey: "your-api-key"
});

// Take a snapshot before performing risky actions
const snapshot = await client.snapshots.create({
  sandboxId: sandbox.id,
  name: 'pre-experiment'
});

// Roll back to the snapshot if needed
await client.sandboxes.restore({
  sandboxId: sandbox.id,
  snapshotId: snapshot.id
});

console.log('Sandbox has been successfully restored');`,
  },
  {
    id: "byod",
    icon: "\u25CE",
    label: "Bring your own data",
    file: "upload.js",
    desc: "No RAG? No Problem. Upload your data and let your agent access it with ease",
    code: `import { SandboxSDK } from '@dvmcodes/sandbox-sdk';

// Initialize the client with your API key
const client = new SandboxSDK({
  apiKey: "your-api-key"
});

// Upload a file to the sandbox
await client.files.upload({
  sandboxId: sandbox.id,
  path: '/workspace/data.csv',
  content: fileBuffer
});

// Execute a Python script on the uploaded file
const result = await sandbox.execute(sandbox.id, {
  command: 'python analyze.py /workspace/data.csv'
});

// Display the output
console.log(result.stdout);`,
  },
];

function highlightCode(code: string): string {
  return code
    .replace(
      /(\/\/.*)/g,
      '<span class="code-comment">$1</span>'
    )
    .replace(
      /\b(import|from|const|await|new)\b/g,
      '<span class="code-keyword">$1</span>'
    )
    .replace(
      /('[^']*'|"[^"]*")/g,
      '<span class="code-string">$1</span>'
    )
    .replace(
      /\b(\d+)\b/g,
      '<span class="code-num">$1</span>'
    )
    .replace(
      /\.(\w+)\(/g,
      '.<span class="code-func">$1</span>('
    );
}

export default function Experience() {
  const [active, setActive] = useState("sandboxes");
  const [mounted, setMounted] = useState(false);
  const activeTab = tabs.find((t) => t.id === active)!;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="experience" className="py-24 bg-[#2c2c2c] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-3">
          Experience
        </p>
        <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] max-w-[720px] mb-4">
          From Prototype to Production — Fast, Secure, with Full Interoperability
        </h2>
        <div className="flex gap-3 mb-12">
          <a
            href="https://docs.decentravm.top/"
            target="_blank"
            className="inline-flex px-8 py-3 rounded-none text-sm font-semibold bg-white text-black border border-white hover:bg-transparent hover:text-white hover:-translate-y-0.5 transition-all"
          >
            Get started
          </a>
          <a
            href="https://docs.decentravm.top/"
            target="_blank"
            className="inline-flex px-8 py-3 rounded-none text-sm font-semibold bg-transparent text-white border border-white/20 hover:bg-white hover:text-black hover:-translate-y-0.5 transition-all"
          >
            See docs
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Tabs with descriptions */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`text-left px-5 py-4 rounded-none border transition-all cursor-pointer ${
                  active === tab.id
                    ? "bg-white/[0.08] border-white/20"
                    : "bg-transparent border-transparent hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{tab.icon}</span>
                  <span className="font-bold text-base text-white">{tab.label}</span>
                </div>
                <p className={`text-sm mt-1 transition-opacity ${active === tab.id ? "text-white/50" : "text-white/20"}`}>{tab.desc}</p>
              </button>
            ))}
          </div>

          {/* Right: Code */}
          <div className="bg-[#1c1c1c] border border-white/[0.08] rounded-none overflow-hidden h-[500px] flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.08] shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-white/40">{activeTab.file}</span>
            </div>
            <pre className="p-5 overflow-auto font-mono text-[0.82rem] leading-[1.7] text-[#c4b5fd] flex-1">
              {mounted ? (
                <code dangerouslySetInnerHTML={{ __html: highlightCode(activeTab.code) }} />
              ) : (
                <code>{activeTab.code}</code>
              )}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
