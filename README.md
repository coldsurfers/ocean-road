# Ocean Road Monorepo

COLDSURF 디자인 시스템 저장소입니다. 이 리포는 UI 라이브러리, 디자인 토큰, 문서/스토리북 앱을 함께 관리합니다.

## Packages

- `@coldsurf/ocean-road`: React/React Native 기반 UI 컴포넌트 라이브러리
- `@coldsurfers/ocean-road-design-tokens`: 디자인 토큰 패키지

패키지 사용법은 아래 문서를 확인해주세요.

- `@coldsurf/ocean-road`: [`packages/ocean-road/README.md`](./packages/ocean-road/README.md)

## Apps

- `apps/docs`: Rspress 기반 문서 사이트
- `apps/storybook`: 스토리북

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
