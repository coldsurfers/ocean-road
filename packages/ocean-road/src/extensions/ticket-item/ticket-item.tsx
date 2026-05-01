'use client';

import { Text } from '@/base';
import { colors, semantics } from '@/tokens';
import media from '@/utils/media';
import { dateUtils } from '@coldsurf/shared-utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ReactNode, useId } from 'react';

const ClipPathSvg = ({ id }: { id: string }) => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <defs>
      <clipPath id={id} clipPathUnits="objectBoundingBox">
        <path d="M0.4666666666666667 4.0797391304347825e-8C0.4666666666666667 0.01920994202898551 0.4822405797101449 0.034782608695652174 0.5014492753623189 0.034782608695652174C0.5206579710144927 0.034782608695652174 0.5362318840579711 0.01920994202898551 0.5362318840579711 4.6878840579710144e-8L0.9710144927536232 2.1097420289855072e-7C0.9870231884057972 2.1381420289855074e-7 1 0.012977449275362318 1 0.028985797101449273L1 0.9710144927536232C1 0.9870231884057972 0.9870231884057972 1 0.9710144927536232 1L0.5362318840579711 1C0.5362318840579711 0.980791304347826 0.5206579710144927 0.9652173913043478 0.5014492753623189 0.9652173913043478C0.4822405797101449 0.9652173913043478 0.4666666666666667 0.980791304347826 0.4666666666666667 1L0.028985507246376812 1C0.012977304347826088 1 4.1434202898550726e-8 0.9870231884057972 4.212376811594203e-8 0.9710144927536232L8.592260869565217e-8 0.028985507246376812C8.732231884057972e-8 0.012977304347826088 0.012977333333333332 3.9834202898550725e-8 0.028985507246376812 4.123391304347826e-8L0.4666666666666667 4.0797391304347825e-8Z" />
      </clipPath>
    </defs>
  </svg>
);

const Container = styled.div<{ $clipPathId: string }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: ${(props) => `url(#${props.$clipPathId})`};
`;

const ContainerAbsolute = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
`;

const DefaultConcertThumbnail = styled.img`
    width: 248px;
    aspect-ratio: 1 / 1;
    border-radius: 12px;
    object-fit: cover;
    object-position: 50%;
    background-color: ${semantics.color.background[2]};

    ${media.medium(css`
      width: 180px;
      height: 180px;
    `)}
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
  z-index: 2;
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
  const clipPathId = useId().replace(/:/g, '');

  return (
    <>
      <ClipPathSvg id={clipPathId} />
      <Container $clipPathId={clipPathId}>
        {thumbnailUrl ? (
          renderThumbnail ? (
            renderThumbnail(thumbnailUrl)
          ) : (
            <DefaultConcertThumbnail src={thumbnailUrl} />
          )
        ) : null}
        <ContainerAbsolute />
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
              <TicketTypeBadgeText>{badgeText}</TicketTypeBadgeText>
            </TicketTypeBadge>
          )}
        </ConcertInfoPositionAbsolute>
      </Container>
    </>
  );
}
