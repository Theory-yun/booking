// ─────────────────────────────────────────────────────────────
// 예약 데이터 저장소 설정 (Firebase Firestore)
//
// 비워 두면(null) "체험 모드"로 동작합니다. 체험 모드에서는
// 예약이 접속한 브라우저에만 저장되어 다른 사람과 공유되지 않습니다.
//
// 실제 운영 시: README.md 의 "Firebase 연결" 순서대로 프로젝트를 만든 뒤
// 아래 null 을 Firebase 콘솔에서 복사한 설정 객체로 바꿔 주세요.
// ─────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = null;

/* 예시 (Firebase 콘솔 > 프로젝트 설정 > 내 앱 > SDK 설정 및 구성)
window.FIREBASE_CONFIG = {
  apiKey: "AIza....",
  authDomain: "my-project.firebaseapp.com",
  projectId: "my-project",
  storageBucket: "my-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
