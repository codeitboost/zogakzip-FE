import Button from '../../components/common/button/Button';
import * as G from './GroupCreate.style';

export default function GroupCreate() {
  return (
    <G.Container>
      <G.Title>그룹 만들기</G.Title>
      <G.Name>
        <G.NameTitle>그룹명</G.NameTitle>
        <G.NameField placeholder="그룹 이름을 입력해 주세요" />
      </G.Name>
      <G.Image>
        <G.ImageTitle>대표 이미지</G.ImageTitle>
        <G.ImageSelect>
          <G.ImageField placeholder="파일을 선택해 주세요" />
          <G.ImageButton>파일 선택</G.ImageButton>
        </G.ImageSelect>
      </G.Image>
      <G.Intro>
        <G.IntroTitle>그룹 소개</G.IntroTitle>
        <G.IntroField placeholder="그룹을 소개해 주세요" />
      </G.Intro>
      <G.Public>
        <G.PublicTitle>그룹 공개 선택</G.PublicTitle>
        <G.PublicSelect>
          <G.PublicSelectState>공개</G.PublicSelectState>
        </G.PublicSelect>
      </G.Public>
      <G.Password>
        <G.PasswordTitle>비밀번호</G.PasswordTitle>
        <G.PasswordField placeholder="비밀번호를 입력해 주세요" />
      </G.Password>
      <Button text="만들기" width="400px" height="50px" fontsize="16px" />
    </G.Container>
  );
}
