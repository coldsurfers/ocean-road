# Text

텍스트 렌더링 컴포넌트입니다. 기본 엘리먼트는 `<span>`이며 `as` prop으로 변경할 수 있습니다.

## 사용법

```tsx
import { Text } from '@coldsurf/ocean-road'

<Text>기본 텍스트</Text>

<Text as="h1">제목</Text>

<Text as="p" numberOfLines={2}>
  긴 텍스트를 두 줄로 제한합니다. 초과하는 내용은 말줄임표로 처리됩니다.
</Text>
```

## variant — semantic 타이포그래피

`variant` prop으로 디자인 토큰의 semantic 타이포그래피 프리셋을 바로 적용할 수 있습니다. `styled(Text)` 래퍼 없이도 일관된 타이포그래피를 사용할 수 있는 **권장 방식**입니다.

```tsx
<Text variant="heading1" as="h1">이벤트 제목</Text>
<Text variant="heading2" as="h2">섹션 제목</Text>
<Text variant="body1">본문 내용</Text>
<Text variant="body2">보조 본문</Text>
<Text variant="caption">보조 설명</Text>
<Text variant="label">라벨</Text>
```

| variant | fontSize | fontWeight | lineHeight |
|---------|----------|------------|------------|
| `heading1` | 1.5rem (24px) | 700 | 1.2 |
| `heading2` | 1.25rem (20px) | 600 | 1.2 |
| `heading3` | 1.125rem (18px) | 600 | 1.5 |
| `body1` | 1rem (16px) | 400 | 1.5 |
| `body2` | 0.875rem (14px) | 400 | 1.5 |
| `caption` | 0.75rem (12px) | 400 | 1.75 |
| `label` | 0.875rem (14px) | 500 | 1.5 |

## size / weight — primitive 토큰 직접 지정

세밀한 조정이 필요한 경우 `size`와 `weight`로 primitive 토큰을 직접 지정할 수 있습니다.

```tsx
<Text size="sm" weight="medium">라벨</Text>

{/* variant 기반 + weight override */}
<Text variant="body1" weight="semibold">강조 본문</Text>
```

`variant`와 `size`/`weight`가 동시에 지정되면 `size`/`weight`가 우선 적용됩니다.

## styled 래퍼 패턴

기존 `styled(Text)` 방식도 그대로 지원합니다.

```tsx
import styled from '@emotion/styled'
import { Text, semantics } from '@coldsurf/ocean-road'

const EventTitle = styled(Text)`
  color: ${semantics.color.foreground[2]};
  font-size: 16px;
  font-weight: 400;
  margin: unset;
`

// 사용
<EventTitle as="h2">이벤트 제목</EventTitle>
```

`semantics.color.foreground[2]`는 CSS 변수(`var(--color-foreground-2)`)를 반환합니다. `ColorSchemeProvider`가 주입한 CSS 변수를 참조하므로 라이트/다크 모드가 자동으로 반영됩니다.

## Props

`ComponentPropsWithRef<'span'>`을 모두 상속합니다.

| prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `variant` | `'heading1' \| 'heading2' \| 'heading3' \| 'body1' \| 'body2' \| 'caption' \| 'label'` | — | semantic 타이포그래피 프리셋 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | — | primitive font-size 토큰 직접 지정 |
| `weight` | `'regular' \| 'medium' \| 'semibold' \| 'bold'` | — | primitive font-weight 토큰 직접 지정 |
| `as` | `ElementType` | `'span'` | 렌더링할 HTML 엘리먼트 또는 컴포넌트 (`'p'`, `'h1'`, `'div'` 등) |
| `numberOfLines` | `number` | — | 최대 표시 줄 수. 초과 시 말줄임표(`…`) 처리 |
| `style` | `CSSProperties` | — | 인라인 스타일 |
| `children` | `ReactNode` | — | 텍스트 내용 |

## 인터랙티브 데모