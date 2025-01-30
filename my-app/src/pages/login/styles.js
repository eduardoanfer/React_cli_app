import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Tag declarativa .main
// margin 0 auto -> para ficar alinhado ao centro
// margin-top 120px para não ficar colado com o cabeçalho

export const Title = styled.h2`
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;
`;

// margin-bottom: para não ficar muito colado com outro texto

export const Wrapper = styled.div`
  max-width: 300px; // Corrigido erro de digitação
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

// row flex porque é um campo de login

export const TitleLogin = styled.p`
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const SubTitleLogin = styled.p`
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 35px;
  line-height: 25px; // Corrigido erro de "25x"
`;

export const EsqueciText = styled.p`
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 35px;
  line-height: 19px; // Corrigido erro de "19x"
  color: #e5e044; // Considere usar uma variável de cor
`;

export const CriarText = styled.p`
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 35px;
  line-height: 19px; // Corrigido erro de "19x"
  color: #fc6a02; // Considere usar uma variável de cor
`;
