# @coldsurf/ocean-road-mcp

[Ocean Road](https://docs.ocean-road.coldsurf.io) 디자인 시스템용 MCP(Model Context Protocol) 서버입니다.

Claude Code, Cursor, VS Code Copilot 등 AI 코딩 도구에서 Ocean Road 컴포넌트를 네이티브하게 이해하고 활용할 수 있게 합니다.

## 제공 Tools

| Tool | 설명 |
|------|------|
| `list_components` | 플랫폼(`web` \| `next`) 필터로 컴포넌트 목록 반환 |
| `get_component` | slug로 props, 사용법, 예시 코드 반환 |
| `get_design_tokens` | 색상/타이포그래피 토큰 조회 (`color` \| `typography` \| `all`) |
| `search` | 키워드로 컴포넌트 검색 |

## 연결 방법

### Claude Code

`.claude/settings.json` (또는 `settings.local.json`):

```json
{
  "mcpServers": {
    "ocean-road": {
      "command": "npx",
      "args": ["-y", "@coldsurf/ocean-road-mcp"]
    }
  }
}
```

### Cursor

`.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "ocean-road": {
      "command": "npx",
      "args": ["-y", "@coldsurf/ocean-road-mcp"]
    }
  }
}
```

### Claude Desktop

`claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ocean-road": {
      "command": "npx",
      "args": ["-y", "@coldsurf/ocean-road-mcp"]
    }
  }
}
```

## 사용 예시

MCP 서버 연결 후 AI 도구에서 다음과 같이 활용할 수 있습니다:

```
Button 컴포넌트 문서 보여줘
→ get_component("button") 호출

텍스트 입력 관련 컴포넌트 찾아줘
→ search("input") 호출

Next.js 전용 컴포넌트 목록 알려줘
→ list_components({ platform: "next" }) 호출

색상 토큰 목록 보여줘
→ get_design_tokens({ category: "color" }) 호출
```

## LLM Docs

정적 문서도 제공합니다:

- **llms.txt** (manifest): `https://docs.ocean-road.coldsurf.io/llms.txt`
- **컴포넌트 문서**: `https://docs.ocean-road.coldsurf.io/components/{slug}.md`
- **Next.js 컴포넌트**: `https://docs.ocean-road.coldsurf.io/next/{slug}.md`
- **디자인 토큰**: `https://docs.ocean-road.coldsurf.io/design-tokens.md`
