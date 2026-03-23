# Typography Token 구현 플랜 (Issue #117)

## 현황

기존 컬러 토큰이 **2-layer 구조**로 잡혀 있음:
- Primitive: `tokens/color/oc.json` (raw 팔레트)
- Semantic: `tokens/color/theme-alias.json` (목적 기반 alias, light/dark 지원)

타이포그래피도 **동일한 패턴**으로 미러링.

---

## Step 1 — Primitive 토큰 파일 생성

**`tokens/typography/font.json`**

```json
{
  "typography": {
    "fontSize": {
      "xs":  { "value": "0.75rem" },
      "sm":  { "value": "0.875rem" },
      "md":  { "value": "1rem" },
      "lg":  { "value": "1.125rem" },
      "xl":  { "value": "1.25rem" },
      "2xl": { "value": "1.5rem" },
      "3xl": { "value": "1.875rem" },
      "4xl": { "value": "2.25rem" }
    },
    "fontWeight": {
      "regular":  { "value": 400 },
      "medium":   { "value": 500 },
      "semibold": { "value": 600 },
      "bold":     { "value": 700 }
    },
    "lineHeight": {
      "tight":   { "value": 1.2 },
      "normal":  { "value": 1.5 },
      "relaxed": { "value": 1.75 }
    }
  }
}
```

---

## Step 2 — Semantic 토큰 파일 생성

**`tokens/typography/theme-alias.json`**

컬러의 `theme-alias.json`처럼 `{typography.fontSize.xl}` 방식으로 참조.

| variant  | fontSize | fontWeight | lineHeight |
|----------|----------|------------|------------|
| heading1 | 2xl      | bold       | tight      |
| heading2 | xl       | semibold   | tight      |
| heading3 | lg       | semibold   | normal     |
| body1    | md       | regular    | normal     |
| body2    | sm       | regular    | normal     |
| caption  | xs       | regular    | relaxed    |
| label    | sm       | medium     | normal     |

---

## Step 3 — `build.ts` 커스텀 포매터/필터 등록

컬러의 `semanticColorCssVars` / `semanticColorThemeVariables` 패턴 동일:

- `typographyCssVars` — CSS 변수 출력 포매터
- `typographyJsModule` — JS/TS 모듈 출력 포매터
- `typographyFilter` — `category: 'typography'` 필터

---

## Step 4 — `config.json` 플랫폼 추가

```
dist/css/typography/variables.css      # CSS 변수
dist/js/typography/variables.ts        # JS/TS 모듈
dist/json/typography/variables.json    # JSON 원본
```

---

## Step 5 — `package.json` exports 추가

```json
"./js/typography/variables": {
  "import": "./dist/js/typography/variables.mjs",
  "require": "./dist/js/typography/variables.js"
}
```

> `"./dist/css/*"` glob 패턴은 기존 exports에서 자동 커버됨.

---

## Step 6 — TypeScript 타입 shim 파일

`js/typography/variables.d.ts` 생성 — 기존 `js/color/variables.d.ts` 패턴 동일.

---

## 작업 순서

```
1. tokens/typography/font.json           ← primitive 토큰
2. tokens/typography/theme-alias.json    ← semantic 토큰
3. build.ts                              ← filter + formatter 등록
4. config.json                           ← platform 출력 설정
5. package.json + js/typography/         ← exports + shim
6. pnpm build 확인
```

---

## 결정 사항 및 검토 내용

### font-size 단위: `rem` 채택

`px` 대신 `rem`을 사용. 브라우저 기본 폰트 크기(`16px`) 기준 상대값이므로, 사용자가 브라우저 폰트 설정을 변경해도 비율이 유지됨 (접근성). Tailwind, MUI, Radix 등 주요 디자인 시스템 모두 `rem` 사용.

### `line-height` 기본값 전략

기존 `text.styled.ts`에서 `line-height: 1.25` 고정값을 사용 중. 이 값은 플랜의 `tight(1.2)`와 `normal(1.5)` 사이에 위치.

**#118 구현 시 fallback 기본값 → `tight(1.2)` 채택**

- 기존 `1.25`와 시각적으로 가장 근접 → 하위호환성 유지
- `body1`, `body2` 등 semantic variant에는 `normal(1.5)` 적용
- `variant` prop 없이 기존 방식으로 사용하는 경우 동작 변화 최소화

---

## 연관 이슈

- **#117** — 이 플랜 (디자인 토큰 추가)
- **#118** — Text 컴포넌트 props 확장 (blockedBy: #117)
