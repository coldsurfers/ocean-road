const STORYBOOK_BASE_URL = 'https://storybook.ocean-road.coldsurf.io';

export default function StorybookEmbed({ story }: { story: string }) {
  const src = `${STORYBOOK_BASE_URL}/iframe.html?id=${story}&viewMode=story`;
  return (
    <iframe
      src={src}
      title={`Storybook: ${story}`}
      style={{ width: '100%', height: 300, border: 'none', borderRadius: 8 }}
    />
  );
}
