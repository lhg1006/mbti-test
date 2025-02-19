# MBTI 성격유형 테스트

Next.js와 TypeScript를 사용하여 만든 MBTI 성격유형 테스트 웹 애플리케이션입니다.

## 📸 스크린샷

|메인 화면|선택 화면|
|:---:|:---:|
|<img src="https://raw.githubusercontent.com/lhg1006/portfolio-images/a3ed392a2921be631bc8d94977ee17c8f26fb0d6/images/project/mbti-0.png" width="400">|<img src="https://raw.githubusercontent.com/lhg1006/portfolio-images/a3ed392a2921be631bc8d94977ee17c8f26fb0d6/images/project/mbti-1.png" width="400">|
|테스트 화면|결과 화면|
|<img src="https://raw.githubusercontent.com/lhg1006/portfolio-images/a3ed392a2921be631bc8d94977ee17c8f26fb0d6/images/project/mbti-2.png" width="400">|<img src="https://raw.githubusercontent.com/lhg1006/portfolio-images/a3ed392a2921be631bc8d94977ee17c8f26fb0d6/images/project/mbti-3.png" width="400">|


## 🚀 주요 기능

- 20개의 질문을 통한 MBTI 성격유형 분석
- 모바일 친화적인 반응형 디자인
- 부드러운 애니메이션과 인터랙션
- 진행 상황을 보여주는 프로그레스 바
- 직관적인 사용자 인터페이스

## 🛠 기술 스택

- **Frontend Framework**: Next.js 14
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **UI 컴포넌트**: shadcn/ui
- **배포**: Vercel

## 🏃‍♂️ 실행 방법

1. GitHub에서 저장소 Fork하기
   - GitHub의 저장소 페이지에서 우측 상단의 'Fork' 버튼 클릭
   - Fork할 저장소 설정 후 'Create fork' 클릭

2. Fork한 저장소 클론
```bash
git clone https://github.com/[본인의_깃허브_아이디]/mbti-test.git
```

3. 프로젝트 폴더로 이동
```bash
cd mbti-test
```

4. 의존성 설치
```bash
npm install
# 또는
yarn install
```

5. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

6. 브라우저에서 `http://localhost:3000` 접속

## 📱 프로젝트 구조

```
mbti-test/
├── app/                  # Next.js 앱 디렉토리
├── components/           # 재사용 가능한 컴포넌트
├── data/                # MBTI 질문 데이터
├── public/              # 정적 파일
└── styles/              # 전역 스타일
```

## 🎨 주요 컴포넌트

- `MBTITest`: 메인 테스트 컴포넌트
- `ProgressBar`: 진행 상황 표시
- `Footer`: 푸터 컴포넌트

## 🔄 MBTI 테스트 로직

- E/I, S/N, T/F, J/P 각 선호 경향을 측정
- 각 질문당 4개의 선택지 제공
- 선택에 따라 MBTI 유형 계산

## 📱 데모

[MBTI 검사 링크!](https://mbti-test-blush.vercel.app/)
