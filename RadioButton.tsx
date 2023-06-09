import { Box, Stack } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

type DataType = {
  label?: string;
  value?: string;
}

type StyledRadio = {
  color?: string;
  flexDirection?: string;
  columnGap?: string;
  rowGap?: string;
}

type Props = {
  data?: DataType[];
  selected?: string;
  onChange?: (value: string) => void;
} & StyledRadio;

const RadioButton = ({
  data,
  color = '#A885A2',
  flexDirection,
  columnGap,
  rowGap,
  selected,
  onChange,
}: Props) => {

  const { t } = useTranslation();

  return (
    <Wrapper
      flexDirection={flexDirection}
      color={color}
      columnGap={columnGap}
      rowGap={rowGap}
    >
      {(data || []).map((item, index) =>
        <Box key={index}>
          <Stack flexDirection="row" columnGap={2}>
            <Box className="box-radio-btn" onClick={() => onChange?.(item.value!)}>
              <Box className={selected === item.value ? 'active' : ''}></Box>
            </Box>
            <Box>{t(item.label!)}</Box>
          </Stack>
        </Box>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section<StyledRadio>`
  display: flex;
  flex-direction: ${(p) => p.flexDirection || 'column'};
  column-gap: ${(p) => p.columnGap || '0'};
  row-gap: ${(p) => p.rowGap || '0'};

  .box-radio-btn {
    border: 2px solid ${(p) => p.color || '#A885A2'};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .active {
      background: ${(p) => p.color || '#A885A2'};
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }
`

export default RadioButton;