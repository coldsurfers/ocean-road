import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { useAccordion } from './accordion.hooks';

const StyledLi = styled.li`
    margin: 20px 0;
`;

const StyledDropdownWrapper = styled.div`
    margin-top: 0.5rem;
`;

type AccordionRendererProps<ItemT> = {
  accordionKey: string | null;
  item: ItemT;
  renderTrigger: (item: ItemT) => ReactNode;
  renderExpanded: ({ selectedItem }: { selectedItem: ItemT }) => ReactNode;
};

const AccordionRenderer = <ItemT extends { accordionKey: string }>({
  accordionKey,
  item,
  renderTrigger,
  renderExpanded,
}: AccordionRendererProps<ItemT>) => {
  return (
    <StyledLi>
      {renderTrigger(item)}
      {accordionKey === item.accordionKey && (
        <StyledDropdownWrapper>
          {renderExpanded({
            selectedItem: item,
          })}
        </StyledDropdownWrapper>
      )}
    </StyledLi>
  );
};

export type AccordionProps<ItemT> = {
  data: ItemT[];
  renderTrigger: (item: ItemT) => ReactNode;
  renderExpanded: ({ selectedItem }: { selectedItem: ItemT }) => ReactNode;
  customized?: ReactNode;
};

export const Accordion = <ItemT extends { accordionKey: string }>({
  data,
  renderTrigger,
  renderExpanded,
  customized,
}: AccordionProps<ItemT>) => {
  const [accordionKey, setAccordionKey] = useAccordion();
  return (
    <>
      {data.map((item) => {
        return (
          <AccordionRenderer
            key={item.accordionKey}
            accordionKey={accordionKey}
            item={item}
            renderTrigger={(item) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={item.accordionKey}
                onClick={() =>
                  setAccordionKey((prev) => (prev === item.accordionKey ? null : item.accordionKey))
                }
              >
                {renderTrigger(item)}
              </div>
            )}
            renderExpanded={({ selectedItem }) => <>{renderExpanded({ selectedItem })}</>}
          />
        );
      })}
      {customized}
    </>
  );
};
