#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { getComponent } from './tools/get-component.js';
import { getTokens } from './tools/get-tokens.js';
import { listComponents } from './tools/list-components.js';
import { search } from './tools/search.js';

// McpServer의 Zod 기반 복잡한 제네릭 타입 추론을 건너뜀 (TS2589 방지)
// biome-ignore lint/suspicious/noExplicitAny: MCP SDK deep type inference causes TS2589
const server = new McpServer({ name: 'ocean-road', version: '0.1.0' }) as any;

server.tool(
  'list_components',
  'Ocean Road 디자인 시스템의 컴포넌트 목록을 반환합니다.',
  {
    platform: z.enum(['web', 'next']).optional().describe('플랫폼 필터 (web | next). 생략 시 전체'),
  },
  async ({ platform }: { platform?: 'web' | 'next' }) => {
    const result = listComponents(platform);
    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
    };
  }
);

server.tool(
  'get_component',
  '컴포넌트 이름(slug)으로 props, 사용법, 예시 코드를 포함한 상세 문서를 반환합니다.',
  {
    slug: z.string().describe('컴포넌트 slug (예: button, text-input, modal)'),
  },
  async ({ slug }: { slug: string }) => {
    const component = getComponent(slug);
    if (!component) {
      return {
        content: [{ type: 'text', text: `컴포넌트 "${slug}"를 찾을 수 없습니다.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: 'text', text: component.content }],
    };
  }
);

server.tool(
  'get_design_tokens',
  '색상 및 타이포그래피 디자인 토큰을 반환합니다.',
  {
    category: z
      .enum(['color', 'typography', 'all'])
      .optional()
      .describe('토큰 카테고리 (color | typography | all). 기본값: all'),
  },
  async ({ category }: { category?: 'color' | 'typography' | 'all' }) => {
    const tokens = getTokens(category ?? 'all');
    return {
      content: [{ type: 'text', text: JSON.stringify(tokens, null, 2) }],
    };
  }
);

server.tool(
  'search',
  '키워드로 컴포넌트를 검색합니다. 이름, 설명, 문서 내용에서 검색합니다.',
  {
    query: z.string().describe('검색 키워드 (예: button, input, modal, 버튼)'),
  },
  async ({ query }: { query: string }) => {
    const results = search(query);
    if (results.length === 0) {
      return {
        content: [{ type: 'text', text: `"${query}"에 해당하는 컴포넌트를 찾을 수 없습니다.` }],
      };
    }
    return {
      content: [{ type: 'text', text: JSON.stringify(results, null, 2) }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
