# Docs Sitemap 구현 스펙

## 목표

`apps/docs` 빌드 결과물에 Search Console 제출용 `sitemap.xml`을 자동 생성한다.

## 배경

- 문서 사이트 배포 도메인은 `https://docs.ocean-road.coldsurf.io`다.
- 현재 `apps/docs`는 Rspress 기반이며 `base`는 `/`로 설정되어 있다.
- 공식 가이드는 `@rspress/plugin-sitemap` 플러그인을 `rspress.config.ts`에 등록하는 방식을 제시한다.

참고:
- Rspress 공식 문서: `https://rspress.rs/plugin/official-plugins/sitemap`

## 범위

- 포함:
  - `apps/docs`에 현재 Rspress 1.x와 호환되는 sitemap 플러그인 의존성 추가
  - `apps/docs/rspress.config.ts`에 sitemap 플러그인 등록
  - docs 빌드 후 `apps/docs/build/sitemap.xml` 생성 확인
- 제외:
  - robots.txt 추가/수정
  - Search Console 등록 자체
  - route별 `customMaps` 세부 튜닝

## 실행 아이템

1. `apps/docs/package.json`에 `rspress-plugin-sitemap` 추가
2. `apps/docs/rspress.config.ts`에서 sitemap 플러그인을 import하고 플러그인 배열에 등록
3. 도메인은 `https://docs.ocean-road.coldsurf.io`로 고정
4. 기본 옵션은 최소 구성만 사용하고, `customMaps`는 도입하지 않는다
5. 의존성 설치 후 docs 빌드를 실행해 `sitemap.xml` 생성 여부를 검증한다

## 결정 사항

- `base: '/'` 기준으로 루트 도메인만 사용한다.
- 초기 적용은 단순 생성에 집중하고, 페이지별 `priority`/`changefreq` 최적화는 후속 작업으로 미룬다.
- 생성 대상은 Rspress가 인식하는 문서 라우트 전체다.
- 현재 프로젝트가 `rspress@1.47.1`이므로, npm에 2.x만 존재하는 공식 `@rspress/plugin-sitemap` 대신 1.x 환경에서 동작하는 `rspress-plugin-sitemap`을 사용한다.
- 향후 docs 앱을 Rspress 2.x로 올릴 때 공식 `@rspress/plugin-sitemap`으로 교체한다.

## 검증 기준

- `pnpm install` 이후 의존성 해석이 정상 완료된다.
- `pnpm --filter @coldsurfers/docs build`가 성공한다.
- 빌드 산출물에 `apps/docs/build/sitemap.xml`이 존재한다.
- `sitemap.xml` 내 URL이 `https://docs.ocean-road.coldsurf.io/...` 형태로 생성된다.
