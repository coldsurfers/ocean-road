---
"@coldsurf/ocean-road": minor
---

feat(Text): add variant, size, weight props for direct typography token consumption

Text 컴포넌트에 `variant`, `size`, `weight` props를 추가했습니다. `styled(Text)` 래퍼 없이도 디자인 토큰의 타이포그래피를 직접 적용할 수 있습니다.

- `variant`: semantic 타이포그래피 프리셋 (`heading1`~`heading3`, `body1`~`body2`, `caption`, `label`)
- `size`: primitive font-size 토큰 직접 지정 (`xs`~`4xl`)
- `weight`: primitive font-weight 토큰 직접 지정 (`regular`, `medium`, `semibold`, `bold`)
- `variant`와 `size`/`weight` 동시 지정 시 `size`/`weight`가 우선 적용
- 기존 `styled(Text)` 패턴과 완전 호환 (breaking change 없음)
