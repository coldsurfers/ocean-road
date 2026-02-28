# Hello, 👋 Welcome to Ocean Road

안녕하세요, COLDSURF의 디자인 시스템 Ocean Road에 오신 것을 환영합니다.
아래는 프로젝트에 대한 간단한 설명을 담았습니다.

pnpm workspace로 이루어져 있어요.
디자인 시스템을 구성하는 각각의 packages로 워크스페이스가 구성되어 있어요.

## Install

### Install ocean-road
```bash
$ yarn add @coldsurfers/ocean-road @coldsurfers/ocean-road-design-tokens
```

### Install peer deps (not optional)
```bash
$ yarn add @emotion/css @emotion/native @emotion/react @emotion/styled lucide-react framer-motion
```

## React Native

### 설치

```bash
# 패키지 설치
pnpm add @coldsurfers/ocean-road @coldsurfers/ocean-road-design-tokens

# peer deps 설치
pnpm add @emotion/css @emotion/native @emotion/react @emotion/styled lucide-react-native
```

> `react-native-reanimated`, `react-native-svg`는 optional peer dep입니다. 애니메이션·SVG 컴포넌트를 사용할 경우에만 설치하세요.

---

### ColorSchemeProvider 설정

앱 루트(`_layout.tsx` 또는 `App.tsx`)에서 `ColorSchemeProvider`로 전체 트리를 감쌉니다.
import 경로는 반드시 `@coldsurfers/ocean-road/native`를 사용하세요.

```tsx
import { ColorSchemeProvider } from '@coldsurfers/ocean-road/native';

export default function RootLayout() {
  return (
    <ColorSchemeProvider initialColorScheme="light">
      {/* 앱 내용 */}
    </ColorSchemeProvider>
  );
}
```

| prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `initialColorScheme` | `'light' \| 'dark' \| 'userPreference'` | `'light'` | 초기 색상 테마 |

---

### useColorScheme()으로 시맨틱 컬러 사용

`useColorScheme()`은 `{ colorScheme, semantics, setColorScheme }`을 반환합니다.
`semantics.color`를 통해 현재 테마에 맞는 실제 색상값에 접근합니다.

```tsx
import { useColorScheme } from '@coldsurfers/ocean-road/native';
import { View, Text, StyleSheet } from 'react-native';

export function MyCard() {
  const { semantics, setColorScheme } = useColorScheme();

  return (
    <View style={{ backgroundColor: semantics.color.background['1'] }}>
      <Text style={{ color: semantics.color.foreground['1'] }}>
        Hello Ocean Road
      </Text>
    </View>
  );
}
```

---

### 시맨틱 컬러 토큰 레퍼런스

`semantics.color.*` 토큰의 실제 색상값입니다.

#### `semantics.color.background`

| 토큰 | light | dark |
|------|-------|------|
| `background['1']` | `#ffffff` | `#000000` |
| `background['2']` | `#f1f3f5` | `#212529` |
| `background['3']` | `#e9ecef` | `#343a40` |
| `background['4']` | `#dee2e6` | `#495057` |
| `background['5']` | `#ced4da` | `#868e96` |

#### `semantics.color.foreground`

| 토큰 | light | dark |
|------|-------|------|
| `foreground['1']` | `#212529` | `#f1f3f5` |
| `foreground['2']` | `#343a40` | `#e9ecef` |
| `foreground['3']` | `#495057` | `#dee2e6` |
| `foreground['4']` | `#868e96` | `#ced4da` |

#### `semantics.color.border`

| 토큰 | light | dark |
|------|-------|------|
| `border['1']` | `#f1f3f5` | `#495057` |
| `border['2']` | `#e9ecef` | `#868e96` |

#### `semantics.color.dimmed`

| 토큰 | light | dark |
|------|-------|------|
| `dimmed['1']` | `#f1f3f5` | `#495057` |

---

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
