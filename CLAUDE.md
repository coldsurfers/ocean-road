# Ocean Road — CLAUDE.md

COLDSURF의 디자인 시스템 모노레포입니다.

## 프로젝트 구조

```
packages/
├── ocean-road/              # @coldsurfers/ocean-road — UI 컴포넌트 라이브러리
└── ocean-road-design-tokens/ # @coldsurfers/ocean-road-design-tokens — 디자인 토큰
apps/
├── storybook/               # @coldsurfers/storybook — Next.js + Storybook (웹)
└── StorybookApp/            # @coldsurfers/storybook-app — React Native Storybook
```

## 핵심 도구

| 도구 | 버전 | 용도 |
|------|------|------|
| pnpm | 10.4.1 | 패키지 매니저 (workspace) |
| Turborepo | 2.4.2 | 모노레포 빌드 오케스트레이션 |
| Biome | 1.9.4 | Linter + Formatter (ESLint/Prettier 대체) |
| Lefthook | - | Git hooks |
| Changesets | - | 버전 관리 및 배포 |
| tsdown | - | `@coldsurfers/ocean-road` 빌드 |
| Style Dictionary | - | 디자인 토큰 빌드 |

## 커밋 규칙

- **Conventional Commits** 사용 (`@commitlint/config-conventional`)
- 형식: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:` 등
- pre-commit: Biome이 staged `.js/.ts/.jsx/.tsx` 파일에 자동 실행됨

## 패키지 빌드

```bash
# 전체 빌드
pnpm turbo build

# ocean-road 단독 빌드
cd packages/ocean-road && pnpm build

# 디자인 토큰 단독 빌드
cd packages/ocean-road-design-tokens && pnpm build
```

## `@coldsurfers/ocean-road` 진입점 (Entry Points)

| 진입점 | 용도 |
|--------|------|
| `.` | 기본 (웹, Emotion 기반) |
| `./next` | Next.js 전용 컴포넌트 |
| `./native` | React Native 전용 컴포넌트 |

## 컴포넌트 구조 (`packages/ocean-road/src/`)

- **`base/`** — 기본 웹 UI: `Button`, `Checkbox`, `IconButton`, `Modal`, `Spinner`, `Text`, `TextArea`, `TextInput`, `Toast`, `Switch`, `Badge`
- **`native/`** — RN 전용: `Button`, `IconButton`, `Modal`, `ProfileThumbnail`, `Spinner`, `Text`, `TextInput`, `Toast`
- **`next/`** — Next.js 전용: `AppHeader`, `AppFooter`, `GlobalLink`, `GridCardItem`, `NewTabLink`, `RouteLoading`
- **`extensions/`** — 복합 컴포넌트: `GridCardList`, `ErrorUI`, `AppLogo`, `AppStoreButton`, `BrandIcon`, `SNSIcon`, `Dropdown`, `MenuItem`, `ColorSchemeToggle`, `FullScreenModal`, `Accordion`
- **`contexts/`** — `ColorSchemeProvider` (light / dark / userPreference 지원)
- **`tokens/`** — 디자인 토큰 타입 re-export

## 스타일링

- **Emotion** (css-in-js) — `@emotion/css`, `@emotion/react`, `@emotion/styled`
- **테마**: `ColorSchemeProvider`로 감싸고 `useColorScheme()` 훅으로 소비
- **아이콘**: `lucide-react` (웹) / `lucide-react-native` (RN)

## 디자인 토큰 (`packages/ocean-road-design-tokens/`)

Style Dictionary로 생성. 출력:
- `dist/css/` — CSS 변수
- `dist/js/` — JS/TS 모듈
- `dist/json/` — JSON (light/dark 색상)

## 버전 관리 / 배포

- **Changesets** 사용 (`pnpm changeset` → `pnpm changeset version` → PR)
- 배포 레지스트리: **GitHub Packages** (`https://npm.pkg.github.com`)
- `access: "restricted"` — 공개 npm이 아닌 GitHub 패키지

## Storybook

```bash
# 웹 Storybook (apps/storybook)
cd apps/storybook && pnpm storybook  # localhost:6006

# RN Storybook (apps/StorybookApp)
cd apps/StorybookApp && pnpm storybook  # localhost:6006
```

## Lint / Format

```bash
pnpm biome check .        # 검사
pnpm biome check --write . # 자동 수정
```
