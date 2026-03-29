# @coldsurf/ocean-road-mcp

[![npm version](https://img.shields.io/npm/v/@coldsurf/ocean-road-mcp)](https://www.npmjs.com/package/@coldsurf/ocean-road-mcp)
[![npm downloads](https://img.shields.io/npm/dm/@coldsurf/ocean-road-mcp)](https://www.npmjs.com/package/@coldsurf/ocean-road-mcp)

[Ocean Road](https://docs.ocean-road.coldsurf.io) 디자인 시스템용 MCP(Model Context Protocol) 서버입니다.

Claude Code, Cursor, VS Code Copilot 등 AI 코딩 도구에서 Ocean Road 컴포넌트를 네이티브하게 이해하고 활용할 수 있게 합니다.

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

## 제공 Tools

### `list_components`

플랫폼 필터로 컴포넌트 목록을 반환합니다.

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `platform` | `'web' \| 'next'` (optional) | 플랫폼 필터. 생략 시 전체 반환 |

```
list_components()
→ Button, Text, TextInput, Modal ... (28개)

list_components({ platform: "next" })
→ AppHeader, AppFooter, GlobalLink, NewTabLink, RouteLoading, GridCardList
```

### `get_component`

컴포넌트 slug로 props, 사용법, 예시 코드를 포함한 상세 문서를 반환합니다.

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `slug` | `string` | 컴포넌트 slug |

```
get_component({ slug: "button" })
→ # Button
  기본 버튼 컴포넌트입니다...
  ## Props
  | prop | 타입 | 기본값 | 설명 |
  ...

get_component({ slug: "text-input" })
get_component({ slug: "modal" })
get_component({ slug: "app-header" })
```

### `get_design_tokens`

색상 및 타이포그래피 디자인 토큰을 반환합니다.

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `category` | `'color' \| 'typography' \| 'all'` (optional) | 토큰 카테고리. 기본값: `all` |

```
get_design_tokens({ category: "color" })
→ {
    background: [{ js: "semantics.color.background[1]", css: "var(--color-background-1)", light: "#ffffff", dark: "#000000" }, ...],
    foreground: [...],
    border: [...],
    dimmed: [...]
  }

get_design_tokens({ category: "typography" })
→ {
    heading1: { fontSize: "var(--typography-variant-heading1-font-size)", ... },
    body1: { ... },
    ...
  }
```

### `search`

키워드로 컴포넌트를 검색합니다. 이름, 설명, 문서 내용을 모두 검색합니다.

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `query` | `string` | 검색 키워드 |

```
search({ query: "input" })
→ TextInput, TextArea

search({ query: "modal" })
→ Modal, FullScreenModal

search({ query: "버튼" })
→ Button, IconButton
```

## LLM Docs (정적 문서)

MCP 서버 외에도 정적 마크다운 파일을 통해 AI 도구에서 직접 참조할 수 있습니다.

| URL | 내용 |
|-----|------|
| [`/llms.txt`](https://docs.ocean-road.coldsurf.io/llms.txt) | 전체 컴포넌트 인덱스 (manifest) |
| [`/components/{slug}.md`](https://docs.ocean-road.coldsurf.io/components/button.md) | 컴포넌트 상세 문서 |
| [`/next/{slug}.md`](https://docs.ocean-road.coldsurf.io/next/app-header.md) | Next.js 컴포넌트 문서 |
| [`/design-tokens.md`](https://docs.ocean-road.coldsurf.io/design-tokens.md) | 디자인 토큰 레퍼런스 |

`CLAUDE.md`나 커서 규칙에 아래처럼 추가하면 AI가 자동으로 참조합니다:

```markdown
Ocean Road 디자인 시스템 문서: https://docs.ocean-road.coldsurf.io/llms.txt
```
