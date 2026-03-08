# Hello, 👋 Welcome to Ocean Road
[![npm version](https://img.shields.io/npm/v/%40coldsurf%2Focean-road.svg)](https://www.npmjs.com/package/@coldsurf/ocean-road)

안녕하세요, COLDSURF의 디자인 시스템 Ocean Road에 오신 것을 환영합니다.
아래는 프로젝트에 대한 간단한 설명을 담았습니다.

pnpm workspace로 이루어져 있어요.
디자인 시스템을 구성하는 각각의 packages로 워크스페이스가 구성되어 있어요.

## Install

### Install ocean-road
```bash
pnpm add @coldsurf/ocean-road
```

### Install peer deps (required)
```bash
pnpm add @emotion/css @emotion/react @emotion/styled
```

## Folder Structure
ocean-road 모노레포의 폴더 구조에 대해 간략히 설명드릴게요.

```sh
packages/               # 공유 패키지들
├── ocean-road/         # UI 컴포넌트 라이브러리이자 일종의 디자인시스템 역할도 수행하고 있어요.
├── ocean-road-design-tokens/         # 디자인 토큰을 자동화하고 있어요.
apps/               # apps
├── storybook/         # 스토리북을 운영하고 있어요.
├── docs/              # Rspress 기반 문서 사이트
```

## Docs

Rspress 기반 문서 사이트입니다 (`apps/docs`).

```bash
# 개발 서버 실행 (localhost:5173)
pnpm turbo dev --filter=@coldsurfers/docs

# 정적 빌드 (apps/docs/build/)
pnpm turbo build --filter=@coldsurfers/docs
```
