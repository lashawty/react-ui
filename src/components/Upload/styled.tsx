import styled from 'styled-components';

export const InputFile = styled.input`
  display: none;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const DefaultLabel = styled.span`
  text-align: center;
  padding: 5px;
  display: block;
  color: #fff;
`;

export const Label = styled(DefaultLabel)`
  border: 1px solid #fff;
  border-radius: 5px;
`;

export const Root = styled.div`
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #fff;
  cursor: pointer;
`;
