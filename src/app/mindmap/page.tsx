// pages/mindmap.tsx
"use client";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Page() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const centralNodeRef = useRef<SVGCircleElement | null>(null);
  const childNode1Ref = useRef<SVGCircleElement | null>(null);
  const childNode2Ref = useRef<SVGCircleElement | null>(null);
  const childNode3Ref = useRef<SVGCircleElement | null>(null);
  const childNode4Ref = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    // Update window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial window size
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="flex-1 flex items-center justify-center w-full overflow-hidden">
        <Navbar />
        <svg
          className="mindmap-svg"
          width={windowSize.width}
          height={windowSize.height}
        >
          {/* Central Node */}
          <circle
            ref={centralNodeRef}
            cx={windowSize.width / 2}
            cy={windowSize.height / 2}
            r={Math.min(windowSize.width, windowSize.height) * 0.2}
            className="fill-blue-500 text-white"
          />
          <text
            x={windowSize.width / 2}
            y={windowSize.height / 2}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="font-semibold text-sm text-black"
          >
            Central Node Text
          </text>

          {/* Branch and Child Node 1 */}
          <line
            x1={windowSize.width / 2}
            y1={windowSize.height / 2}
            x2={windowSize.width / 2 + 100}
            y2={windowSize.height / 2}
            className="stroke-current text-gray-500"
          />
          <circle
            ref={childNode1Ref}
            cx={windowSize.width / 2 + 100}
            cy={windowSize.height / 2}
            r={Math.min(windowSize.width, windowSize.height) * 0.1}
            className="fill-green-500 text-white"
          />
          <text
            x={windowSize.width / 2 + 100}
            y={windowSize.height / 2}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="font-semibold text-sm text-black"
          >
            Child Node 1 Text
          </text>

          {/* Branch and Child Node 2 */}
          <line
            x1={windowSize.width / 2}
            y1={windowSize.height / 2}
            x2={windowSize.width / 2 - 100}
            y2={windowSize.height / 2}
            className="stroke-current text-gray-500"
          />
          <circle
            ref={childNode2Ref}
            cx={windowSize.width / 2 - 100}
            cy={windowSize.height / 2}
            r={Math.min(windowSize.width, windowSize.height) * 0.1}
            className="fill-yellow-500 text-white"
          />
          <text
            x={windowSize.width / 2 - 100}
            y={windowSize.height / 2}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="font-semibold text-sm text-black"
          >
            Child Node 2 Text
          </text>

          {/* Branch and Child Node 3 */}
          <line
            x1={windowSize.width / 2}
            y1={windowSize.height / 2}
            x2={windowSize.width / 2}
            y2={windowSize.height / 2 + 100}
            className="stroke-current text-gray-500"
          />
          <circle
            ref={childNode3Ref}
            cx={windowSize.width / 2}
            cy={windowSize.height / 2 + 100}
            r={Math.min(windowSize.width, windowSize.height) * 0.1}
            className="fill-red-500 text-white"
          />
          <text
            x={windowSize.width / 2}
            y={windowSize.height / 2 + 100}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="font-semibold text-sm text-black"
          >
            Child Node 3 Text
          </text>

          {/* Branch and Child Node 4 */}
          <line
            x1={windowSize.width / 2}
            y1={windowSize.height / 2}
            x2={windowSize.width / 2}
            y2={windowSize.height / 2 - 100}
            className="stroke-current text-gray-500"
          />
          <circle
            ref={childNode4Ref}
            cx={windowSize.width / 2}
            cy={windowSize.height / 2 - 100}
            r={Math.min(windowSize.width, windowSize.height) * 0.1}
            className="fill-purple-500 text-white"
          />
          <text
            x={windowSize.width / 2}
            y={windowSize.height / 2 - 100}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="font-semibold text-sm text-black"
          >
            Child Node 4 Text
          </text>
        </svg>
      </main>
    </div>
  );
}
