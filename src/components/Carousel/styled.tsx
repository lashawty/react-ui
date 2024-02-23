import styled from 'styled-components';

export const CarouselWrapper = styled.div<{
	$width: number;
	$height: number;
}>`
  position: relative;
  max-width: ${({$width}) => $width}px;
  width: 100%;
  height: ${({$height}) => $height}px;
`;

export const Slides = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const Slide = styled.div<{
	$left: number;
}>`
  width: 100%;
  position: absolute;
  left: 0;
  transform: translate3d(${({$left}) => $left}px, 0, 0);
  transition: all 0.4s ease;
  will-change: transform;
`;

export const ControlButtons = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  z-index: 1;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
`;

export const Dot = styled.div<{
	$isCurrent: boolean;
}>`
  border-radius: 100%;
  width: ${({$isCurrent}) => ($isCurrent ? 10 : 8)}px;
  height: ${({$isCurrent}) => ($isCurrent ? 10 : 8)}px;
  border: 1px solid #000;
  background: ${({$isCurrent}) => ($isCurrent ? '#000' : 'none')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
