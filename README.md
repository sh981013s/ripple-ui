# Ripple UI Repo

`Ripple UI`를 앱 코드와 분리해서 독립적으로 개발하기 위한 전용 repository scaffold입니다.

## Structure

- `packages/ripple-ui`: 라이브러리 본체
- `demo`: 문서형 demo 앱

## Run

```bash
npm install
npm run dev:demo
```

기본 demo 주소는 `http://localhost:4176`입니다.

## Build

```bash
npm run build:core
npm run build:demo
```
