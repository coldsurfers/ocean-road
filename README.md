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

### Install peer deps
```bash
$ yarn add @emotion/css @emotion/native @emotion/react @emotion/styled lucide-react framer-motion
```

## Folder Structure
ocean-road 모노레포의 폴더 구조에 대해 간략히 설명드릴게요.

```sh
packages/               # 공유 패키지들
├── ocean-road/         # UI 컴포넌트 라이브러리이자 일종의 디자인시스템 역할도 수행하고 있어요.
├── ocean-road-design-tokens/         # 디자인 토큰을 자동화하고 있어요.
apps/               # apps
├── storybook/         # 스토리북을 운영하고 있어요.
```
