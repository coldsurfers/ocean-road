#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

//#region src/generated/data.ts
const components = [
	{
		"slug": "accordion",
		"title": "Accordion",
		"description": "제네릭 아코디언 컴포넌트입니다. 한 번에 하나의 섹션만 펼쳐지는 단일 확장 방식으로 동작합니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Accordion\n\n제네릭 아코디언 컴포넌트입니다. 한 번에 하나의 섹션만 펼쳐지는 단일 확장 방식으로 동작합니다.\n\n## 사용법\n\n```tsx\nimport { Accordion } from '@coldsurf/ocean-road'\n\ntype Category = { accordionKey: string; label: string; content: string }\n\nconst items: Category[] = [\n  { accordionKey: 'a', label: '항목 1', content: '내용 1' },\n  { accordionKey: 'b', label: '항목 2', content: '내용 2' },\n]\n\n<Accordion\n  data={items}\n  renderTrigger={(item) => <span>{item.label}</span>}\n  renderExpanded={({ selectedItem }) => <p>{selectedItem.content}</p>}\n/>\n```\n\n## Props\n\n`ItemT`는 반드시 `{ accordionKey: string }` 을 포함해야 합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `data` | `ItemT[]` | — | 아코디언 항목 배열 |\n| `renderTrigger` | `(item: ItemT) => ReactNode` | — | 각 항목의 트리거(헤더) 렌더 함수 |\n| `renderExpanded` | `({ selectedItem }: { selectedItem: ItemT }) => ReactNode` | — | 펼쳐진 상태에서 표시할 콘텐츠 렌더 함수 |\n| `customized` | `ReactNode` | — | 추가로 렌더할 커스텀 콘텐츠 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "app-logo",
		"title": "AppLogo",
		"description": "앱 로고 이미지를 테마와 형태 옵션에 따라 표시하는 컴포넌트입니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# AppLogo\n\n앱 로고 이미지를 테마와 형태 옵션에 따라 표시하는 컴포넌트입니다.\n\n## 사용법\n\n```tsx\nimport { AppLogo } from '@coldsurf/ocean-road'\n\n// 기본 (원형, 투명 배경)\n<AppLogo logoTheme=\"transparent\" />\n\n// 흰 배경 + 정사각형\n<AppLogo logoTheme=\"white-background\" type=\"square\" />\n\n// 크리스마스 테마\n<AppLogo logoTheme=\"christmas\" type=\"round\" />\n```\n\n## Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `logoTheme` | `'christmas' \\| 'transparent' \\| 'white-background'` | — | 로고 이미지 테마 |\n| `type` | `'round' \\| 'square'` | — | `'round'`이면 원형(50%), `'square'`이면 모서리가 둥근 정사각형(12px) |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "app-store-button",
		"title": "AppStoreButton",
		"description": "App Store 또는 Google Play 스토어 링크 버튼 컴포넌트입니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# AppStoreButton\n\nApp Store 또는 Google Play 스토어 링크 버튼 컴포넌트입니다.\n\n## 사용법\n\n```tsx\nimport { AppStoreButton } from '@coldsurf/ocean-road'\n\n<AppStoreButton store=\"app-store\" />\n<AppStoreButton store=\"google-play\" />\n```\n\n## Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `store` | `'app-store' \\| 'google-play'` | — | 표시할 스토어 플랫폼 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "badge",
		"title": "Badge",
		"description": "태그/필터 형태의 배지 컴포넌트입니다. 클릭 가능한 항목 선택 UI에 주로 사용합니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Badge\n\n태그/필터 형태의 배지 컴포넌트입니다. 클릭 가능한 항목 선택 UI에 주로 사용합니다.\n\n## 사용법\n\n```tsx\nimport { Badge } from '@coldsurf/ocean-road'\n\n<Badge onClick={() => {}}>라이브</Badge>\n\n// 하이라이트 상태\n<Badge isHighlighted onClick={() => {}}>선택됨</Badge>\n\n// 아이콘 포함\n<Badge leftIcon=\"Music\" onClick={() => {}}>음악</Badge>\n```\n\n## Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `children` | `string \\| ReactElement` | — | 배지 내용 |\n| `isHighlighted` | `boolean` | — | `true`이면 강조 배경색을 적용합니다. |\n| `leftIcon` | `keyof Icons` | — | 텍스트 왼쪽에 표시될 lucide-react 아이콘 이름 |\n| `onClick` | `() => void` | — | 클릭 핸들러 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "brand-icon",
		"title": "BrandIcon",
		"description": "Apple, Google, Android 브랜드 로고를 SVG로 렌더링하는 컴포넌트입니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# BrandIcon\n\nApple, Google, Android 브랜드 로고를 SVG로 렌더링하는 컴포넌트입니다.\n\n## 사용법\n\n```tsx\nimport { BrandIcon } from '@coldsurf/ocean-road'\n\n<BrandIcon brand=\"apple\" width={24} height={24} />\n<BrandIcon brand=\"google\" width={24} height={24} />\n<BrandIcon brand=\"android\" width={24} height={24} />\n```\n\n## Props\n\n`SVGProps<SVGSVGElement>`를 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `brand` | `'apple' \\| 'google' \\| 'android'` | — | 렌더링할 브랜드 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "button",
		"title": "Button",
		"description": "기본 버튼 컴포넌트입니다. 6가지 variant를 제공하며 아이콘과 함께 사용할 수 있습니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Button\n\n기본 버튼 컴포넌트입니다. 6가지 variant를 제공하며 아이콘과 함께 사용할 수 있습니다.\n\n## 사용법\n\n```tsx\nimport { Button } from '@coldsurf/ocean-road'\n\n<Button variant=\"indigo\" onClick={() => {}}>\n  확인\n</Button>\n```\n\n## Props\n\n`ButtonHTMLAttributes<HTMLButtonElement>`를 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `variant` | `'indigo' \\| 'pink' \\| 'white' \\| 'border' \\| 'transparent' \\| 'transparentDarkGray'` | `'indigo'` | 버튼 색상 테마 |\n| `size` | `'lg' \\| 'md' \\| 'sm'` | `'md'` | 버튼 크기 |\n| `textWeight` | `'light' \\| 'medium' \\| 'bold'` | `'medium'` | 텍스트 굵기 |\n| `leftIcon` | `keyof Icons \\| ReactElement` | — | 텍스트 왼쪽 아이콘 (lucide-react 이름 또는 ReactElement) |\n| `rightIcon` | `keyof Icons \\| ReactElement` | — | 텍스트 오른쪽 아이콘 |\n| `children` | `ReactNode` | — | 버튼 내용 |\n\n## 예시\n\n```tsx\n// 아이콘 포함\n<Button variant=\"indigo\" leftIcon=\"Search\" size=\"lg\">\n  검색\n</Button>\n\n// 비활성화\n<Button variant=\"border\" disabled>\n  비활성화\n</Button>\n```\n\n## 인터랙티브 데모"
	},
	{
		"slug": "checkbox",
		"title": "Checkbox",
		"description": "체크박스 인풋 컴포넌트입니다. 선택적으로 라벨 텍스트를 함께 표시할 수 있습니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Checkbox\n\n체크박스 인풋 컴포넌트입니다. 선택적으로 라벨 텍스트를 함께 표시할 수 있습니다.\n\n## 사용법\n\n```tsx\nimport { Checkbox } from '@coldsurf/ocean-road'\n\n<Checkbox\n  labelText=\"이용약관에 동의합니다\"\n  checked={checked}\n  onChange={(e) => setChecked(e.target.checked)}\n/>\n```\n\n## Props\n\n`InputHTMLAttributes<HTMLInputElement>` (`size`, `formAction` 제외)를 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `size` | `'lg' \\| 'md' \\| 'sm'` | `'md'` | 체크박스 크기 |\n| `labelText` | `string` | — | 체크박스 오른쪽에 표시될 라벨 텍스트 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "color-scheme-toggle",
		"title": "ColorSchemeToggle",
		"description": "라이트/다크 모드를 전환하는 토글 버튼 컴포넌트입니다. 시스템 설정 변화를 자동으로 감지합니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# ColorSchemeToggle\n\n라이트/다크 모드를 전환하는 토글 버튼 컴포넌트입니다. 시스템 설정 변화를 자동으로 감지합니다.\n\n`ColorSchemeProvider`로 앱을 감싼 경우에만 정상 동작합니다. 자세한 설정 방법은 [테마 가이드](/theming)를 참고하세요.\n\n## 사용법\n\n```tsx\nimport { ColorSchemeToggle } from '@coldsurf/ocean-road'\n\n// 기본 — setTheme은 내부적으로 window.__setPreferredTheme을 호출합니다.\n<ColorSchemeToggle />\n\n// onToggle — setTheme은 이미 테마를 전환합니다. 추가 동작만 넣으세요.\n<ColorSchemeToggle\n  onToggle={({ setTheme }) => {\n    setTheme()\n    // 예: 분석 이벤트 전송\n    analytics.track('theme_toggled')\n  }}\n/>\n```\n\n## Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `onToggle` | `(params: { setTheme: () => void }) => void` | — | 토글 시 호출되는 콜백. `setTheme`을 직접 호출해야 테마가 변경됩니다. |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "dropdown",
		"title": "Dropdown",
		"description": "위치 자동 계산, 애니메이션, 백드롭을 지원하는 드롭다운/팝오버 컴포넌트입니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Dropdown\n\n위치 자동 계산, 애니메이션, 백드롭을 지원하는 드롭다운/팝오버 컴포넌트입니다.\n\n## 사용법\n\n```tsx\nimport { Dropdown } from '@coldsurf/ocean-road'\nimport { useRef, useState } from 'react'\n\nfunction MyMenu() {\n  const [open, setOpen] = useState(false)\n  const triggerRef = useRef<HTMLButtonElement>(null)\n\n  return (\n    <>\n      <button ref={triggerRef} onClick={() => setOpen(true)}>\n        메뉴 열기\n      </button>\n      <Dropdown.Core\n        edge=\"left\"\n        isOpen={open}\n        onClose={() => setOpen(false)}\n        triggerRef={triggerRef}\n        backdrop\n      >\n        <Dropdown.MenuItem>항목 1</Dropdown.MenuItem>\n        <Dropdown.MenuItem>항목 2</Dropdown.MenuItem>\n      </Dropdown.Core>\n    </>\n  )\n}\n```\n\n## Dropdown.Core Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `edge` | `'left' \\| 'right'` | — | 드롭다운이 트리거를 기준으로 열리는 방향 |\n| `isOpen` | `boolean` | — | 드롭다운 표시 여부 |\n| `onClose` | `() => void` | — | 닫기 콜백 |\n| `position` | `{ top: number; left?: number; right?: number }` | — | 수동 위치 지정 |\n| `className` | `string` | — | 추가 CSS 클래스 |\n| `style` | `CSSProperties` | — | 인라인 스타일 |\n| `isLoading` | `boolean` | — | `true`이면 로딩 스피너를 표시합니다. |\n| `backdrop` | `boolean` | — | `true`이면 반투명 백드롭 오버레이를 표시합니다. |\n| `preventScroll` | `boolean` | — | `true`이면 드롭다운이 열렸을 때 배경 스크롤을 차단합니다. |\n| `animate` | `boolean` | — | `true`이면 열기/닫기 애니메이션을 적용합니다. |\n| `triggerRef` | `RefObject<HTMLElement>` | — | 위치 자동 계산에 사용할 트리거 요소 ref |\n| `zIndex` | `number` | — | z-index 값 |\n\n## 서브 컴포넌트\n\n| 컴포넌트 | 설명 |\n|----------|------|\n| `Dropdown.Core` | 드롭다운 컨테이너 |\n| `Dropdown.MenuItem` | 메뉴 항목 래퍼 |\n| `Dropdown.ResultItem` | 결과 항목 표시 |\n| `Dropdown.Trigger` | 트리거 요소 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "error-ui",
		"title": "ErrorUI",
		"description": "네트워크 에러, 알 수 없는 에러 등 에러 상태를 표시하는 복합 컴포넌트입니다. 재시도 버튼이 포함되어 있습니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# ErrorUI\n\n네트워크 에러, 알 수 없는 에러 등 에러 상태를 표시하는 복합 컴포넌트입니다. 재시도 버튼이 포함되어 있습니다.\n\n## 사용법\n\n```tsx\nimport { ErrorUI } from '@coldsurf/ocean-road'\n\n// 네트워크 에러\n<ErrorUI.NetworkError onClickRetry={() => refetch()} />\n\n// 알 수 없는 에러\n<ErrorUI.UnknownError onClickRetry={() => refetch()} />\n```\n\n## 서브 컴포넌트\n\n### ErrorUI.NetworkError\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `onClickRetry` | `() => void` | ✅ | 재시도 버튼 클릭 시 호출되는 콜백 |\n\n### ErrorUI.UnknownError\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `onClickRetry` | `() => void` | ✅ | 재시도 버튼 클릭 시 호출되는 콜백 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "full-screen-modal",
		"title": "FullScreenModal",
		"description": "화면 전체를 덮는 모달 컴포넌트입니다. 열려 있는 동안 배경 스크롤이 차단됩니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# FullScreenModal\n\n화면 전체를 덮는 모달 컴포넌트입니다. 열려 있는 동안 배경 스크롤이 차단됩니다.\n\n## 사용법\n\n```tsx\nimport { FullScreenModal } from '@coldsurf/ocean-road'\nimport { useState } from 'react'\n\nfunction MyPage() {\n  const [visible, setVisible] = useState(false)\n\n  return (\n    <>\n      <button onClick={() => setVisible(true)}>모달 열기</button>\n      <FullScreenModal visible={visible} onClose={() => setVisible(false)}>\n        <p>전체 화면 콘텐츠</p>\n      </FullScreenModal>\n    </>\n  )\n}\n```\n\n## Props\n\n| prop | 타입 | 필수 | 기본값 | 설명 |\n|------|------|------|--------|------|\n| `visible` | `boolean` | ✅ | — | 모달 표시 여부 |\n| `onClose` | `() => void` | ✅ | — | 닫기 버튼 클릭 시 호출되는 콜백 |\n| `children` | `ReactNode` | — | — | 모달 내부 콘텐츠 |\n| `zIndex` | `number` | — | — | z-index 값 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "grid-card-list",
		"title": "GridCardList",
		"description": "그리드 레이아웃으로 카드 목록을 표시하는 복합 컴포넌트입니다. 페이지네이션, 빈 상태, 메이슨리 레이아웃을 지원합니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# GridCardList\n\n그리드 레이아웃으로 카드 목록을 표시하는 복합 컴포넌트입니다. 페이지네이션, 빈 상태, 메이슨리 레이아웃을 지원합니다.\n\n## 사용법\n\n```tsx\nimport { GridCardList } from '@coldsurf/ocean-road'\n\n<GridCardList.List\n  items={items}\n  renderItem={(item) => <GridCardList.Item key={item.id} {...item} />}\n  onLoadMore={fetchNextPage}\n  hasNextPage={hasNextPage}\n  headerText=\"최신 항목\"\n  isEmpty={items.length === 0}\n  emptyComponent={<GridCardList.Empty />}\n/>\n```\n\n### 메이슨리 레이아웃\n\n```tsx\n<GridCardList.MasonryList\n  items={items}\n  renderItem={(item) => <GridCardList.MasonryItem key={item.id} {...item} />}\n  onLoadMore={fetchNextPage}\n  hasNextPage={hasNextPage}\n/>\n```\n\n## GridCardList.List Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `items` | `GridCardListItemProps[]` | — | 카드 항목 배열 |\n| `renderItem` | `(item: GridCardListItemProps) => ReactNode` | — | 항목 렌더 함수 |\n| `onLoadMore` | `() => void` | — | 더 보기 버튼 클릭 시 호출되는 콜백 |\n| `headerText` | `string` | — | 목록 상단에 표시할 헤더 텍스트 |\n| `hasNextPage` | `boolean` | — | `true`이면 더 보기 버튼을 표시합니다. |\n| `isEmpty` | `boolean` | — | `true`이면 빈 상태 컴포넌트를 표시합니다. |\n| `emptyComponent` | `ReactNode` | — | 빈 상태에서 표시할 커스텀 컴포넌트 |\n| `navigationComponent` | `ReactNode` | — | 헤더 영역 우측에 표시할 네비게이션 컴포넌트 |\n\n## 서브 컴포넌트\n\n| 컴포넌트 | 설명 |\n|----------|------|\n| `GridCardList.List` | 기본 그리드 컨테이너 |\n| `GridCardList.MasonryList` | 메이슨리 레이아웃 컨테이너 |\n| `GridCardList.Item` | 그리드 카드 항목 |\n| `GridCardList.MasonryItem` | 메이슨리 카드 항목 |\n| `GridCardList.LoadMore` | 더 보기 버튼 |\n| `GridCardList.Empty` | 빈 상태 표시 |\n| `GridCardList.ImageEmpty` | 이미지 없는 빈 상태 표시 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "icon-button",
		"title": "IconButton",
		"description": "아이콘 전용 버튼 컴포넌트입니다. 텍스트 없이 아이콘만 표시하는 버튼에 사용합니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# IconButton\n\n아이콘 전용 버튼 컴포넌트입니다. 텍스트 없이 아이콘만 표시하는 버튼에 사용합니다.\n\n## 사용법\n\n```tsx\nimport { IconButton } from '@coldsurf/ocean-road'\nimport { Search } from 'lucide-react'\n\n<IconButton onClick={() => {}}>\n  <Search size={20} />\n</IconButton>\n```\n\n## Props\n\n`ButtonHTMLAttributes<HTMLButtonElement>`를 모두 상속합니다.\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `children` | `ReactNode` | ✅ | 표시할 아이콘 엘리먼트 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "menu-item",
		"title": "MenuItem",
		"description": "네비게이션 메뉴 항목 컴포넌트입니다. 로딩 상태, 활성 상태, 아이콘을 지원합니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# MenuItem\n\n네비게이션 메뉴 항목 컴포넌트입니다. 로딩 상태, 활성 상태, 아이콘을 지원합니다.\n\n## 사용법\n\n```tsx\nimport { MenuItem } from '@coldsurf/ocean-road'\nimport { Music } from 'lucide-react'\n\n// 기본\n<MenuItem onClick={() => navigate('/music')}>음악</MenuItem>\n\n// 활성 상태\n<MenuItem isCurrent onClick={() => navigate('/music')}>음악</MenuItem>\n\n// 아이콘 포함\n<MenuItem icon={<Music size={16} />} onClick={() => navigate('/music')}>\n  음악\n</MenuItem>\n\n// 로딩 상태\n<MenuItem isLoading />\n```\n\n## Props\n\n`HTMLAttributes<HTMLDivElement>` 및 Framer Motion의 `MotionProps`를 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `isLoading` | `boolean` | — | `true`이면 스켈레톤 로딩 상태를 표시합니다. |\n| `isCurrent` | `boolean` | — | `true`이면 현재 활성 항목으로 강조 스타일을 적용합니다. |\n| `icon` | `ReactNode` | — | 텍스트 왼쪽에 표시할 아이콘 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "modal",
		"title": "Modal",
		"description": "dimmed 오버레이와 함께 표시되는 모달 컴포넌트입니다. framer-motion 애니메이션이 적용됩니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Modal\n\ndimmed 오버레이와 함께 표시되는 모달 컴포넌트입니다. framer-motion 애니메이션이 적용됩니다.\n\n## 사용법\n\n```tsx\nimport { Modal } from '@coldsurf/ocean-road'\n\nfunction MyPage() {\n  const [visible, setVisible] = useState(false)\n\n  return (\n    <>\n      <button type=\"button\" onClick={() => setVisible(true)}>열기</button>\n      <Modal visible={visible} onClose={() => setVisible(false)}>\n        <div style={{ background: 'white', padding: 24, borderRadius: 8 }}>\n          모달 내용\n        </div>\n      </Modal>\n    </>\n  )\n}\n```\n\n## Props\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `visible` | `boolean` | ✅ | 모달 표시 여부 |\n| `onClose` | `() => void` | ✅ | 오버레이 클릭 시 호출되는 콜백 |\n| `zIndex` | `number` | — | z-index 값. 오버레이가 지정값, 컨텐츠가 `zIndex + 1`로 설정됩니다. |\n| `children` | `ReactNode` | — | 모달 내부 컨텐츠 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "sns-icon",
		"title": "SNSIcon",
		"description": "Instagram, X(Twitter), Facebook, YouTube 소셜 미디어 아이콘을 SVG로 렌더링하는 컴포넌트입니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# SNSIcon\n\nInstagram, X(Twitter), Facebook, YouTube 소셜 미디어 아이콘을 SVG로 렌더링하는 컴포넌트입니다.\n\n## 사용법\n\n```tsx\nimport { SNSIcon } from '@coldsurf/ocean-road'\n\n<SNSIcon social=\"instagram\" width={24} height={24} />\n<SNSIcon social=\"x\" width={24} height={24} />\n<SNSIcon social=\"facebook\" width={24} height={24} />\n<SNSIcon social=\"youtube\" width={24} height={24} />\n```\n\n## Props\n\n`SVGProps<SVGSVGElement>`를 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `social` | `'instagram' \\| 'x' \\| 'facebook' \\| 'youtube'` | — | 렌더링할 소셜 미디어 플랫폼 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "spinner",
		"title": "Spinner",
		"description": "로딩 상태를 표시하는 스피너 컴포넌트입니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Spinner\n\n로딩 상태를 표시하는 스피너 컴포넌트입니다.\n\n## 사용법\n\n```tsx\nimport { Spinner } from '@coldsurf/ocean-road'\n\n// 인라인 스피너\n<Spinner />\n\n// 페이지 전체를 덮는 오버레이 스피너\n<Spinner variant=\"page-overlay\" />\n```\n\n## Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `variant` | `'page-overlay'` | — | `'page-overlay'` 지정 시 화면 전체를 덮는 로딩 레이어로 표시됩니다. 미지정 시 인라인 스피너로 렌더링됩니다. |\n| `className` | `string` | — | 커스텀 CSS 클래스 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "switch",
		"title": "Switch",
		"description": "토글 스위치 컴포넌트입니다. `role=\"switch\"` 접근성 속성이 적용되어 있습니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Switch\n\n토글 스위치 컴포넌트입니다. `role=\"switch\"` 접근성 속성이 적용되어 있습니다.\n\n## 사용법\n\n```tsx\nimport { Switch } from '@coldsurf/ocean-road'\n\nfunction Settings() {\n  const [enabled, setEnabled] = useState(false)\n\n  return (\n    <Switch\n      checked={enabled}\n      onChange={setEnabled}\n    />\n  )\n}\n```\n\n## Props\n\n`ButtonHTMLAttributes<HTMLButtonElement>` (`onChange` 제외)를 모두 상속합니다.\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `checked` | `boolean` | ✅ | 스위치 켜짐/꺼짐 상태 |\n| `onChange` | `(checked: boolean) => void` | ✅ | 상태 변경 시 호출되는 콜백. 새로운 상태 값을 인자로 받습니다. |\n| `disabled` | `boolean` | — | `true`이면 클릭이 비활성화됩니다. |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "text-area",
		"title": "TextArea",
		"description": "여러 줄 텍스트 입력 컴포넌트입니다. 선택적으로 라벨과 에러 상태를 표시할 수 있습니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# TextArea\n\n여러 줄 텍스트 입력 컴포넌트입니다. 선택적으로 라벨과 에러 상태를 표시할 수 있습니다.\n\n## 사용법\n\n```tsx\nimport { TextArea } from '@coldsurf/ocean-road'\n\n<TextArea\n  label=\"내용\"\n  placeholder=\"내용을 입력하세요\"\n  value={value}\n  onChange={(e) => setValue(e.target.value)}\n  rows={5}\n/>\n\n// 에러 상태\n<TextArea\n  label=\"내용\"\n  isError\n  placeholder=\"에러 상태\"\n/>\n```\n\n## Props\n\n`TextareaHTMLAttributes<HTMLTextAreaElement>`를 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `label` | `string` | — | 입력 필드 위에 표시될 라벨 텍스트 |\n| `labelStyle` | `CSSProperties` | — | 라벨 인라인 스타일 |\n| `noResize` | `boolean` | `true` | `true`이면 사용자가 크기를 조절할 수 없습니다. |\n| `isError` | `boolean` | — | `true`이면 에러 스타일을 적용합니다. |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "text-input",
		"title": "TextInput",
		"description": "한 줄 텍스트 입력 컴포넌트입니다. 라벨, 에러 상태, 좌우 슬롯을 지원합니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# TextInput\n\n한 줄 텍스트 입력 컴포넌트입니다. 라벨, 에러 상태, 좌우 슬롯을 지원합니다.\n\n## 사용법\n\n```tsx\nimport { TextInput } from '@coldsurf/ocean-road'\nimport { Search } from 'lucide-react'\n\n<TextInput\n  label=\"이메일\"\n  placeholder=\"example@email.com\"\n  value={value}\n  onChange={(e) => setValue(e.target.value)}\n/>\n\n// 좌우 슬롯\n<TextInput\n  placeholder=\"검색어 입력\"\n  left={<Search size={16} />}\n/>\n\n// 에러 상태\n<TextInput\n  label=\"비밀번호\"\n  isError\n  type=\"password\"\n/>\n```\n\n## Props\n\n`InputHTMLAttributes<HTMLInputElement>`를 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `label` | `string` | — | 입력 필드 위에 표시될 라벨 텍스트 |\n| `labelStyle` | `CSSProperties` | — | 라벨 인라인 스타일 |\n| `isError` | `boolean` | — | `true`이면 에러 스타일을 적용합니다. |\n| `required` | `boolean` | — | `true`이면 라벨에 필수 표시를 추가합니다. |\n| `left` | `ReactNode` | — | 입력 필드 왼쪽 슬롯 (아이콘 등) |\n| `right` | `ReactNode` | — | 입력 필드 오른쪽 슬롯 |\n\n## ref\n\n`useRef<TextInputRef>`로 프로그래매틱 제어가 가능합니다.\n\n```tsx\nimport { useRef } from 'react'\nimport { TextInput, type TextInputRef } from '@coldsurf/ocean-road'\n\nconst inputRef = useRef<TextInputRef>(null)\n\n<TextInput ref={inputRef} placeholder=\"...\" />\n\n// 포커스 / 블러\ninputRef.current?.focus()\ninputRef.current?.blur()\n```\n\n## 인터랙티브 데모"
	},
	{
		"slug": "text",
		"title": "Text",
		"description": "텍스트 렌더링 컴포넌트입니다. 기본 엘리먼트는 `<span>`이며 `as` prop으로 변경할 수 있습니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Text\n\n텍스트 렌더링 컴포넌트입니다. 기본 엘리먼트는 `<span>`이며 `as` prop으로 변경할 수 있습니다.\n\n## 사용법\n\n```tsx\nimport { Text } from '@coldsurf/ocean-road'\n\n<Text>기본 텍스트</Text>\n\n<Text as=\"h1\">제목</Text>\n\n<Text as=\"p\" numberOfLines={2}>\n  긴 텍스트를 두 줄로 제한합니다. 초과하는 내용은 말줄임표로 처리됩니다.\n</Text>\n```\n\n## variant — semantic 타이포그래피\n\n`variant` prop으로 디자인 토큰의 semantic 타이포그래피 프리셋을 바로 적용할 수 있습니다. `styled(Text)` 래퍼 없이도 일관된 타이포그래피를 사용할 수 있는 **권장 방식**입니다.\n\n```tsx\n<Text variant=\"heading1\" as=\"h1\">이벤트 제목</Text>\n<Text variant=\"heading2\" as=\"h2\">섹션 제목</Text>\n<Text variant=\"body1\">본문 내용</Text>\n<Text variant=\"body2\">보조 본문</Text>\n<Text variant=\"caption\">보조 설명</Text>\n<Text variant=\"label\">라벨</Text>\n```\n\n| variant | fontSize | fontWeight | lineHeight |\n|---------|----------|------------|------------|\n| `heading1` | 1.5rem (24px) | 700 | 1.2 |\n| `heading2` | 1.25rem (20px) | 600 | 1.2 |\n| `heading3` | 1.125rem (18px) | 600 | 1.5 |\n| `body1` | 1rem (16px) | 400 | 1.5 |\n| `body2` | 0.875rem (14px) | 400 | 1.5 |\n| `caption` | 0.75rem (12px) | 400 | 1.75 |\n| `label` | 0.875rem (14px) | 500 | 1.5 |\n\n## size / weight — primitive 토큰 직접 지정\n\n세밀한 조정이 필요한 경우 `size`와 `weight`로 primitive 토큰을 직접 지정할 수 있습니다.\n\n```tsx\n<Text size=\"sm\" weight=\"medium\">라벨</Text>\n\n{/* variant 기반 + weight override */}\n<Text variant=\"body1\" weight=\"semibold\">강조 본문</Text>\n```\n\n`variant`와 `size`/`weight`가 동시에 지정되면 `size`/`weight`가 우선 적용됩니다.\n\n## styled 래퍼 패턴\n\n기존 `styled(Text)` 방식도 그대로 지원합니다.\n\n```tsx\nimport styled from '@emotion/styled'\nimport { Text, semantics } from '@coldsurf/ocean-road'\n\nconst EventTitle = styled(Text)`\n  color: ${semantics.color.foreground[2]};\n  font-size: 16px;\n  font-weight: 400;\n  margin: unset;\n`\n\n// 사용\n<EventTitle as=\"h2\">이벤트 제목</EventTitle>\n```\n\n`semantics.color.foreground[2]`는 CSS 변수(`var(--color-foreground-2)`)를 반환합니다. `ColorSchemeProvider`가 주입한 CSS 변수를 참조하므로 라이트/다크 모드가 자동으로 반영됩니다.\n\n## Props\n\n`ComponentPropsWithRef<'span'>`을 모두 상속합니다.\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `variant` | `'heading1' \\| 'heading2' \\| 'heading3' \\| 'body1' \\| 'body2' \\| 'caption' \\| 'label'` | — | semantic 타이포그래피 프리셋 |\n| `size` | `'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| '2xl' \\| '3xl' \\| '4xl'` | — | primitive font-size 토큰 직접 지정 |\n| `weight` | `'regular' \\| 'medium' \\| 'semibold' \\| 'bold'` | — | primitive font-weight 토큰 직접 지정 |\n| `as` | `ElementType` | `'span'` | 렌더링할 HTML 엘리먼트 또는 컴포넌트 (`'p'`, `'h1'`, `'div'` 등) |\n| `numberOfLines` | `number` | — | 최대 표시 줄 수. 초과 시 말줄임표(`…`) 처리 |\n| `style` | `CSSProperties` | — | 인라인 스타일 |\n| `children` | `ReactNode` | — | 텍스트 내용 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "toast",
		"title": "Toast",
		"description": "화면 하단에 잠시 표시되는 알림 컴포넌트입니다. 3초 후 자동으로 닫힙니다.",
		"platform": "web",
		"entry": "@coldsurf/ocean-road",
		"content": "# Toast\n\n화면 하단에 잠시 표시되는 알림 컴포넌트입니다. 3초 후 자동으로 닫힙니다.\n\n`Toast`는 반드시 framer-motion의 `AnimatePresence`로 감싸야 진입/퇴장 애니메이션이 동작합니다.\n\n## 사용법\n\n```tsx\nimport { useState } from 'react'\nimport { AnimatePresence } from 'framer-motion'\nimport { Toast, Button } from '@coldsurf/ocean-road'\n\nfunction MyPage() {\n  const [show, setShow] = useState(false)\n\n  return (\n    <>\n      <Button onClick={() => setShow(true)}>토스트 표시</Button>\n      <AnimatePresence>\n        {show && (\n          <Toast\n            message=\"저장되었습니다.\"\n            onClose={() => setShow(false)}\n          />\n        )}\n      </AnimatePresence>\n    </>\n  )\n}\n```\n\n## Props\n\n| prop | 타입 | 필수 | 기본값 | 설명 |\n|------|------|------|--------|------|\n| `message` | `string` | ✅ | — | 표시할 메시지 텍스트 |\n| `onClose` | `() => void` | ✅ | — | 3초 경과 또는 클릭 시 호출되는 콜백 |\n| `zIndex` | `number` | — | `99` | z-index 값 |\n\n## 인터랙티브 데모"
	},
	{
		"slug": "app-footer",
		"title": "AppFooter",
		"description": "Next.js 앱 전용 푸터 컴포넌트입니다. App Store / Google Play 링크, SNS 링크, 내비게이션 메뉴를 포함합니다.",
		"platform": "next",
		"entry": "@coldsurf/ocean-road/next",
		"content": "# AppFooter\n\nNext.js 앱 전용 푸터 컴포넌트입니다. App Store / Google Play 링크, SNS 링크, 내비게이션 메뉴를 포함합니다.\n\n`@coldsurf/ocean-road/next`에서 import합니다.\n\n## 사용법\n\n```tsx\nimport { AppFooter } from '@coldsurf/ocean-road/next'\n\n<AppFooter\n  appStoreUrl=\"https://apps.apple.com/...\"\n  playStoreUrl=\"https://play.google.com/store/...\"\n  instagramUrl=\"https://instagram.com/...\"\n  xUrl=\"https://x.com/...\"\n/>\n```\n\n## Props\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `appStoreUrl` | `string` | ✅ | iOS App Store 링크 URL |\n| `playStoreUrl` | `string` | ✅ | Google Play Store 링크 URL |\n| `instagramUrl` | `string` | ✅ | Instagram 프로필 URL |\n| `xUrl` | `string` | ✅ | X(Twitter) 프로필 URL |"
	},
	{
		"slug": "app-header",
		"title": "AppHeader",
		"description": "Next.js 앱 전용 헤더 복합 컴포넌트입니다. 고정 헤더, 플로팅 헤더, 모바일 드로어 4가지 서브 컴포넌트를 제공합니다.",
		"platform": "next",
		"entry": "@coldsurf/ocean-road/next",
		"content": "# AppHeader\n\nNext.js 앱 전용 헤더 복합 컴포넌트입니다. 고정 헤더, 플로팅 헤더, 모바일 드로어 4가지 서브 컴포넌트를 제공합니다.\n\n`@coldsurf/ocean-road/next`에서 import합니다.\n\n## 서브 컴포넌트\n\n| 컴포넌트 | 설명 |\n|----------|------|\n| `AppHeader.FixedHeader` | 초기부터 표시되며, 아래로 스크롤 시 위로 사라지고 위로 스크롤 시 다시 나타나는 헤더. 상단과 좌우를 모두 채우는 전폭(full-width) 스타일 |\n| `AppHeader.FloatingHeader` | 초기부터 표시되며, 아래로 스크롤 시 위로 사라지고 위로 스크롤 시 다시 나타나는 헤더. 상단과 좌우에 여백이 있어 화면 위에 떠 있는 스타일 |\n| `AppHeader.FullScreenMobileAccordionDrawer` | 전체 화면 모바일 메뉴 드로어 |\n| `AppHeader.ModalMobileAccordionDrawer` | 모달 형태의 모바일 메뉴 드로어 |\n\n---\n\n## AppHeader.FixedHeader\n\n초기부터 표시되며, 아래로 스크롤 시 위로 사라지고 위로 스크롤 시 다시 나타나는 헤더입니다. 상단과 좌우 여백 없이 화면 전체 너비를 채우는 전폭(full-width) 스타일입니다.\n\n```tsx\nimport { AppHeader } from '@coldsurf/ocean-road/next'\n\n<AppHeader.FixedHeader\n  HeaderMenuItemComponent={<nav>...</nav>}\n  onClickOpenDrawer={() => setDrawerOpen(true)}\n/>\n```\n\n### Props\n\n| prop | 타입 | 필수 | 기본값 | 설명 |\n|------|------|------|--------|------|\n| `HeaderMenuItemComponent` | `ReactNode` | ✅ | — | 헤더 중앙/우측에 렌더할 메뉴 컴포넌트 |\n| `onClickOpenDrawer` | `() => void` | — | — | 모바일 햄버거 버튼 클릭 시 호출되는 콜백 |\n| `mobileLeftAccessory` | `ReactNode` | — | — | 모바일 뷰에서 햄버거 버튼 왼쪽에 표시할 요소 |\n| `logoRightAccessory` | `ReactNode` | — | — | 로고 오른쪽에 표시할 요소 |\n| `headerHeight` | `string` | — | `'100px'` | 헤더 높이 (CSS 값) |\n| `zIndex` | `number` | — | — | z-index 값 |\n\n---\n\n## AppHeader.FloatingHeader\n\n초기부터 표시되며, 아래로 스크롤 시 위로 사라지고 위로 스크롤 시 다시 나타나는 헤더입니다. 상단과 좌우에 여백이 있어 화면 위에 떠 있는 형태로 표시됩니다. 서비스명과 로고를 함께 표시합니다.\n\n```tsx\nimport { AppHeader, ColorSchemeToggle } from '@coldsurf/ocean-road/next'\n\n<AppHeader.FloatingHeader\n  serviceName=\"My App\"\n  HeaderMenuItemComponent={<nav>...</nav>}\n  ColorSchemeToggleComponent={<ColorSchemeToggle />}\n/>\n```\n\n### Props\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `serviceName` | `string` | ✅ | 로고 옆에 표시할 서비스 이름 |\n| `HeaderMenuItemComponent` | `ReactNode` | ✅ | 헤더 메뉴 컴포넌트 |\n| `ColorSchemeToggleComponent` | `ReactNode` | ✅ | 테마 토글 컴포넌트 |\n| `onClickOpenMobileDrawer` | `(params: { isMobileMenuOpen: boolean }) => void` | — | 모바일 드로어 버튼 클릭 콜백 |\n| `className` | `string` | — | 추가 CSS 클래스 |\n| `zIndex` | `number` | — | z-index 값 |\n\n---\n\n## AppHeader.FullScreenMobileAccordionDrawer\n\n전체 화면으로 펼쳐지는 모바일 메뉴 드로어입니다. `Accordion`을 내장하며, `FloatingHeader`의 내부 상태와 연동하거나 독립 실행(standalone) 모드로 사용할 수 있습니다.\n\n```tsx\nimport { AppHeader } from '@coldsurf/ocean-road/next'\n\n// FloatingHeader와 연동 (standalone: false)\n<AppHeader.FullScreenMobileAccordionDrawer\n  standalone={false}\n  data={menuItems}\n  renderTrigger={(item) => <span>{item.label}</span>}\n  renderExpanded={({ selectedItem }) => <SubMenu item={selectedItem} />}\n  ColorSchemeToggleComponent={<ColorSchemeToggle />}\n/>\n\n// 독립 제어 (standalone: true)\n<AppHeader.FullScreenMobileAccordionDrawer\n  standalone={true}\n  isOpen={drawerOpen}\n  onClickClose={() => setDrawerOpen(false)}\n  data={menuItems}\n  renderTrigger={(item) => <span>{item.label}</span>}\n  renderExpanded={({ selectedItem }) => <SubMenu item={selectedItem} />}\n  ColorSchemeToggleComponent={<ColorSchemeToggle />}\n/>\n```\n\n### Props\n\n`ItemT`는 반드시 `{ accordionKey: string }`을 포함해야 합니다.\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `standalone` | `boolean` | ✅ | `true`이면 `isOpen`으로 직접 제어, `false`이면 `FloatingHeader` 내부 상태와 연동 |\n| `isOpen` | `boolean` | standalone=true일 때 ✅ | 드로어 열림 여부 |\n| `onClickClose` | `(params: { isOpen: boolean }) => void` | — | 닫기 버튼 클릭 콜백 |\n| `zIndex` | `number` | — | z-index 값 (standalone=true일 때만 적용) |\n| `ColorSchemeToggleComponent` | `ReactNode` | ✅ | 드로어 하단에 렌더할 테마 토글 |\n| `data` | `ItemT[]` | ✅ | 아코디언 항목 배열 |\n| `renderTrigger` | `(item: ItemT) => ReactNode` | ✅ | 각 항목 트리거 렌더 함수 |\n| `renderExpanded` | `({ selectedItem }) => ReactNode` | ✅ | 펼쳐진 콘텐츠 렌더 함수 |\n| `customized` | `ReactNode` | — | 추가 커스텀 콘텐츠 |\n\n---\n\n## AppHeader.ModalMobileAccordionDrawer\n\n모달 형태의 모바일 메뉴 드로어입니다. 배경을 클릭하면 닫히며 하단 액세서리 슬롯을 지원합니다.\n\n```tsx\nimport { AppHeader } from '@coldsurf/ocean-road/next'\n\n<AppHeader.ModalMobileAccordionDrawer\n  isOpen={drawerOpen}\n  onClose={() => setDrawerOpen(false)}\n  data={menuItems}\n  renderTrigger={(item) => <span>{item.label}</span>}\n  renderExpanded={({ selectedItem }) => <SubMenu item={selectedItem} />}\n  bottomAccessory={<ColorSchemeToggle />}\n/>\n```\n\n### Props\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `isOpen` | `boolean` | ✅ | 드로어 열림 여부 |\n| `onClose` | `() => void` | ✅ | 닫기 콜백 (배경 클릭 포함) |\n| `bottomAccessory` | `ReactNode` | — | 목록 하단에 표시할 요소 |\n| `data` | `ItemT[]` | ✅ | 아코디언 항목 배열 |\n| `renderTrigger` | `(item: ItemT) => ReactNode` | ✅ | 각 항목 트리거 렌더 함수 |\n| `renderExpanded` | `({ selectedItem }) => ReactNode` | ✅ | 펼쳐진 콘텐츠 렌더 함수 |\n| `customized` | `ReactNode` | — | 추가 커스텀 콘텐츠 |"
	},
	{
		"slug": "global-link",
		"title": "GlobalLink",
		"description": "Next.js `Link`를 확장한 라우팅 링크 컴포넌트입니다. 클릭 시 `RouteLoading`의 로딩 상태를 자동으로 활성화합니다.",
		"platform": "next",
		"entry": "@coldsurf/ocean-road/next",
		"content": "# GlobalLink\n\nNext.js `Link`를 확장한 라우팅 링크 컴포넌트입니다. 클릭 시 `RouteLoading`의 로딩 상태를 자동으로 활성화합니다.\n\n`@coldsurf/ocean-road/next`에서 import합니다.\n\n`GlobalLink`와 `RouteLoading`은 쌍으로 사용합니다. `RouteLoading`이 렌더 트리에 존재해야 로딩 상태가 표시됩니다.\n\n## 사용법\n\n```tsx\nimport { GlobalLink } from '@coldsurf/ocean-road/next'\n\n<GlobalLink href=\"/concerts\">공연 목록</GlobalLink>\n\n// 외부 링크 — target 지정 시 로딩 상태를 활성화하지 않습니다\n<GlobalLink href=\"https://example.com\" target=\"_blank\">\n  외부 링크\n</GlobalLink>\n```\n\n## 미들웨어 리다이렉트 처리 — `initializeGlobalLinkRedirectMap`\n\nNext.js 미들웨어에서 경로를 리다이렉트하는 경우, `GlobalLink`는 `href`와 실제 렌더되는 경로가 다르다는 것을 알지 못합니다. 예를 들어 미들웨어가 `/` → `/live-events`로 리다이렉트할 때, 사용자가 `/live-events`에 있는 상태에서 `href=\"/\"` 링크를 클릭하면 페이지 이동은 없지만 `RouteLoading` 스피너가 표시됩니다.\n\n이를 해결하려면 `initializeGlobalLinkRedirectMap`으로 리다이렉트 매핑을 등록합니다. `'use client'` 클라이언트 컴포넌트 내에서 호출해야 합니다.\n\n```tsx\n'use client'\n\nimport { initializeGlobalLinkRedirectMap } from '@coldsurf/ocean-road/next'\n\n// 앱 진입점(예: 최상위 Provider 컴포넌트)에서 한 번 호출\ninitializeGlobalLinkRedirectMap({\n  '/': '/live-events',\n})\n```\n\n등록 후 `GlobalLink`는 `href=\"/\"`를 `/live-events`로 해석하여, 현재 경로와 동일하면 로딩 상태를 활성화하지 않습니다.\n\n## Props\n\nNext.js `LinkProps`와 `AnchorHTMLAttributes<HTMLAnchorElement>`를 모두 상속합니다.\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `href` | `string \\| Url` | ✅ | 이동할 경로 |\n| `children` | `ReactNode` | — | 링크 내용 |\n| `target` | `string` | — | `_blank` 등 링크 타겟. 지정 시 로딩 상태를 활성화하지 않습니다. |\n| `onClick` | `MouseEventHandler` | — | 클릭 핸들러 (내부 핸들러와 함께 실행됩니다) |"
	},
	{
		"slug": "grid-card-list",
		"title": "GridCardList (Next.js)",
		"description": "Next.js 전용 `GridCardList`입니다. `Item`과 `MasonryItem`이 `GlobalLink`를 내장하여 `href` prop만으로 페이지 전환 로딩 연동이 자동으로 처리됩니다.",
		"platform": "next",
		"entry": "@coldsurf/ocean-road/next",
		"content": "# GridCardList (Next.js)\n\nNext.js 전용 `GridCardList`입니다. `Item`과 `MasonryItem`이 `GlobalLink`를 내장하여 `href` prop만으로 페이지 전환 로딩 연동이 자동으로 처리됩니다.\n\n`@coldsurf/ocean-road/next`에서 import합니다. 기본 API는 [GridCardList (Extensions)](/components/grid-card-list)와 동일하며, `Item`과 `MasonryItem`의 동작만 다릅니다.\n\n## 사용법\n\n```tsx\nimport { GridCardList } from '@coldsurf/ocean-road/next'\n\n<GridCardList.List\n  items={items}\n  renderItem={(item) => (\n    <GridCardList.Item\n      key={item.id}\n      href={`/concerts/${item.id}`}  // href 지정 시 GlobalLink로 자동 래핑\n      {...item}\n    />\n  )}\n  onLoadMore={fetchNextPage}\n  hasNextPage={hasNextPage}\n/>\n```\n\n## Extension 버전과의 차이\n\n| | `@coldsurf/ocean-road` (extension) | `@coldsurf/ocean-road/next` |\n|--|--------------------------------------|-------------------------------|\n| `Item` | `href` prop 없음 | `href` prop으로 `GlobalLink` 자동 적용 |\n| `MasonryItem` | `href` prop 없음 | `href` prop으로 `GlobalLink` 자동 적용 |\n| 라우팅 | 직접 구현 | `GlobalLink`를 통해 `RouteLoading`과 자동 연동 |\n\n## GridCardList.Item / MasonryItem 추가 Props\n\n| prop | 타입 | 설명 |\n|------|------|------|\n| `href` | `string` | 지정하면 `GlobalLink`로 래핑하여 클릭 시 해당 경로로 이동합니다. 미지정 시 `onClick`만 동작합니다. |\n| `onClick` | `() => void` | 클릭 핸들러 |"
	},
	{
		"slug": "new-tab-link",
		"title": "NewTabLink",
		"description": "새 탭에서 열리는 링크 컴포넌트입니다. `target=\"_blank\"`와 `rel=\"noopener noreferrer\"`를 자동으로 적용합니다.",
		"platform": "next",
		"entry": "@coldsurf/ocean-road/next",
		"content": "# NewTabLink\n\n새 탭에서 열리는 링크 컴포넌트입니다. `target=\"_blank\"`와 `rel=\"noopener noreferrer\"`를 자동으로 적용합니다.\n\n`@coldsurf/ocean-road/next`에서 import합니다.\n\n## 사용법\n\n```tsx\nimport { NewTabLink } from '@coldsurf/ocean-road/next'\n\n<NewTabLink href=\"https://example.com\">\n  외부 링크\n</NewTabLink>\n```\n\n## Props\n\nNext.js `LinkProps`에서 `target`, `rel`을 제외한 나머지를 모두 상속합니다.\n\n| prop | 타입 | 필수 | 설명 |\n|------|------|------|------|\n| `href` | `string \\| Url` | ✅ | 이동할 URL |\n| `children` | `ReactNode` | — | 링크 내용 |"
	},
	{
		"slug": "route-loading",
		"title": "RouteLoading",
		"description": "기본적으로 `RouteLoading`은 마운트 시 로딩 상태를 자동으로 초기화합니다. 데이터 fetching이 끝난 후 로딩을 해제하려면 `deps`를 사용합니다.",
		"platform": "next",
		"entry": "@coldsurf/ocean-road/next",
		"content": "# RouteLoading\n\n`GlobalLink` 클릭 시 발생하는 페이지 전환 로딩을 처리하는 컴포넌트입니다. 로딩 중 `Spinner`를 전체 화면 오버레이로 표시합니다.\n\n`@coldsurf/ocean-road/next`에서 import합니다.\n\n`RouteLoading`은 루트 레이아웃보다 **각 `page.tsx`** 에서 개별적으로 사용하는 것을 권장합니다. 페이지마다 로딩 해제 시점(deps)이 다르기 때문입니다.\n\n## 사용법\n\n```tsx\n// app/concerts/page.tsx\n'use client'\n\nimport { RouteLoading } from '@coldsurf/ocean-road/next'\n\nexport default function ConcertsPage() {\n  return (\n    <RouteLoading>\n      <ConcertList />\n    </RouteLoading>\n  )\n}\n```\n\n### deps — 로딩 상태 초기화 시점 제어\n\n기본적으로 `RouteLoading`은 마운트 시 로딩 상태를 자동으로 초기화합니다. 데이터 fetching이 끝난 후 로딩을 해제하려면 `deps`를 사용합니다.\n\n```tsx\n// app/concerts/page.tsx\n'use client'\n\nimport { RouteLoading } from '@coldsurf/ocean-road/next'\n\nexport default function ConcertsPage() {\n  const { data, isLoading } = useConcerts()\n\n  return (\n    <RouteLoading deps={[isLoading]}>\n      {data && <ConcertList items={data} />}\n    </RouteLoading>\n  )\n}\n```\n\n## Props\n\n| prop | 타입 | 기본값 | 설명 |\n|------|------|--------|------|\n| `children` | `ReactNode` | — | 페이지 콘텐츠 |\n| `deps` | `DependencyList` | `[]` | 로딩 상태를 초기화할 의존성 배열. 값이 변경될 때 `isLoading`을 `false`로 설정합니다. |\n\n## 미들웨어 리다이렉트와 함께 사용 시 주의\n\nNext.js 미들웨어로 경로를 리다이렉트하는 경우, `GlobalLink`가 `href`와 실제 렌더 경로가 다름을 인식하지 못해 불필요한 스피너가 표시될 수 있습니다. 이 경우 `initializeGlobalLinkRedirectMap`으로 매핑을 등록해야 합니다. 자세한 내용은 [GlobalLink — 미들웨어 리다이렉트 처리](/next/global-link#미들웨어-리다이렉트-처리--initializegloballinkedirectmap)를 참고하세요.\n\n## GlobalLink와의 연동 흐름\n\n```\n사용자가 GlobalLink 클릭\n    → isLoading = true  (GlobalLink 내부)\n    → Spinner 오버레이 표시 (RouteLoading)\n    → 새 페이지 마운트\n    → isLoading = false (RouteLoading useLayoutEffect)\n    → Spinner 사라짐\n```"
	}
];

//#endregion
//#region src/tools/get-component.ts
function getComponent(slug) {
	const component = components.find((c) => c.slug === slug);
	if (!component) return null;
	return component;
}

//#endregion
//#region src/tools/get-tokens.ts
const COLOR_TOKENS = {
	background: [
		1,
		2,
		3,
		4,
		5
	].map((i) => ({
		js: `semantics.color.background[${i}]`,
		css: `var(--color-background-${i})`
	})),
	foreground: [
		1,
		2,
		3,
		4,
		5
	].map((i) => ({
		js: `semantics.color.foreground[${i}]`,
		css: `var(--color-foreground-${i})`
	})),
	border: [
		1,
		2,
		3
	].map((i) => ({
		js: `semantics.color.border[${i}]`,
		css: `var(--color-border-${i})`
	})),
	dimmed: [1, 2].map((i) => ({
		js: `semantics.color.dimmed[${i}]`,
		css: `var(--color-dimmed-${i})`
	}))
};
const TYPOGRAPHY_TOKENS = {
	heading1: {
		fontSize: "1.5rem",
		fontWeight: "700",
		lineHeight: "1.2"
	},
	heading2: {
		fontSize: "1.25rem",
		fontWeight: "600",
		lineHeight: "1.2"
	},
	heading3: {
		fontSize: "1.125rem",
		fontWeight: "600",
		lineHeight: "1.5"
	},
	body1: {
		fontSize: "1rem",
		fontWeight: "400",
		lineHeight: "1.5"
	},
	body2: {
		fontSize: "0.875rem",
		fontWeight: "400",
		lineHeight: "1.5"
	},
	caption: {
		fontSize: "0.75rem",
		fontWeight: "400",
		lineHeight: "1.75"
	},
	label: {
		fontSize: "0.875rem",
		fontWeight: "500",
		lineHeight: "1.5"
	}
};
function getTokens(category = "all") {
	if (category === "color") return { color: COLOR_TOKENS };
	if (category === "typography") return { typography: TYPOGRAPHY_TOKENS };
	return {
		color: COLOR_TOKENS,
		typography: TYPOGRAPHY_TOKENS
	};
}

//#endregion
//#region src/tools/list-components.ts
function listComponents(platform) {
	const filtered = platform ? components.filter((c) => c.platform === platform) : components;
	return filtered.map((c) => ({
		slug: c.slug,
		title: c.title,
		description: c.description,
		platform: c.platform,
		entry: c.entry
	}));
}

//#endregion
//#region src/tools/search.ts
function search(query) {
	const q = query.toLowerCase();
	return components.filter((c) => c.slug.includes(q) || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.content.toLowerCase().includes(q)).map((c) => ({
		slug: c.slug,
		title: c.title,
		description: c.description,
		platform: c.platform,
		entry: c.entry
	}));
}

//#endregion
//#region src/server.ts
const server = new McpServer({
	name: "ocean-road",
	version: "0.1.0"
});
server.tool("list_components", "Ocean Road 디자인 시스템의 컴포넌트 목록을 반환합니다.", { platform: z.enum(["web", "next"]).optional().describe("플랫폼 필터 (web | next). 생략 시 전체") }, async ({ platform }) => {
	const result = listComponents(platform);
	return { content: [{
		type: "text",
		text: JSON.stringify(result, null, 2)
	}] };
});
server.tool("get_component", "컴포넌트 이름(slug)으로 props, 사용법, 예시 코드를 포함한 상세 문서를 반환합니다.", { slug: z.string().describe("컴포넌트 slug (예: button, text-input, modal)") }, async ({ slug }) => {
	const component = getComponent(slug);
	if (!component) return {
		content: [{
			type: "text",
			text: `컴포넌트 "${slug}"를 찾을 수 없습니다.`
		}],
		isError: true
	};
	return { content: [{
		type: "text",
		text: component.content
	}] };
});
server.tool("get_design_tokens", "색상 및 타이포그래피 디자인 토큰을 반환합니다.", { category: z.enum([
	"color",
	"typography",
	"all"
]).optional().describe("토큰 카테고리 (color | typography | all). 기본값: all") }, async ({ category }) => {
	const tokens = getTokens(category ?? "all");
	return { content: [{
		type: "text",
		text: JSON.stringify(tokens, null, 2)
	}] };
});
server.tool("search", "키워드로 컴포넌트를 검색합니다. 이름, 설명, 문서 내용에서 검색합니다.", { query: z.string().describe("검색 키워드 (예: button, input, modal, 버튼)") }, async ({ query }) => {
	const results = search(query);
	if (results.length === 0) return { content: [{
		type: "text",
		text: `"${query}"에 해당하는 컴포넌트를 찾을 수 없습니다.`
	}] };
	return { content: [{
		type: "text",
		text: JSON.stringify(results, null, 2)
	}] };
});
const transport = new StdioServerTransport();
await server.connect(transport);

//#endregion