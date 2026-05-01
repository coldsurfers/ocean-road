'use client';

import { Text } from '@/base';
import { colors, semantics } from '@/tokens';
import media from '@/utils/media';
import { dateUtils } from '@coldsurf/shared-utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

const Container = styled.div`
    position: relative;
    width: fit-content;
`;

const DefaultConcertThumbnail = styled.img`
    width: 248px;
    height: 248px;
    border-radius: 12px;
    object-fit: cover;
    object-position: 50%;
    background-color: ${semantics.color.background[2]};

    ${media.medium(css`
      width: 180px;
      height: 180px;
    `)}
`;

const circleWidth = 36;

const ConcertThumbnailHalfCircle = styled.div<{ $inverted?: boolean }>`
    position: absolute;

    top: ${(props) => (props.$inverted ? 'unset' : `${circleWidth * 0.5}px`)};
    bottom: ${(props) => (props.$inverted ? `-${circleWidth * 0.5}px` : 'unset')};
    left: 50%;

    transform: translate(-50%, -${circleWidth * 0.5}px);
    width: ${circleWidth}px;
    height: ${circleWidth * 0.5}px;
    background-color: ${semantics.color.background[2]};
    border-radius: ${(props) => (props.$inverted ? `${circleWidth * 0.5}px ${circleWidth * 0.5}px 0 0` : `0 0 ${circleWidth * 0.5}px ${circleWidth * 0.5}px`)};
`;

const TicketTypeBadge = styled.div`
  padding: 4px;
  border-radius: 4px;
  background-color: ${semantics.color.background[2]};
  border: 1px solid ${semantics.color.border[2]};
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
`;

const TicketTypeBadgeText = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: ${semantics.color.foreground[1]};
  margin: unset;

  ${media.medium(css`
    font-size: 10px;
  `)}
`;

const ConcertInfoPositionAbsolute = styled.div`
  position: absolute;
  left: 8px;
  bottom: 12px;
  max-width: 80%;

  gap: 2.5px;
  display: flex;
  flex-direction: column;
`;

const ConcertTitle = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.oc.white.value};
  margin: unset;

  ${media.medium(css`
    font-size: 14px;
  `)}
`;

const ConcertVenue = styled(ConcertTitle)`
  font-size: 14px;
  color: ${colors.oc.white.value};

  ${media.medium(css`
    font-size: 12px;
  `)}
`;

const ConcertDate = styled(ConcertTitle)`
  font-size: 12px;
  color: ${colors.oc.white.value};

  ${media.medium(css`
    font-size: 10px;
  `)}
`;

export function TicketItem({
  title,
  venueName,
  date,
  thumbnailUrl,
  renderThumbnail,
  badgeText,
}: {
  title: string;
  venueName: string;
  date: string | Date;
  thumbnailUrl: string;
  renderThumbnail?: (url: string) => ReactNode;
  badgeText?: string;
}) {
  return (
    <Container>
      {thumbnailUrl ? (
        renderThumbnail ? (
          renderThumbnail(thumbnailUrl)
        ) : (
          <DefaultConcertThumbnail src={thumbnailUrl} />
        )
      ) : null}
      <ConcertThumbnailHalfCircle />
      <ConcertThumbnailHalfCircle $inverted />
      <ConcertInfoPositionAbsolute>
        <ConcertTitle numberOfLines={1}>{title}</ConcertTitle>
        <ConcertVenue numberOfLines={1}>{venueName}</ConcertVenue>
        <ConcertDate numberOfLines={1}>
          {dateUtils.parseEventDate(date instanceof Date ? date : new Date(date), {
            formatStyle: 'english',
          })}
        </ConcertDate>
        {badgeText && (
          <TicketTypeBadge>
            <TicketTypeBadgeText>무료티켓</TicketTypeBadgeText>
          </TicketTypeBadge>
        )}
      </ConcertInfoPositionAbsolute>
    </Container>
  );
}
