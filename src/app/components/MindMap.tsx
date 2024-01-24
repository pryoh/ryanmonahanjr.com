// components/MindMap.tsx
"use client";
import React, { useRef, useEffect } from "react";
import { select, tree, hierarchy, HierarchyNode } from "d3";

interface MindMapNode {
  name: string;
  children?: MindMapNode[];
}

interface MindMapProps {
  data: MindMapNode;
}

const MindMap: React.FC<MindMapProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const root: HierarchyNode<MindMapNode> = hierarchy(data);
      const treeLayout = tree<MindMapNode>();
      treeLayout.size([800, 800]);

      const svg = select(svgRef.current);
      const links = svg.selectAll(".link").data(treeLayout(root).links());
      const nodes = svg.selectAll(".node").data(root.descendants() as any);

      links
        .enter()
        .append("path")
        .attr("class", "stroke-current text-gray-500")
        .attr(
          "d",
          (d) => `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`
        );

      nodes
        .enter()
        .append("circle")
        .attr("class", "fill-blue-500 text-white")
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y)
        .attr("r", 70); // Set the radius for all nodes to 70

      nodes
        .enter()
        .append("text")
        .attr("class", "font-semibold text-sm text-black")
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y)
        .attr("dy", 5)
        .attr("text-anchor", "middle")
        .text((d: any) => d.data.name);

      // Calculate the center of the mind map dynamically
      const svgBoundingBox = svg.node()?.getBoundingClientRect();
      const mindMapCenterX = svgBoundingBox?.width
        ? svgBoundingBox.width / 2
        : 0;
      const mindMapCenterY = svgBoundingBox?.height
        ? svgBoundingBox.height / 2
        : 0;

      // Adjust the position of the mind map elements to be centered
      nodes.attr(
        "transform",
        (d: any) => `translate(${d.x - mindMapCenterX},${d.y - mindMapCenterY})`
      );
      links.attr(
        "transform",
        (d: any) =>
          `translate(${d.source.x - mindMapCenterX},${
            d.source.y - mindMapCenterY
          })`
      );
    }
  }, [data]);

  return <svg ref={svgRef} className="mindmap-svg w-full h-full" />;
};

export default MindMap;
