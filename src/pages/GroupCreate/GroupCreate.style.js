import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    color: #282828;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;

    border-radius: 6px;
    border: 1px solid #ddd;
    background-color: #fafafa;

    &::placeholder {
      color: #b8b8b8;
    }
  }
`;

export const Title = styled.div`
  color: #282828;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.72px;

  margin: 60px 0;
`;

export const Name = styled.div`
  margin-bottom: 40px;
`;

export const NameTitle = styled.div`
  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const NameField = styled.input`
  width: 400px;
  height: 45px;

  padding: 0 20px;
`;

export const Image = styled.div`
  margin-bottom: 40px;
`;

export const ImageTitle = styled.div`
  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const ImageSelect = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageField = styled.input`
  width: 290px;
  height: 45px;

  padding: 0 20px;
`;

export const ImageButton = styled.div`
  width: 100px;
  height: 45px;

  border-radius: 6px;
  border: 1px solid #282828;
  background-color: #fafafa;

  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.42px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Intro = styled.div`
  margin-bottom: 40px;
`;

export const IntroTitle = styled.div`
  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const IntroField = styled.textarea`
  width: 400px;
  height: 120px;

  padding: 15px 20px;

  resize: none;
`;

export const Public = styled.div`
  width: 400px;
  margin-bottom: 40px;
`;

export const PublicTitle = styled.div`
  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;

  margin-bottom: 20px;
`;

export const PublicSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    margin: 0;
  }
`;

export const PublicSelectState = styled.div`
  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.42px;
`;

export const Password = styled.div``;

export const PasswordTitle = styled.div`
  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const PasswordField = styled.input`
  width: 400px;
  height: 45px;

  margin-bottom: 75px;
  padding: 0 20px;
`;
