# Ocean Road Monorepo

COLDSURF 디자인 시스템 저장소입니다. 이 리포는 UI 라이브러리, 디자인 토큰, 문서/스토리북 앱을 함께 관리합니다.

## Packages

- `@coldsurf/ocean-road`: React/React Native 기반 UI 컴포넌트 라이브러리
- `@coldsurfers/ocean-road-design-tokens`: 디자인 토큰 패키지
- `@coldsurf/ocean-road-mcp`: AI 코딩 도구용 MCP 서버

패키지 사용법은 아래 문서를 확인해주세요.

- `@coldsurf/ocean-road`: [`packages/ocean-road/README.md`](./packages/ocean-road/README.md)
- `@coldsurf/ocean-road-mcp`: [`packages/ocean-road-mcp/README.md`](./packages/ocean-road-mcp/README.md)

## Apps

- `apps/docs`: Rspress 기반 문서 사이트
- `apps/storybook`: 스토리북

## AI / LLM 연동

Ocean Road는 AI 코딩 도구에서 바로 활용할 수 있도록 두 가지 방식을 제공합니다.

### MCP 서버 (Claude Code · Cursor · Claude Desktop)

`@coldsurf/ocean-road-mcp`를 MCP 서버로 등록하면 AI가 컴포넌트 문서, props, 디자인 토큰을 직접 조회할 수 있습니다.

**Claude Code** (`.claude/settings.json`):

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

**Cursor** (`.cursor/mcp.json`):

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

### llms.txt (정적 문서)

docs 사이트에서 마크다운 형식의 컴포넌트 문서를 제공합니다.

| URL | 내용 |
|-----|------|
| [`/llms.txt`](https://docs.ocean-road.coldsurf.io/llms.txt) | 전체 컴포넌트 인덱스 (manifest) |
| [`/components/{slug}.md`](https://docs.ocean-road.coldsurf.io/components/button.md) | 컴포넌트 상세 문서 |
| [`/next/{slug}.md`](https://docs.ocean-road.coldsurf.io/next/app-header.md) | Next.js 컴포넌트 문서 |
| [`/design-tokens.md`](https://docs.ocean-road.coldsurf.io/design-tokens.md) | 디자인 토큰 레퍼런스 |

## Development

```bash
# 의존성 설치
pnpm install

# docs 개발 서버
pnpm turbo dev --filter=@coldsurfers/docs

# storybook 개발 서버
pnpm turbo dev --filter=@coldsurfers/storybook
```

## Build

```bash
pnpm turbo build
```
