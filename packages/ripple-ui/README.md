# Ripple UI

`Ripple UI`는 특정 제품 구현을 복제하지 않고, `밝은 표면 / 절제된 포인트 컬러 / 큰 radius / 얕은 그림자 / 넓은 spacing` 같은 시각 규칙을 재구성한 범용 디자인 라이브러리입니다.

## Principles

- 강한 포인트 컬러는 제한적으로 사용
- 배경보다 표면 대비로 레이어를 구분
- 진한 그림자보다 보더와 내부 하이라이트를 우선
- 타이포 위계는 크기와 무게로만 명확하게 분리
- 인터랙션은 짧고 안정적으로 반응

## Included

- tokens: color, radius, spacing, shadow
- primitives: `Surface`, `Stack`, `Inline`
- components:
  - `Button`
  - `IconButton`
  - `Card`
  - `Chip`
  - `Dialog`
  - `BottomSheet`
  - `TopBar`
  - `Input`
  - `Switch`
  - `Checkbox`
  - `Radio`
  - `Toast`
  - `NoticeBanner`
  - `ListRow`
  - `ProgressBar`
  - `Divider`
  - `EmptyState`
  - `Tabs`, `Tab`
  - `InfoRow`
  - `SectionHeader`
  - `Text`

## Demo

```bash
npm run dev:ui-demo
```

기본 demo 주소는 `http://localhost:4175`입니다.

## Package Build

```bash
npm run build:ripple-ui
```

라이브러리 산출물은 `packages/ripple-ui/dist`에 생성됩니다.

## Usage

```jsx
import "@ripple-ui/core/tokens.css";
import "@ripple-ui/core/styles.css";
import {
  Button,
  BottomSheet,
  Card,
  Chip,
  InfoRow,
  Input,
  SectionHeader,
  Stack,
  Switch,
  Tab,
  Tabs,
  Text,
  Toast,
} from "@ripple-ui/core";

export function Example() {
  return (
    <Card>
      <Stack gap={20}>
        <SectionHeader
          eyebrow="overview"
          title="서비스 상태"
          description="핵심 정보를 빠르게 읽을 수 있는 카드 레이아웃입니다."
          actions={<Chip tone="accent">정상</Chip>}
        />
        <InfoRow label="이번 달 정산" value="₩1,280,000" />
        <Input label="검색" placeholder="키워드를 입력하세요" />
        <Switch checked readOnly label="알림 받기" description="중요 상태 변경 시 즉시 알려줍니다." />
        <Tabs aria-label="기간 선택">
          <Tab active>오늘</Tab>
          <Tab>이번 주</Tab>
          <Tab>이번 달</Tab>
        </Tabs>
        <Toast title="자동 저장 완료" description="방금 변경 사항이 반영되었습니다." badge="live" />
        <Button>계속하기</Button>
        <BottomSheet open={false}>Bottom sheet content</BottomSheet>
      </Stack>
    </Card>
  );
}
```
