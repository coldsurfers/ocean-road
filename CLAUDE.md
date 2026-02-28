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

## 새 워크스페이스 패키지 추가 규칙

새로운 `packages/*` 또는 `apps/*` 패키지를 추가할 때는 반드시 아래 두 가지를 설정해야 합니다.

### 1. Lint (`check`)

`package.json`의 `scripts`에 Biome check 명령어를 추가합니다:

```json
"check": "biome check .",
"check:fix": "biome check --write ."
```

### 2. Type check (`check:type`)

`package.json`의 `scripts`에 TypeScript 타입 체크 명령어를 추가합니다:

```json
"check:type": "tsc --noEmit"
```

`tsconfig.json`에는 반드시 `"skipLibCheck": true`를 포함하세요 (node_modules 타입 오류 방지):

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true
  }
}
```

> **이 규칙은 예외 없이 적용됩니다.** 새 패키지를 추가하는 PR에 `check` 또는 `check:type` 스크립트가 없으면 머지하지 마세요.

## 보안 지침 (공개 레포지토리)

이 프로젝트는 **GitHub 퍼블릭 레포지토리**에 공개되어 있습니다. 아래 규칙을 반드시 준수하세요.

### 절대 커밋하면 안 되는 것들

- `.npmrc` 파일에 포함된 `NPM_TOKEN`, `GITHUB_TOKEN` 등 인증 토큰
- `.env`, `.env.local`, `.env.*` 시크릿 파일
- GitHub Actions secrets (`${{ secrets.* }}`) 값 자체
- 개인 키, 인증서, API 키 등 자격증명 일체
- 내부 서버 주소, 내부 URL, 내부 인프라 정보

**커밋 전 확인:** `git diff --staged`로 민감 정보가 포함되지 않았는지 검토하세요.

### 의존성 보안

- `pnpm-lock.yaml`을 **항상 커밋**하세요. lockfile 없이 `pnpm install`하지 마세요.
- 의존성 추가 전 패키지 출처와 다운로드 수를 확인하세요 (타이포스쿼팅 주의).
- 정기적으로 `pnpm audit`을 실행해 취약점을 점검하세요.
- 메이저 버전 업그레이드는 changelog를 반드시 검토하세요.

```bash
pnpm audit          # 취약점 점검
pnpm audit --fix    # 자동 수정 가능한 취약점 수정
```

### UI 컴포넌트 보안 (XSS 방지)

이 프로젝트는 UI 라이브러리이므로 사용자 입력을 렌더링하는 컴포넌트에서 XSS가 발생할 수 있습니다.

- `dangerouslySetInnerHTML` 사용을 **금지**합니다. 불가피한 경우 DOMPurify 등으로 sanitize 후 사용하세요.
- 외부에서 주입된 URL을 `href`나 `src`에 직접 사용하지 마세요. `javascript:` 프로토콜을 차단하세요.
- `eval()`, `new Function()`, `innerHTML` 직접 조작을 피하세요.
- React Native에서도 `WebView`에 외부 컨텐츠를 주입할 때 동일한 원칙을 적용하세요.

```tsx
// 금지
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// 올바른 방법
import DOMPurify from 'dompurify'
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
```

### GitHub Actions / CI 보안

- workflow 파일에서 `pull_request_target` 트리거는 신중하게 사용하세요 (포크 PR에서 시크릿 노출 위험).
- 외부 Actions는 **태그가 아닌 커밋 해시**로 고정하세요.
- workflow 권한은 최소한으로 설정하세요 (`permissions: read-all` 기본 권장).

```yaml
# 권장
- uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2

# 비권장 (태그는 변경될 수 있음)
- uses: actions/checkout@v4
```

### 배포 / 패키지 보안

- `npm publish` 또는 `pnpm publish`는 CI에서만 실행하고, 로컬에서 직접 배포하지 마세요.
- 배포 전 `pnpm pack --dry-run`으로 번들에 포함될 파일을 확인하세요.
- `.npmignore` 또는 `package.json`의 `files` 필드로 소스 외 불필요한 파일이 배포되지 않도록 제한하세요.
- GitHub Packages 토큰은 **최소 권한**(write:packages만)으로 발급하세요.

### 외부 기여(PR) 검토 시 주의사항

외부 기여자의 PR을 머지하기 전에 반드시 확인하세요:

1. `package.json`의 `scripts` 필드에 악의적인 명령이 추가되지 않았는지
2. `postinstall`, `prepare` 등 lifecycle script 변경 여부
3. 새로 추가된 의존성의 신뢰성
4. `.github/workflows/` 파일 변경 여부 (CI 탈취 시도)

### 보안 취약점 신고

보안 취약점 발견 시 **이슈를 공개적으로 등록하지 말고**, GitHub의 [Security Advisories](https://github.com/coldsurfers/ocean-road/security/advisories/new)를 통해 비공개로 신고해 주세요.

## 작업 그라운드룰 (AI 에이전트 및 기여자 공통)

### 로드맵 이슈 작업 원칙

1. **한 번에 하나의 이슈만 작업합니다.**
   진행 중인 이슈가 완료(PR 머지)되기 전에 다음 이슈 작업을 시작하지 마세요.

2. **블로킹 의존성을 지킵니다.**
   이슈에 "선행 작업" 또는 `blockedBy`가 명시된 경우, 해당 이슈가 완료될 때까지 다음 단계로 넘어가지 마세요.

3. **브랜치는 항상 `main` 기준으로 생성합니다.**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b <브랜치명>
   ```

4. **브랜치 명명 규칙:** `<타입>/<이슈-요약>`
   ```
   docs/setup-rspress-apps-docs     # 이슈 #99
   docs/getting-started-guide       # 이슈 #100
   feat/design-tokens-reference     # 이슈 #105
   ci/s3-cloudfront-deployment      # 이슈 #107
   ```

5. **하나의 브랜치 = 하나의 이슈 = 하나의 PR.**
   한 브랜치에 여러 이슈의 변경사항을 섞지 마세요.

6. **PR 생성 전 확인 사항:**
   - 이슈의 "성공 기준"을 모두 충족했는지 확인
   - `pnpm biome check .` 통과
   - 관련 이슈 번호를 PR body에 `Closes #<번호>` 형식으로 명시
