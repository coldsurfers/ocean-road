import { Global, css } from '@emotion/react';
import { darkModeTheme, lightModeTheme, themeToStyles } from './contexts/ColorSchemeProvider';
import { colors, semantics } from './tokens';

type Props = {
  themeStorageItem?: string;
};

export default function GlobalStyle({ themeStorageItem }: Props) {
  return (
    <>
      <Global
        styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        html {
          ${themeToStyles(lightModeTheme)}
        }
        html.dark {
          ${themeToStyles(darkModeTheme)}
        }

        body {
          background-color: ${semantics.color.background[2]};
          color: ${semantics.color.foreground[1]};
          white-space: pre-wrap;
        }

        a {
          color: ${colors.oc.blue[5].value};
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
      />
      {themeStorageItem && (
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
              var themeStorage = '${themeStorageItem}';

              function setTheme(newTheme) {
                window.__theme = newTheme;
                if (newTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (newTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              }

              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem(themeStorage);
              } catch (err) { }

              window.__setPreferredTheme = function(newTheme) {
                preferredTheme = newTheme;
                setTheme(newTheme);
                try {
                  localStorage.setItem(themeStorage, newTheme);
                } catch (err) {
                  console.error(err);
                }
              };

              var initialTheme = preferredTheme;
              var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

              if (!initialTheme) {
                initialTheme = darkQuery.matches ? 'dark' : 'light';
              }
              setTheme(initialTheme);

              darkQuery.addEventListener('change', function (e) {
                if (!preferredTheme) {
                  setTheme(e.matches ? 'dark' : 'light');
                }
              });

              // Detect whether the browser is Mac to display platform specific content
              // An example of such content can be the keyboard shortcut displayed in the search bar
              // document.documentElement.classList.add(
              //     window.navigator.platform.includes('Mac')
              //     ? "platform-mac"
              //     : "platform-win"
              // );
          })();
      `,
          }}
        />
      )}
    </>
  );
}
