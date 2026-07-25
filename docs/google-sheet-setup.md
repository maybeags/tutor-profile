# 구글 시트 연동 설정 가이드

학생이 프로필을 제출하면 이 시트에 한 줄씩 자동으로 쌓입니다. 서버 없이 **Google Apps Script Web App**을 프록시로 사용하는 방식이라, 구글 계정으로 직접 아래 단계를 진행해야 합니다 (계정 인증이 필요한 부분이라 대신 해드릴 수 없어요).

## 1. 구글 시트 생성

새 [Google Sheets](https://sheets.new) 문서를 만들고, 첫 번째 탭의 첫 행에 헤더를 입력합니다.

```
제출일시   학생유형   이름   연락처   학교   학년   상세내용
```

레벨테스트 결과는 `레벨테스트`라는 별도 탭에 기록되며, 이 탭은 첫 제출 시 헤더와 함께 자동으로 만들어지므로 미리 준비할 필요가 없습니다.

## 2. Apps Script 붙여넣기

시트 메뉴에서 **확장 프로그램 → Apps Script**를 클릭하고, 기본 코드를 지운 뒤 아래 코드를 붙여넣습니다.

```javascript
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const data = JSON.parse(e.postData.contents);

  if (data.kind === 'levelTest') {
    // 레벨테스트 결과 → '레벨테스트' 탭 (없으면 헤더와 함께 자동 생성)
    const sheet = ss.getSheetByName('레벨테스트') || ss.insertSheet('레벨테스트');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        '제출일시', '이름', '연락처', '총점',
        '문법', '어휘', '독해', '서술형', '취약영역', '오답문항',
      ]);
    }
    sheet.appendRow([
      data.submittedAt, data.name, data.contact, data.total,
      data.grammar, data.vocabulary, data.reading, data.writing,
      data.weakAreas, data.wrongItems,
    ]);
  } else {
    // 학생 프로필 → 첫 번째 탭 (기존과 동일)
    const sheet = ss.getSheets()[0];
    sheet.appendRow([
      data.submittedAt, data.type, data.name,
      data.contact, data.school, data.grade, data.detail,
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

`Ctrl/Cmd + S`로 저장합니다 (프로젝트 이름은 아무거나 상관없어요, 예: `tutor-profile-webhook`).

> **이미 배포된 스크립트의 코드를 고친 경우**: 저장만으로는 반영되지 않습니다.
> **배포 → 배포 관리 → 연필(수정) 아이콘 → 버전: "새 버전" 선택 → 배포**를 눌러야 적용됩니다.
> 이 방법은 **웹 앱 URL이 그대로 유지**되므로 GitHub Secret을 다시 등록할 필요가 없습니다.
> ("새 배포"로 만들면 URL이 바뀌어서 시크릿도 함께 갱신해야 합니다.)

## 3. 웹 앱으로 배포

1. 우측 상단 **배포 → 새 배포**
2. 톱니바퀴(유형 선택) → **웹 앱**
3. 설정:
   - 실행 계정: **나**
   - 액세스 권한이 있는 사용자: **모든 사용자** (이래야 사이트에서 로그인 없이 호출 가능)
4. **배포** 클릭 → 구글 계정 권한 승인 화면이 뜨면 승인
5. 배포 완료 후 나오는 **웹 앱 URL**을 복사합니다 (`https://script.google.com/macros/s/.../exec` 형태)

## 4. 이 URL을 프로젝트에 연결

복사한 URL을 아래 두 곳에 등록하면 연동이 끝입니다.

- **로컬 개발**: 프로젝트 루트에 `.env` 파일을 만들고 `VITE_SHEET_WEBHOOK_URL=복사한_URL` 추가 (`.env.example` 참고)
- **배포(GitHub Pages)**: GitHub 저장소 → Settings → Secrets and variables → Actions → New repository secret → 이름 `SHEET_WEBHOOK_URL`, 값에 복사한 URL 입력

이후 `main` 브랜치에 push하면 GitHub Actions가 빌드 시 이 값을 주입해 재배포합니다.

## 참고

- URL을 등록하지 않으면 시트 연동 없이 기존처럼(복사하기 버튼) 동작합니다 — 필수 기능이 아니라 선택적 로깅입니다.
- 요청은 `fetch(..., { mode: 'no-cors' })`로 보내기 때문에 브라우저에서 응답 성공 여부를 확인할 수는 없습니다. 실제로 시트에 잘 쌓이는지는 테스트 제출 한 번으로 확인해주세요.
- 시트에 새 컬럼을 추가하고 싶다면 `src/lib/submitToSheet.js`의 `payload` 객체와 Apps Script의 `sheet.appendRow([...])` 순서를 맞춰서 함께 수정하면 됩니다.
