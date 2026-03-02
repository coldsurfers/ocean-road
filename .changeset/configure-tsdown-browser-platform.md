---
"@coldsurfers/ocean-road": minor
---

Configure tsdown browser platform and bundle non-peer dependencies.

- `platform: 'browser'` 설정 추가 — Node.js CJS 래퍼(`createRequire`, `__commonJS`)가 dist에 포함되지 않도록 방지
- `noExternal: [/.*/]` 추가 — external 목록에 없는 모든 의존성을 dist에 번들링
- `peerDependencies`에서 `framer-motion`, `lucide-react`, `overlay-kit`, `@coldsurfers/ocean-road-design-tokens` 제거 (소비자 앱에서 별도 설치 불필요)
- `react/jsx-runtime`, `react/jsx-dev-runtime` external 추가 — 브라우저 환경에서 `require('react')` 호출 방지
- `inputOptions` resolve 설정으로 CJS 대신 ESM 빌드 선택 (`mainFields`, `conditionNames`)
